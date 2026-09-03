import { Link } from "react-router";
import {
  LayoutDashboard,
  UtensilsCrossed,
  CalendarCheck,
  MessageSquare,
  Settings,
  ExternalLink,
  LogOut,
  Sparkles,
  ShieldCheck,
  X,
} from "lucide-react";

export default function AdminSidebar({
  activeTab,
  setActiveTab,
  adminUser,
  onLogout,
  pendingReservationsCount = 0,
  unreadMessagesCount = 0,
  isMobileOpen = false,
  onCloseMobile = () => {},
}) {
  const navItems = [
    {
      id: "overview",
      label: "Dashboard Overview",
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: "menu",
      label: "Dishes & Pricing",
      icon: UtensilsCrossed,
      badge: null,
    },
    {
      id: "reservations",
      label: "Table Bookings",
      icon: CalendarCheck,
      badge: pendingReservationsCount > 0 ? pendingReservationsCount : null,
      badgeColor: "bg-amber-500 text-white",
    },
    {
      id: "inquiries",
      label: "Guest Inquiries",
      icon: MessageSquare,
      badge: unreadMessagesCount > 0 ? unreadMessagesCount : null,
      badgeColor: "bg-[#c88242] text-white",
    },
    {
      id: "settings",
      label: "Diagnostics & System",
      icon: Settings,
      badge: null,
    },
  ];

  const sidebarContent = (
    <div className="h-full flex flex-col justify-between p-5 bg-[#170e0a] text-white border-r border-white/10">
      <div>
        {/* Brand Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#c88242] text-white flex items-center justify-center shadow-lg shadow-[#c88242]/20 font-serif font-bold text-lg">
              EB
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-bold tracking-tight text-white">
                  Everbloom
                </span>
                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#c88242]/30 text-[#e29b5a] font-extrabold tracking-wider">
                  Admin
                </span>
              </div>
              <p className="text-[10px] text-white/50">Café Operations &amp; Menu Control</p>
            </div>
          </div>

          {/* Close button for mobile drawer */}
          <button
            onClick={onCloseMobile}
            className="md:hidden p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  onCloseMobile();
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#c88242] text-white shadow-lg shadow-[#c88242]/25 translate-x-1"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-white/60"}`} />
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick View Public Website Link */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <Link
            to="/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white/80 transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-[#e29b5a]" />
              Open Live Café Menu
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </Link>
        </div>
      </div>

      {/* Admin User Footer Card */}
      <div className="pt-6 border-t border-white/10">
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#c88242]/20 text-[#e29b5a] flex items-center justify-center font-bold text-xs">
              {adminUser?.name ? adminUser.name.charAt(0).toUpperCase() : "A"}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-white truncate">
                {adminUser?.name || "Café Manager"}
              </p>
              <p className="text-[10px] text-white/50 truncate">
                {adminUser?.email || "admin@everbloom.com"}
              </p>
            </div>
          </div>

          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" title="Super Admin Access" />
        </div>

        <button
          onClick={onLogout}
          className="w-full py-2 px-3 rounded-xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          Sign Out of Portal
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:block w-64 lg:w-72 shrink-0 h-screen sticky top-0">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="relative w-72 max-w-full h-full z-10 animate-slideRight">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
