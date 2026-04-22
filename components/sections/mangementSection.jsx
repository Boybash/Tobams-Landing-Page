import Image from "next/image";
import Button from "../ui/button";

export default function ManagementSection() {
  return (
    <main className="bg-[#F9F9F9] flex justify-between p-10 mt-15">
      <Image
        src="/TobamsIntroImage.png"
        alt="Tobam Intro"
        width={556}
        height={556}
      />

      <div className="flex flex-col mt-10">
        <h1 className="text-[#571244] text-[40px] font-semibold">
          Learning Management System
        </h1>
        <div className="bg-[#5712441A] text-[#151515] p-5 rounded-md">
          <p className="w-[675px]">
            TG Academy is a hub of knowledge and skill-building resources
            designed to empower tech talents on their learning journey. From
            technical courses covering the latest programming languages and
            development frameworks to soft skills training in leadership,
            effective communication and project management, TG Academy offers a
            wide range of courses to cater to diverse learning needs. With
            accessible and interactive learning materials, individuals can
            enhance their skills and stay ahead in today's competitive tech
            landscape.
          </p>
          <p className="font-semibold my-2 text-[#151515]">
            Some of our courses include:
          </p>
          <ul className="flex gap-3 my-3">
            <li>Business Analysis</li>
            <li>Design Thinking</li>
            <li>Effective Communication</li>
          </ul>
          <ul className="flex gap-3">
            <li>Entrepreneurship</li>
            <li>Career Development</li>
            <li>Business Model</li>
          </ul>
        </div>

        <Button className="px-4 py-2.5 text-white bg-[#571244] rounded-md flex items-center gap-3 mt-5 w-[175px]">
          <a>Learn More</a>
          <Image src="/arrow-up-right.png" alt="arrow" width={30} height={30} />
        </Button>
      </div>
    </main>
  );
}
