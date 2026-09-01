import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-between">
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
  );
}
