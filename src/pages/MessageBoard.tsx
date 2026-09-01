import { useState } from "react";
import { trpc } from "@/providers/trpc";
import { MessageSquare, Send, User, Clock } from "lucide-react";

export default function MessageBoard() {
  const [form, setForm] = useState({ name: "", email: "", content: "" });
  const utils = trpc.useUtils();

  const { data: messages, isLoading } = trpc.message.list.useQuery();

  const createMutation = trpc.message.create.useMutation({
    onSuccess: () => {
      utils.message.list.invalidate();
      setForm({ name: "", email: "", content: "" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.content) return;
    createMutation.mutate(form);
  };

  const formatDate = (date: Date | string | null) => {
    if (!date) return "";
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[30vh] min-h-[220px] overflow-hidden bg-[var(--color-charcoal)]">
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.2em] uppercase mb-3">Community</p>
            <h1 className="font-display text-5xl sm:text-6xl text-white">Message Board</h1>
            <p className="text-white/60 mt-3 text-sm max-w-md mx-auto">Share your thoughts, feedback, or just say hello. No login required!</p>
          </div>
        </div>
      </section>

      <section className="section-padding py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Post Form */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm mb-10">
            <h2 className="font-display text-xl text-[var(--color-chocolate)] mb-5 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" /> Leave a Message
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-chocolate)]/10 bg-[var(--color-cream)] text-[var(--color-chocolate)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50"
                  required
                />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-chocolate)]/10 bg-[var(--color-cream)] text-[var(--color-chocolate)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50"
                  required
                />
              </div>
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                placeholder="What's on your mind?"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-[var(--color-chocolate)]/10 bg-[var(--color-cream)] text-[var(--color-chocolate)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50 resize-none"
                required
              />
              <button
                type="submit"
                disabled={createMutation.isPending}
                className="btn-primary self-start disabled:opacity-50"
              >
                <Send className="w-4 h-4 mr-2" />
                {createMutation.isPending ? "Posting..." : "Post Message"}
              </button>
            </form>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-4">
            {isLoading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-3" />
                  <div className="h-3 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-3/4" />
                </div>
              ))
            ) : messages?.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquare className="w-12 h-12 text-[var(--color-dusty-rose)] mx-auto mb-3" />
                <p className="text-[var(--color-dusty-rose)]">No messages yet. Be the first to post!</p>
              </div>
            ) : (
              messages?.map((msg) => (
                <div key={msg.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-chocolate)]/10 flex items-center justify-center text-[var(--color-chocolate)]">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-[var(--color-chocolate)] text-sm">{msg.name}</p>
                        <p className="text-xs text-[var(--color-dusty-rose)]">{msg.email}</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-[var(--color-dusty-rose)] shrink-0">
                      <Clock className="w-3 h-3" /> {formatDate(msg.createdAt)}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-chocolate)] leading-relaxed pl-[52px]">
                    {msg.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
