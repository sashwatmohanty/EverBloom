import { Wind, Trees, Wifi, Camera, HeartHandshake, Clock } from "lucide-react";

export default function HighlightsSection() {
  const perks = [
    {
      icon: <Wind className="w-5 h-5" />,
      title: "Indoor AC Lounge",
      desc: "Stay cool with our premium air-conditioned indoor dining area and beautiful aesthetic floral decor.",
    },
    {
      icon: <Trees className="w-5 h-5" />,
      title: "Nature-Inspired Patio",
      desc: "Refreshing garden patio with cozy seating under warm fairy lights for peaceful evening hangouts.",
    },
    {
      icon: <Wifi className="w-5 h-5" />,
      title: "Work & Study Friendly",
      desc: "Fast WiFi, comfortable seating, and a calm atmosphere for laptop sessions or reading.",
    },
    {
      icon: <Camera className="w-5 h-5" />,
      title: "Iconic Photo Spots",
      desc: "Our blooming floral rose lady wall mural and warm ambient lounge make every photo memorable.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: "Pocket-Friendly Gourmet",
      desc: "High quality dishes, mocktails, and bakery treats priced reasonably between ₹200–₹400.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "All-Day Comfort",
      desc: "Open daily from 1:00 PM till 11:00 PM. Perfect for late lunches, evening hangouts & dinners.",
    },
  ];

  return (
    <section className="section-padding py-20 lg:py-28 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge-tag bg-[#2b1810]/10 text-[#2b1810] mb-3">
            Why Visit Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2b1810]">
            Good Food &amp; Good Mood
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((p, i) => (
            <div
              key={i}
              className="p-7 rounded-3xl glass-card hover:translate-y-[-4px] transition-all duration-300 border border-[#e8ded3]"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#c88242]/15 flex items-center justify-center text-[#c88242] mb-5">
                {p.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-[#2b1810] mb-2">{p.title}</h3>
              <p className="text-xs sm:text-sm text-[#6b5c54] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
