import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone, MapPin, Sparkles, ChevronRight, Clock, Coffee } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Menu", path: "/menu" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact & Location", path: "/contact" },
  { label: "Events & Offers", path: "/events" },
  { label: "Book Table", path: "/booking" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2.5 sm:py-4 px-2.5 sm:px-6 lg:px-10 flex justify-center">
        <nav
          className={`w-full max-w-6xl transition-all duration-300 rounded-full px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-2.5 flex items-center justify-between ${scrolled ? "glass-nav-white-scrolled" : "glass-nav-white"
            }`}
        >
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-2 xs:gap-2.5 shrink-0 group py-0.5">
            <img
              src="/everbloom/logo.png"
              alt="Everbloom Café"
              className="h-8 xs:h-9 sm:h-11 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
            />
            <span className="font-display font-black text-sm xs:text-base sm:text-lg md:text-xl tracking-tight text-[#2b1810] whitespace-nowrap group-hover:text-[#c88242] transition-colors">
              Everbloom <span className="font-bold text-[#c88242]">Café</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-[#f5ede4]/70 p-1 rounded-full border border-[#e8ded3]">
            {[
              { label: "Home", path: "/" },
              { label: "About", fullLabel: "About Us", path: "/about" },
              { label: "Menu", path: "/menu" },
              { label: "Gallery", path: "/gallery" },
              { label: "Contact", path: "/contact" },
            ].map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 lg:px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${active
                      ? "bg-[#2b1810] text-white shadow-md font-semibold"
                      : "text-[#4a3b32] hover:text-[#2b1810] hover:bg-white/80"
                    }`}
                >
                  <span className="hidden lg:inline">{link.fullLabel || link.label}</span>
                  <span className="lg:hidden">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5">
            {/* Quick Phone Call (Desktop/Tablet) */}
            <a
              href="tel:09437164578"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full bg-[#f5ede4] hover:bg-[#ebdccf] text-[#2b1810] transition-all border border-[#e4d6c8] whitespace-nowrap shadow-xs"
              title="Call Everbloom Café"
            >
              <Phone className="w-3.5 h-3.5 text-[#c88242]" />
              <span>094371 64578</span>
            </a>

            {/* Visit / Directions Pill Button */}
            <a
              href="https://maps.google.com/?q=Everbloom+Kalinga+Nagar+Bhubaneswar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-caramel px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 text-[11px] xs:text-xs font-bold gap-1 xs:gap-1.5 tracking-wide shadow-md whitespace-nowrap"
            >
              <MapPin className="w-3 xs:w-3.5 h-3 xs:h-3.5" />
              <span className="hidden sm:inline">Directions</span>
              <span className="sm:hidden">Visit</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-8 h-8 xs:w-9 xs:h-9 flex items-center justify-center rounded-full text-[#2b1810] bg-[#f5ede4] hover:bg-[#ebdccf] active:scale-95 transition-all border border-[#e4d6c8] shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-4 h-4 xs:w-5 xs:h-5 text-[#c88242]" /> : <Menu className="w-4 h-4 xs:w-5 xs:h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md pt-20 px-3 xs:px-4 pb-6 flex flex-col justify-between animate-fade-in-down md:hidden">
          <div className="bg-white/98 backdrop-blur-2xl rounded-3xl p-5 border border-[#e8ded3] shadow-2xl flex flex-col justify-between h-full max-h-[85vh] overflow-y-auto">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-[#f0e6dc] mb-4">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/everbloom/logo.png"
                    alt="Everbloom Café"
                    className="h-9 w-auto object-contain"
                  />
                  <div>
                    <span className="font-display font-black text-base text-[#2b1810] block leading-tight">
                      Everbloom <span className="font-bold text-[#c88242]">Café</span>
                    </span>
                    <span className="text-[10px] text-[#6b5c54]">Kalinga Nagar, Bhubaneswar</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#faf7f2] flex items-center justify-center text-[#2b1810] border border-[#e8ded3]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const active = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3 text-sm font-semibold rounded-2xl transition-all flex items-center justify-between ${active
                          ? "bg-[#2b1810] text-white shadow-md"
                          : "text-[#3d2e26] hover:bg-[#f8f3ee] hover:text-[#2b1810]"
                        }`}
                    >
                      <span className="flex items-center gap-2.5">
                        {active ? (
                          <Sparkles className="w-3.5 h-3.5 text-[#e29b5a]" />
                        ) : (
                          <Coffee className="w-3.5 h-3.5 text-[#c88242]/70" />
                        )}
                        {link.label}
                      </span>
                      <ChevronRight className={`w-4 h-4 ${active ? "text-[#e29b5a]" : "text-gray-400"}`} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom Info & Quick Action Buttons */}
            <div className="pt-4 border-t border-[#f0e6dc] flex flex-col gap-3 mt-4">
              <div className="p-3.5 rounded-2xl bg-[#faf5f0] border border-[#eee2d5] text-left">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#c88242] font-bold uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" /> 1:00 PM – 11:00 PM
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Open Daily
                  </span>
                </div>
                <p className="text-[11px] text-[#5a4c44] leading-relaxed">
                  Near Sum Ultimate Medicare, Kalinga Nagar, Bhubaneswar
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:09437164578"
                  className="btn-espresso py-2.5 text-xs flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#e29b5a]" />
                  Call Us
                </a>
                <a
                  href="https://maps.google.com/?q=Everbloom+Kalinga+Nagar+Bhubaneswar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-caramel py-2.5 text-xs flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
