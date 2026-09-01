import { Music, Star, Calendar, Clock } from "lucide-react";

const events = [
  {
    title: "Acoustic Patio Evenings",
    description: "Live acoustic performances under the fairy lights of our garden patio every Friday. Enjoy soothing cafe melodies and artisanal coolers.",
    icon: <Music className="w-6 h-6" />,
    day: "Every Friday",
    time: "7:00 PM - 10:00 PM",
    image: "/everbloom/outdoor-patio.jpg",
  },
  {
    title: "Weekend Coffee & Brunch",
    description: "Pair our handcrafted double espresso frappes with peri-peri wraps and blueberry cheesecake every Saturday & Sunday.",
    icon: <Music className="w-6 h-6" />,
    day: "Sat & Sun",
    time: "1:00 PM - 5:00 PM",
    image: "/everbloom/signature-coolers.jpg",
  },
  {
    title: "Community Open Meet & Boardgames",
    description: "Meet fellow students, creators, and coffee lovers in Bhubaneswar for chill board games and conversations.",
    icon: <Star className="w-6 h-6" />,
    day: "Last Thursday",
    time: "6:00 PM - 9:00 PM",
    image: "/everbloom/interior-mural.png",
  },
];

export default function LiveEvents() {
  return (
    <section className="section-padding py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="badge-tag bg-[#2b1810]/10 text-[#2b1810] mb-3">
            Cafe Experiences
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#2b1810] font-extrabold">Upcoming Gatherings</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-[#e8ded3]">
              <div className="relative h-48 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-black/60 backdrop-blur-md flex items-center justify-center text-[#e29b5a]">
                  {event.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-[#2b1810] mb-2">{event.title}</h3>
                <p className="text-xs sm:text-sm text-[#6b5c54] mb-4 leading-relaxed">{event.description}</p>
                <div className="flex items-center gap-4 text-xs text-[#c88242] font-semibold">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {event.day}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {event.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
