import { 
  Image as ImageIcon, 
  UtensilsCrossed, 
  Mail, 
  Megaphone, 
  Plus, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2,
  Sparkles,
  Server
} from "lucide-react";

export default function DashboardSection({ 
  stats, 
  setActiveTab, 
  onAddPhoto, 
  onAddMenuItem, 
  onAddPopup 
}) {
  const cards = [
    {
      title: "Total Photos (Patho)",
      value: stats?.totalPhotos ?? 0,
      label: "Ambience & Dishes",
      icon: ImageIcon,
      actionTab: "photos",
    },
    {
      title: "Menu Items",
      value: stats?.totalMenuItems ?? 0,
      label: "In 5 Categories",
      icon: UtensilsCrossed,
      actionTab: "menu",
    },
    {
      title: "Customer Inquiries",
      value: stats?.totalMessages ?? 0,
      subValue: stats?.unreadMessages ? `${stats.unreadMessages} unread` : "All caught up",
      label: "Contact submissions",
      icon: Mail,
      actionTab: "contact",
    },
    {
      title: "Promo Popup",
      value: stats?.activePopup ? "Active" : "Disabled",
      subValue: stats?.activePopup ? stats.activePopup.badge || "Live" : "No active modal",
      label: "Home announcement",
      icon: Megaphone,
      actionTab: "popup",
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in text-[#2b1810]">
      {/* Welcome Banner - Clean White */}
      <div className="bg-white border border-[#e8ded3] rounded-3xl p-6 sm:p-8 shadow-sm shadow-[#2b1810]/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf7f2] border border-[#e8ded3] text-[#6b5c54] text-[11px] font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c88242]" /> Everbloom Admin
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#2b1810] mb-2">
            Welcome to Everbloom Control Panel
          </h1>
          <p className="text-xs sm:text-sm text-[#6b5c54] leading-relaxed">
            Manage your cafe’s photo gallery, menu offerings, customer inquiries, and home announcement popups in real-time.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            onClick={onAddPhoto}
            className="px-4 py-2.5 rounded-2xl bg-[#2b1810] hover:bg-[#1a0e09] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
          >
            <Plus className="w-4 h-4" /> Upload Photo
          </button>
          <button
            onClick={onAddMenuItem}
            className="px-4 py-2.5 rounded-2xl bg-[#faf7f2] hover:bg-[#f0e8dc] text-[#2b1810] border border-[#e8ded3] text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Menu Item
          </button>
          <button
            onClick={onAddPopup}
            className="px-4 py-2.5 rounded-2xl bg-[#faf7f2] hover:bg-[#f0e8dc] text-[#2b1810] border border-[#e8ded3] text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Promo Popup
          </button>
        </div>
      </div>

      {/* KPI Cards Grid - Clean White */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              onClick={() => setActiveTab(card.actionTab)}
              className="group bg-white border border-[#e8ded3] hover:border-[#2b1810] rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] flex items-center justify-center text-[#2b1810] group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="w-7 h-7 rounded-full bg-[#faf7f2] group-hover:bg-[#2b1810] group-hover:text-white text-[#6b5c54] flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6b5c54] block mb-1">
                  {card.title}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-[#2b1810]">
                    {card.value}
                  </span>
                  {card.subValue && (
                    <span className="text-[11px] text-[#c88242] font-bold">
                      {card.subValue}
                    </span>
                  )}
                </div>
                <span className="text-xs text-[#6b5c54] mt-1 block">
                  {card.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Two Column Layout: Recent Activity & System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Feed */}
        <div className="lg:col-span-2 bg-white border border-[#e8ded3] rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#c88242]" />
              <h2 className="font-display text-lg font-bold text-[#2b1810]">
                Recent Updates & Activity
              </h2>
            </div>
            <span className="text-xs text-[#6b5c54] font-medium">Live Feed</span>
          </div>

          <div className="space-y-2.5">
            {stats?.recentActivity && stats.recentActivity.length > 0 ? (
              stats.recentActivity.map((act, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] hover:bg-[#f5ede3] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white border border-[#e8ded3] text-[#2b1810] flex items-center justify-center shrink-0 shadow-sm">
                      {act.type === "photo" && <ImageIcon className="w-4 h-4" />}
                      {act.type === "message" && <Mail className="w-4 h-4" />}
                      {act.type === "menu" && <UtensilsCrossed className="w-4 h-4" />}
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#2b1810] line-clamp-1">
                        {act.title}
                      </h3>
                      <span className="text-[10px] text-[#6b5c54] font-medium">
                        {act.action}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] text-[#6b5c54] shrink-0 font-medium">
                    {act.time ? new Date(act.time).toLocaleDateString() : "Recent"}
                  </span>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-[#6b5c54] text-xs">
                No recent activity recorded yet.
              </div>
            )}
          </div>
        </div>

        {/* Server & Live Status */}
        <div className="bg-white border border-[#e8ded3] rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <Server className="w-4 h-4 text-emerald-600" />
              <h2 className="font-display text-lg font-bold text-[#2b1810]">
                System Status
              </h2>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#6b5c54]">Express API Backend</span>
                  <span className="flex items-center gap-1.5 text-emerald-700 font-bold text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Port 5000 Active
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#6b5c54]">Frontend Server</span>
                  <span className="text-emerald-700 font-bold text-[11px]">Port 3000 Active</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#6b5c54]">Database Storage</span>
                  <span className="text-[#2b1810] font-bold text-[11px]">Persistent JSON DB</span>
                </div>
              </div>

              {stats?.categoriesCount && (
                <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[#e8ded3]">
                  <span className="text-xs font-bold text-[#2b1810] block mb-3">
                    Menu Categories Breakdown
                  </span>
                  <div className="space-y-1.5">
                    {Object.entries(stats.categoriesCount).map(([cat, count]) => (
                      <div key={cat} className="flex items-center justify-between text-xs">
                        <span className="text-[#6b5c54] font-medium">{cat}</span>
                        <span className="px-2 py-0.5 rounded-full bg-white border border-[#e8ded3] text-[#2b1810] text-[10px] font-bold">
                          {count} items
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="pt-6 border-t border-[#e8ded3] mt-6 flex items-center justify-between text-[11px] text-[#6b5c54]">
            <span>Everbloom Cafe Suite</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
