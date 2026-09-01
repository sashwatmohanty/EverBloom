import { useState } from "react";
import { Link } from "react-router";
import {
  Star,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
  Wifi,
  Wind,
  Trees,
  Camera,
  HeartHandshake,
  Clock,
  Coffee,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AmbienceShowcase />
      <FeaturedMenuSection />
      <HighlightsSection />
      <ReviewsSection />
      <VisitCTASection />
    </div>
  );
}

/* ========== HERO WITH FULL-SCREEN AMBIENT VIDEO & ARTISANAL LOGO ========== */
function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#120a07] text-white">
      {/* Full-Screen Modern Background Cafe Video */}
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

        {/* Rich Espresso & Charcoal Depth Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#120a07]/85 via-[#1a0e09]/55 to-[#120a07]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(18,10,7,0.85)_80%,#120a07_100%)] pointer-events-none" />

        {/* Warm Caramel & Golden Crema Ambient Glow behind Cup */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] md:w-[800px] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c88242]/30 via-amber-600/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-16 left-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-[#4d7057]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content - Perfectly Responsive for Mobile, Tablet & Desktop */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-36 md:pt-40 lg:pt-44 pb-14 sm:pb-12 text-center flex flex-col items-center justify-center">

        {/* Modern Eyebrow Pill - Responsive Single Line */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/[0.12] backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold text-white/90 tracking-wider uppercase mb-3 sm:mb-4 shadow-sm max-w-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="hidden sm:inline">Open Today · 1:00 PM – 11:00 PM · Kalinga Nagar</span>
          <span className="sm:hidden">Open Daily · 1:00 PM – 11:00 PM</span>
        </div>

        {/* Ultra-Modern Headline */}
        <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold mb-2.5 sm:mb-4 max-w-3xl leading-tight sm:leading-snug tracking-tight drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
          Where Great Food &amp; Artisanal Coffee{" "}
          <span className="font-serif italic font-normal bg-gradient-to-r from-[#e8ad79] via-[#c88242] to-[#e29b5a] bg-clip-text text-transparent inline-block drop-shadow-[0_2px_15px_rgba(200,130,66,0.5)]">
            Bloom Together
          </span>
        </h1>

        {/* Modern Subtitle */}
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

        {/* Micro Features Strip - Clean & Never Truncated */}
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

/* ========== AMBIENCE SHOWCASE: REAL WALL MURAL & PATIO LOUNGE ========== */
function AmbienceShowcase() {
  return (
    <section className="section-padding py-20 lg:py-28 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-tag bg-[#2b1810]/10 text-[#2b1810] mb-3">
            The Everbloom Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#2b1810] font-extrabold mb-4">
            Designed for Memories, Crafted for Comfort
          </h2>
          <p className="text-sm sm:text-base text-[#6b5c54] leading-relaxed">
            Step into our signature space in Kalinga Nagar, Bhubaneswar featuring hand-painted floral murals, warm ambient coffee downlighting, and nature-inspired seating zones.
          </p>
        </div>

        {/* 3-Column Ambiance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Mural Card */}
          <div className="group rounded-3xl overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 flex flex-col border border-[#e8dfd6]">
            <div className="relative h-72 overflow-hidden">
              <img
                src="/everbloom/interior-mural.png"
                alt="Signature Everbloom Flower Wall Mural"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-white">
                🌸 Signature Mural
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-[#2b1810] mb-2">
                  The Blossom Mural Wall
                </h3>
                <p className="text-xs sm:text-sm text-[#6b5c54] leading-relaxed">
                  Our hand-painted floral centerpiece with blooming coral roses and plush comfortable seating — the top photo backdrop in Kalinga Nagar.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#f0e6dc] flex items-center gap-2 text-xs font-bold text-[#c88242]">
                <Camera className="w-4 h-4" /> Perfect for Instagram Stories
              </div>
            </div>
          </div>

          {/* AC Lounge */}
          <div className="group rounded-3xl overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 flex flex-col border border-[#e8dfd6]">
            <div className="relative h-72 overflow-hidden">
              <img
                src="/everbloom/interior-wall-neon.png"
                alt="Cozy AC Indoor Lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-white">
                ☕ AC Indoor Lounge
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-[#2b1810] mb-2">
                  Warm Ambient Lounge
                </h3>
                <p className="text-xs sm:text-sm text-[#6b5c54] leading-relaxed">
                  Relax in climate-controlled indoor comfort with ambient warm downlighting, cozy seating, and soothing cafe acoustic playlists.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#f0e6dc] flex items-center gap-2 text-xs font-bold text-[#2b1810]">
                <Wind className="w-4 h-4" /> Cool, Relaxing &amp; Work Friendly
              </div>
            </div>
          </div>

          {/* Outdoor Patio */}
          <div className="group rounded-3xl overflow-hidden glass-card hover:shadow-2xl transition-all duration-500 flex flex-col border border-[#e8dfd6]">
            <div className="relative h-72 overflow-hidden">
              <img
                src="/everbloom/outdoor-patio.jpg"
                alt="Nature Inspired Outdoor Patio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-white">
                🌿 Outdoor Garden Patio
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-[#2b1810] mb-2">
                  Nature-Inspired Garden Vibes
                </h3>
                <p className="text-xs sm:text-sm text-[#6b5c54] leading-relaxed">
                  Bask under cozy string lights and lush natural greenery. Perfect for breezy evening conversations, friend meetups, and pet parents.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#f0e6dc] flex items-center gap-2 text-xs font-bold text-emerald-700">
                <Trees className="w-4 h-4" /> Open Air &amp; Pet-Friendly
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========== POPULAR BITES & SPECIALTIES ========== */
const featuredDishes = [
  {
    name: "Everbloom Berry Blossom Cooler",
    category: "coolers",
    price: 190,
    desc: "Muddled forest berries, fresh mint, lime, and crushed sparkling ice.",
    image: "/everbloom/signature-coolers.jpg",
    badge: "House Special",
  },
  {
    name: "Crispy Peri-Peri Chicken Wrap",
    category: "wraps",
    price: 240,
    desc: "Spiced chicken tender strips, fresh crunchy greens, and house peri-peri drizzle.",
    image: "/tacos.jpg",
    badge: "Bestseller",
  },
  {
    name: "Wood-Fired Margherita Pizza",
    category: "pizzas",
    price: 290,
    desc: "San Marzano tomato base, fresh basil leaves, and bubbling melted mozzarella.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800",
    badge: "Chef's Choice",
  },
  {
    name: "Classic Aglio Olio Peperoncino",
    category: "mains",
    price: 260,
    desc: "Spaghetti in extra virgin olive oil, golden toasted garlic, and chili flakes.",
    image: "/pasta.jpg",
    badge: "Popular",
  },
  {
    name: "Blueberry Baked Cheesecake",
    category: "desserts",
    price: 240,
    desc: "New York style cheesecake topped with wild mountain blueberry compote.",
    image: "/cheesecake.jpg",
    badge: "Sweet Bite",
  },
  {
    name: "Signature Iced Hazelnut Frappe",
    category: "beverages",
    price: 210,
    desc: "Double espresso blended with roasted hazelnut, cold milk, and rich cocoa dust.",
    image: "/iced-latte.jpg",
    badge: "Must Try",
  },
];

function FeaturedMenuSection() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Specials" },
    { id: "coolers", label: "Coolers" },
    { id: "wraps", label: "Wraps & Bites" },
    { id: "pizzas", label: "Pizzas" },
    { id: "mains", label: "Pastas & Mains" },
    { id: "desserts", label: "Desserts" },
  ];

  const displayed = activeTab === "all" ? featuredDishes : featuredDishes.filter((d) => d.category === activeTab);

  return (
    <section className="section-padding py-20 lg:py-28 bg-[#1a0e09] text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="badge-tag bg-[#c88242]/20 text-[#e29b5a] mb-3">
              Crafted To Nourish &amp; Delight
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Popular Bites &amp; Brews
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeTab === tab.id
                  ? "bg-[#c88242] text-white shadow-[0_0_15px_rgba(200,130,66,0.5)] font-bold"
                  : "bg-white/10 text-white/75 hover:bg-white/20 hover:text-white"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#24150e] rounded-3xl overflow-hidden border border-white/10 hover:border-[#c88242]/50 transition-all duration-300 group flex flex-col justify-between shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-[#e29b5a]">
                  {item.badge}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#e29b5a] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-base font-extrabold text-[#e29b5a] shrink-0">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed mb-4">{item.desc}</p>
                </div>

                <a
                  href={`https://wa.me/919437164578?text=Hi%20Everbloom%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white/90 hover:text-[#e29b5a] inline-flex items-center gap-1.5 transition-colors pt-3 border-t border-white/10"
                >
                  Order on WhatsApp <ArrowRight className="w-3.5 h-3.5 text-[#e29b5a]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="btn-caramel px-8 py-3.5 text-sm font-bold inline-flex items-center gap-2 shadow-xl"
          >
            View Complete Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ========== HIGHLIGHTS & PERKS ========== */
function HighlightsSection() {
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

/* ========== GOOGLE & JUSTDIAL REVIEWS ========== */
function ReviewsSection() {
  const reviews = [
    {
      quote: "Quality food and well ambience and affordable price. The floral wall mural is absolutely breathtaking!",
      author: "Verified Google Reviewer",
      stars: 5,
      source: "Google Reviews",
    },
    {
      quote: "Excellent service, delicious food along with a great ambiance. Loved the peri-peri wraps and coolers!",
      author: "Local Explorer",
      stars: 5,
      source: "Google Reviews",
    },
    {
      quote: "The staff were super polite and served everything quickly. Best hangout spot near Sum Ultimate Medicare.",
      author: "Foodie Bhubaneswar",
      stars: 5,
      source: "Google Reviews",
    },
    {
      quote: "Both indoor AC seating and outdoor nature setup are great. 4.7 rating is truly well-deserved!",
      author: "Justdial Patron",
      stars: 5,
      source: "Justdial (143 votes)",
    },
  ];

  return (
    <section className="section-padding py-20 lg:py-28 bg-[#1f120c] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.7 Google Rating (169+ Reviews)
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Loved by Guests in Bhubaneswar
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-[#281710] border border-white/10 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(r.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic mb-6">"{r.quote}"</p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-bold text-white">{r.author}</span>
                <span className="text-[11px] text-[#e29b5a] font-medium">{r.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== VISIT CTA & LOCATION WIDGET ========== */
function VisitCTASection() {
  return (
    <section className="section-padding py-20 lg:py-28 bg-[#faf7f2]">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl glass-espresso p-8 sm:p-12 lg:p-14 relative overflow-hidden text-center shadow-2xl">
          {/* Subtle warm caramel halo */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#c88242]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open Daily: 1:00 PM – 11:00 PM
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Drop By Everbloom Today
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
              K-8/796, Near Sum Ultimate Medicare, K8 Kalinga Nagar, Bhubaneswar. Perfect for artisanal coffee breaks, friend hangouts, and delicious gourmet bites.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://maps.google.com/?q=Everbloom+Kalinga+Nagar+Bhubaneswar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-caramel px-8 py-3.5 text-sm font-bold gap-2 shadow-xl"
              >
                <MapPin className="w-4 h-4" /> Open in Google Maps
              </a>

              <a
                href="tel:09437164578"
                className="btn-outline-espresso px-8 py-3.5 text-sm font-bold gap-2 border-white/30 text-white hover:bg-white/10"
              >
                <Phone className="w-4 h-4 text-[#e29b5a]" /> Call 094371 64578
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

