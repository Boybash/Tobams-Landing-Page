import Image from "next/image";
import Button from "../ui/button";
import { Fontdiner_Swanky } from "next/font/google";

export default function Navbar() {
  return (
    <nav className="bg-[#FFFFFF] flex flex-col items-center justify-between px-10 py-5">
      <div className=" flex  justify-between w-full  ">
        <div>
          <Image src="/TobamsLogo.png" alt="Logo" width={165} height={64} />
        </div>

        <ul className=" hidden sm:hidden lg:flex items-center gap-4">
          <button className=" bg-[#571244] flex items-center gap-2 px-4 py-2 rounded-md">
            <Image
              src="/TobamsUserIcon.png"
              alt="Logo"
              width={30}
              height={30}
            />
            <a className=" text-white">Account</a>
            <Image
              src="/TobamsDownArrow.png"
              alt="Logo"
              width={20}
              height={20}
            />
          </button>
          <div>
            <Button className="px-4 py-2.5 text-white bg-[#EF4353] rounded-md">
              Take Assessment
            </Button>
          </div>
        </ul>

        <Image
          src="/hamburger.png"
          alt="hambuger mobile"
          width={32}
          height={20}
          className=" lg:hidden"
        />
      </div>

      <hr className="my-4 border-black w-full" />

      <ul className=" hidden sm:hidden  lg:flex items-center justify-center gap-[32px]">
        <span className="flex items-center text-[#571244] gap-1">
          <li>About</li>
          <Image
            className="items-center"
            src="/TobamsDownArrow.png"
            alt="Logo"
            width={20}
            height={20}
          />
        </span>
        <span className="flex items-center gap-1 text-[#151515]">
          <li>What We Do</li>
          <Image
            className="items-center"
            src="/TobamsDownArrow.png"
            alt="Logo"
            width={20}
            height={20}
          />
        </span>
        <span className="flex items-center gap-1 text-[#151515]">
          <li>Jobs</li>
          <Image
            className="items-center"
            src="/TobamsDownArrow.png"
            alt="Logo"
            width={20}
            height={20}
          />
        </span>
        <li className="text-[#151515]">Projects</li>
        <li className="text-[#151515]">TG Academy</li>
        <li className="text-[#151515]">Strategic Partnership</li>
        <li className="text-[#151515]">Pricing</li>
        <li className="text-[#151515]">Book a Consultation</li>
      </ul>
    </nav>
  );
}
