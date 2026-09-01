import { useState } from "react";
import { trpc } from "@/providers/trpc";
import { MapPin, Phone, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    submitMutation.mutate(form);
  };

  return (
    <div>
      {/* Hero Header extending to top under Navbar */}
      <section className="relative min-h-[42vh] sm:min-h-[46vh] overflow-hidden bg-[#120a07] flex items-center justify-center pt-32 sm:pt-36 pb-16 sm:pb-20">
        <img
          src="/everbloom/interior-wall-neon.png"
          alt="Contact Everbloom"
          className="absolute inset-0 w-full h-full object-cover filter brightness-40 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#120a07]/85 via-[#20120b]/60 to-[#120a07]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(18,10,7,0.85)_80%,#120a07_100%)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-[#c88242]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <span className="badge-tag bg-[#c88242]/25 text-[#e29b5a] mb-3">
            We're Here For You
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold mb-3">
            Visit &amp; Contact Us
          </h1>
          <p className="text-white/80 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
            Stop by for artisanal coffee, delicious bites and refreshing coolers in Kalinga Nagar, Bhubaneswar.
          </p>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="section-padding py-16 lg:py-24 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="badge-tag bg-[#2b1810]/10 text-[#2b1810] mb-3">
                Location &amp; Timings
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#2b1810] mb-6">
                Come Hangout With Us
              </h2>

              <div className="flex flex-col gap-5 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4 p-5 rounded-3xl glass-card border border-[#e8ded3]">
                  <div className="w-11 h-11 rounded-2xl bg-[#c88242]/15 flex items-center justify-center text-[#c88242] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-[#2b1810] mb-1">Our Address</h3>
                    <p className="text-xs text-[#6b5c54] leading-relaxed">
                      K-8/796, Near Sum Ultimate Medicare, K8 Kalinga Nagar, Bhubaneswar, Odisha 751029
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4 p-5 rounded-3xl glass-card border border-[#e8ded3]">
                  <div className="w-11 h-11 rounded-2xl bg-[#c88242]/15 flex items-center justify-center text-[#c88242] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-[#2b1810] mb-1">Phone / WhatsApp</h3>
                    <p className="text-xs text-[#6b5c54] mb-2">Available during café hours</p>
                    <a
                      href="tel:09437164578"
                      className="text-sm font-bold text-[#2b1810] hover:text-[#c88242] transition-colors inline-block mr-4"
                    >
                      +91 94371 64578
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-5 rounded-3xl glass-card border border-[#e8ded3]">
                  <div className="w-11 h-11 rounded-2xl bg-[#c88242]/15 flex items-center justify-center text-[#c88242] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-[#2b1810] mb-1">Operating Hours</h3>
                    <p className="text-xs font-bold text-emerald-700">Open 7 Days a Week</p>
                    <p className="text-xs text-[#6b5c54] mt-0.5">1:00 PM – 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Actions */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="https://wa.me/919437164578?text=Hi%20Everbloom%20Café%2C%20I%20have%20an%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-espresso py-3.5 text-xs font-bold gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#e29b5a]" /> WhatsApp Chat
              </a>

              <a
                href="https://maps.google.com/?q=Everbloom+Kalinga+Nagar+Bhubaneswar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-caramel py-3.5 text-xs font-bold gap-2 shadow-md"
              >
                <MapPin className="w-4 h-4" /> Google Maps
              </a>
            </div>
          </div>

          {/* Right Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#e8ded3] flex flex-col justify-between">
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
                    disabled={submitMutation.isPending}
                    className="btn-caramel py-3.5 text-xs font-bold gap-2 shadow-lg disabled:opacity-50 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    {submitMutation.isPending ? "Sending..." : "Submit Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

