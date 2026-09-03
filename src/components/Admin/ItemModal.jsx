import { useState, useEffect } from "react";
import { X, Upload, Sparkles, Image as ImageIcon, AlertCircle } from "lucide-react";

export const PRESET_CATEGORIES = [
  { name: "Starters & Wraps", sectionNumber: "01", eyebrow: "BEGIN YOUR JOURNEY" },
  { name: "Pizzas & Burgers", sectionNumber: "02", eyebrow: "SIGNATURE CREATIONS" },
  { name: "Pastas & Mains", sectionNumber: "03", eyebrow: "ITALIAN CLASSICS" },
  { name: "Signature Coolers", sectionNumber: "04", eyebrow: "HOUSE REFRESHERS" },
  { name: "Coffee & Desserts", sectionNumber: "05", eyebrow: "SWEET FINALE & BREWS" },
];

export default function ItemModal({ isOpen, onClose, onSave, item = null, mode = "create" }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 200,
    category: "Starters & Wraps",
    sectionNumber: "01",
    sectionEyebrow: "BEGIN YOUR JOURNEY",
    image: "",
    isVegetarian: true,
    isAvailable: true,
    isSpecial: false,
    tags: "",
  });

  const [imagePreviewError, setImagePreviewError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (item && mode === "edit") {
      setFormData({
        name: item.name || "",
        description: item.description || item.desc || "",
        price: item.price || 0,
        category: item.category || "Starters & Wraps",
        sectionNumber: item.sectionNumber || "01",
        sectionEyebrow: item.sectionEyebrow || "CHEF RECOMMENDATION",
        image: item.image || "",
        isVegetarian: item.isVegetarian !== false,
        isAvailable: item.isAvailable !== false,
        isSpecial: Boolean(item.isSpecial),
        tags: Array.isArray(item.tags) ? item.tags.join(", ") : "",
      });
      setImagePreviewError(false);
    } else {
      setFormData({
        name: "",
        description: "",
        price: 220,
        category: "Starters & Wraps",
        sectionNumber: "01",
        sectionEyebrow: "BEGIN YOUR JOURNEY",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
        isVegetarian: true,
        isAvailable: true,
        isSpecial: false,
        tags: "",
      });
      setImagePreviewError(false);
    }
  }, [item, mode, isOpen]);

  if (!isOpen) return null;

  const handleCategoryChange = (e) => {
    const catName = e.target.value;
    const preset = PRESET_CATEGORIES.find((c) => c.name === catName);
    setFormData((prev) => ({
      ...prev,
      category: catName,
      sectionNumber: preset ? preset.sectionNumber : prev.sectionNumber,
      sectionEyebrow: preset ? preset.eyebrow : prev.sectionEyebrow,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg("Dish name is required.");
      return;
    }
    if (Number(formData.price) < 0 || isNaN(Number(formData.price))) {
      setErrorMsg("Please enter a valid price.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const payload = {
        ...formData,
        price: Number(formData.price),
        tags: formData.tags
          ? formData.tags
              .split(",")
              .map((t) => t.trim())
              .filter(Boolean)
          : [],
      };

      await onSave(payload, item?._id || item?.id);
      onClose();
    } catch (err) {
      setErrorMsg(err.message || "Failed to save dish.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#e8ded3] animate-scaleUp my-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#e8ded3] mb-6">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#c88242] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {mode === "create" ? "NEW MENU DISH" : "EDIT MENU DISH"}
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#1c1109] mt-0.5">
              {mode === "create" ? "Add Dish to Café Menu" : "Update Dish Details"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#faf7f2] text-[#6b5c54] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* Dish Name */}
          <div>
            <label className="font-bold text-[#2b1810] mb-1.5 block">Dish Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] text-[#2b1810] focus:outline-none focus:border-[#c88242]"
              placeholder="e.g. Artisanal Burrata Flatbread"
              required
            />
          </div>

          {/* Price & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-[#2b1810] mb-1.5 block">
                Price (₹ INR) *
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-[#c88242]">
                  ₹
                </span>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full pl-8 pr-4 py-2.5 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] text-[#2b1810] font-bold focus:outline-none focus:border-[#c88242]"
                  min={0}
                  step="1"
                  required
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-[#2b1810] mb-1.5 block">Category *</label>
              <select
                value={formData.category}
                onChange={handleCategoryChange}
                className="w-full px-4 py-2.5 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] text-[#2b1810] font-semibold focus:outline-none focus:border-[#c88242]"
              >
                {PRESET_CATEGORIES.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="font-bold text-[#2b1810]">Appetizing Description *</label>
              <span className="text-[10px] text-[#6b5c54]">
                {formData.description.length}/300
              </span>
            </div>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              maxLength={300}
              className="w-full px-4 py-2.5 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] text-[#2b1810] focus:outline-none focus:border-[#c88242] resize-none"
              placeholder="Freshly toasted sourdough topped with seasoned smashed avocado, cherry tomatoes, and microgreens..."
              required
            />
          </div>

          {/* Image URL & Live Preview */}
          <div>
            <label className="font-bold text-[#2b1810] mb-1.5 block">Image URL / Path *</label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => {
                setFormData({ ...formData, image: e.target.value });
                setImagePreviewError(false);
              }}
              className="w-full px-4 py-2.5 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] text-[#2b1810] focus:outline-none focus:border-[#c88242]"
              placeholder="https://images.unsplash.com/... or /cheesecake.jpg"
              required
            />

            {/* Live Preview Thumbnail */}
            {formData.image && (
              <div className="mt-2.5 flex items-center gap-3 p-2.5 rounded-2xl bg-[#faf7f2] border border-[#e8ded3]">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-[#e8ded3]">
                  {imagePreviewError ? (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                  ) : (
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={() => setImagePreviewError(true)}
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-[#1c1109] truncate">Image Preview</p>
                  <p className="text-[10px] text-[#6b5c54] truncate">
                    {imagePreviewError ? "Image failed to load. Please check URL." : "Loaded successfully"}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Tags */}
          <div>
            <label className="font-bold text-[#2b1810] mb-1.5 block">
              Highlight Tags <span className="font-normal text-[#6b5c54]">(comma separated)</span>
            </label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              className="w-full px-4 py-2.5 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] text-[#2b1810] focus:outline-none focus:border-[#c88242]"
              placeholder="Chef's Special, Bestseller, Spicy, New"
            />
          </div>

          {/* Toggles: Veg, Available, Special */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <label className="flex items-center gap-2 p-3 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] cursor-pointer hover:border-[#c88242] transition-colors">
              <input
                type="checkbox"
                checked={formData.isVegetarian}
                onChange={(e) => setFormData({ ...formData, isVegetarian: e.target.checked })}
                className="w-4 h-4 rounded accent-[#c88242]"
              />
              <span className="font-bold text-[#2b1810]">Vegetarian</span>
            </label>

            <label className="flex items-center gap-2 p-3 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] cursor-pointer hover:border-[#c88242] transition-colors">
              <input
                type="checkbox"
                checked={formData.isAvailable}
                onChange={(e) => setFormData({ ...formData, isAvailable: e.target.checked })}
                className="w-4 h-4 rounded accent-[#c88242]"
              />
              <span className="font-bold text-[#2b1810]">In Stock</span>
            </label>

            <label className="flex items-center gap-2 p-3 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] cursor-pointer hover:border-[#c88242] transition-colors">
              <input
                type="checkbox"
                checked={formData.isSpecial}
                onChange={(e) => setFormData({ ...formData, isSpecial: e.target.checked })}
                className="w-4 h-4 rounded accent-[#c88242]"
              />
              <span className="font-bold text-[#2b1810]">Featured</span>
            </label>
          </div>

          {/* Actions */}
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#e8ded3]">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-[#e8ded3] font-bold text-[#6b5c54] hover:bg-[#faf7f2] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-caramel px-6 py-2.5 font-bold shadow-md disabled:opacity-50"
            >
              {isSubmitting ? "Saving..." : mode === "create" ? "Add to Menu" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
