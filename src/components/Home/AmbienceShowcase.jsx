import { Camera, Wind, Trees, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function AmbienceShowcase() {
  return (
    <section className="section-padding py-20 lg:py-28 bg-[#faf7f2] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#c88242]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#4d7057]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="badge-tag bg-[#2b1810]/10 text-[#2b1810] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c88242]" /> The Everbloom Experience
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#2b1810] font-extrabold mb-4">
              Designed for Memories, Crafted for Comfort
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#6b5c54] leading-relaxed">
              Step into our signature space in Kalinga Nagar, Bhubaneswar featuring hand-painted floral murals, warm ambient coffee downlighting, and nature-inspired seating zones.
            </p>
          </div>

          <Link
            to="/gallery"
            className="btn-outline-espresso px-6 py-3 text-xs font-bold gap-2 self-start md:self-auto shrink-0 group"
          >
            Explore Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-Column Ambiance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Mural Card */}
          <div className="group rounded-3xl overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 flex flex-col border border-[#e8dfd6] hover:-translate-y-1">
            <div className="relative h-72 overflow-hidden">
              <img
                src="/everbloom/interior-mural.png"
                alt="Signature Everbloom Flower Wall Mural"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/65 backdrop-blur-md rounded-full text-xs font-bold text-white flex items-center gap-1.5 shadow-md">
                🌸 Signature Mural
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between bg-white/60">
              <div>
                <h3 className="font-display text-xl font-bold text-[#2b1810] mb-2 group-hover:text-[#c88242] transition-colors">
                  The Blossom Mural Wall
                </h3>
                <p className="text-xs sm:text-sm text-[#6b5c54] leading-relaxed">
                  Our hand-painted floral centerpiece with blooming coral roses and plush comfortable seating — the top photo backdrop in Kalinga Nagar.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#f0e6dc] flex items-center gap-2 text-xs font-bold text-[#c88242]">
                <Camera className="w-4 h-4" /> Perfect for Instagram Stories &amp; Reels
              </div>
            </div>
          </div>

          {/* AC Lounge */}
          <div className="group rounded-3xl overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 flex flex-col border border-[#e8dfd6] hover:-translate-y-1">
            <div className="relative h-72 overflow-hidden">
              <img
                src="/everbloom/interior-wall-neon.png"
                alt="Cozy AC Indoor Lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/65 backdrop-blur-md rounded-full text-xs font-bold text-white flex items-center gap-1.5 shadow-md">
                ☕ AC Indoor Lounge
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between bg-white/60">
              <div>
                <h3 className="font-display text-xl font-bold text-[#2b1810] mb-2 group-hover:text-[#c88242] transition-colors">
                  Warm Ambient Lounge
                </h3>
                <p className="text-xs sm:text-sm text-[#6b5c54] leading-relaxed">
                  Relax in climate-controlled indoor comfort with ambient warm downlighting, cozy seating, high-speed WiFi, and soothing acoustic playlists.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#f0e6dc] flex items-center gap-2 text-xs font-bold text-[#2b1810]">
                <Wind className="w-4 h-4 text-[#c88242]" /> Cool, Relaxing &amp; Work Friendly
              </div>
            </div>
          </div>

          {/* Outdoor Patio */}
          <div className="group rounded-3xl overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 flex flex-col border border-[#e8dfd6] hover:-translate-y-1">
            <div className="relative h-72 overflow-hidden">
              <img
                src="/everbloom/outdoor-patio.jpg"
                alt="Nature Inspired Outdoor Patio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/65 backdrop-blur-md rounded-full text-xs font-bold text-white flex items-center gap-1.5 shadow-md">
                🌿 Outdoor Garden Patio
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between bg-white/60">
              <div>
                <h3 className="font-display text-xl font-bold text-[#2b1810] mb-2 group-hover:text-[#c88242] transition-colors">
                  Nature-Inspired Garden Vibes
                </h3>
                <p className="text-xs sm:text-sm text-[#6b5c54] leading-relaxed">
                  Bask under cozy fairy string lights and lush natural greenery. Perfect for breezy evening conversations, friend meetups, and pet parents.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#f0e6dc] flex items-center gap-2 text-xs font-bold text-emerald-700">
                <Trees className="w-4 h-4" /> Open Air &amp; Pet-Friendly
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
