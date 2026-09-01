import { Link } from "react-router";

export default function FeaturedMenuSection() {
  const dishes = [
    {
      name: "Crispy Peri-Peri Wrap",
      desc: "Tender spiced chicken, crisp lettuce, and house peri-peri drizzle in warm flatbread.",
      price: "₹240",
      image: "/tacos.jpg",
    },
    {
      name: "Everbloom Berry Fizz",
      desc: "Muddled forest berries, fresh mint, lime, and crushed sparkling ice.",
      price: "₹190",
      image: "/everbloom/signature-coolers.jpg",
    },
    {
      name: "Wood-Fired Margherita",
      desc: "San Marzano tomato base, fresh basil leaves, and bubbling melted mozzarella.",
      price: "₹290",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Classic Aglio Olio Peperoncino",
      desc: "Spaghetti tossed in extra virgin olive oil, golden toasted garlic, and chili flakes.",
      price: "₹260",
      image: "/pasta.jpg",
    },
    {
      name: "Blueberry Baked Cheesecake",
      desc: "New York style cheesecake topped with wild mountain blueberry compote.",
      price: "₹240",
      image: "/cheesecake.jpg",
    },
    {
      name: "Signature Hazelnut Frappe",
      desc: "Double espresso blended with roasted hazelnut, cold milk, and rich micro-foam.",
      price: "₹210",
      image: "/iced-latte.jpg",
    },
  ];

  return (
    <section className="section-padding py-20 lg:py-28 bg-white text-[#1c1109] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#c88242] uppercase font-bold block mb-3">
            CULINARY CRAFT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1c1109] mb-4">
            Signature Dishes
          </h2>
          <div className="w-16 h-[2px] bg-[#d49748] mx-auto" />
        </div>

        {/* 6 Cards 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {dishes.map((dish, i) => (
            <div
              key={i}
              className="group rounded-3xl overflow-hidden bg-[#faf7f2] border border-[#e8ded3] hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {dish.price && (
                  <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#1c1109] shadow-md">
                    {dish.price}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-normal text-[#1c1109] group-hover:text-[#c88242] transition-colors mb-2">
                  {dish.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#6b5c54] font-light leading-relaxed">
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1c1109] hover:bg-[#2e1c10] text-white text-xs font-bold tracking-[0.14em] uppercase transition-all shadow-md"
          >
            VIEW FULL MENU
          </Link>
        </div>
      </div>
    </section>
  );
}
