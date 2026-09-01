import {
  HeroSection,
  AmbienceShowcase,
  FeaturedMenuSection,
  HighlightsSection,
  EventsPreview,
  ReviewsSection,
  VisitCTASection,
} from "../components/Home";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AmbienceShowcase />
      <FeaturedMenuSection />
      <HighlightsSection />
      <EventsPreview />
      <ReviewsSection />
      <VisitCTASection />
    </div>
  );
}
