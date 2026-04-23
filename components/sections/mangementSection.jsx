import Image from "next/image";
import Button from "../ui/button";

export default function ManagementSection() {
  return (
    <main className="bg-[#F9F9F9] flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20 p-6 md:p-10 mt-10 lg:mt-15">
      <h1 className="sm:hidden text-[#571244] text-[20px] md:text-[40px] font-semibold leading-tight mb-2">
        Learning Management System
      </h1>
      {/* Image Wrapper: ensures the image scales down on mobile */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/TobamsIntroImage.png"
          alt="Tobam Intro"
          width={556}
          height={556}
          className="w-full h-auto max-w-[556px]"
          priority
        />
      </div>

      <div className="flex flex-col w-full lg:w-1/2">
        <h1 className=" hidden sm:block text-[#571244] text-3xl md:text-[40px] font-semibold leading-tight mb-6">
          Learning Management System
        </h1>

        <div className="bg-[#5712441A] text-[#151515] p-5 md:p-8 rounded-md">
          <p className="text-sm md:text-base leading-relaxed">
            TG Academy is a hub of knowledge and skill-building resources
            designed to empower tech talents on their learning journey. From
            technical courses covering the latest programming languages and
            development frameworks to soft skills training in leadership,
            effective communication and project management, TG Academy offers a
            wide range of courses to cater to diverse learning needs.
          </p>

          <p className="font-semibold my-4 text-[#151515]">
            Some of our courses include:
          </p>

          {/* List Section: Wrapped for small screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm md:text-base">
            <ul className="space-y-2 list-disc list-inside">
              <li>Business Analysis</li>
              <li>Design Thinking</li>
              <li>Effective Communication</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <li>Entrepreneurship</li>
              <li>Career Development</li>
              <li>Business Model</li>
            </ul>
          </div>
        </div>

        <Button className="px-4 py-2.5 text-white bg-[#571244] rounded-md flex items-center justify-center gap-3 mt-8 w-full sm:w-[175px] transition-hover hover:bg-[#450e36]">
          <span className="font-medium">Learn More</span>
          <Image src="/arrow-up-right.png" alt="arrow" width={20} height={20} />
        </Button>
      </div>
    </main>
  );
}
