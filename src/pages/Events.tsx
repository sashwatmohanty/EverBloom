import { Link } from "react-router";
import { Music, Percent, Calendar, Star, ArrowRight, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "Acoustic Friday Nights",
    description: "Live acoustic performances every Friday from 7 PM to 10 PM. Local artists, soulful melodies, and the perfect rooftop ambiance.",
    icon: <Music className="w-6 h-6" />,
    day: "Every Friday",
    time: "7:00 PM - 10:00 PM",
    image: "/rooftop.jpg",
  },
  {
    title: "Weekend Jazz Brunch",
    description: "Smooth jazz performances paired with our signature brunch menu every Saturday and Sunday morning.",
    icon: <Music className="w-6 h-6" />,
    day: "Sat & Sun",
    time: "10:00 AM - 2:00 PM",
    image: "/english-breakfast.jpg",
  },
  {
    title: "Open Mic Night",
    description: "Showcase your talent at our monthly open mic night. Poetry, music, comedy — all forms of art are welcome.",
    icon: <Star className="w-6 h-6" />,
    day: "Last Thursday",
    time: "6:00 PM - 9:00 PM",
    image: "/interior-cozy.jpg",
  },
];

const offers = [
  { title: "Early Bird Special", discount: "15% Off", desc: "Get 15% off on all breakfast items before 9:30 AM", icon: <Percent className="w-5 h-5" /> },
  { title: "Date Night Deal", discount: "20% Off", desc: "Special couple's menu with 20% off every Wednesday", icon: <Percent className="w-5 h-5" /> },
  { title: "Student Discount", discount: "10% Off", desc: "Show your student ID for 10% off on all beverages", icon: <Percent className="w-5 h-5" /> },
  { title: "Weekend Brunch", discount: "25% Off", desc: "Unlimited brunch buffet at 25% off on Sundays", icon: <Percent className="w-5 h-5" /> },
];

export default function Events() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src="/rooftop.jpg" alt="Events" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.2em] uppercase mb-3">What's Happening</p>
            <h1 className="font-display text-5xl sm:text-6xl text-white">Events & Offers</h1>
          </div>
        </div>
      </section>

      {/* Live Events */}
      <section className="section-padding py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--color-dusty-rose)] mb-3">Live Experiences</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[var(--color-chocolate)]">Upcoming Events</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-[var(--color-chocolate)]">
                    {event.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium text-[var(--color-chocolate)] mb-2">{event.title}</h3>
                  <p className="text-sm text-[var(--color-dusty-rose)] mb-4">{event.description}</p>
                  <div className="flex items-center gap-4 text-xs text-[var(--color-dusty-rose)]">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {event.day}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="section-padding py-20 lg:py-28 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--color-dusty-rose)] mb-3">Special Deals</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[var(--color-chocolate)]">Current Offers</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer, i) => (
              <div key={i} className="glass-card rounded-3xl p-6 text-center group hover:shadow-lg transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-chocolate)]/5 flex items-center justify-center text-[var(--color-chocolate)] mx-auto mb-4 group-hover:bg-[var(--color-chocolate)] group-hover:text-white transition-all">
                  {offer.icon}
                </div>
                <p className="font-display text-3xl font-semibold text-[var(--color-gold)] mb-2">{offer.discount}</p>
                <h3 className="font-display text-lg font-medium text-[var(--color-chocolate)] mb-2">{offer.title}</h3>
                <p className="text-sm text-[var(--color-dusty-rose)]">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekend Highlights */}
      <section className="section-padding py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl text-[var(--color-chocolate)] mb-6">Weekend Highlights</h2>
          <p className="text-[var(--color-dusty-rose)] mb-8 leading-relaxed">
            Every weekend at Demo Restaurant is special. From our legendary brunch spread to live music under the stars, 
            we curate experiences that make your weekends memorable. Join us for bottomless mimosas, 
            acoustic sessions, and our chef's weekend specials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="btn-primary">
              Reserve for Weekend <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/contact" className="btn-outline">
              <MapPin className="w-4 h-4 mr-2" /> Find Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
