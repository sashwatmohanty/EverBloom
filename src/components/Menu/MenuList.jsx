import { useState, useEffect } from "react";
import { menuApi } from "../../lib/api";

const defaultMenuSections = [
  {
    number: "01",
    eyebrow: "BEGIN YOUR JOURNEY",
    title: "Starters & Wraps",
    items: [
      {
        name: "Crispy Peri-Peri Chicken Wrap",
        price: "₹240",
        desc: "Tender spiced chicken, crisp lettuce, and house peri-peri drizzle in toasted flatbread.",
        image: "/tacos.jpg",
      },
      {
        name: "Smoky Paneer Tikka Wrap",
        price: "₹220",
        desc: "Grilled cottage cheese cubes with mint mayo, bell peppers, and fresh greens.",
        image: "/avocado-toast.jpg",
      },
      {
        name: "Cheesy Loaded Nachos",
        price: "₹210",
        desc: "Crisp corn tortilla chips smothered in warm cheese sauce, jalapenos, and tangy salsa.",
        image: "/tacos.jpg",
      },
    ],
  },
  {
    number: "02",
    eyebrow: "SIGNATURE CREATIONS",
    title: "Pizzas & Burgers",
    items: [
      {
        name: "Wood-Fired Margherita Pizza",
        price: "₹290",
        desc: "San Marzano tomatoes, fresh mozzarella, and basil leaves on thin artisanal crust.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Everbloom Supreme Farmhouse",
        price: "₹340",
        desc: "Topped with baby corn, black olives, bell peppers, mushrooms, and double mozzarella.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Gourmet Smash Burger",
        price: "₹260",
        desc: "Juicy handcrafted patty with melted cheddar, caramelized onions, and house sauce.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    number: "03",
    eyebrow: "ITALIAN CLASSICS",
    title: "Pastas & Mains",
    items: [
      {
        name: "Classic Aglio Olio Peperoncino",
        price: "₹260",
        desc: "Spaghetti tossed in extra virgin olive oil, golden garlic, chili flakes, and parsley.",
        image: "/pasta.jpg",
      },
      {
        name: "Creamy Alfredo Penne",
        price: "₹280",
        desc: "Penne pasta enveloped in rich parmesan cream sauce with sauteed mushrooms.",
        image: "/pasta.jpg",
      },
      {
        name: "Spicy Arrabbiata Pasta",
        price: "₹270",
        desc: "Tangy tomato-basil sauce with red chili heat, kalamata olives, and fresh herbs.",
        image: "/pasta.jpg",
      },
    ],
  },
  {
    number: "04",
    eyebrow: "HOUSE REFRESHERS",
    title: "Signature Coolers",
    items: [
      {
        name: "Everbloom Berry Blossom Fizz",
        price: "₹190",
        desc: "Our house special refresher with muddled forest berries, mint, lime, and crushed ice.",
        image: "/everbloom/signature-coolers.jpg",
      },
      {
        name: "Watermelon Mint Cooler",
        price: "₹170",
        desc: "Freshly pressed watermelon, lime zest, mint leaves, and effervescent sparkling soda.",
        image: "/everbloom/signature-coolers.jpg",
      },
      {
        name: "Blue Ocean Curacao Fizz",
        price: "₹180",
        desc: "Vibrant tropical blue cooler with citrus notes and effervescent sparkling soda.",
        image: "/everbloom/signature-coolers.jpg",
      },
    ],
  },
  {
    number: "05",
    eyebrow: "SWEET FINALE & BREWS",
    title: "Coffee & Desserts",
    items: [
      {
        name: "Blueberry Baked Cheesecake",
        price: "₹240",
        desc: "Philadelphia style baked cheesecake crowned with wild mountain blueberry compote.",
        image: "/cheesecake.jpg",
      },
      {
        name: "Classic Espresso Tiramisu",
        price: "₹230",
        desc: "Espresso-soaked ladyfingers with whipped mascarpone cream and dark Dutch cocoa.",
        image: "/tiramisu.jpg",
      },
      {
        name: "Signature Hazelnut Frappe",
        price: "₹210",
        desc: "Double espresso blended with roasted hazelnut, cold milk, and rich micro-foam.",
        image: "/iced-latte.jpg",
      },
    ],
  },
];

const categoryMeta = {
  "Starters & Wraps": { number: "01", eyebrow: "BEGIN YOUR JOURNEY" },
  "Pizzas & Burgers": { number: "02", eyebrow: "SIGNATURE CREATIONS" },
  "Pastas & Mains": { number: "03", eyebrow: "ITALIAN CLASSICS" },
  "Signature Coolers": { number: "04", eyebrow: "HOUSE REFRESHERS" },
  "Coffee & Desserts": { number: "05", eyebrow: "SWEET FINALE & BREWS" },
};

export default function MenuList() {
  const [sections, setSections] = useState(defaultMenuSections);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await menuApi.getAll();
        if (res && res.success && res.data && res.data.length > 0) {
          // Group items by category
          const grouped = {};
          res.data.forEach((item) => {
            const cat = item.category || "Starters & Wraps";
            if (!grouped[cat]) grouped[cat] = [];
            grouped[cat].push(item);
          });

          const dynamicSections = Object.keys(grouped).map((catKey, idx) => {
            const meta = categoryMeta[catKey] || {
              number: String(idx + 1).padStart(2, "0"),
              eyebrow: "OUR SELECTION",
            };
            return {
              number: meta.number,
              eyebrow: meta.eyebrow,
              title: catKey,
              items: grouped[catKey],
            };
          });

          setSections(dynamicSections);
        }
      } catch (err) {
        console.warn("Could not load dynamic menu, using defaults:", err);
      }
    };

    fetchMenu();
  }, []);
  return (
    <div className="section-padding py-16 sm:py-24 bg-white text-[#1c1109]">
      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-28">
        {sections.map((sec, idx) => (
          <section key={idx}>
            {/* Section Header with Number Watermark */}
            <div className="flex items-end justify-between border-b border-[#e8ded3] pb-4 mb-10 sm:mb-12">
              <div>
                <span className="text-[10px] sm:text-xs tracking-[0.22em] text-[#c88242] uppercase font-bold block mb-1">
                  {sec.eyebrow}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#1c1109]">
                  {sec.title}
                </h2>
              </div>
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#c88242]/30 select-none">
                {sec.number}
              </span>
            </div>

            {/* 3 Column Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {sec.items.map((item, i) => (
                <div
                  key={i}
                  className="group rounded-3xl overflow-hidden bg-[#faf7f2] border border-[#e8ded3] hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                >
                  <div className="relative h-60 sm:h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#1c1109] shadow-md">
                      {item.price}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-normal text-[#1c1109] group-hover:text-[#c88242] transition-colors mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6b5c54] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
