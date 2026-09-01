import { useState } from "react";
import { Calendar, Clock, Users, Phone, User, FileText, CheckCircle, ArrowRight } from "lucide-react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    notes: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time) return;

    setConfirmed(true);
    const ownerPhone = "919437164578";
    const message = `New Table Booking Request!%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ADate: ${encodeURIComponent(form.date)}%0ATime: ${encodeURIComponent(form.time)}%0AGuests: ${encodeURIComponent(form.guests)}%0ANotes: ${encodeURIComponent(form.notes || "None")}`;
    const whatsappUrl = `https://wa.me/${ownerPhone}?text=${message}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1500);

    setForm({ name: "", phone: "", date: "", time: "", guests: 2, notes: "" });
  };

  const timeSlots = [
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00",
    "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00", "22:30",
  ];

  return (
    <section className="section-padding py-16 lg:py-24">
      <div className="max-w-3xl mx-auto">
        {confirmed ? (
          <div className="bg-white rounded-3xl p-12 shadow-sm text-center border border-[#e8ded3]">
            <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="font-display text-3xl text-[#2b1810] font-bold mb-3">Reservation Submitted!</h2>
            <p className="text-xs sm:text-sm text-[#6b5c54] mb-8 max-w-md mx-auto leading-relaxed">
              Thank you for choosing Everbloom Café. We've received your reservation request and will confirm shortly via WhatsApp.
            </p>
            <button onClick={() => setConfirmed(false)} className="btn-caramel px-6 py-3 text-xs font-bold gap-2">
              Make Another Reservation <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-md border border-[#e8ded3]">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl sm:text-3xl text-[#2b1810] font-bold mb-2">Reserve Your Experience</h2>
              <p className="text-xs sm:text-sm text-[#6b5c54]">Average cost: ₹200–₹400 per person · Air Conditioned &amp; Garden Patio</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-[#2b1810] mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#c88242]" /> Full Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-[#e8ded3] bg-[#faf7f2] text-xs text-[#2b1810] focus:outline-none focus:border-[#c88242]"
                    placeholder="e.g. Aditi Patnaik"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#2b1810] mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#c88242]" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-[#e8ded3] bg-[#faf7f2] text-xs text-[#2b1810] focus:outline-none focus:border-[#c88242]"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="text-xs font-bold text-[#2b1810] mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#c88242]" /> Date
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 rounded-2xl border border-[#e8ded3] bg-[#faf7f2] text-xs text-[#2b1810] focus:outline-none focus:border-[#c88242]"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#2b1810] mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#c88242]" /> Time
                  </label>
                  <select
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-[#e8ded3] bg-[#faf7f2] text-xs text-[#2b1810] focus:outline-none focus:border-[#c88242]"
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-[#2b1810] mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#c88242]" /> Guests
                  </label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                    className="w-full px-4 py-3 rounded-2xl border border-[#e8ded3] bg-[#faf7f2] text-xs text-[#2b1810] focus:outline-none focus:border-[#c88242]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#2b1810] mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#c88242]" /> Special Requests (Optional)
                </label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-2xl border border-[#e8ded3] bg-[#faf7f2] text-xs text-[#2b1810] focus:outline-none focus:border-[#c88242] resize-none"
                  placeholder="Occasion (birthday/anniversary), indoor AC vs outdoor patio preference..."
                />
              </div>

              <button
                type="submit"
                className="btn-caramel py-3.5 text-xs font-bold gap-2 shadow-lg mt-2"
              >
                Confirm Reservation via WhatsApp
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
