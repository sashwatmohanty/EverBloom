import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone, MapPin, Sparkles, ChevronRight, Clock } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Menu", path: "/menu" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact & Location", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6 lg:px-10 flex justify-center"
      >
        <nav
          className={`w-full max-w-6xl transition-all duration-300 rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between ${
            scrolled ? "glass-nav-white-scrolled" : "glass-nav-white"
          }`}
        >
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group py-0.5 pr-2">
            <img
              src="/everbloom/logo.png"
              alt="Everbloom Café"
              className="h-10 sm:h-11 md:h-12 lg:h-13 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
            />
            <span className="font-display font-black text-base sm:text-lg md:text-xl tracking-tight text-[#2b1810] whitespace-nowrap group-hover:text-[#c88242] transition-colors">
              Everbloom <span className="font-bold text-[#c88242]">Café</span>
            </span>
          </Link>

          {/* Desktop / Tablet Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-[#f5ede4]/70 p-1 rounded-full border border-[#e8ded3]">
            {[
              { label: "Home", path: "/" },
              { label: "About", fullLabel: "About Us", path: "/about" },
              { label: "Menu", path: "/menu" },
              { label: "Gallery", path: "/gallery" },
              { label: "Contact", fullLabel: "Contact", path: "/contact" },
            ].map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 lg:px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                    active
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

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Quick Call */}
            <a
              href="tel:09437164578"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full bg-[#f5ede4] hover:bg-[#ebdccf] text-[#2b1810] transition-all border border-[#e4d6c8] whitespace-nowrap shadow-xs"
              title="Call Everbloom Café"
            >
              <Phone className="w-3.5 h-3.5 text-[#c88242]" />
              <span>094371 64578</span>
            </a>

            {/* Visit / Directions Button */}
            <a
              href="https://maps.google.com/?q=Everbloom+Kalinga+Nagar+Bhubaneswar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-caramel px-3.5 sm:px-5 py-2 text-xs font-bold gap-1.5 tracking-wide shadow-md whitespace-nowrap"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Directions</span>
              <span className="sm:hidden">Visit</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full text-[#2b1810] bg-[#f5ede4] hover:bg-[#ebdccf] transition-colors border border-[#e4d6c8]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5 text-[#c88242]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md pt-20 px-4 pb-6 flex flex-col justify-between animate-fade-in-down md:hidden">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-5 border border-[#e8ded3] shadow-2xl flex flex-col justify-between h-full max-h-[85vh] overflow-y-auto">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-[#f0e6dc] mb-4">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/everbloom/logo.png"
                    alt="Everbloom Café"
                    className="h-10 sm:h-11 w-auto object-contain"
                  />
                  <span className="font-display font-black text-lg text-[#2b1810]">
                    Everbloom <span className="font-bold text-[#c88242]">Café</span>
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open Now
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const active = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-4 py-3 text-sm font-semibold rounded-2xl transition-all flex items-center justify-between ${
                        active
                          ? "bg-[#2b1810] text-white shadow-md"
                          : "text-[#3d2e26] hover:bg-[#f8f3ee] hover:text-[#2b1810]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {active && <Sparkles className="w-3.5 h-3.5 text-[#e29b5a]" />}
                        {link.label}
                      </span>
                      <ChevronRight className={`w-4 h-4 ${active ? "text-[#e29b5a]" : "text-gray-400"}`} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom info & actions */}
            <div className="pt-4 border-t border-[#f0e6dc] flex flex-col gap-3 mt-4">
              <div className="p-3.5 rounded-2xl bg-[#faf5f0] border border-[#eee2d5] text-left">
                <div className="flex items-center gap-1.5 text-xs text-[#c88242] font-bold uppercase tracking-wider mb-1">
                  <Clock className="w-3.5 h-3.5" /> 1:00 PM – 11:00 PM
                </div>
                <p className="text-xs text-[#5a4c44] leading-relaxed">
                  Near Sum Ultimate Medicare, Kalinga Nagar, Bhubaneswar
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:09437164578"
                  className="btn-espresso py-3 text-xs flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#e29b5a]" />
                  Call Us
                </a>
                <a
                  href="https://maps.google.com/?q=Everbloom+Kalinga+Nagar+Bhubaneswar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-caramel py-3 text-xs flex items-center justify-center gap-1.5 shadow-sm"
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
