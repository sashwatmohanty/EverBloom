import { MapPin, Phone } from "lucide-react";

export default function VisitCTASection() {
  return (
    <section className="section-padding py-20 lg:py-28 bg-[#faf7f2]">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl glass-espresso p-8 sm:p-12 lg:p-14 relative overflow-hidden text-center shadow-2xl">
          {/* Subtle warm caramel halo */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#c88242]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open Daily: 1:00 PM – 11:00 PM
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Drop By Everbloom Today
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
              K-8/796, Near Sum Ultimate Medicare, K8 Kalinga Nagar, Bhubaneswar. Perfect for artisanal coffee breaks, friend hangouts, and delicious gourmet bites.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://maps.google.com/?q=Everbloom+Kalinga+Nagar+Bhubaneswar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-caramel px-8 py-3.5 text-sm font-bold gap-2 shadow-xl"
              >
                <MapPin className="w-4 h-4" /> Open in Google Maps
              </a>

              <a
                href="tel:09437164578"
                className="btn-outline-espresso px-8 py-3.5 text-sm font-bold gap-2 border-white/30 text-white hover:bg-white/10"
              >
                <Phone className="w-4 h-4 text-[#e29b5a]" /> Call 094371 64578
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
