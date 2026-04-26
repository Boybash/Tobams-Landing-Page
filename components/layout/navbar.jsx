"use client";

import { useState } from "react"; // Added for functionality
import Image from "next/image";
import Button from "../ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Added state

  return (
    <nav className="bg-[#FFFFFF] flex flex-col items-center justify-between px-10 py-5 sticky z-80 left-0 right-0 bottom-0 top-0">
      <div className="flex justify-between w-full">
        <div>
          <Image src="/TobamsLogo.png" alt="Logo" width={165} height={64} />
        </div>

        <ul className="hidden sm:hidden lg:flex items-center gap-4">
          <button className="bg-[#571244] flex items-center gap-2 px-4 py-2 rounded-md">
            <Image
              src="/TobamsUserIcon.png"
              alt="Logo"
              width={30}
              height={30}
            />
            <a className="text-white">Account</a>
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

        {/* Hamburger Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <Image
            src={isOpen ? "/closeIcon.png" : "/hamburger.png"}
            alt="hambuger mobile"
            width={32}
            height={20}
          />
        </button>
      </div>

      <hr className="hidden lg:block my-4 border-black w-full" />

      {/* Desktop Menu - Keeps your exact logic */}
      <ul className="hidden sm:hidden lg:flex items-center justify-center gap-[32px]">
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

      {/* Mobile Menu - Shown when isOpen is true */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white/80 absolute top-[100px] left-0 z-50 p-10 shadow-lg">
          <ul className="flex flex-col gap-6">
            <li className="text-[#571244]">About</li>
            <li className="text-[#151515]">What We Do</li>
            <li className="text-[#151515]">Jobs</li>
            <li className="text-[#151515]">Projects</li>
            <li className="text-[#151515]">TG Academy</li>
            <li className="text-[#151515]">Pricing</li>
            <hr />
            <div className="flex flex-col gap-4">
              <Button className="w-full bg-[#571244] text-white py-2">
                Account
              </Button>
              <Button className="w-full bg-[#EF4353] text-white py-2">
                Take Assessment
              </Button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
