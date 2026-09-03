import { Link } from "react-router";
import { Sparkles, MapPin, Wind, Trees, Camera, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#120a07] text-white">
      {/* Background Cafe Video with Cinematic Glow */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-[#120a07]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-[center_25%] scale-105 filter brightness-[0.62] contrast-[1.18]"
        >
          <source src="/myvideo/myvideo.mp4" type="video/mp4" />
        </video>

        {/* Ambient Dark Espresso Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#120a07]/85 via-[#1a0e09]/50 to-[#120a07]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(18,10,7,0.85)_80%,#120a07_100%)] pointer-events-none" />

        {/* Ambient Glow Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] md:w-[850px] h-[300px] sm:h-[450px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c88242]/35 via-amber-600/15 to-transparent blur-3xl pointer-events-none animate-pulse-glow" />
      </div>

      {/* Hero Content Center Stage */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-24 xs:pt-28 sm:pt-36 md:pt-40 pb-8 sm:pb-12 text-center flex flex-col items-center justify-center flex-1">

        {/* Live Pill Status */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.12] backdrop-blur-xl border border-white/20 text-[11px] sm:text-xs font-semibold text-white/95 tracking-wider uppercase mb-3.5 sm:mb-5 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0 shadow-[0_0_8px_#34d399]" />
          <span>Open Daily · 1:00 PM – 11:00 PM</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold mb-2.5 sm:mb-4 max-w-3xl leading-tight sm:leading-snug tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
          <span className="block sm:inline">Where Good Food &amp; Coffee </span>
          <span className="font-serif italic font-normal bg-gradient-to-r from-[#fcd9b8] via-[#e29b5a] to-[#c88242] bg-clip-text text-transparent inline-block drop-shadow-[0_2px_20px_rgba(200,130,66,0.6)]">
            Bloom Together
          </span>
        </h1>

        {/* Subtitle - Clean & Minimal on Mobile */}
        <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-xs sm:max-w-xl mb-6 sm:mb-8 font-normal leading-relaxed drop-shadow-md">
          <span className="sm:hidden">Handcrafted coffees, loaded wraps &amp; garden patio in Bhubaneswar.</span>
          <span className="hidden sm:inline">Handcrafted espresso brews, loaded gourmet wraps, stone-baked pizzas &amp; soothing nature patio lounge in Bhubaneswar.</span>
        </p>

        {/* Quick Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md mb-6 sm:mb-10">
          <Link
            to="/menu"
            className="btn-caramel flex-1 py-2.5 sm:py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-bold gap-2 shadow-[0_4px_25px_rgba(200,130,66,0.5)] hover:shadow-[0_8px_35px_rgba(200,130,66,0.7)]"
          >
            <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> Explore Menu
          </Link>

          <a
            href="https://maps.google.com/?q=Everbloom+Kalinga+Nagar+Bhubaneswar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 sm:py-3.5 px-4 sm:px-6 text-xs sm:text-sm font-bold gap-2 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl border border-white/25 transition-all duration-300 hover:scale-[1.02] shadow-lg"
          >
            <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#e29b5a]" /> Directions
          </a>
        </div>

        {/* Mobile: Ultra-Sleek Pill Strip */}
        <div className="sm:hidden flex flex-wrap items-center justify-center gap-2 w-full max-w-sm text-[11px] font-semibold text-white/90">
          <span className="px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-xl border border-white/15 flex items-center gap-1.5 shadow-sm">
            <Wind className="w-3 h-3 text-[#e29b5a]" /> Indoor AC
          </span>
          <span className="px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-xl border border-white/15 flex items-center gap-1.5 shadow-sm">
            <Trees className="w-3 h-3 text-emerald-400" /> Garden Patio
          </span>
          <span className="px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-xl border border-white/15 flex items-center gap-1.5 shadow-sm">
            <Camera className="w-3 h-3 text-amber-400" /> Photo Mural
          </span>
        </div>

        {/* Tablet / Desktop: 4 Detailed Glass Cards */}
        <div className="hidden sm:grid sm:grid-cols-4 gap-3.5 w-full max-w-4xl text-left">
          <div className="flex items-center gap-2.5 bg-black/50 hover:bg-black/65 backdrop-blur-xl p-3.5 rounded-2xl border border-white/15 transition-all duration-300 shadow-md">
            <div className="w-9 h-9 rounded-xl bg-[#c88242]/20 flex items-center justify-center text-[#e29b5a] shrink-0 border border-[#c88242]/30">
              <Wind className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-white leading-tight">Indoor AC</p>
              <p className="text-[10px] text-white/70 leading-tight mt-0.5">Cool Lounge</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-black/50 hover:bg-black/65 backdrop-blur-xl p-3.5 rounded-2xl border border-white/15 transition-all duration-300 shadow-md">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/30">
              <Trees className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-white leading-tight">Nature Patio</p>
              <p className="text-[10px] text-white/70 leading-tight mt-0.5">Garden Area</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-black/50 hover:bg-black/65 backdrop-blur-xl p-3.5 rounded-2xl border border-white/15 transition-all duration-300 shadow-md">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 border border-amber-500/30">
              <Camera className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-white leading-tight">Photo Wall</p>
              <p className="text-[10px] text-white/70 leading-tight mt-0.5">Floral Mural</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-black/50 hover:bg-black/65 backdrop-blur-xl p-3.5 rounded-2xl border border-white/15 transition-all duration-300 shadow-md">
            <div className="w-9 h-9 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 border border-rose-500/30">
              <Clock className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-white leading-tight">1 PM – 11 PM</p>
              <p className="text-[10px] text-white/70 leading-tight mt-0.5">Open Daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

