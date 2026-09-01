import { EventsHero, LiveEvents, SpecialOffers } from "../components/Events";

export default function Events() {
  return (
    <div className="pt-24 min-h-screen bg-[#faf7f2]">
      <EventsHero />
      <LiveEvents />
      <SpecialOffers />
    </div>
  );
}
