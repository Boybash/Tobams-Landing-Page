import Image from "next/image";

export default function Program() {
  return (
    <main className="bg-[#F9F9F9] p-10 flex items-center justify-center">
      <div className="bg-[#2C0922] p-8 rounded-2xl flex items-center justify-center gap-10 w-[1312px]">
        <Image
          className="rounded-md"
          src="/TobamsDevelopmentImage2.jpg"
          alt="delopement image"
          width={592}
          height={639}
        />
        <div className="flex flex-col gap-7 w-[592px]">
          <h1 className="text-[40px] font-semibold">
            Management Development Program
          </h1>
          <p className="">
            Tobams Group offers a comprehensive Management Development Program
            designed to equip corporate organisations with the high -performing
            leaders they need to thrive.
          </p>
          <p>
            Our program includes workshops, seminars, coaching sessions, online
            courses, and experiential learning opportunities designed to improve
            leadership, strategic thinking, communication, and other essential
            managerial competencies for corporate organisations.
          </p>

          <ul className="flex flex-col gap-4">
            <span className="flex items-center gap-2 bg-[#8F6182] py-1 px-10 rounded-4xl">
              <Image src="/Vector.png" alt="vector" width={12} height={12} />
              <li>Enhanced Leadership Skills</li>
            </span>
            <span className="flex items-center gap-2 bg-[#8F6182] py-1 px-10 rounded-4xl">
              <Image src="/Vector.png" alt="vector" width={12} height={12} />
              <li>Improved Employee Engagement</li>
            </span>
            <span className="flex items-center gap-2 bg-[#8F6182] py-1 px-10 rounded-4xl">
              <Image src="/Vector.png" alt="vector" width={12} height={12} />
              <li>Stronger Organisational Culture</li>
            </span>
            <span className="flex items-center gap-2 bg-[#8F6182] py-1 px-10 rounded-4xl">
              <Image src="/Vector.png" alt="vector" width={12} height={12} />
              <li>Sustainable Growth</li>
            </span>
          </ul>
        </div>
      </div>
    </main>
  );
}
