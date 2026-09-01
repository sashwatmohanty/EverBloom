import {
  HeroSection,
  AmbienceShowcase,
  ReviewsSection,
  FeaturedMenuSection,
  EventsPreview,
  VisitCTASection,
} from "../components/Home";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AmbienceShowcase />
      <ReviewsSection />
      <FeaturedMenuSection />
      <EventsPreview />
      <VisitCTASection />
    </div>
  );
}
