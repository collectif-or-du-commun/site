import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};
import { MarqueeBand } from "@/components/home/marquee-band";
import { StatsSection } from "@/components/home/stats-section";
import { ADNSection } from "@/components/home/adn-section";
import { NeedsSection } from "@/components/home/needs-section";
import { BeforeWeekSection } from "@/components/home/before-week-section";
import { FormationsSection } from "@/components/home/formations-section";
import { VideoSection } from "@/components/home/video-section";
import { PresseSection } from "@/components/home/presse-section";
import { LocationSection } from "@/components/home/location-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeBand />
      <StatsSection />
      <ADNSection />
      <NeedsSection />
      <BeforeWeekSection />
      <FormationsSection />
      <VideoSection />
      <PresseSection />
      <LocationSection />
    </>
  );
}
