import { Link } from "react-router";
import { ArrowRight, Camera, Coffee, Sparkles, Heart, Trees, Award } from "lucide-react";

export default function About() {
  const glimpses = [
    { src: "/everbloom/interior-mural.png", alt: "Floral Rose Wall Mural", span: "md:col-span-2 md:row-span-2" },
    { src: "/everbloom/interior-wall-neon.png", alt: "Warm Ambient AC Lounge", span: "" },
    { src: "/everbloom/signature-coolers.jpg", alt: "Artisanal Berry Coolers", span: "" },
    { src: "/everbloom/outdoor-patio.jpg", alt: "Nature-Inspired Outdoor Patio", span: "md:col-span-2" },
    { src: "/pasta.jpg", alt: "Handcrafted Pasta", span: "" },
    { src: "/cheesecake.jpg", alt: "Blueberry Cheesecake", span: "" },
  ];

  return (
    <div>
      {/* Hero Header extending to top under Navbar */}
      <section className="relative min-h-[46vh] sm:min-h-[50vh] overflow-hidden bg-[#120a07] flex items-center justify-center pt-32 sm:pt-36 pb-16 sm:pb-20">
        <img
          src="/everbloom/interior-wall-neon.png"
          alt="Everbloom Café Interior"
          className="absolute inset-0 w-full h-full object-cover filter brightness-40 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#120a07]/85 via-[#20120b]/60 to-[#120a07]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(18,10,7,0.85)_80%,#120a07_100%)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-[#c88242]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="badge-tag bg-[#c88242]/25 text-[#e29b5a] mb-3">
            Our Journey &amp; Passion
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold mb-3">
            Welcome to <span className="text-[#e29b5a] italic font-serif">Everbloom</span>
          </h1>
          <p className="text-white/80 text-xs sm:text-sm md:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Where good food and good mood bloom together in Kalinga Nagar, Bhubaneswar.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding py-20 lg:py-28 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2b1810] mb-6">
              An Artisanal Sanctuary in <span className="text-[#c88242]">Bhubaneswar</span>
            </h2>
            <p className="text-[#6b5c54] leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
              Everbloom Café was envisioned as a comforting sanctuary where busy city life slows down. Nestled near Sum Ultimate Medicare in Kalinga Nagar, we blend the rich aroma of freshly roasted coffee with delicious gourmet bites and nature-inspired surroundings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div className="p-8 rounded-3xl glass-card border border-[#e8ded3]">
              <div className="w-12 h-12 rounded-2xl bg-[#c88242]/15 flex items-center justify-center text-[#c88242] mb-5">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#2b1810] mb-3">Artisanal Brews &amp; Gourmet Bites</h3>
              <p className="text-sm text-[#6b5c54] leading-relaxed mb-3">
                From handcrafted espresso lattes and signature iced coolers to loaded peri-peri wraps, thin-crust wood-fired pizzas, and decadent cheesecake slices — each dish is prepared with culinary passion and fresh ingredients.
              </p>
              <p className="text-sm text-[#6b5c54] leading-relaxed">
                We take pride in offering gourmet quality at pocket-friendly prices (₹200–₹400 / person), making premium cafe experiences accessible to students, professionals, and families.
              </p>
            </div>

            <div className="p-8 rounded-3xl glass-card border border-[#e8ded3]">
              <div className="w-12 h-12 rounded-2xl bg-[#4d7057]/15 flex items-center justify-center text-[#4d7057] mb-5">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#2b1810] mb-3">Two Distinct Vibe Zones</h3>
              <p className="text-sm text-[#6b5c54] leading-relaxed mb-3">
                <strong>Indoor AC Lounge:</strong> Step inside to experience cozy ambient downlighting, comfortable seating, and our iconic hand-painted floral rose lady mural wall.
              </p>
              <p className="text-sm text-[#6b5c54] leading-relaxed">
                <strong>Nature Garden Patio:</strong> Prefer open air? Our garden setup with warm fairy string lights and lush greenery creates the ultimate relaxing vibe for evening catch-ups and pet dates.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {[
              { value: "4.7 ★", label: "169+ Google Reviews" },
              { value: "50+", label: "Menu Delicacies" },
              { value: "₹200–400", label: "Pocket-Friendly Cost" },
              { value: "100%", label: "Cozy & Welcoming Vibes" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-3xl bg-white shadow-sm border border-[#e8ded3]">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#2b1810]">{stat.value}</p>
                <p className="text-xs text-[#6b5c54] mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="section-padding py-20 lg:py-28 bg-[#180e09] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="badge-tag bg-[#c88242]/20 text-[#e29b5a] mb-3">
              Glimpses
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Inside Everbloom Café
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
            {glimpses.map((img, i) => (
              <div
                key={i}
                className={`relative rounded-3xl overflow-hidden group shadow-lg ${img.span || ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-xs sm:text-sm font-bold">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-caramel px-8 py-3.5 text-sm font-bold inline-flex items-center gap-2">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

