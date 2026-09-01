import { Link } from "react-router";

export default function VisitCTASection() {
  return (
    <section className="section-padding py-24 lg:py-32 bg-white text-[#1c1109] relative">
      <div className="max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#c88242] uppercase font-bold block mb-3">
          RESERVATIONS
        </span>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-4 text-[#1c1109]">
          Book Your Experience
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-[#6b5c54] font-light max-w-md mx-auto mb-10 leading-relaxed">
          Reserve your table for an evening of exceptional dining and ambiance.
        </p>

        {/* Center Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
          <Link
            to="/booking"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#d49748] hover:bg-[#e0a455] active:scale-[0.98] text-[#1c1109] font-bold text-xs sm:text-sm tracking-[0.14em] uppercase shadow-md transition-all"
          >
            BOOK A TABLE
          </Link>

          <a
            href="tel:09437164578"
            className="text-xs sm:text-sm text-[#6b5c54] font-medium hover:text-[#1c1109] transition-colors"
          >
            Call us: <span className="font-bold text-[#1c1109]">+91 94371 64578</span>
          </a>
        </div>
      </div>
    </section>
  );
}
