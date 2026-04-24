import Image from "next/image";
import Hero from "@/components/sections/heroSection";
import ManagementSection from "@/components/sections/mangementSection";
import Introduction from "@/components/sections/introductionSection";
import Program from "@/components/sections/programSection";
import TransformationHub from "@/components/sections/transformationhubSection";
import Consultant from "@/components/sections/consultantSection";
import Testimonial from "@/components/sections/testimonialSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ManagementSection />
      <Introduction />
      <Program />
      <TransformationHub />
      <Consultant />
      <Testimonial />
    </>
  );
}
