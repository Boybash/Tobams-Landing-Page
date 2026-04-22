import Image from "next/image";
import Hero from "@/components/sections/hero";
import ManagementSection from "@/components/sections/mangementSection";
import Introduction from "@/components/sections/introduction";
import Program from "@/components/sections/program";
import TransformationHub from "@/components/sections/transformationhub";

export default function Home() {
  return (
    <>
      <Hero />
      <ManagementSection />
      <Introduction />
      <Program />
      <TransformationHub />
    </>
  );
}
