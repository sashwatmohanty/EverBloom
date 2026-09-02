import { useState, useEffect } from "react";
import { Link } from "react-router";
import { X, Sparkles, ArrowRight, BellRing } from "lucide-react";
import { popupApi } from "../../lib/api";

export default function HomePromoPopup() {
  const [popup, setPopup] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowToday, setDontShowToday] = useState(false);

  useEffect(() => {
    // Check if dismissed today
    const dismissedDate = localStorage.getItem("everbloom_popup_dismissed_date");
    const today = new Date().toDateString();

    if (dismissedDate === today) {
      return; // already dismissed today
    }

    const fetchPopup = async () => {
      try {
        const res = await popupApi.getActive();
        if (res && res.success && res.data && res.data.active) {
          setPopup(res.data);
          // Small delay for smooth entry after home page loads
          const timer = setTimeout(() => {
            setIsOpen(true);
          }, 800);
          return () => clearTimeout(timer);
        }
      } catch (err) {
        console.log("Could not load promo popup:", err);
      }
    };

    fetchPopup();
  }, []);

  const handleClose = () => {
    if (dontShowToday) {
      localStorage.setItem("everbloom_popup_dismissed_date", new Date().toDateString());
    }
    setIsOpen(false);
  };

  if (!isOpen || !popup) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-[92vw] sm:max-w-md md:max-w-lg max-h-[88vh] bg-[#1a0e09] text-white rounded-3xl overflow-hidden border border-[#c88242]/30 shadow-2xl flex flex-col animate-fade-in-up my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Easy to tap */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/20 shadow-lg"
          aria-label="Close Announcement"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Promo Image Header */}
        {popup.imageUrl && (
          <div className="relative h-36 sm:h-44 md:h-52 w-full overflow-hidden bg-black/50 shrink-0">
            <img
              src={popup.imageUrl}
              alt={popup.title}
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e09] via-transparent to-black/30" />
            
            {/* Promo Tag */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <span className="badge-tag bg-[#c88242] text-white shadow-lg flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs">
                <Sparkles className="w-3 h-3 animate-pulse" />
                {popup.badge || "Special Offer"}
              </span>
            </div>
          </div>
        )}

        {/* Content Body - Scrollable if content is long on small phones */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 flex flex-col justify-between">
          <div>
            {!popup.imageUrl && (
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="badge-tag bg-[#c88242] text-white shadow-md flex items-center gap-1.5 text-xs">
                  <BellRing className="w-3.5 h-3.5" />
                  {popup.badge || "Announcement"}
                </span>
              </div>
            )}

            <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-[#faf7f2] mb-1.5 sm:mb-2 leading-snug">
              {popup.title}
            </h3>

            {popup.subtitle && (
              <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed mb-4 sm:mb-6">
                {popup.subtitle}
              </p>
            )}
          </div>

          {/* Action Buttons & Footer */}
          <div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pt-1">
              <Link
                to={popup.ctaLink || "/menu"}
                onClick={handleClose}
                className="btn-caramel py-2.5 sm:py-3 px-5 text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-xl shadow-[#c88242]/20 text-center"
              >
                <span>{popup.ctaText || "Explore Details"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-4 py-2 sm:py-2.5 rounded-full text-xs font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors text-center"
              >
                Maybe Later
              </button>
            </div>

            {/* Don't show today checkbox */}
            <div className="mt-3 sm:mt-5 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-white/50 gap-2">
              <label className="flex items-center gap-2 cursor-pointer select-none hover:text-white/80 transition-colors">
                <input
                  type="checkbox"
                  checked={dontShowToday}
                  onChange={(e) => setDontShowToday(e.target.checked)}
                  className="w-3.5 h-3.5 rounded accent-[#c88242] shrink-0"
                />
                <span className="line-clamp-1">Don't show again today</span>
              </label>
              <span className="text-[9px] sm:text-[10px] text-[#c88242] font-semibold uppercase tracking-wider shrink-0">Everbloom Café</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
