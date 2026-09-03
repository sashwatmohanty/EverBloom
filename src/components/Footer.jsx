import { Link } from "react-router";
import { MapPin, Phone, Clock, Star, Sparkles, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#170e0a] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle warm ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c88242]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4d7057]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
            {/* Brand Col */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/everbloom/logo.png"
                  alt="Everbloom Café"
                  className="h-12 w-auto object-contain drop-shadow-sm"
                />
                <span className="font-display font-black text-xl text-white">
                  Everbloom <span className="font-bold text-[#e29b5a]">Café</span>
                </span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-5">
                Everbloom Café is a cozy, artisanal hangout blending handcrafted coffees and delicious gourmet bites with nature-inspired surroundings in Bhubaneswar. Where great food and good mood bloom together.
              </p>

              {/* Rating Card */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-sm font-bold text-white">4.7</span>
                </div>
                <div className="h-4 w-px bg-white/20" />
                <div className="text-xs text-white/80">
                  <span className="font-semibold text-white">169+ Google Reviews</span>
                  <span className="text-[11px] text-white/50 block">₹200–₹400 / person</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="font-display text-base font-bold text-white mb-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#e29b5a]" /> Explore
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-white/70">
                {[
                  { label: "Home", path: "/" },
                  { label: "Our Story", path: "/about" },
                  { label: "Food & Drinks Menu", path: "/menu" },
                  { label: "Photo Gallery", path: "/gallery" },
                  { label: "Contact & Location", path: "/contact" },
                  { label: "Events & Offers", path: "/events" },
                  { label: "Reserve Table", path: "/booking" },
                ].map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-[#e29b5a] transition-colors inline-flex items-center gap-1">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location & Hours */}
            <div className="lg:col-span-3">
              <h4 className="font-display text-base font-bold text-white mb-5">Find Us</h4>
              <div className="flex flex-col gap-4 text-sm text-white/75">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#e29b5a] mt-1 shrink-0" />
                  <div>
                    <p className="font-bold text-white">Everbloom Café</p>
                    <p className="text-xs text-white/60 leading-relaxed mt-0.5">
                      K-8/796, Near Sum Ultimate Medicare, K8 Kalinga Nagar, Bhubaneswar, Odisha 751029
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#e29b5a] shrink-0" />
                  <div>
                    <span className="text-white font-medium">1:00 PM – 11:00 PM</span>
                    <span className="text-xs text-emerald-400 block font-medium">Open 7 Days a Week</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="lg:col-span-3">
              <h4 className="font-display text-base font-bold text-white mb-5">Get in Touch</h4>
              <div className="flex flex-col gap-3.5">
                <a
                  href="tel:09437164578"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#c88242] transition-all group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#c88242]/20 flex items-center justify-center text-[#e29b5a] group-hover:bg-[#c88242] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Call Us Directly</p>
                    <p className="text-sm font-bold text-white">094371 64578</p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=Everbloom+Kalinga+Nagar+Bhubaneswar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#241610] border border-white/10 hover:border-[#c88242] text-sm font-semibold text-white transition-all shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#e29b5a]" /> Open in Google Maps
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/60" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p>&copy; {new Date().getFullYear()} Everbloom Café. All rights reserved. Bhubaneswar, Odisha.</p>
            <div className="flex items-center gap-6">
              <span className="text-white/60">Air-Conditioned Indoor &amp; Nature Outdoor Patio</span>
              <Link to="/admin" className="text-white/40 hover:text-[#e29b5a] transition-colors">
                Staff Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
