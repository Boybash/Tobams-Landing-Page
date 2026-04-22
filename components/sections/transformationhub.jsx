import Image from "next/image";
import Button from "../ui/button";

export default function TransformationHub() {
  return (
    <main className="">
      <div>
        <div>
          <h1>Learning With Our CEO:</h1>
          <h2>Transformation Hub With Jite Newton</h2>
          <p>
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

        <div className="flex gap-5">
          <Image
            src="/TransformationImage.png"
            alt="transformation"
            width={580}
            height={340}
          />
          <div>
            <ul className="bg-[#FFFFFF4D] p-5">
              <span className="flex items-center gap-2 bg-[#FFFFFF] px-10 py-3 rounded-2xl">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Strategic Career Guidance</li>
              </span>
              <span className="flex items-center gap-2  bg-[#FFFFFF] px-10 py-3 rounded-2xl">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Leadership Development</li>
              </span>
              <span className="flex items-center gap-2  bg-[#FFFFFF] px-10 py-3 rounded-2xl">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>CV Development</li>
              </span>
              <span className="flex items-center gap-2  bg-[#FFFFFF] px-10 py-3 rounded-2xl">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Sustainability Leadership</li>
              </span>
              <span className="flex items-center gap-2  bg-[#FFFFFF] px-10 py-3 rounded-2xl">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Communication Skills</li>
              </span>
              <span className="flex items-center gap-2  bg-[#FFFFFF] px-10 py-3 rounded-2xl">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Business Model</li>
              </span>
            </ul>
            <Button className="px-4 py-2.5 text-white bg-[#571244] rounded-md flex items-center gap-3 mt-5 w-[175px]">
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
