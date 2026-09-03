import {
  UtensilsCrossed,
  CheckCircle2,
  CalendarCheck,
  MessageSquare,
  Plus,
  RefreshCw,
  ExternalLink,
  Clock,
  User,
  Phone,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

export default function AdminOverview({
  stats,
  menuItems = [],
  reservations = [],
  contacts = [],
  onNavigateTab,
  onAddNewDish,
  onSeedMenu,
  onUpdateReservationStatus,
}) {
  const totalItems = menuItems.length;
  const inStockCount = menuItems.filter((i) => i.isAvailable !== false).length;
  const inStockPercent = totalItems > 0 ? Math.round((inStockCount / totalItems) * 100) : 100;
  const pendingReservations = reservations.filter((r) => r.status === "pending");

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Total Dishes */}
        <div
          onClick={() => onNavigateTab("menu")}
          className="bg-white rounded-3xl p-6 border border-[#e8ded3] shadow-sm hover:shadow-md hover:border-[#c88242] transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#6b5c54]">
              Total Menu Dishes
            </span>
            <div className="w-9 h-9 rounded-2xl bg-[#c88242]/15 text-[#c88242] flex items-center justify-center group-hover:scale-110 transition-transform">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-serif text-3xl font-normal text-[#1c1109]">{totalItems}</span>
            <span className="text-[11px] font-bold text-[#c88242] flex items-center gap-1 group-hover:underline">
              Manage <ArrowRight className="w-3 h-3" />
            </span>
          </div>
          <div className="mt-3 text-[11px] text-[#6b5c54]">
            Across 5 canonical café categories
          </div>
        </div>

        {/* In-Stock Rate */}
        <div
          onClick={() => onNavigateTab("menu")}
          className="bg-white rounded-3xl p-6 border border-[#e8ded3] shadow-sm hover:shadow-md hover:border-emerald-500 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#6b5c54]">
              Dishes In Stock
            </span>
            <div className="w-9 h-9 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-serif text-3xl font-normal text-emerald-700">
              {inStockCount}
              <span className="text-sm font-sans text-[#6b5c54] font-normal"> / {totalItems}</span>
            </span>
            <span className="text-xs font-bold text-emerald-600">{inStockPercent}%</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full mt-3 overflow-hidden">
            <div
              className="bg-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${inStockPercent}%` }}
            />
          </div>
        </div>

        {/* Pending Table Bookings */}
        <div
          onClick={() => onNavigateTab("reservations")}
          className={`bg-white rounded-3xl p-6 border shadow-sm hover:shadow-md transition-all cursor-pointer group ${
            pendingReservations.length > 0
              ? "border-amber-300 bg-amber-50/20"
              : "border-[#e8ded3]"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#6b5c54]">
              Table Bookings
            </span>
            <div className="w-9 h-9 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <CalendarCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-serif text-3xl font-normal text-[#1c1109]">
              {reservations.length}
            </span>
            {pendingReservations.length > 0 && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-white animate-pulse">
                {pendingReservations.length} Pending
              </span>
            )}
          </div>
          <div className="mt-3 text-[11px] text-[#6b5c54]">
            {pendingReservations.length > 0
              ? "Action required: Confirm pending guest requests"
              : "All table bookings handled"}
          </div>
        </div>

        {/* Guest Inquiries */}
        <div
          onClick={() => onNavigateTab("inquiries")}
          className="bg-white rounded-3xl p-6 border border-[#e8ded3] shadow-sm hover:shadow-md hover:border-[#c88242] transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#6b5c54]">
              Guest Messages
            </span>
            <div className="w-9 h-9 rounded-2xl bg-[#c88242]/15 text-[#c88242] flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-serif text-3xl font-normal text-[#1c1109]">
              {contacts.length}
            </span>
            <span className="text-[11px] font-bold text-[#c88242] flex items-center gap-1 group-hover:underline">
              View All <ArrowRight className="w-3 h-3" />
            </span>
          </div>
          <div className="mt-3 text-[11px] text-[#6b5c54]">Customer inquiries &amp; reviews</div>
        </div>
      </div>

      {/* Quick Action Shortcuts Banner */}
      <div className="bg-white rounded-3xl p-6 border border-[#e8ded3] shadow-sm">
        <h3 className="font-serif text-lg font-normal text-[#1c1109] mb-4">
          Quick Management Actions
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            onClick={onAddNewDish}
            className="p-4 rounded-2xl bg-[#faf7f2] hover:bg-[#c88242]/10 border border-[#e8ded3] hover:border-[#c88242] text-left transition-all group"
          >
            <Plus className="w-5 h-5 text-[#c88242] mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-xs font-bold text-[#1c1109]">Add New Dish</p>
            <p className="text-[10px] text-[#6b5c54] mt-0.5">Price, image, description</p>
          </button>

          <button
            onClick={() => onNavigateTab("reservations")}
            className="p-4 rounded-2xl bg-[#faf7f2] hover:bg-amber-50 border border-[#e8ded3] hover:border-amber-300 text-left transition-all group"
          >
            <CalendarCheck className="w-5 h-5 text-amber-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-xs font-bold text-[#1c1109]">Table Bookings</p>
            <p className="text-[10px] text-[#6b5c54] mt-0.5">
              {pendingReservations.length} pending confirm
            </p>
          </button>

          <button
            onClick={onSeedMenu}
            className="p-4 rounded-2xl bg-[#faf7f2] hover:bg-blue-50 border border-[#e8ded3] hover:border-blue-300 text-left transition-all group"
          >
            <RefreshCw className="w-5 h-5 text-blue-600 mb-2 group-hover:rotate-180 transition-transform duration-500" />
            <p className="text-xs font-bold text-[#1c1109]">Sync Initial Menu</p>
            <p className="text-[10px] text-[#6b5c54] mt-0.5">Re-seed 15 dishes</p>
          </button>

          <a
            href="/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-[#faf7f2] hover:bg-emerald-50 border border-[#e8ded3] hover:border-emerald-300 text-left transition-all group"
          >
            <ExternalLink className="w-5 h-5 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-xs font-bold text-[#1c1109]">Live Café Website</p>
            <p className="text-[10px] text-[#6b5c54] mt-0.5">Customer view</p>
          </a>
        </div>
      </div>

      {/* Two Column Grid: Recent Bookings & Inquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Recent Reservations (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#e8ded3] shadow-sm p-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#e8ded3] mb-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#c88242]">
                RECENT ACTIVITY
              </span>
              <h3 className="font-serif text-xl font-normal text-[#1c1109]">
                Incoming Table Bookings
              </h3>
            </div>
            <button
              onClick={() => onNavigateTab("reservations")}
              className="text-xs font-bold text-[#c88242] hover:underline flex items-center gap-1"
            >
              View All ({reservations.length}) <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {reservations.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#6b5c54]">
              No reservations recorded yet.
            </div>
          ) : (
            <div className="divide-y divide-[#e8ded3]">
              {reservations.slice(0, 4).map((r) => {
                const resId = r._id || r.id;
                return (
                  <div key={resId} className="py-3.5 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-[#1c1109] truncate">{r.name}</span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider ${
                            r.status === "confirmed"
                              ? "bg-emerald-100 text-emerald-800"
                              : r.status === "cancelled"
                              ? "bg-red-100 text-red-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {r.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-[#6b5c54] mt-1">
                        <span>{r.date} at {r.time}</span>
                        <span>•</span>
                        <span>{r.guests} Guests</span>
                        <span>•</span>
                        <a href={`tel:${r.phone}`} className="text-[#c88242] font-semibold hover:underline">
                          {r.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {r.status === "pending" && (
                        <button
                          onClick={() => onUpdateReservationStatus(resId, "confirmed")}
                          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold shadow-sm"
                        >
                          Confirm
                        </button>
                      )}
                      <button
                        onClick={() => onNavigateTab("reservations")}
                        className="px-2.5 py-1.5 rounded-xl border border-[#e8ded3] text-[11px] font-semibold text-[#6b5c54] hover:bg-[#faf7f2]"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Recent Guest Inquiries (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-[#e8ded3] shadow-sm p-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#e8ded3] mb-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#c88242]">
                CUSTOMER FEEDBACK
              </span>
              <h3 className="font-serif text-xl font-normal text-[#1c1109]">
                Recent Inquiries
              </h3>
            </div>
            <button
              onClick={() => onNavigateTab("inquiries")}
              className="text-xs font-bold text-[#c88242] hover:underline flex items-center gap-1"
            >
              All ({contacts.length}) <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {contacts.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#6b5c54]">
              No guest messages submitted yet.
            </div>
          ) : (
            <div className="space-y-3">
              {contacts.slice(0, 3).map((c) => (
                <div
                  key={c._id || c.id}
                  className="p-3.5 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] hover:border-[#c88242] transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-[#1c1109] truncate">{c.name}</span>
                    <a
                      href={`mailto:${c.email}`}
                      className="text-[10px] text-[#c88242] font-bold hover:underline"
                    >
                      Reply
                    </a>
                  </div>
                  <p className="text-[11px] text-[#6b5c54] line-clamp-2 leading-relaxed">
                    "{c.message}"
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
