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
      id: "contact",
      label: "Contact Messages",
      icon: Mail,
      badge: unreadCount > 0 ? `${unreadCount} new` : null,
      badgeColor: "bg-rose-500 text-white",
      desc: "Customer inquiries",
    },
    {
      id: "popup",
      label: "Add Popup / Promo",
      icon: Megaphone,
      badge: activePopup ? "Live" : "Off",
      badgeColor: activePopup ? "bg-emerald-600 text-white" : "bg-neutral-200 text-neutral-600",
      desc: "Home announcement modal",
    },
    {
      id: "menu",
      label: "Menu Management",
      icon: UtensilsCrossed,
      badge: null,
      desc: "Dishes, brews & prices",
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white border-r border-[#e8ded3] flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Brand Header */}
          <div className="p-6 border-b border-[#e8ded3] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] flex items-center justify-center text-[#2b1810] shadow-sm">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display text-base font-bold text-[#2b1810] leading-tight">
                  Everbloom
                </h2>
                <span className="text-[10px] text-[#6b5c54] font-bold tracking-widest uppercase flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-[#c88242]" /> Admin Panel
                </span>
              </div>
            </div>

            {/* Mobile close button */}
            <button
              onClick={onClose}
              className="lg:hidden w-8 h-8 rounded-lg bg-[#faf7f2] hover:bg-[#f0e8dc] text-[#2b1810] flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Client Link */}
          <div className="px-4 pt-4">
            <Link
              to="/"
              target="_blank"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-[#faf7f2] hover:bg-[#f0e8dc] text-xs text-[#2b1810] font-semibold transition-colors border border-[#e8ded3] group"
            >
              <span className="flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-[#c88242] group-hover:scale-110 transition-transform" />
                <span>View Live Website</span>
              </span>
              <span className="text-[10px] text-[#6b5c54]">↗</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1 mt-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    onClose?.();
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all duration-200 text-left ${
                    isActive
                      ? "bg-[#2b1810] text-white font-bold shadow-md shadow-[#2b1810]/10"
                      : "text-[#4a3b32] hover:text-[#2b1810] hover:bg-[#faf7f2]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isActive ? "bg-white/15 text-white" : "bg-[#faf7f2] text-[#2b1810] border border-[#e8ded3]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">{item.label}</div>
                      <div
                        className={`text-[10px] ${
                          isActive ? "text-white/80" : "text-[#6b5c54]"
                        }`}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>

                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive ? "bg-white text-[#2b1810]" : item.badgeColor || "bg-[#faf7f2] text-[#2b1810] border border-[#e8ded3]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Admin Info & Logout */}
        <div className="p-4 border-t border-[#e8ded3] space-y-3">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] text-[#6b5c54] font-medium">Server Online</span>
            </div>
            <span className="text-[10px] text-[#6b5c54] font-bold">v1.0</span>
          </div>

          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
