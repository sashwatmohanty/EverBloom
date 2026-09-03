import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Trees, Wind, Camera, Wifi, Heart, Sparkles, Check } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function AmbienceShowcase() {
  const tabs = [
    {
      id: "patio",
      label: "Nature Garden Patio",
      icon: Trees,
      tag: "Open-Air Evening Vibe",
      heading: "Tranquil Garden Patio Under Fairy Lights",
      desc: "Our open-air nature patio is the soul of Everbloom Café. Surrounded by lush greenery, wooden textures, and warm twinkling string lights, it's the perfect sanctuary for peaceful evening dates, group laughter, and slow coffee sips.",
      image: "/everbloom/outdoor-patio.jpg",
      perks: ["Open-air garden breeze", "Warm evening fairy lights", "Pet-friendly outdoor seating", "Acoustic weekend sessions"],
    },
    {
      id: "lounge",
      label: "Indoor AC Lounge",
      icon: Wind,
      tag: "Climate Controlled Comfort",
      heading: "Chilled Botanical Indoor Lounge",
      desc: "Escape the midday sun in our cool, fully air-conditioned indoor lounge. Thoughtfully crafted with plush seating, warm amber lighting, and subtle coffee aroma — ideal for laptop work sessions, private meetings, or quiet reading.",
      image: "/everbloom/interior-wall-neon.png",
      perks: ["100% Climate controlled", "High-speed workstation WiFi", "Plush seating & power sockets", "Curated soft lo-fi music"],
    },
    {
      id: "mural",
      label: "Aesthetic Wall Mural",
      icon: Camera,
      tag: "Instagram Iconic Spot",
      heading: "The Blooming Floral Rose Lady Mural",
      desc: "No trip to Everbloom is complete without capturing a moment at our signature blooming floral wall mural. Designed by local artists, it offers a vibrant, elegant backdrop for your Instagram memories and celebratory photo moments.",
      image: "/everbloom/interior-mural.png",
      perks: ["Bhubaneswar's iconic photo spot", "Warm studio-grade lighting", "Artisanal floral artwork", "Celebration photo ready"],
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="section-padding py-20 lg:py-28 bg-[#0d0705] text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c88242]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4d7057]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Top Header with Scroll Reveal */}
        <ScrollReveal variant="up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c88242]/20 border border-[#c88242]/30 text-[#e29b5a] text-[10px] font-extrabold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            IMMERSIVE EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] mb-3">
            A Sanctuary of{" "}
            <span className="italic bg-gradient-to-r from-[#fcd9b8] via-[#e29b5a] to-[#c88242] bg-clip-text text-transparent">
              Flavor &amp; Ambiance
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light">
            Switch spaces below to explore our dual climate-controlled indoor lounge and open nature garden patio.
          </p>
        </ScrollReveal>

        {/* Interactive Tab Selector Buttons with Scale Scroll Reveal */}
        <ScrollReveal variant="scale" delay={150} className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab.id === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2.5 shadow-md ${
                  isSelected
                    ? "bg-[#c88242] text-white shadow-[#c88242]/30 scale-105"
                    : "bg-white/10 hover:bg-white/15 text-white/80 border border-white/10"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-[#e29b5a]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </ScrollReveal>

        {/* Showcase Grid with Dual Directional Scroll Reveals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Narrative Reveal from Left */}
          <ScrollReveal variant="left" delay={200} className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#c88242]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#e29b5a] uppercase">
                {activeTab.tag}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug">
              {activeTab.heading}
            </h3>

            <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
              {activeTab.desc}
            </p>

            {/* Perks checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {activeTab.perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-white/90">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/booking"
                className="btn-caramel px-6 py-3 text-xs font-bold gap-2 shadow-lg shadow-[#c88242]/30"
              >
                <span>Reserve a Table in this Space</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/gallery"
                className="text-xs font-bold text-white/80 hover:text-[#e29b5a] transition-colors"
              >
                View Photo Gallery →
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Large Image with Reveal from Right */}
          <ScrollReveal variant="right" delay={250} className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 group bg-black/40">
              <img
                key={activeTab.id}
                src={activeTab.image}
                alt={activeTab.heading}
                className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 animate-fadeIn"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-75" />

              {/* Floating Space Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[11px] uppercase tracking-wider text-[#fcd9b8] font-bold border border-white/15 shadow-lg">
                  {activeTab.label}
                </span>

                <span className="text-[10px] text-white/70 font-semibold bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                  Air-Conditioned &amp; Patio
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
