import Image from "next/image";
import Button from "../ui/button";

export default function Consultant() {
  return (
    <section className="bg-[#5712441A] p-6 md:p-30 my-10 lg:my-15 w-full max-w-full mx-auto">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:gap-5">
        <h1 className="text-[#571244] text-3xl md:text-[40px] font-semibold leading-tight">
          Training The Consultant
        </h1>
        <p className="text-[#571244] text-base md:text-[18px] font-semibold">
          Maximise Your Potential as a Certified Trainer:
        </p>
        <p className="text-[#151515] leading-relaxed max-w-4xl">
          With the help of our Training Consultants program, take a
          revolutionary step toward becoming a distinguished certified training
          consultant. Learn from professionals in the field, immerse yourself in
          a thorough curriculum, and hone your training methods through
          interactive workshops. Participating in our program will enable you to
          gain expertise in diverse courses while also developing the abilities
          to mentor and encourage others in their career advancement.
        </p>
      </div>

      {/* Grid Section: Switched to Grid for better control over columns */}
      <div className="bg-[#571244] text-white p-6 md:p-8 rounded-md mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Expert-Led Learning */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[18px] font-semibold">Expert-Led Learning</h2>
          <p className="text-sm md:text-base opacity-90">
            Gain insight from seasoned professionals in the field as they mentor
            you through the subtleties of business analysis.
          </p>
        </div>

        {/* Interactive Workshops */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[18px] font-semibold">Interactive Workshops</h2>
          <p className="text-sm md:text-base opacity-90">
            Engage in hands-on workshops designed to enhance your training
            capabilities and provide practical insights.
          </p>
        </div>

        {/* Comprehensive Curriculum */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[18px] font-semibold">
            Comprehensive Curriculum
          </h2>
          <p className="text-sm md:text-base opacity-90">
            Access a robust curriculum that covers fundamental principles and
            advanced methodologies, ensuring a well-rounded understanding.
          </p>
        </div>

        {/* Global Recognition */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[18px] font-semibold">Global Recognition</h2>
          <p className="text-sm md:text-base opacity-90">
            You will attain a globally recognized certification, opening doors
            to new career opportunities and industry recognition.
          </p>
        </div>
      </div>

      {/* Button: w-full on mobile for better UX */}
      <Button className="px-4 py-2.5 text-white bg-[#572044] rounded-md flex items-center justify-center gap-3 mt-8 w-[161px] hover:opacity-90 transition-opacity">
        <a className="font-medium">Learn More</a>
        <Image src="/heroicons.png" alt="arrow" width={24} height={24} />
      </Button>
    </section>
  );
}
