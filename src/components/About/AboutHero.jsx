export default function AboutHero() {
  return (
    <section className="relative min-h-[46vh] sm:min-h-[50vh] overflow-hidden bg-[#120a07] flex items-center justify-center pt-32 sm:pt-36 pb-16 sm:pb-20">
      <img
        src="/everbloom/interior-wall-neon.png"
        alt="Everbloom Café Interior"
        className="absolute inset-0 w-full h-full object-cover filter brightness-40 contrast-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#120a07]/85 via-[#20120b]/60 to-[#120a07]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(18,10,7,0.85)_80%,#120a07_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-[#c88242]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <span className="badge-tag bg-[#c88242]/25 text-[#e29b5a] mb-3">
          Our Journey &amp; Passion
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold mb-3">
          Welcome to <span className="text-[#e29b5a] italic font-serif">Everbloom</span>
        </h1>
        <p className="text-white/80 text-xs sm:text-sm md:text-base font-normal max-w-xl mx-auto leading-relaxed">
          Where good food and good mood bloom together in Kalinga Nagar, Bhubaneswar.
        </p>
      </div>
    </section>
  );
}
