import { Coffee, Trees } from "lucide-react";

export default function AboutStory() {
  return (
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
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
  );
}
