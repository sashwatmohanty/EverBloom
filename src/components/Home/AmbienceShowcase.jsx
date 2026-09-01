import { Camera, Wind, Trees } from "lucide-react";

export default function AmbienceShowcase() {
  return (
    <section className="section-padding py-20 lg:py-28 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-tag bg-[#2b1810]/10 text-[#2b1810] mb-3">
            The Everbloom Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#2b1810] font-extrabold mb-4">
            Designed for Memories, Crafted for Comfort
          </h2>
          <p className="text-sm sm:text-base text-[#6b5c54] leading-relaxed">
            Step into our signature space in Kalinga Nagar, Bhubaneswar featuring hand-painted floral murals, warm ambient coffee downlighting, and nature-inspired seating zones.
          </p>
        </div>

        {/* 3-Column Ambiance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Mural Card */}
          <div className="group rounded-3xl overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 flex flex-col border border-[#e8dfd6]">
            <div className="relative h-72 overflow-hidden">
              <img
                src="/everbloom/interior-mural.png"
                alt="Signature Everbloom Flower Wall Mural"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-white">
                🌸 Signature Mural
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-[#2b1810] mb-2">
                  The Blossom Mural Wall
                </h3>
                <p className="text-xs sm:text-sm text-[#6b5c54] leading-relaxed">
                  Our hand-painted floral centerpiece with blooming coral roses and plush comfortable seating — the top photo backdrop in Kalinga Nagar.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#f0e6dc] flex items-center gap-2 text-xs font-bold text-[#c88242]">
                <Camera className="w-4 h-4" /> Perfect for Instagram Stories
              </div>
            </div>
          </div>

          {/* AC Lounge */}
          <div className="group rounded-3xl overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 flex flex-col border border-[#e8dfd6]">
            <div className="relative h-72 overflow-hidden">
              <img
                src="/everbloom/interior-wall-neon.png"
                alt="Cozy AC Indoor Lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-white">
                ☕ AC Indoor Lounge
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-[#2b1810] mb-2">
                  Warm Ambient Lounge
                </h3>
                <p className="text-xs sm:text-sm text-[#6b5c54] leading-relaxed">
                  Relax in climate-controlled indoor comfort with ambient warm downlighting, cozy seating, and soothing cafe acoustic playlists.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#f0e6dc] flex items-center gap-2 text-xs font-bold text-[#2b1810]">
                <Wind className="w-4 h-4" /> Cool, Relaxing &amp; Work Friendly
              </div>
            </div>
          </div>

          {/* Outdoor Patio */}
          <div className="group rounded-3xl overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 flex flex-col border border-[#e8dfd6]">
            <div className="relative h-72 overflow-hidden">
              <img
                src="/everbloom/outdoor-patio.jpg"
                alt="Nature Inspired Outdoor Patio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-white">
                🌿 Outdoor Garden Patio
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-[#2b1810] mb-2">
                  Nature-Inspired Garden Vibes
                </h3>
                <p className="text-xs sm:text-sm text-[#6b5c54] leading-relaxed">
                  Bask under cozy string lights and lush natural greenery. Perfect for breezy evening conversations, friend meetups, and pet parents.
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
