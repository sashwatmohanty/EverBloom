import { useState } from "react";
import { trpc } from "@/providers/trpc";
import {
  Shield,
  Mail,
  Utensils,
  Plus,
  Trash2,
  CheckCircle,
  Clock,
  Sparkles,
  Image as ImageIcon,
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"messages" | "menu" | "gallery">("messages");

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[var(--color-cream)]">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-slate-dark)] flex items-center justify-center text-[var(--color-neon-light)] shadow-md">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-charcoal)]">
                  Everbloom Admin Dashboard
                </h1>
                <p className="text-xs text-[var(--color-muted-text)]">
                  Manage contact messages, menu delicacies &amp; cafe updates
                </p>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex bg-white p-1 rounded-2xl border border-gray-200 shadow-sm self-start sm:self-auto">
              <button
                onClick={() => setActiveTab("messages")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === "messages"
                    ? "bg-[var(--color-slate-dark)] text-white shadow-sm"
                    : "text-[var(--color-muted-text)] hover:text-[var(--color-charcoal)]"
                }`}
              >
                <Mail className="w-3.5 h-3.5" /> Customer Messages
              </button>

              <button
                onClick={() => setActiveTab("menu")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === "menu"
                    ? "bg-[var(--color-slate-dark)] text-white shadow-sm"
                    : "text-[var(--color-muted-text)] hover:text-[var(--color-charcoal)]"
                }`}
              >
                <Utensils className="w-3.5 h-3.5" /> Menu Manager
              </button>

              <button
                onClick={() => setActiveTab("gallery")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === "gallery"
                    ? "bg-[var(--color-slate-dark)] text-white shadow-sm"
                    : "text-[var(--color-muted-text)] hover:text-[var(--color-charcoal)]"
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" /> Photos &amp; Posts
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "messages" && <MessagesPanel />}
          {activeTab === "menu" && <MenuManagerPanel />}
          {activeTab === "gallery" && <GalleryPostsPanel />}
        </div>
      </section>
    </div>
  );
}

/* ========== 1. CUSTOMER MESSAGES INBOX ========== */
function MessagesPanel() {
  const utils = trpc.useUtils();
  const { data: messages, isLoading } = trpc.contact.list.useQuery();

  const deleteMutation = trpc.contact.delete.useMutation({
    onSuccess: () => utils.contact.list.invalidate(),
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
            Inbox Messages ({messages?.length || 0})
          </h2>
          <p className="text-xs text-[var(--color-muted-text)]">
            Inquiries and feedback submitted via the website contact form
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-36 bg-white rounded-2xl animate-pulse p-6" />
          ))}
        </div>
      ) : messages?.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-gray-200">
          <Mail className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="font-display text-lg font-bold text-[var(--color-charcoal)] mb-1">No Messages Yet</h3>
          <p className="text-xs text-[var(--color-muted-text)]">
            Customer inquiries submitted from the Contact page will appear here instantly.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {messages?.map((msg) => (
            <div
              key={msg.id}
              className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display text-base font-bold text-[var(--color-charcoal)]">
                      {msg.name}
                    </h3>
                    <a
                      href={`mailto:${msg.email}`}
                      className="text-xs text-[var(--color-slate-wall)] hover:underline"
                    >
                      {msg.email}
                    </a>
                  </div>
                  <span className="text-[11px] text-gray-400 flex items-center gap-1 shrink-0">
                    <Clock className="w-3 h-3" />
                    {msg.createdAt ? new Date(msg.createdAt).toLocaleDateString("en-IN", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }) : ""}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[var(--color-cream)] text-xs text-[var(--color-charcoal)] leading-relaxed mb-4">
                  {msg.message}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <a
                  href={`mailto:${msg.email}?subject=Response from Everbloom Café`}
                  className="text-xs font-semibold text-[var(--color-slate-dark)] hover:text-[var(--color-neon-pink)] inline-flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" /> Email Reply
                </a>

                <button
                  onClick={() => deleteMutation.mutate({ id: msg.id })}
                  disabled={deleteMutation.isPending}
                  className="p-2 rounded-xl text-red-500 hover:bg-red-50 transition-colors"
                  title="Delete message"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ========== 2. MENU ITEM MANAGER (POST & EDIT DISHES) ========== */
function MenuManagerPanel() {
  const utils = trpc.useUtils();
  const { data: menuItems } = trpc.menu.list.useQuery();

  const [form, setForm] = useState({
    name: "",
    category: "wraps",
    price: 220,
    description: "",
    image: "/everbloom/signature-coolers.jpg",
    featured: true,
  });

  const [showAddForm, setShowAddForm] = useState(false);

  const createMutation = trpc.menu.create.useMutation({
    onSuccess: () => {
      utils.menu.list.invalidate();
      setForm({
        name: "",
        category: "wraps",
        price: 220,
        description: "",
        image: "/everbloom/signature-coolers.jpg",
        featured: true,
      });
      setShowAddForm(false);
    },
  });

  const deleteMutation = trpc.menu.delete.useMutation({
    onSuccess: () => utils.menu.list.invalidate(),
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.price) return;
    // Store price in paise (INR * 100)
    createMutation.mutate({
      ...form,
      price: Number(form.price) * 100,
    });
  };

  const categories = [
    { key: "wraps", label: "Wraps & Shared Bites" },
    { key: "pizzas", label: "Pizzas & Burgers" },
    { key: "coolers", label: "Signature Coolers" },
    { key: "mains", label: "Pastas & Mains" },
    { key: "beverages", label: "Coffee & Frappes" },
    { key: "desserts", label: "Desserts & Bakery" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
            Menu Items &amp; Specialties ({menuItems?.length || 0})
          </h2>
          <p className="text-xs text-[var(--color-muted-text)]">
            Add new delicacies, update prices &amp; control featured menu items
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-neon-pink px-5 py-2.5 text-xs font-bold gap-2 self-start sm:self-auto shadow-md"
        >
          <Plus className="w-4 h-4" /> {showAddForm ? "Close Form" : "Add New Dish / Drink"}
        </button>
      </div>

      {/* Add Item Modal / Form */}
      {showAddForm && (
        <form
          onSubmit={handleCreate}
          className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-lg animate-fade-in-up"
        >
          <h3 className="font-display text-lg font-bold text-[var(--color-charcoal)] mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--color-neon-pink)]" /> Create New Menu Special
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-xs font-semibold text-[var(--color-charcoal)] mb-1 block">Item Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Everbloom Rose Cooler"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-cream)] border border-gray-200 text-xs text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-neon-pink)]"
                required
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[var(--color-charcoal)] mb-1 block">Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-cream)] border border-gray-200 text-xs text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-neon-pink)]"
              >
                {categories.map((c) => (
                  <option key={c.key} value={c.key}>{c.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-[var(--color-charcoal)] mb-1 block">Price in ₹ (INR)</label>
              <input
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
                placeholder="e.g. 240"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-cream)] border border-gray-200 text-xs text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-neon-pink)]"
                required
                min={10}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs font-semibold text-[var(--color-charcoal)] mb-1 block">Image URL / Path</label>
              <input
                type="text"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                placeholder="/everbloom/signature-coolers.jpg or https://..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-cream)] border border-gray-200 text-xs text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-neon-pink)]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[var(--color-charcoal)] mb-1 block">Short Description</label>
              <input
                type="text"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Key ingredients, taste profile, and preparation style..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-cream)] border border-gray-200 text-xs text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-neon-pink)]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <label className="flex items-center gap-2 text-xs font-semibold text-[var(--color-charcoal)] cursor-pointer">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                className="rounded text-[var(--color-neon-pink)] focus:ring-[var(--color-neon-pink)]"
              />
              Feature this item on the Home page
            </label>

            <button
              type="submit"
              disabled={createMutation.isPending}
              className="btn-neon-pink px-6 py-2.5 text-xs font-bold shadow-md disabled:opacity-50"
            >
              {createMutation.isPending ? "Adding Item..." : "Save to Menu"}
            </button>
          </div>
        </form>
      )}

      {/* Menu Items Table */}
      <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 border-b border-gray-200 text-[var(--color-charcoal)] font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-6 py-4">Item</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Featured</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {menuItems?.map((item) => {
                const displayPrice = item.price > 1000 ? Math.round(item.price / 100) : item.price;
                return (
                  <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img
                        src={item.image || "/everbloom/signature-coolers.jpg"}
                        alt={item.name}
                        className="w-10 h-10 rounded-xl object-cover"
                      />
                      <div>
                        <p className="font-bold text-[var(--color-charcoal)]">{item.name}</p>
                        <p className="text-[11px] text-[var(--color-muted-text)] line-clamp-1">{item.description}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 capitalize text-[var(--color-muted-text)] font-medium">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 font-bold text-[var(--color-charcoal)]">
                      ₹{displayPrice}
                    </td>
                    <td className="px-6 py-4">
                      {item.featured ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                          <CheckCircle className="w-3.5 h-3.5" /> Yes
                        </span>
                      ) : (
                        <span className="text-[11px] text-gray-400">No</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => deleteMutation.mutate({ id: item.id })}
                        disabled={deleteMutation.isPending}
                        className="p-2 rounded-xl text-red-500 hover:bg-red-50 transition-colors"
                        title="Delete item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ========== 3. GALLERY POSTS MANAGER ========== */
function GalleryPostsPanel() {
  const samplePosts = [
    { title: "Mural Centerpiece", src: "/everbloom/interior-mural.png", category: "Interior Art" },
    { title: "Neon Wall Sign", src: "/everbloom/interior-wall-neon.png", category: "AC Lounge" },
    { title: "Garden Patio", src: "/everbloom/outdoor-patio.jpg", category: "Outdoor Setup" },
    { title: "Signature Coolers", src: "/everbloom/signature-coolers.jpg", category: "Beverages" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-xl font-bold text-[var(--color-charcoal)]">
            Active Gallery Highlights
          </h2>
          <p className="text-xs text-[var(--color-muted-text)]">
            Visual showcases currently featured across the website
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {samplePosts.map((post, i) => (
          <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm group">
            <div className="relative h-44 overflow-hidden">
              <img
                src={post.src}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-semibold text-white">
                {post.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-display text-sm font-bold text-[var(--color-charcoal)]">{post.title}</h3>
              <p className="text-[11px] text-emerald-600 font-semibold mt-1">Live on Website</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
