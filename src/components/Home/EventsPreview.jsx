import { Music, Calendar } from "lucide-react";
import { Link } from "react-router";

export default function EventsPreview() {
  return (
    <section className="section-padding py-20 lg:py-28 bg-[#16271e] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#d49748] uppercase font-bold block mb-3">
          GATHERINGS &amp; EVENTS
        </span>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4">
          When the Sun Sets, Everbloom Comes Alive
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-white/75 font-light max-w-xl mx-auto mb-14 leading-relaxed">
          Live acoustic evenings, weekend brunch, and unforgettable gatherings under the garden lights.
        </p>

        {/* 2 Wide Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Card 1: Acoustic Nights */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#f7dcd6] text-[#1c1109] shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#1c1109]/10 flex items-center justify-center text-[#c88242] mb-6">
                <Music className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-normal mb-2 text-[#1c1109]">
                Acoustic Evenings
              </h3>
              <p className="text-xs sm:text-sm text-[#5c4a40] font-light leading-relaxed">
                Every Friday &amp; Saturday — 7:00 PM onwards in the garden patio.
              </p>
            </div>
          </div>

          {/* Card 2: Private Events */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#f0e6dc] text-[#1c1109] shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#1c1109]/10 flex items-center justify-center text-[#c88242] mb-6">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-normal mb-2 text-[#1c1109]">
                Private Celebrations
              </h3>
              <p className="text-xs sm:text-sm text-[#5c4a40] font-light leading-relaxed">
                Host your birthday parties, meetups, and celebrations with customized menus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
