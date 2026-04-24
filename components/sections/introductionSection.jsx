import Image from "next/image";

export default function Introduction() {
  return (
    <section className="bg-[#FFFFFF] overflow-hidden">
      {/* SECTION 1: Corporate Trainings */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-[24px] md:gap-20 p-6 md:p-10 md:mt-10 lg:mt-[120px] max-w-7xl mx-auto">
        <div className="flex flex-col w-full lg:w-auto">
          <h1 className="hidden md:block text-3xl md:text-[40px] font-semibold text-black mb-4">
            Corporate Trainings
          </h1>
          <div className="text-[#696969] rounded-md text-left">
            <p className="w-full lg:max-w-[629px] text-left text-[18px]">
              Empower your team with our customised Corporate Training programs
              designed to address the unique needs and objectives of your
              organisation. Our expert facilitators work closely with your team
              to deliver tailored learning experiences that align with your
              company's goals and values.
            </p>
            <ul className="flex flex-col pl-2 md:pl-6 gap-3 my-5 text-[18px]">
              {[
                "Leadership Training",
                "Strategic Planning and Implementation",
                "Project Management",
                "Sustainability Training",
                "Customised Training",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 list-none">
                  <Image
                    src="/Vector2.png"
                    alt="check"
                    width={16}
                    height={16}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h1 className=" md:hidden text-3xl md:text-[40px] font-semibold text-black mb-8">
            Corporate Trainings
          </h1>
          <Image
            className="rounded-br-lg rounded-bl-lg rounded-tr-lg rounded-tl-[2rem] md:rounded-tl-4xl w-full lg:w-auto h-auto object-cover"
            src="/TobamsTrainingImage.jpg"
            alt="training image"
            width={602}
            height={346}
          />
        </div>
      </div>

      {/* SECTION 2: Personalised Individual Training */}
      <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center gap-[24px] md:gap-20 p-6 md:p-10 md:mt-16 lg:mt-[120px] max-w-7xl mx-auto">
        <div className="flex flex-col w-full lg:w-auto">
          <h1 className="hidden md:block text-3xl md:text-[40px] font-semibold text-black mb-4">
            Personalised Individual Training
          </h1>
          <div className="text-[#696969] rounded-md text-left">
            <p className="w-full lg:max-w-[629px] text-left text-[18px]">
              Begin a journey of lifelong learning and professional development
              with Tobams Group's diverse range of training programs for
              individuals. From technical skills mastery to soft skills
              enhancement, our courses cover a wide spectrum of topics to meet
              the evolving needs of today's professionals.
            </p>
            <ul className="flex flex-col pl-2 md:pl-6 gap-3 my-5 text-[18px]">
              {[
                "Leadership Training",
                "Soft Skills Development",
                "Industry Specific Knowledge",
                "Technical Skills Enhancement",
                "Time Management and Productivity",
                "Career Development",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 list-none">
                  <Image
                    src="/Vector2.png"
                    alt="check"
                    width={16}
                    height={16}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h1 className=" md:hidden text-3xl md:text-[40px] font-semibold text-black mb-8">
            Personalised Individual Training
          </h1>
          <Image
            className="rounded-br-lg rounded-bl-lg rounded-tr-lg rounded-tl-[2rem] md:rounded-tl-4xl w-full lg:w-auto h-auto object-cover"
            src="/TobamsTrainigImage2.jpg"
            alt="training image"
            width={602}
            height={346}
          />
        </div>
      </div>

      {/* SECTION 3: Capacity Development */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-[24px] md:gap-20 p-6 md:p-10 md:mt-16 lg:mt-[120px] mb-10 max-w-7xl mx-auto">
        <div className="flex flex-col w-full lg:w-auto">
          <h1 className="hidden md:block text-3xl md:text-[40px] font-semibold text-black mb-4">
            Capacity Development
          </h1>
          <div className="text-[#696969] rounded-md text-left">
            <p className="w-full lg:max-w-[629px] text-left text-[18px]">
              At Tobams Group, we empower individuals and organizations through
              tailored training programs, expert-led workshops, and personalized
              mentorship. We are committed to your success and growth. We are
              dedicated to providing a comprehensive suite of benefits designed
              to foster your development and success:
            </p>
            <ul className="flex flex-col pl-2 md:pl-6 gap-3 my-5 text-[18px]">
              {[
                "Tailored Training Programs",
                "Expert-Led Workshops",
                "Personalized Mentorship",
                "Technical Skills Enhancement",
                "Collaborative Learning Environment",
                "Ongoing Support and Resources",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 list-none">
                  <Image
                    src="/Vector2.png"
                    alt="check"
                    width={16}
                    height={16}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h1 className=" md:hidden text-3xl md:text-[40px] font-semibold text-black mb-8">
            Capacity Development
          </h1>
          <Image
            className="rounded-br-lg rounded-bl-lg rounded-tr-lg rounded-tl-[2rem] md:rounded-tl-4xl w-full lg:w-auto h-auto object-cover"
            src="/TobamsTrainingImage3.jpg"
            alt="training image"
            width={602}
            height={346}
          />
        </div>
      </div>
    </section>
  );
}
