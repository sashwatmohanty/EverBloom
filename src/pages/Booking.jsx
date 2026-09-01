import { BookingHero, BookingForm } from "../components/Booking";

export default function Booking() {
  return (
    <div className="pt-24 min-h-screen bg-[#faf7f2]">
      <BookingHero />
      <BookingForm />
    </div>
  );
}
