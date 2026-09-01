import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function AmbienceShowcase() {
  return (
    <section className="section-padding py-20 lg:py-28 bg-[#0d0705] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Story Content */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-[#d49748]" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#d49748] uppercase font-bold">
              OUR STORY
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] mb-6">
            A Sanctuary of <br />
            <span className="italic bg-gradient-to-r from-[#f7dcb7] via-[#d49748] to-[#b8782a] bg-clip-text text-transparent">
              Flavor &amp; Ambiance
            </span>
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-white/75 font-light leading-relaxed mb-8 max-w-lg">
            <p>
              Nestled in the heart of Bhubaneswar, Everbloom is an artisanal destination where cozy botanical interiors meet handcrafted coffee and world-class cuisine.
            </p>
            <p>
              Indoor air-conditioned seating and a lush nature-inspired garden patio transform every visit into an experience, blending natural tranquility with sophisticated design.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-3 text-xs tracking-[0.18em] uppercase font-bold text-white group self-start hover:text-[#d49748] transition-colors"
          >
            <span className="w-10 h-10 rounded-full border border-[#d49748]/50 group-hover:border-[#d49748] flex items-center justify-center text-[#d49748] transition-colors">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <span>DISCOVER OUR STORY</span>
          </Link>
        </div>

        {/* Right Large Image */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <img
              src="/everbloom/interior-mural.png"
              alt="Everbloom Sanctuary of Flavor & Ambiance"
              className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-wider text-[#d49748] font-bold border border-white/10">
                Botanical Interiors · Kalinga Nagar
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
