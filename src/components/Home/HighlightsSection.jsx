import {
  Wind,
  Trees,
  Wifi,
  Camera,
  HeartHandshake,
  Clock,
  Sparkles,
  Star,
  Coffee,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function HighlightsSection() {
  const stats = [
    { number: "500+", label: "Happy Guests Daily", icon: Users },
    { number: "4.9 ★", label: "Google Rating (500+ Reviews)", icon: Star },
    { number: "100%", label: "Single-Origin Arabica", icon: Coffee },
    { number: "25+", label: "Handcrafted Dishes & Brews", icon: UtensilsCrossed },
  ];

  const perks = [
    {
      icon: Wind,
      title: "Climate Controlled AC Lounge",
      desc: "Stay wonderfully cool in our premium air-conditioned dining lounge adorned with warm botanical florals.",
      tag: "Indoor AC",
      color: "text-[#c88242] bg-[#c88242]/15",
    },
    {
      icon: Trees,
      title: "Nature-Inspired Garden Patio",
      desc: "Refreshing open-air patio with ambient fairy lights and lush greenery for evening conversations.",
      tag: "Outdoor Garden",
      color: "text-emerald-600 bg-emerald-100",
    },
    {
      icon: Wifi,
      title: "Fast WiFi & Work Friendly",
      desc: "High-speed internet, power points, and cozy tables make it ideal for productive laptop hours.",
      tag: "Work / Study",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: Camera,
      title: "Iconic Floral Photo Mural",
      desc: "Our blooming floral rose lady wall mural is Bhubaneswar's favorite spot for celebration photos.",
      tag: "Instagram Spot",
      color: "text-amber-600 bg-amber-100",
    },
    {
      icon: HeartHandshake,
      title: "Pocket-Friendly Gourmet",
      desc: "Artisanal quality coffees, wraps, pizzas, and desserts priced fairly between ₹200–₹400.",
      tag: "₹200–₹400 Avg",
      color: "text-rose-600 bg-rose-100",
    },
    {
      icon: Clock,
      title: "Open Daily 1 PM – 10:30 PM",
      desc: "Serving fresh lunch, afternoon cold brews, and late evening dinners seven days a week.",
      tag: "All Week Long",
      color: "text-purple-600 bg-purple-100",
    },
  ];

  return (
    <section id="highlights-section" className="section-padding py-16 lg:py-24 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Animated Live Stats Counter Strip on Scroll */}
        <ScrollReveal variant="scale" delay={100} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border border-[#e8ded3] shadow-sm hover:shadow-md hover:border-[#c88242] transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#c88242]/15 text-[#c88242] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1109]">
                    {st.number}
                  </h4>
                  <p className="text-[11px] text-[#6b5c54] font-medium leading-tight mt-0.5">
                    {st.label}
                  </p>
                </div>
              </div>
            );
          })}
        </ScrollReveal>

        {/* Section Heading with Scroll Reveal */}
        <ScrollReveal variant="up" className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c88242]/15 text-[#c88242] text-[10px] font-extrabold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            THE EVERBLOOM PROMISE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1c1109] mb-3">
            Why Guests Love Everbloom
          </h2>
          <p className="text-xs sm:text-sm text-[#6b5c54]">
            Crafted for the modern food and coffee enthusiast in Bhubaneswar
          </p>
        </ScrollReveal>

        {/* 6 Perks Cards Grid with Staggered Scroll Delays */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((p, i) => {
            const Icon = p.icon;
            const delays = [100, 150, 200, 250, 300, 400];
            return (
              <ScrollReveal
                key={i}
                variant="up"
                delay={delays[i] || 100}
                className="h-full"
              >
                <div className="p-7 h-full rounded-3xl bg-white border border-[#e8ded3] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${p.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#faf7f2] border border-[#e8ded3] text-[#6b5c54]">
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-normal text-[#1c1109] mb-2 group-hover:text-[#c88242] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6b5c54] font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
