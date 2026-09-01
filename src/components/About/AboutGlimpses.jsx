import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function AboutGlimpses() {
  const glimpses = [
    { src: "/everbloom/interior-mural.png", alt: "Floral Rose Wall Mural", span: "md:col-span-2 md:row-span-2" },
    { src: "/everbloom/interior-wall-neon.png", alt: "Warm Ambient AC Lounge", span: "" },
    { src: "/everbloom/signature-coolers.jpg", alt: "Artisanal Berry Coolers", span: "" },
    { src: "/everbloom/outdoor-patio.jpg", alt: "Nature-Inspired Outdoor Patio", span: "md:col-span-2" },
    { src: "/pasta.jpg", alt: "Handcrafted Pasta", span: "" },
    { src: "/cheesecake.jpg", alt: "Blueberry Cheesecake", span: "" },
  ];

  return (
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
  );
}
