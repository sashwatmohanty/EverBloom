import { useState } from "react";
import { Utensils, MessageCircle, Phone, Search } from "lucide-react";

const categories = [
  { key: "all", label: "All Items" },
  { key: "wraps", label: "Wraps & Shared Bites" },
  { key: "pizzas", label: "Pizzas & Burgers" },
  { key: "coolers", label: "Signature Coolers" },
  { key: "mains", label: "Pastas & Mains" },
  { key: "beverages", label: "Coffee & Frappes" },
  { key: "desserts", label: "Desserts & Bakery" },
];

const defaultMenuItems = [
  // Wraps & Bites
  { id: "w1", name: "Crispy Peri-Peri Chicken Wrap", price: 240, category: "wraps", description: "Tender spiced chicken, crisp lettuce, peri-peri drizzle in toasted flatbread.", image: "/tacos.jpg", featured: true },
  { id: "w2", name: "Smoky Paneer Tikka Wrap", price: 220, category: "wraps", description: "Grilled cottage cheese cubes with mint mayo, bell peppers, and fresh greens.", image: "/avocado-toast.jpg", featured: true },
  { id: "w3", name: "Cheesy Loaded Nachos", price: 210, category: "wraps", description: "Crisp corn tortilla chips smothered in warm cheese sauce, jalapenos, and salsa.", image: "/tacos.jpg", featured: false },
  { id: "w4", name: "Herb Garlic Truffle Fries", price: 180, category: "wraps", description: "Golden crispy fries tossed in rosemary herb seasoning with garlic dip.", image: "/tacos.jpg", featured: false },

  // Pizzas & Burgers
  { id: "p1", name: "Wood-Fired Margherita Pizza", price: 290, category: "pizzas", description: "San Marzano tomatoes, fresh mozzarella, basil leaves on thin artisanal crust.", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800", featured: true },
  { id: "p2", name: "Everbloom Supreme Farmhouse Pizza", price: 340, category: "pizzas", description: "Topped with baby corn, olives, bell peppers, mushroom, and mozzarella.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800", featured: true },
  { id: "p3", name: "BBQ Grilled Chicken Pizza", price: 360, category: "pizzas", description: "Smoky barbecue shredded chicken, caramelized onions, cilantro, and double cheese.", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800", featured: false },
  { id: "p4", name: "Gourmet Smash Burger", price: 260, category: "pizzas", description: "Juicy handcrafted patty with melted cheddar, caramelized onions, and house sauce.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800", featured: true },

  // Coolers
  { id: "c1", name: "Everbloom Berry Blossom Fizz", price: 190, category: "coolers", description: "Our house special refresher with muddled berries, mint, lime, and crushed ice.", image: "/everbloom/signature-coolers.jpg", featured: true },
  { id: "c2", name: "Watermelon Mint Cooler", price: 170, category: "coolers", description: "Freshly pressed watermelon, lime zest, mint leaves, and effervescent soda.", image: "/everbloom/signature-coolers.jpg", featured: true },
  { id: "c3", name: "Blue Ocean Curacao Fizz", price: 180, category: "coolers", description: "Vibrant tropical blue cooler with citrus notes and sparkling fizz.", image: "/everbloom/signature-coolers.jpg", featured: false },
  { id: "c4", name: "Peach & Passionfruit Iced Tea", price: 160, category: "coolers", description: "Slow-brewed black tea infused with sweet peach puree and passionfruit essence.", image: "/everbloom/signature-coolers.jpg", featured: false },

  // Pastas & Mains
  { id: "m1", name: "Classic Aglio Olio Peperoncino", price: 260, category: "mains", description: "Spaghetti tossed in extra virgin olive oil, golden garlic, chili flakes, and parsley.", image: "/pasta.jpg", featured: true },
  { id: "m2", name: "Creamy Alfredo Penne", price: 280, category: "mains", description: "Penne pasta enveloped in rich parmesan cream sauce with sauteed mushrooms.", image: "/pasta.jpg", featured: true },
  { id: "m3", name: "Spicy Arrabbiata Pasta", price: 270, category: "mains", description: "Tangy tomato-basil sauce with red chili heat and kalamata olives.", image: "/pasta.jpg", featured: false },

  // Beverages & Coffee
  { id: "b1", name: "Signature Iced Hazelnut Frappe", price: 210, category: "beverages", description: "Double espresso blended with hazelnut, cold milk, and topped with whipped cream.", image: "/iced-latte.jpg", featured: true },
  { id: "b2", name: "Artisanal Cappuccino", price: 160, category: "beverages", description: "Rich Arabica espresso topped with velvety steamed micro-foam and latte art.", image: "/cappuccino.jpg", featured: true },
  { id: "b3", name: "Belgian Hot Chocolate", price: 190, category: "beverages", description: "Silky 60% Belgian melted chocolate with steamed milk and cocoa dust.", image: "/hot-chocolate.jpg", featured: true },
  { id: "b4", name: "Classic Cold Brew on Ice", price: 170, category: "beverages", description: "14-hour steeped single origin beans served over crystal ice cubes.", image: "/iced-latte.jpg", featured: false },

  // Desserts
  { id: "d1", name: "Blueberry Cheesecake Slice", price: 240, category: "desserts", description: "Creamy Philadelphia style baked cheesecake crowned with wild blueberry compote.", image: "/cheesecake.jpg", featured: true },
  { id: "d2", name: "Classic Espresso Tiramisu", price: 230, category: "desserts", description: "Espresso-soaked ladyfingers with whipped mascarpone and dark Dutch cocoa.", image: "/tiramisu.jpg", featured: true },
  { id: "d3", name: "Sizzling Chocolate Walnut Brownie", price: 220, category: "desserts", description: "Warm fudge brownie served on a hot skillet with vanilla bean ice cream.", image: "/cheesecake.jpg", featured: false },
  { id: "d4", name: "Butter Croissant", price: 150, category: "desserts", description: "Golden, flaky French pastry baked fresh daily in-house.", image: "/croissant-hero.jpg", featured: false },
];

export default function MenuList() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const rawItems = activeCategory === "all"
    ? defaultMenuItems
    : defaultMenuItems.filter((i) => i.category === activeCategory);

  const filteredItems = rawItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    (item.description && item.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="section-padding py-16 lg:py-24 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat.key
                    ? "bg-[#2b1810] text-white shadow-md"
                    : "bg-white text-[#4a3b32] hover:bg-[#f5eee8] border border-[#e8ded3]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search food or drinks..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white border border-[#e8ded3] text-xs font-medium text-[#2b1810] focus:outline-none focus:border-[#c88242] shadow-xs"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl p-8 border border-[#e8ded3]">
            <Utensils className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="font-display text-xl font-bold text-[#2b1810] mb-1">No items found</h3>
            <p className="text-xs text-[#6b5c54]">Try searching for something else or choosing another category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#e8ded3]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image || "/everbloom/signature-coolers.jpg"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[11px] font-bold text-white capitalize">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-display text-lg font-bold text-[#2b1810] group-hover:text-[#c88242] transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-lg font-extrabold text-[#c88242] shrink-0">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-xs text-[#6b5c54] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#f0e6dc] flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide">
                      Freshly Prepared
                    </span>

                    <a
                      href={`https://wa.me/919437164578?text=Hi%20Everbloom%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-caramel px-4 py-2 text-xs font-bold gap-1.5 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Call & Location Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl glass-espresso text-center text-white relative overflow-hidden shadow-xl">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold mb-2">Craving something special or have a question?</h3>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto mb-6">
            Give our team a ring or walk right in! K-8/796, Near Sum Ultimate Medicare, Kalinga Nagar, Bhubaneswar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="tel:09437164578" className="btn-caramel px-6 py-3 text-xs font-bold gap-2">
              <Phone className="w-4 h-4" /> Call 094371 64578
            </a>
            <a
              href="https://maps.google.com/?q=Everbloom+Kalinga+Nagar+Bhubaneswar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-espresso px-6 py-3 text-xs font-bold gap-2 border-white/30 text-white hover:bg-white/10"
            >
              Find Us on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
