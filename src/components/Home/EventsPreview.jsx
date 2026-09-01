import { Link } from "react-router";
import { Music, Sparkles, ArrowRight } from "lucide-react";

export default function EventsPreview() {
  const highlights = [
    {
      title: "Acoustic Friday Nights",
      day: "Every Friday · 7 PM - 10 PM",
      desc: "Live acoustic performances under warm fairy string lights in our Nature Patio.",
      image: "/everbloom/outdoor-patio.jpg",
      icon: <Music className="w-5 h-5" />,
    },
    {
      title: "Weekend Frappes & Desserts",
      day: "Saturdays & Sundays",
      desc: "Handcrafted hazelnut cold brew frappes paired with authentic blueberry cheesecake.",
      image: "/cheesecake.jpg",
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  return (
    <section className="section-padding py-16 lg:py-20 bg-[#f5ede4]/70">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="badge-tag bg-[#2b1810]/10 text-[#2b1810] mb-2">
              Vibes &amp; Gatherings
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2b1810]">
              Weekend Highlights &amp; Live Evenings
            </h2>
          </div>
          <Link to="/events" className="btn-caramel px-5 py-2.5 text-xs font-bold gap-1.5 self-start md:self-auto">
            View All Events &amp; Offers <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((h, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-sm border border-[#e8ded3] flex flex-col sm:flex-row gap-5 items-center group hover:shadow-md transition-all"
            >
              <div className="relative w-full sm:w-36 h-36 rounded-2xl overflow-hidden shrink-0">
                <img src={h.image} alt={h.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 left-2 w-8 h-8 rounded-xl bg-black/60 backdrop-blur-md flex items-center justify-center text-[#e29b5a]">
                  {h.icon}
                </div>
              </div>
              <div className="flex-1 text-left">
                <span className="text-[11px] font-bold text-[#c88242] uppercase tracking-wider">{h.day}</span>
                <h3 className="font-display text-lg font-bold text-[#2b1810] mb-1">{h.title}</h3>
                <p className="text-xs text-[#6b5c54] leading-relaxed mb-3">{h.desc}</p>
                <Link to="/booking" className="text-xs font-bold text-[#2b1810] hover:text-[#c88242] inline-flex items-center gap-1">
                  Reserve for this weekend <ArrowRight className="w-3 h-3 text-[#c88242]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
