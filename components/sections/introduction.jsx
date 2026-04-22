import Image from "next/image";

export default function Introduction() {
  return (
    <article className="bg-[#FFFFFF]">
      <div className="flex justify-between items-center gap-5 p-10 mt-[120px]">
        <div className="flex flex-col">
          <h1 className=" text-[40px] font-semibold text-black">
            Corporate Trainings
          </h1>
          <div className=" text-[#696969] rounded-md text-left">
            <p className="w-[675px] text-left">
              Empower your team with our customised Corporate Training programs
              designed to address the unique needs and objectives of your
              organisation. Our expert facilitators work closely with your team
              to deliver tailored learning experiences that align with your
              company's goals and values.
            </p>
            <ul className="flex flex-col pl-6 gap-3 my-3">
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Leadership Training</li>
              </span>
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Strategic Planning and Implementation</li>
              </span>
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Project Management</li>
              </span>
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Sustainability Training</li>
              </span>
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Customised Training</li>
              </span>
            </ul>
          </div>
        </div>

        <Image
          className="rounded-br-lg rounded-bl-lg rounded-tr-lg rounded-tl-4xl"
          src="/TobamsTrainingImage.jpg"
          alt="training image"
          width={602}
          height={346}
        />
      </div>

      <div className="flex flex-row-reverse justify-between items-center gap-5 p-10 mt-[120px]">
        <div className="flex flex-col">
          <h1 className=" text-[40px] font-semibold text-black">
            Personalised Individual Training{" "}
          </h1>
          <div className=" text-[#696969] rounded-md text-left">
            <p className="w-[675px] text-left">
              Begin a journey of lifelong learning and professional development
              with Tobams Group's diverse range of training programs for
              individuals. From technical skills mastery to soft skills
              enhancement, our courses cover a wide spectrum of topics to meet
              the evolving needs of today's professionals.
            </p>
            <ul className="flex flex-col pl-6 gap-3 my-3">
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Leadership Training</li>
              </span>
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Soft Skills Development</li>
              </span>
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Industry Specific Knowledge</li>
              </span>
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Technical Skills Enhancement</li>
              </span>
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Time Management and Productivity</li>
              </span>
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Career Development</li>
              </span>
            </ul>
          </div>
        </div>

        <Image
          className="rounded-br-lg rounded-bl-lg rounded-tr-lg rounded-tl-4xl"
          src="/TobamsTrainigImage2.jpg"
          alt="training image"
          width={602}
          height={346}
        />
      </div>

      <div className="flex justify-between items-center gap-5 p-10 mt-[120px]">
        <div className="flex flex-col">
          <h1 className=" text-[40px] font-semibold text-black">
            Capacity Development
          </h1>
          <div className=" text-[#696969] rounded-md text-left">
            <p className="w-[675px] text-left">
              At Tobams Group, we empower individuals and organizations through
              tailored training programs, expert-led workshops, and personalized
              mentorship. We are committed to your success and growth. We are
              dedicated to providing a comprehensive suite of benefits designed
              to foster your development and success:
            </p>
            <ul className="flex flex-col pl-6 gap-3 my-3">
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Tailored Training Programs</li>
              </span>
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Expert-Led Workshops</li>
              </span>
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Personalized Mentorship</li>
              </span>
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Technical Skills Enhancement</li>
              </span>
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Collaborative Learning Environment</li>
              </span>
              <span className="flex items-center gap-2">
                <Image src="/Vector.png" alt="vector" width={12} height={12} />
                <li>Ongoing Support and Resources</li>
              </span>
            </ul>
          </div>
        </div>

        <Image
          className="rounded-br-lg rounded-bl-lg rounded-tr-lg rounded-tl-4xl"
          src="/TobamsTrainingImage3.jpg"
          alt="training image"
          width={602}
          height={346}
        />
      </div>
    </article>
  );
}
