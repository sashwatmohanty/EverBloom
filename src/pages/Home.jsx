import {
  HeroSection,
  HighlightsSection,
  AmbienceShowcase,
  FeaturedMenuSection,
  EventsPreview,
  ReviewsSection,
  VisitCTASection,
} from "../components/Home";
import PageScrollProgress from "../components/ui/PageScrollProgress";

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#faf7f2] relative">
      {/* Global Reading Scroll Progress Bar at the top of the window */}
      <PageScrollProgress />

      {/* Hero Section */}
      <HeroSection />

      {/* Live Animated Counters & Everbloom Perks (Triggered on Scroll) */}
      <HighlightsSection />

      {/* Interactive 3-Space Ambience Showcase (Directional Scroll Reveals) */}
      <AmbienceShowcase />

      {/* Dynamic Filterable Featured Menu (Staggered Scroll Reveals) */}
      <FeaturedMenuSection />

      {/* Visual Moments Gallery Grid (Zoom & Fade Scroll Reveals) */}
      <ReviewsSection />

      {/* Live Acoustic & Weekend Gatherings (Sliding Scroll Reveals) */}
      <EventsPreview />

      {/* Table Reservation Call-To-Action (Pulsing Scale Scroll Reveal) */}
      <VisitCTASection />
    </div>
  );
}

