import { useState } from "react";
import { trpc } from "@/providers/trpc";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router";
import { Calendar, Clock, Users, Phone, User, FileText, CheckCircle, ArrowRight } from "lucide-react";

export default function Booking() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    notes: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const bookingMutation = trpc.booking.create.useMutation({
    onSuccess: () => {
      setConfirmed(true);
      // WhatsApp Redirection
      const ownerPhone = "918018234567"; // Replace with actual owner number
      const message = `New Booking Alert!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ADate: ${form.date}%0ATime: ${form.time}%0AGuests: ${form.guests}%0ANotes: ${form.notes || "None"}`;
      const whatsappUrl = `https://wa.me/${ownerPhone}?text=${message}`;
      
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 2000);
      
      setForm({ name: "", phone: "", date: "", time: "", guests: 2, notes: "" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    if (!form.name || !form.phone || !form.date || !form.time) return;
    bookingMutation.mutate(form);
  };

  if (!isAuthenticated) {
    return (
      <div className="pt-32 min-h-[70vh] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-10 shadow-sm text-center max-w-md">
          <h2 className="font-display text-3xl text-[var(--color-chocolate)] mb-4">Sign in to Book</h2>
          <p className="text-[var(--color-dusty-rose)] mb-8">
            Please sign in or create an account to make a table reservation.
          </p>
          <Link to="/login" className="btn-primary w-full">Sign In / Register</Link>
        </div>
      </div>
    );
  }

  const timeSlots = [
    "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00",
    "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
    "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00",
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[35vh] min-h-[250px] overflow-hidden">
        <img src="/rooftop.jpg" alt="Book a table" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <p className="text-[var(--color-gold)] text-xs tracking-[0.2em] uppercase mb-3">Reservations</p>
            <h1 className="font-display text-5xl sm:text-6xl text-white">Book a Table</h1>
          </div>
        </div>
      </section>

      <section className="section-padding py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          {confirmed ? (
            <div className="bg-white rounded-3xl p-12 shadow-sm text-center">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h2 className="font-display text-3xl text-[var(--color-chocolate)] mb-3">Reservation Confirmed!</h2>
              <p className="text-[var(--color-dusty-rose)] mb-8 max-w-md mx-auto">
                Thank you for choosing Demo Restaurant. We've received your reservation request and will confirm shortly via SMS.
              </p>
              <button onClick={() => setConfirmed(false)} className="btn-primary">
                Make Another Reservation <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl text-[var(--color-chocolate)] mb-2">Reserve Your Experience</h2>
                <p className="text-sm text-[var(--color-dusty-rose)]">Average cost: ₹1,200–₹1,500 for two</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-[var(--color-chocolate)] mb-2 flex items-center gap-2">
                      <User className="w-4 h-4" /> Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-chocolate)]/10 bg-[var(--color-cream)] text-[var(--color-chocolate)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[var(--color-chocolate)] mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-chocolate)]/10 bg-[var(--color-cream)] text-[var(--color-chocolate)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="text-sm font-medium text-[var(--color-chocolate)] mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Date
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-chocolate)]/10 bg-[var(--color-cream)] text-[var(--color-chocolate)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[var(--color-chocolate)] mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Time
                    </label>
                    <select
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-chocolate)]/10 bg-[var(--color-cream)] text-[var(--color-chocolate)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50"
                      required
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[var(--color-chocolate)] mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" /> Guests
                    </label>
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-chocolate)]/10 bg-[var(--color-cream)] text-[var(--color-chocolate)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-[var(--color-chocolate)] mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Special Requests (Optional)
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-chocolate)]/10 bg-[var(--color-cream)] text-[var(--color-chocolate)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50 resize-none"
                    placeholder="Any dietary requirements, occasion, seating preference..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={bookingMutation.isPending}
                  className="btn-primary disabled:opacity-50 mt-2"
                >
                  {bookingMutation.isPending ? "Confirming..." : "Confirm Reservation"}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
