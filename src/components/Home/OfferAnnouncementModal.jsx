import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  Sparkles,
  X,
  Copy,
  Check,
  Tag,
  Music,
  Calendar,
  ArrowRight,
  Flame,
  Clock,
} from "lucide-react";

export default function OfferAnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem("everbloom_offer_dismissed");
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500); // Trigger after 2.5s
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("everbloom_offer_dismissed", "true");
    setHasInteracted(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("BLOOM15");
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <>
      {/* Modal Backdrop & Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div
            className="relative w-full max-w-lg bg-[#140b08] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#c88242]/30 animate-scaleUp my-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Background Warm Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c88242]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4d7057]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Content */}
            <div className="text-center relative z-10 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c88242]/20 border border-[#c88242]/40 text-[#e29b5a] text-[10px] font-extrabold uppercase tracking-widest mb-3">
                <Sparkles className="w-3 h-3 text-[#fcd9b8]" />
                EXCLUSIVE CAFÉ SPECIALS
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white leading-snug">
                Fresh Flavors &amp; Weekend Vibes
              </h3>
              <p className="text-xs text-white/70 mt-1 max-w-sm mx-auto">
                Special dining perks waiting for you this week at Everbloom Café!
              </p>
            </div>

            {/* Offer Card 1: 15% OFF PROMO */}
            <div className="relative z-10 p-5 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/15 mb-4 hover:border-[#c88242]/60 transition-all">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#c88242]/25 text-[#fcd9b8] flex items-center justify-center font-bold">
                    <Tag className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#e29b5a] tracking-wider">
                      LIMITED TIME DINE-IN OFFER
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white">
                      Flat 15% OFF on Pizzas &amp; Pastas
                    </h4>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-white/70 leading-relaxed mb-3">
                Enjoy 15% discount on our artisanal wood-fired pizzas and handcrafted pastas on bills above ₹499.
              </p>

              {/* Coupon Code Pill */}
              <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-white/10">
                <div className="flex items-center gap-2 pl-2">
                  <span className="text-[10px] uppercase text-white/50 font-semibold">CODE:</span>
                  <span className="font-mono text-xs font-bold text-[#fcd9b8] tracking-widest">
                    BLOOM15
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1.5 rounded-lg bg-[#c88242] hover:bg-[#d98f4e] text-white text-[11px] font-bold flex items-center gap-1 transition-all"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-300" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Offer Card 2: Live Music Event */}
            <div className="relative z-10 p-5 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/15 mb-6 hover:border-emerald-500/50 transition-all">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Music className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                      UPCOMING GATHERING
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    Live Acoustic Sessions
                  </h4>
                  <p className="text-[11px] text-white/70 leading-relaxed mt-0.5">
                    Unwind every Friday &amp; Saturday from 7:30 PM under the garden patio fairy lights with unplugged indie &amp; classic acoustic sets.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/menu"
                onClick={handleClose}
                className="btn-caramel w-full sm:flex-1 py-3 text-xs font-bold gap-2 shadow-lg shadow-[#c88242]/30 text-center"
              >
                Browse Café Menu <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/booking"
                onClick={handleClose}
                className="w-full sm:flex-1 py-3 text-xs font-bold rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-center transition-colors"
              >
                Reserve Table Now
              </Link>
            </div>

            <div className="text-center mt-4">
              <button
                onClick={handleClose}
                className="text-[11px] text-white/40 hover:text-white/80 transition-colors"
              >
                Skip for now &amp; explore
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
