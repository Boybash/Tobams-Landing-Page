import Image from "next/image";
import Button from "../ui/button";

export default function TransformationHub() {
  return (
    <main className="bg-[#F9F9F9] p-3 flex items-center justify-center my-15">
      <div className="bg-[#EF435333] p-8 rounded-2xl w-[288px] flex flex-col items-center justify-center gap-3 w-[1320px]">
        <div>
          <h1 className="text-[#1671D9] text-[20px] italic">
            Learning With Our CEO:
          </h1>
          <h2 className="text-[32px] italic text-[#572044] my-2">
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-[#151515]">
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

        <div className="flex justify-between gap-30 mt-5">
          <Image
            src="/TransformationImage.png"
            alt="transformation"
            width={580}
            height={340}
          />
          <div className="bg-[#FFFFFF4D] p-5 rounded-md">
            <ul className=" text-[#151515] flex flex-col gap-5">
              <span className="flex gap-2">
                <span className="flex items-center gap-2 bg-[#FFFFFF] px-3 py-3 rounded-md w-[288px]">
                  <Image
                    src="/Vector.png"
                    alt="vector"
                    width={20}
                    height={20}
                  />
                  <li>Strategic Career Guidance</li>
                </span>
                <span className="flex items-center gap-2  bg-[#FFFFFF] px-3 py-3 rounded-md w-[288px]">
                  <Image
                    src="/Vector.png"
                    alt="vector"
                    width={20}
                    height={20}
                  />
                  <li>Leadership Development</li>
                </span>
              </span>
              <span className="flex gap-2">
                <span className="flex items-center gap-2  bg-[#FFFFFF] px-3 py-3 rounded-md w-[288px]">
                  <Image
                    src="/Vector.png"
                    alt="vector"
                    width={20}
                    height={20}
                  />
                  <li>CV Development</li>
                </span>
                <span className="flex items-center gap-2  bg-[#FFFFFF] px-3 py-3 rounded-md w-[288px]">
                  <Image
                    src="/Vector.png"
                    alt="vector"
                    width={20}
                    height={20}
                  />
                  <li>Sustainability Leadership</li>
                </span>
              </span>
              <span className="flex gap-2">
                <span className="flex items-center gap-2  bg-[#FFFFFF] px-3 py-3 rounded-md w-[288px]">
                  <Image
                    src="/Vector.png"
                    alt="vector"
                    width={20}
                    height={20}
                  />
                  <li>Communication Skills</li>
                </span>
                <span className="flex items-center gap-2  bg-[#FFFFFF] px-3 py-3 rounded-md w-[288px]">
                  <Image
                    src="/Vector.png"
                    alt="vector"
                    width={20}
                    height={20}
                  />
                  <li>Business Model</li>
                </span>
              </span>
            </ul>
            <Button className="px-4 py-2.5 text-white bg-[#572044] rounded-md flex items-center gap-3 mt-5 w-[175px]">
              <a>Learn More</a>
              <Image
                src="/arrow-up-right.png"
                alt="arrow"
                width={30}
                height={30}
              />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
