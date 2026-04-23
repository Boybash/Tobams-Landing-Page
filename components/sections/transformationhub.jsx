import Image from "next/image";
import Button from "../ui/button";

export default function TransformationHub() {
  return (
    <main className="bg-[#F9F9F9] p-4 md:p-10 flex items-center justify-center my-10 lg:my-15">
      <div className="bg-[#EF435333] p-6 md:p-12 rounded-2xl w-full max-w-[1312px] flex flex-col gap-8">
        {/* Header Section */}
        <div className="max-w-4xl">
          <h1 className="text-[#1671D9] text-lg md:text-[20px] italic">
            Learning With Our CEO:
          </h1>
          <h2 className="text-2xl md:text-[32px] italic text-[#572044] my-2 font-semibold">
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-[#151515] leading-relaxed">
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to elevate career
            trajectories and leadership capabilities, this exclusive event
            offers invaluable insights and strategies for personal and
            professional growth. Whether you're seeking to advance your career
            or enhance your leadership skills, the Transformation Hub provides a
            transformative learning experience to unlock your full potential and
            drive success in your endeavours.
          </p>
        </div>

        {/* Content Section: Image and Skills Grid */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
          {/* Responsive Image Wrapper */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/TransformationImage.png"
              alt="transformation"
              width={580}
              height={340}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Skills Grid */}
          <div className="bg-[#FFFFFF4D] p-4 md:p-6 rounded-md w-full lg:w-1/2">
            <ul className="text-[#151515] grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
              {[
                "Strategic Career Guidance",
                "Leadership Development",
                "CV Development",
                "Sustainability Leadership",
                "Communication Skills",
                "Business Model",
              ].map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 bg-white px-4 py-3 rounded-md shadow-sm"
                >
                  <Image
                    src="/Vector.png"
                    alt="check"
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                  />
                  <span className="text-sm font-medium">{skill}</span>
                </li>
              ))}
            </ul>

            <Button className="px-4 py-2.5 text-white bg-[#572044] rounded-md flex items-center justify-center gap-3 mt-8 w-[175px] hover:bg-[#4a1a39] transition-colors">
              <span>Learn More</span>
              <Image
                src="/arrow-up-right.png"
                alt="arrow"
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
