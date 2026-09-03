import { useState } from "react";
import { 
  Menu as MenuIcon, 
  ExternalLink, 
  LogOut,
  RefreshCw
} from "lucide-react";
import { Link } from "react-router";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({
  activeTab,
  setActiveTab,
  user,
  onLogout,
  stats,
  unreadCount,
  activePopup,
  onRefresh,
  refreshing,
  children,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getTabTitle = () => {
    switch (activeTab) {
      case "dashboard":
        return "Dashboard Overview";
      case "photos":
        return "Patho (Photos) Gallery";
      case "contact":
        return "Contact Messages";
      case "popup":
        return "Add Popup / Promo";
      case "menu":
        return "Menu Management";
      default:
        return "Admin Portal";
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2b1810] flex flex-col antialiased">
      {/* Sidebar Component */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={onLogout}
        unreadCount={unreadCount}
        activePopup={activePopup}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="lg:pl-72 flex-1 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 h-16 bg-white border-b border-[#e8ded3] backdrop-blur-xl px-4 sm:px-8 flex items-center justify-between shadow-sm shadow-[#2b1810]/2">
          {/* Left: Mobile hamburger & current section title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden w-9 h-9 rounded-2xl bg-[#faf7f2] hover:bg-[#f0e8dc] text-[#2b1810] border border-[#e8ded3] flex items-center justify-center transition-colors"
            >
              <MenuIcon className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] text-[#6b5c54] font-bold uppercase tracking-widest block leading-tight">
                Everbloom Cafe Admin
              </span>
              <h1 className="font-display text-sm sm:text-base font-bold text-[#2b1810] leading-tight">
                {getTabTitle()}
              </h1>
            </div>
          </div>

          {/* Right: Quick actions, refresh, live indicator, and user profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Refresh Data button */}
            <button
              onClick={onRefresh}
              disabled={refreshing}
              className="w-9 h-9 rounded-2xl bg-[#faf7f2] hover:bg-[#f0e8dc] border border-[#e8ded3] text-[#4a3b32] hover:text-[#2b1810] flex items-center justify-center transition-colors disabled:opacity-50"
              title="Refresh Data"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-[#c88242]" : ""}`} />
            </button>

            {/* Visit Live Cafe */}
            <Link
              to="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-[#faf7f2] hover:bg-[#f0e8dc] text-xs font-bold text-[#2b1810] transition-colors border border-[#e8ded3]"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#c88242]" />
              <span>Live Site</span>
            </Link>

            {/* User Profile Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#faf7f2] border border-[#e8ded3]">
              <div className="w-6 h-6 rounded-xl bg-[#2b1810] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                {user?.name ? user.name[0].toUpperCase() : "A"}
              </div>
              <div className="hidden sm:block text-left">
                <span className="text-xs font-bold text-[#2b1810] block leading-tight">
                  {user?.name || "Admin"}
                </span>
                <span className="text-[9px] text-[#6b5c54] block leading-tight font-medium">
                  Manager
                </span>
              </div>
            </div>

            {/* Logout button on mobile */}
            <button
              onClick={onLogout}
              className="sm:hidden w-9 h-9 rounded-2xl bg-rose-50 text-rose-700 border border-rose-200 flex items-center justify-center"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </header>

        {/* Section View Container */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
