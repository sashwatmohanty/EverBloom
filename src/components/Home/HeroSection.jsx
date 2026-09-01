import { Link } from "react-router";
import { Sparkles, MapPin, Wind, Trees, Camera, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#120a07] text-white">
      {/* Full-Screen Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-[#120a07]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-[center_25%] scale-105 translate-y-6 sm:translate-y-10 md:translate-y-14 filter brightness-[0.72] contrast-[1.15]"
        >
          <source src="/myvideo/myvideo.mp4" type="video/mp4" />
        </video>

        {/* Gradient & Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#120a07]/85 via-[#1a0e09]/55 to-[#120a07]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(18,10,7,0.85)_80%,#120a07_100%)] pointer-events-none" />

        {/* Warm Caramel Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] md:w-[800px] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c88242]/30 via-amber-600/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-16 left-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-[#4d7057]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-36 md:pt-40 lg:pt-44 pb-14 sm:pb-12 text-center flex flex-col items-center justify-center">

        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/[0.12] backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold text-white/90 tracking-wider uppercase mb-3 sm:mb-4 shadow-sm max-w-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="hidden sm:inline">Open Today · 1:00 PM – 11:00 PM · Kalinga Nagar</span>
          <span className="sm:hidden">Open Daily · 1:00 PM – 11:00 PM</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold mb-2.5 sm:mb-4 max-w-3xl leading-tight sm:leading-snug tracking-tight drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
          Where Great Food &amp; Artisanal Coffee{" "}
          <span className="font-serif italic font-normal bg-gradient-to-r from-[#e8ad79] via-[#c88242] to-[#e29b5a] bg-clip-text text-transparent inline-block drop-shadow-[0_2px_15px_rgba(200,130,66,0.5)]">
            Bloom Together
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[11px] sm:text-sm md:text-base text-white/80 max-w-md sm:max-w-xl mb-5 sm:mb-8 font-normal leading-relaxed drop-shadow-md px-1">
          Handcrafted espresso brews, loaded gourmet wraps, stone-baked pizzas &amp; soothing nature-inspired patio lounge in Bhubaneswar.
        </p>

        {/* Quick Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-md mb-6 sm:mb-12">
          <Link
            to="/menu"
            className="btn-caramel flex-1 py-2.5 sm:py-3.5 px-3 sm:px-6 text-xs sm:text-sm font-bold gap-1.5 sm:gap-2 shadow-[0_4px_25px_rgba(200,130,66,0.5)] hover:shadow-[0_6px_30px_rgba(200,130,66,0.7)]"
          >
            <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> Explore Menu
          </Link>

          <a
            href="https://maps.google.com/?q=Everbloom+Kalinga+Nagar+Bhubaneswar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 sm:py-3.5 px-3 sm:px-6 text-xs sm:text-sm font-bold gap-1.5 sm:gap-2 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl border border-white/25 transition-all duration-300 hover:scale-[1.02] shadow-lg"
          >
            <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#e29b5a]" /> Directions
          </a>
        </div>

        {/* Micro Features Strip */}
        <div className="pt-4 sm:pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3.5 w-full max-w-4xl text-left">
          <div className="flex items-center gap-2 sm:gap-2.5 bg-black/45 hover:bg-black/60 backdrop-blur-xl p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-white/15 transition-all duration-300 shadow-md">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#c88242]/20 flex items-center justify-center text-[#e29b5a] shrink-0 border border-[#c88242]/30">
              <Wind className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] sm:text-xs font-bold text-white leading-tight">Indoor AC</p>
              <p className="text-[9px] sm:text-[10px] text-white/70 leading-tight mt-0.5">Cool Lounge</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5 bg-black/45 hover:bg-black/60 backdrop-blur-xl p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-white/15 transition-all duration-300 shadow-md">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/30">
              <Trees className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] sm:text-xs font-bold text-white leading-tight">Nature Patio</p>
              <p className="text-[9px] sm:text-[10px] text-white/70 leading-tight mt-0.5">Garden Area</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5 bg-black/45 hover:bg-black/60 backdrop-blur-xl p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-white/15 transition-all duration-300 shadow-md">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 border border-amber-500/30">
              <Camera className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] sm:text-xs font-bold text-white leading-tight">Photo Wall</p>
              <p className="text-[9px] sm:text-[10px] text-white/70 leading-tight mt-0.5">Floral Mural</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5 bg-black/45 hover:bg-black/60 backdrop-blur-xl p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-white/15 transition-all duration-300 shadow-md">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 border border-rose-500/30">
              <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] sm:text-xs font-bold text-white leading-tight">1 PM – 11 PM</p>
              <p className="text-[9px] sm:text-[10px] text-white/70 leading-tight mt-0.5">Open Daily</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
