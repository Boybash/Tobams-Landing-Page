import Image from "next/image";
import Button from "../ui/button";

export default function Consultant() {
  return (
    <main className="bg-[#FFFFFF1A] p-10 my-15">
      <div className="flex flex-col gap-5">
        <h1 className="text-[#571244] text-[40px] font-semibold">
          {" "}
          Training The Consultant{" "}
        </h1>
        <p className="text-[#571244] text-[18px] font-semibold">
          Maximise Your Potential as a Certified Trainer:
        </p>
        <p className="text-[#151515]">
          With the help of our Training Consultants program, take a
          revolutionary step toward becoming a distinguished certified training
          consultant. Learn from professionals in the field, immerse yourself in
          a thorough curriculum, and hone your training methods through
          interactive workshops. Participating in our program will enable you to
          gain expertise in diverse courses while also developing the abilities
          to mentor and encourage others in their career advancement.
        </p>
      </div>
      <div className="bg-[#571244] p-5 rounded-md mt-5 flex flex-col gap-5">
        <div className="flex justify-between gap-5">
          <span className="flex flex-col gap-3.5 w-[622px]">
            <h1 className="text-[#FFFFFF] text-[18px] font-semibold">
              Expert-Led Learning
            </h1>
            <p>
              Gain insight from seasoned professionals in the field as they
              mentor you through the subtleties of business analysis.
            </p>
          </span>
          <span className="flex flex-col gap-3.5 w-[622px]">
            <h1 className="text-[#FFFFFF] text-[18px] font-semibold">
              Interactive Workshops
            </h1>
            <p>
              Engage in hands-on workshops designed to enhance your training
              capabilities and provide practical insights.
            </p>
          </span>
        </div>

        <div className="flex justify-between gap-5">
          <span className="flex flex-col gap-3.5 w-[622px]">
            <h1 className="text-[#FFFFFF] text-[18px] font-semibold">
              Comprehensive Curriculum
            </h1>
            <p>
              Access a robust curriculum that covers fundamental principles and
              advanced methodologies, ensuring a well-rounded understanding.
            </p>
          </span>
          <span className="flex flex-col gap-3.5 w-[622px]">
            <h1 className="text-[#FFFFFF] text-[18px] font-semibold">
              Global Recognition
            </h1>
            <p>
              You will attain a globally recognized certification, opening doors
              to new career opportunities and industry recognition.
            </p>
          </span>
        </div>
      </div>

      <Button className="px-4 py-2.5 text-white bg-[#572044] rounded-md flex items-center gap-3 mt-5 w-[175px]">
        <a>Learn More</a>
        <Image src="/arrow-up-right.png" alt="arrow" width={30} height={30} />
      </Button>
    </main>
  );
}
