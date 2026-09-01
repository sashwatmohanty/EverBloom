import { Wind, Trees, Wifi, Camera, HeartHandshake, Clock, Sparkles } from "lucide-react";

export default function HighlightsSection() {
  const perks = [
    {
      icon: <Wind className="w-5 h-5" />,
      title: "Indoor AC Lounge",
      desc: "Stay cool with our premium air-conditioned indoor dining area and beautiful aesthetic floral decor.",
      tag: "Climate Controlled",
    },
    {
      icon: <Trees className="w-5 h-5" />,
      title: "Nature-Inspired Patio",
      desc: "Refreshing garden patio with cozy seating under warm fairy lights for peaceful evening hangouts.",
      tag: "Open Garden",
    },
    {
      icon: <Wifi className="w-5 h-5" />,
      title: "Work & Study Friendly",
      desc: "Fast WiFi, comfortable seating, and a calm atmosphere for laptop sessions or reading.",
      tag: "High-Speed WiFi",
    },
    {
      icon: <Camera className="w-5 h-5" />,
      title: "Iconic Photo Spots",
      desc: "Our blooming floral rose lady wall mural and warm ambient lounge make every photo memorable.",
      tag: "Aesthetic Vibe",
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: "Pocket-Friendly Gourmet",
      desc: "High quality dishes, mocktails, and bakery treats priced reasonably between ₹200–₹400.",
      tag: "₹200–₹400 Avg",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "All-Day Comfort",
      desc: "Open daily from 1:00 PM till 11:00 PM. Perfect for late lunches, evening hangouts & dinners.",
      tag: "Open 7 Days",
    },
  ];

  return (
    <section className="section-padding py-20 lg:py-28 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge-tag bg-[#2b1810]/10 text-[#2b1810] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c88242]" /> Why Choose Everbloom
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2b1810] mb-3">
            Good Food &amp; Good Mood
          </h2>
          <p className="text-xs sm:text-sm text-[#6b5c54]">
            Crafted for the modern coffee and food lover in Bhubaneswar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((p, i) => (
            <div
              key={i}
              className="p-7 rounded-3xl glass-card hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-[#e8ded3] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#c88242]/15 group-hover:bg-[#2b1810] group-hover:text-white flex items-center justify-center text-[#c88242] transition-colors duration-300 shadow-xs">
                    {p.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f4ece2] text-[#4a3b32]">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#2b1810] mb-2 group-hover:text-[#c88242] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6b5c54] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
