import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryCategories = [
  { key: "all", label: "All Photos" },
  { key: "interior", label: "Interior & Wall Art" },
  { key: "outdoor", label: "Outdoor Patio" },
  { key: "food", label: "Food & Brews" },
];

const galleryImages = [
  {
    src: "/everbloom/interior-mural.png",
    alt: "Iconic Blooming Roses Floral Wall Mural",
    category: "interior",
    desc: "Our hand-painted floral centerpiece with plush sage seating.",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "/everbloom/interior-wall-neon.png",
    alt: "Warm Ambient AC Indoor Lounge",
    category: "interior",
    desc: "Cozy air-conditioned lounge with warm downlighting and acoustic music.",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "/everbloom/outdoor-patio.jpg",
    alt: "Nature-Inspired Outdoor Garden Patio",
    category: "outdoor",
    desc: "Lush tropical plants and fairy string lights for evening chill.",
    span: "col-span-1 md:col-span-2",
  },
  {
    src: "/everbloom/signature-coolers.jpg",
    alt: "Signature Everbloom Berry & Citrus Coolers",
    category: "food",
    desc: "Refreshing handcrafted mocktails with fresh berries and mint.",
    span: "col-span-1 md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800",
    alt: "Wood-Fired Margherita Pizza",
    category: "food",
    desc: "Crispy thin crust with bubbling melted mozzarella and fresh basil.",
    span: "",
  },
  {
    src: "/pasta.jpg",
    alt: "Artisanal Aglio Olio Pasta",
    category: "food",
    desc: "Al dente spaghetti tossed in olive oil, garlic, and chili flakes.",
    span: "",
  },
  {
    src: "/cheesecake.jpg",
    alt: "Blueberry Baked Cheesecake",
    category: "food",
    desc: "Decadent cheesecake crowned with wild mountain blueberry compote.",
    span: "",
  },
  {
    src: "/tacos.jpg",
    alt: "Loaded Wraps & Crispy Bites",
    category: "food",
    desc: "Spiced peri-peri chicken and paneer wraps with house dips.",
    span: "",
  },
  {
    src: "/iced-latte.jpg",
    alt: "Hazelnut Iced Frappe",
    category: "food",
    desc: "Rich espresso blended with hazelnut and creamy froth.",
    span: "",
  },
  {
    src: "/everbloom/logo.png",
    alt: "The Everbloom Artisanal Coffee Emblem",
    category: "interior",
    desc: "The symbol of good food, artisanal coffee & blooming moods.",
    span: "",
  },
];

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImg, setLightboxImg] = useState(null);

  const displayedImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section className="section-padding py-16 lg:py-24 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeFilter === cat.key
                  ? "bg-[#2b1810] text-white shadow-md"
                  : "bg-white text-[#4a3b32] hover:bg-[#f5eee8] border border-[#e8ded3]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[240px]">
          {displayedImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightboxImg(img)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-md bg-[#180e09] border border-[#e8ded3] ${
                img.span || ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white mb-1">
                    {img.alt}
                  </h3>
                  {img.desc && (
                    <p className="text-xs text-white/75 line-clamp-2">{img.desc}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full bg-[#180e09] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={lightboxImg.src}
                alt={lightboxImg.alt}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-[#24150e] text-white">
              <h3 className="font-display text-xl font-bold mb-1">{lightboxImg.alt}</h3>
              {lightboxImg.desc && <p className="text-xs sm:text-sm text-white/70">{lightboxImg.desc}</p>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
