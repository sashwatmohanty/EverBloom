import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const featuredDishes = [
  {
    name: "Everbloom Berry Blossom Cooler",
    category: "coolers",
    price: 190,
    desc: "Muddled forest berries, fresh mint, lime, and crushed sparkling ice.",
    image: "/everbloom/signature-coolers.jpg",
    badge: "House Special",
    tag: "Signature Refresher",
  },
  {
    name: "Crispy Peri-Peri Chicken Wrap",
    category: "wraps",
    price: 240,
    desc: "Spiced chicken tender strips, fresh crunchy greens, and house peri-peri drizzle.",
    image: "/tacos.jpg",
    badge: "Bestseller",
    tag: "Chef's Choice",
  },
  {
    name: "Wood-Fired Margherita Pizza",
    category: "pizzas",
    price: 290,
    desc: "San Marzano tomato base, fresh basil leaves, and bubbling melted mozzarella.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800",
    badge: "Stone Baked",
    tag: "Vegetarian",
  },
  {
    name: "Classic Aglio Olio Peperoncino",
    category: "mains",
    price: 260,
    desc: "Spaghetti in extra virgin olive oil, golden toasted garlic, and chili flakes.",
    image: "/pasta.jpg",
    badge: "Authentic",
    tag: "Italian Favorite",
  },
  {
    name: "Blueberry Baked Cheesecake",
    category: "desserts",
    price: 240,
    desc: "New York style cheesecake topped with wild mountain blueberry compote.",
    image: "/cheesecake.jpg",
    badge: "Sweet Bite",
    tag: "In-House Bakery",
  },
  {
    name: "Signature Iced Hazelnut Frappe",
    category: "beverages",
    price: 210,
    desc: "Double espresso blended with roasted hazelnut, cold milk, and rich cocoa dust.",
    image: "/iced-latte.jpg",
    badge: "Must Try",
    tag: "100% Arabica",
  },
];

export default function FeaturedMenuSection() {
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
    <section className="section-padding py-20 lg:py-28 bg-[#180e09] text-white relative overflow-hidden">
      {/* Subtle warm glow background */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#c88242]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#4d7057]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="badge-tag bg-[#c88242]/20 text-[#e29b5a] mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Crafted To Nourish &amp; Delight
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
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#c88242] text-white shadow-[0_4px_20px_rgba(200,130,66,0.5)] scale-105"
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
              className="bg-[#24150e] rounded-3xl overflow-hidden border border-white/10 hover:border-[#c88242]/50 transition-all duration-500 group flex flex-col justify-between shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24150e] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-[#e29b5a] border border-white/10 shadow-md">
                  {item.badge}
                </div>
                <div className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-md bg-white/15 backdrop-blur-md text-[10px] font-bold text-white/90">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#e29b5a] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-lg font-extrabold text-[#e29b5a] shrink-0">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed mb-6">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Freshly Prepared
                  </span>
                  <span className="text-xs font-bold text-white/60">Dine-in &amp; Takeaway</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="btn-caramel px-8 py-3.5 text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-2xl hover:scale-105 transition-all"
          >
            Explore Complete Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
