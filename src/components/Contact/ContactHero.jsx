export default function ContactHero() {
  return (
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
  );
}
