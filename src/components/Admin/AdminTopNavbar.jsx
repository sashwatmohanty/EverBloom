import { Menu as MenuIcon, RefreshCw, Plus, Sparkles } from "lucide-react";

export default function AdminTopNavbar({
  activeTabTitle,
  onOpenMobile,
  onRefresh,
  isRefreshing,
  onAddNewDish,
}) {
  return (
    <header className="sticky top-0 z-30 bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#e8ded3] px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between transition-all">
      {/* Left: Mobile hamburger & breadcrumbs */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobile}
          className="md:hidden p-2 rounded-xl border border-[#e8ded3] bg-white text-[#2b1810] hover:bg-[#faf7f2]"
          aria-label="Open sidebar menu"
        >
          <MenuIcon className="w-5 h-5" />
        </button>

        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#c88242]">
              EVERBLOOM CAFÉ
            </span>
            <span className="text-[#6b5c54]/40">/</span>
            <span className="text-[10px] uppercase font-bold text-[#6b5c54]">PORTAL</span>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#1c1109] leading-tight">
            {activeTabTitle}
          </h2>
        </div>
      </div>

      {/* Right: Quick actions */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={onRefresh}
          disabled={isRefreshing}
          className="p-2.5 rounded-full border border-[#e8ded3] bg-white text-[#6b5c54] hover:text-[#c88242] hover:border-[#c88242] transition-colors disabled:opacity-50"
          title="Refresh All Data from MongoDB"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin text-[#c88242]" : ""}`} />
        </button>

        <button
          onClick={onAddNewDish}
          className="btn-caramel px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Add Dish</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>
    </header>
  );
}
