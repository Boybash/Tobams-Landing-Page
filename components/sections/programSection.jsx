import Image from "next/image";

export default function Program() {
  return (
    <section className="bg-[#F9F9F9] p-4 md:p-10 flex justify-center md:mt-10 lg:mt-15">
      {/* Container: Replaced fixed width with max-width and removed fixed pixels */}
      <div className="bg-[#2C0922] p-6 md:p-10 rounded-2xl flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 w-full max-w-[1320px] text-white">
        <h1 className=" md:hidden text-[16px] md:text-[40px] font-semibold leading-tight">
          Management Development Program
        </h1>
        {/* Image: Added responsive width classes */}
        <div className="w-full lg:w-1/2">
          <Image
            className="rounded-md w-full object-cover"
            src="/TobamsDevelopmentImage2.jpg"
            alt="development image"
            width={592}
            height={639}
            priority
          />
        </div>

        {/* Text Content: Removed fixed width, added responsive font sizes */}
        <div className="flex flex-col gap-5 md:gap-7 w-full lg:w-1/2">
          <h1 className=" hidden md:block text-3xl md:text-[40px] font-semibold leading-tight">
            Management Development Program
          </h1>
          <p className="text-sm md:text-base opacity-90">
            Tobams Group offers a comprehensive Management Development Program
            designed to equip corporate organisations with the high-performing
            leaders they need to thrive.
          </p>
          <p className="text-sm md:text-base opacity-90">
            Our program includes workshops, seminars, coaching sessions, online
            courses, and experiential learning opportunities designed to improve
            leadership, strategic thinking, communication, and other essential
            managerial competencies for corporate organisations.
          </p>

          <ul className="flex flex-col gap-3 md:gap-4">
            <li className="flex gap-2 bg-[#8F6182] py-2 px-3 rounded-md items-center">
              <Image src="/bolt.png" alt="bolt" width={20} height={20} />
              <span className="text-sm md:text-base">
                Enhanced Leadership Skills
              </span>
            </li>
            <li className="flex gap-2 bg-[#8F6182] py-2 px-3 rounded-md items-center">
              <Image src="/bolt.png" alt="bolt" width={20} height={20} />
              <span className="text-sm md:text-base">
                Improved Employee Engagement
              </span>
            </li>
            <li className="flex gap-2 bg-[#8F6182] py-2 px-3 rounded-md items-center">
              <Image src="/bolt.png" alt="bolt" width={20} height={20} />
              <span className="text-sm md:text-base">
                Stronger Organisational Culture
              </span>
            </li>
            <li className="flex gap-2 bg-[#8F6182] py-2 px-3 rounded-md items-center">
              <Image src="/bolt.png" alt="bolt" width={20} height={20} />
              <span className="text-sm md:text-base">Sustainable Growth</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
