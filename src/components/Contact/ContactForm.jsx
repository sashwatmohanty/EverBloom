import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setIsSending(true);
    const existing = JSON.parse(localStorage.getItem("everbloom_contact_messages") || "[]");
    const newMsg = {
      id: "msg_" + Date.now(),
      name: form.name,
      email: form.email,
      message: form.message,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("everbloom_contact_messages", JSON.stringify([newMsg, ...existing]));

    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }, 400);
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#e8ded3] flex flex-col justify-between">
      <div>
        <span className="badge-tag bg-[#c88242]/15 text-[#c88242] mb-2">
          Send a Note
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2b1810] mb-2">
          Leave a Message
        </h3>
        <p className="text-xs text-[#6b5c54] mb-8">
          Planning a party, group gathering, or want to share feedback? Drop us a note below.
        </p>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="font-display text-2xl font-bold text-[#2b1810] mb-2">
              Message Sent!
            </h4>
            <p className="text-xs sm:text-sm text-[#6b5c54] max-w-sm mb-6">
              Thank you for reaching out to Everbloom Café. We have received your note and our team will get back to you shortly!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-espresso px-6 py-2.5 text-xs font-bold"
            >
              Send Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-bold text-[#2b1810] mb-1.5 block">Your Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 py-3 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] text-xs text-[#2b1810] focus:outline-none focus:border-[#c88242]"
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#2b1810] mb-1.5 block">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="e.g. rahul@gmail.com"
                className="w-full px-4 py-3 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] text-xs text-[#2b1810] focus:outline-none focus:border-[#c88242]"
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#2b1810] mb-1.5 block">Your Message / Query</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                placeholder="Tell us what's on your mind (e.g. table reservation inquiry, birthday party, feedback)..."
                className="w-full px-4 py-3 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] text-xs text-[#2b1810] focus:outline-none focus:border-[#c88242] resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="btn-caramel py-3.5 text-xs font-bold gap-2 shadow-lg disabled:opacity-50 mt-2"
            >
              <Send className="w-4 h-4" />
              {isSending ? "Sending..." : "Submit Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
