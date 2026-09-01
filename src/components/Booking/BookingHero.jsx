export default function BookingHero() {
  return (
    <section className="relative h-[35vh] min-h-[250px] overflow-hidden bg-[#120a07] flex items-center justify-center">
      <img src="/everbloom/outdoor-patio.jpg" alt="Book a table" className="absolute inset-0 w-full h-full object-cover filter brightness-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#120a07]/80 via-[#20120b]/60 to-[#120a07]/90" />
      <div className="relative z-10 text-center px-4">
        <p className="text-[#e29b5a] text-xs tracking-[0.2em] uppercase mb-2 font-bold">Reservations</p>
        <h1 className="font-display text-4xl sm:text-5xl text-white font-extrabold">Reserve a Table</h1>
      </div>
    </section>
  );
}
