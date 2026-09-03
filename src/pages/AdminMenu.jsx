import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ShieldCheck, AlertCircle, ArrowLeft, CheckCircle2, X } from "lucide-react";
import api, { getAdminToken, getAdminUser } from "../lib/api";

import AdminSidebar from "../components/Admin/AdminSidebar";
import AdminTopNavbar from "../components/Admin/AdminTopNavbar";
import AdminOverview from "../components/Admin/AdminOverview";
import AdminMenuList from "../components/Admin/AdminMenuList";
import AdminReservationsView from "../components/Admin/AdminReservationsView";
import AdminInquiriesView from "../components/Admin/AdminInquiriesView";
import AdminSettingsView from "../components/Admin/AdminSettingsView";
import ItemModal from "../components/Admin/ItemModal";

export default function AdminMenu() {
  const [token, setToken] = useState(getAdminToken());
  const [adminUser, setAdminUser] = useState(getAdminUser());

  // Login form state
  const [loginEmail, setLoginEmail] = useState("admin@everbloom.com");
  const [loginPassword, setLoginPassword] = useState("EverBloomAdmin2026!");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Navigation state: "overview" | "menu" | "reservations" | "inquiries" | "settings"
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Application Data States
  const [menuItems, setMenuItems] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Modal State for Add / Edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [activeEditItem, setActiveEditItem] = useState(null);

  // Fetch all data when authenticated
  useEffect(() => {
    if (token) {
      loadAllData();
    }
  }, [token]);

  const loadAllData = async (isManualRefresh = false) => {
    if (isManualRefresh) setIsRefreshing(true);
    else setIsLoading(true);

    try {
      const [menuRes, resRes, contactRes, overviewRes] = await Promise.allSettled([
        api.getAllMenuItems(),
        api.getReservations(),
        api.getAllContacts(),
        api.getAdminOverview(),
      ]);

      if (menuRes.status === "fulfilled" && menuRes.value.data) {
        setMenuItems(menuRes.value.data);
      }
      if (resRes.status === "fulfilled" && resRes.value.data) {
        setReservations(resRes.value.data);
      }
      if (contactRes.status === "fulfilled" && contactRes.value.data) {
        setContacts(contactRes.value.data.contacts || []);
      }
      if (overviewRes.status === "fulfilled" && overviewRes.value.data) {
        setStats(overviewRes.value.data.stats);
      }

      if (isManualRefresh) {
        showToast("Dashboard synchronized with MongoDB Atlas!");
      }
    } catch (err) {
      console.error("Dashboard data load error:", err);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  // ─── Authentication Handlers ───
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const res = await api.loginAdmin(loginEmail, loginPassword);
      setToken(res.accessToken);
      setAdminUser(res.admin);
      showToast("Welcome to Everbloom Café Management Portal!");
    } catch (err) {
      setLoginError(err.message || "Invalid credentials. Please verify email and password.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await api.logoutAdmin();
    setToken(null);
    setAdminUser(null);
  };

  // ─── Menu CRUD Operations ───
  const handleOpenAddModal = () => {
    setModalMode("create");
    setActiveEditItem(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item) => {
    setModalMode("edit");
    setActiveEditItem(item);
    setIsModalOpen(true);
  };

  const handleSaveModal = async (formData, itemId) => {
    if (modalMode === "create") {
      const res = await api.createMenuItem(formData);
      setMenuItems((prev) => [res.data, ...prev]);
      showToast(`Added "${formData.name}" to menu!`);
    } else {
      const res = await api.updateMenuItem(itemId, formData);
      setMenuItems((prev) =>
        prev.map((it) => ((it._id || it.id) === itemId ? res.data : it))
      );
      showToast(`Updated "${formData.name}"!`);
    }
  };

  const handleUpdatePrice = async (itemId, newPrice) => {
    try {
      await api.updateItemPrice(itemId, newPrice);
      setMenuItems((prev) =>
        prev.map((it) => ((it._id || it.id) === itemId ? { ...it, price: newPrice } : it))
      );
      showToast(`Price updated to ₹${newPrice}!`);
    } catch (err) {
      alert("Failed to update price: " + err.message);
    }
  };

  const handleToggleAvailability = async (item) => {
    const itemId = item._id || item.id;
    const newStatus = !item.isAvailable;

    try {
      await api.toggleItemAvailability(itemId, newStatus);
      setMenuItems((prev) =>
        prev.map((it) => ((it._id || it.id) === itemId ? { ...it, isAvailable: newStatus } : it))
      );
      showToast(`Dish marked as ${newStatus ? "In Stock" : "Sold Out"}.`);
    } catch (err) {
      alert("Failed to toggle availability: " + err.message);
    }
  };

  const handleDeleteDish = async (item) => {
    const itemId = item._id || item.id;
    if (!window.confirm(`Are you sure you want to delete "${item.name}" from the menu?`)) {
      return;
    }

    try {
      await api.deleteMenuItem(itemId);
      setMenuItems((prev) => prev.filter((it) => (it._id || it.id) !== itemId));
      showToast(`Deleted "${item.name}".`);
    } catch (err) {
      alert("Failed to delete dish: " + err.message);
    }
  };

  const handleSeedMenu = async () => {
    if (
      !window.confirm(
        "Do you want to re-seed Everbloom's 15 signature items into the database?"
      )
    ) {
      return;
    }

    try {
      await api.seedDefaultMenu(true);
      await loadAllData(true);
      showToast("Successfully seeded Everbloom Café's 15 signature dishes!");
    } catch (err) {
      alert("Failed to seed menu: " + err.message);
    }
  };

  // ─── Reservations Operations ───
  const handleUpdateReservationStatus = async (id, status) => {
    try {
      await api.updateReservationStatus(id, status);
      setReservations((prev) =>
        prev.map((r) => ((r._id || r.id) === id ? { ...r, status } : r))
      );
      showToast(`Reservation status updated to "${status}".`);
    } catch (err) {
      alert("Failed to update reservation: " + err.message);
    }
  };

  const handleDeleteReservation = async (reservation) => {
    const resId = reservation._id || reservation.id;
    if (!window.confirm(`Delete reservation for ${reservation.name}?`)) return;

    try {
      await api.deleteReservation(resId);
      setReservations((prev) => prev.filter((r) => (r._id || r.id) !== resId));
      showToast("Reservation deleted.");
    } catch (err) {
      alert("Failed to delete reservation: " + err.message);
    }
  };

  // ─── Inquiries Operations ───
  const handleUpdateContactStatus = async (id, status) => {
    try {
      await api.updateContactStatus(id, status);
      setContacts((prev) =>
        prev.map((c) => ((c._id || c.id) === id ? { ...c, status } : c))
      );
      showToast(`Message marked as ${status}.`);
    } catch (err) {
      alert("Failed to update message: " + err.message);
    }
  };

  const handleDeleteContact = async (contact) => {
    const contactId = contact._id || contact.id;
    if (!window.confirm(`Delete message from ${contact.name}?`)) return;

    try {
      await api.deleteContact(contactId);
      setContacts((prev) => prev.filter((c) => (c._id || c.id) !== contactId));
      showToast("Message deleted.");
    } catch (err) {
      alert("Failed to delete message: " + err.message);
    }
  };

  // ─── Render Login Screen if not authenticated ───
  if (!token) {
    return (
      <div className="min-h-screen pt-28 pb-16 px-4 bg-[#faf7f2] flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#e8ded3]">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-[#c88242]/15 text-[#c88242] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#c88242]">
              EVERBLOOM CAFÉ
            </span>
            <h1 className="font-serif text-3xl font-normal text-[#1c1109] mt-1">
              Admin Portal
            </h1>
            <p className="text-xs text-[#6b5c54] mt-2">
              Sign in to manage dishes, live prices, and table bookings.
            </p>
          </div>

          {loginError && (
            <div className="mb-6 p-3 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-[#2b1810] mb-1 block">
                Admin Email
              </label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] text-xs text-[#2b1810] focus:outline-none focus:border-[#c88242]"
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#2b1810] mb-1 block">
                Password
              </label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] text-xs text-[#2b1810] focus:outline-none focus:border-[#c88242]"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="btn-caramel w-full py-3.5 text-xs font-bold shadow-lg disabled:opacity-50 mt-2"
            >
              {loginLoading ? "Authenticating..." : "Sign In to Dashboard"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#e8ded3] text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6b5c54] hover:text-[#c88242]"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Cafe Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Section titles for top bar
  const titles = {
    overview: "Overview & Analytics",
    menu: "Dishes & Pricing Management",
    reservations: "Table Reservations",
    inquiries: "Guest Feedback & Inquiries",
    settings: "System Diagnostics & Settings",
  };

  const pendingCount = reservations.filter((r) => r.status === "pending").length;
  const unreadCount = contacts.filter((c) => c.status === "new" || !c.status).length;

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1c1109] flex">
      {/* Sidebar Navigation */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        adminUser={adminUser}
        onLogout={handleLogout}
        pendingReservationsCount={pendingCount}
        unreadMessagesCount={unreadCount}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Main Dashboard Canvas */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <AdminTopNavbar
          activeTabTitle={titles[activeTab] || "Management Portal"}
          onOpenMobile={() => setIsMobileSidebarOpen(true)}
          onRefresh={() => loadAllData(true)}
          isRefreshing={isRefreshing}
          onAddNewDish={handleOpenAddModal}
        />

        {/* Action Toast Banner */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#170e0a] text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3 animate-slideUp">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold">{toastMessage}</span>
            <button onClick={() => setToastMessage("")} className="text-white/40 hover:text-white ml-2">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Tab View Container */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {activeTab === "overview" && (
            <AdminOverview
              stats={stats}
              menuItems={menuItems}
              reservations={reservations}
              contacts={contacts}
              onNavigateTab={(tab) => setActiveTab(tab)}
              onAddNewDish={handleOpenAddModal}
              onSeedMenu={handleSeedMenu}
              onUpdateReservationStatus={handleUpdateReservationStatus}
            />
          )}

          {activeTab === "menu" && (
            <AdminMenuList
              menuItems={menuItems}
              onAddNewDish={handleOpenAddModal}
              onEditDish={handleOpenEditModal}
              onDeleteDish={handleDeleteDish}
              onUpdatePrice={handleUpdatePrice}
              onToggleAvailability={handleToggleAvailability}
              onSeedMenu={handleSeedMenu}
              isLoading={isLoading}
            />
          )}

          {activeTab === "reservations" && (
            <AdminReservationsView
              reservations={reservations}
              onUpdateStatus={handleUpdateReservationStatus}
              onDeleteReservation={handleDeleteReservation}
              isLoading={isLoading}
            />
          )}

          {activeTab === "inquiries" && (
            <AdminInquiriesView
              contacts={contacts}
              onUpdateStatus={handleUpdateContactStatus}
              onDeleteContact={handleDeleteContact}
              isLoading={isLoading}
            />
          )}

          {activeTab === "settings" && (
            <AdminSettingsView adminUser={adminUser} onSeedMenu={handleSeedMenu} />
          )}
        </main>
      </div>

      {/* Reusable Dish Add / Edit Modal */}
      <ItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveModal}
        item={activeEditItem}
        mode={modalMode}
      />
    </div>
  );
}
