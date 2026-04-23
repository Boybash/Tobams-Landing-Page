import Image from "next/image";
import Button from "../ui/button";

export default function Footer() {
  return (
    <div className="text-[#FFFFFF]">
      {/* Top CTA Footer */}
      <footer className="bg-[#1D0617] w-full flex flex-col items-start md:flex-row md:items-center justify-between px-6 md:px-10 lg:px-20 py-8 md:py-5 gap-6">
        <div className="text-left md:text-left">
          <p className=" mb-5 md:mb-2 text-base md:text-[18px] opacity-90">
            Ready to be a part of something extraordinary?
          </p>
          <h1 className="text-2xl md:text-[32px] font-semibold leading-tight">
            Let’s work together to create a difference
          </h1>
        </div>
        <Button className="px-6 py-2.5 text-white bg-[#571404] rounded-md whitespace-nowrap">
          Get In Touch
        </Button>
      </footer>

      <hr className="border-[#323031] w-full" />

      {/* Main Footer Links Section */}
      <footer className="bg-[#11040E] px-6 md:px-10 py-12 w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          {/* Logo and Socials */}
          <div className="flex flex-col gap-6 max-w-sm">
            <Image src="/TobamsLogo.png" alt="Logo" width={165} height={64} />
            <p className="text-sm md:text-base leading-relaxed opacity-80">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            <div className="flex gap-4">
              <Image
                src="/linkedinlogo.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="cursor-pointer"
              />
              <Image
                src="/instagramlogo.png"
                alt="Instagram"
                width={40}
                height={40}
                className="cursor-pointer"
              />
              <Image
                src="/twitterlogo.png"
                alt="Twitter"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Links Grid */}
          <div className=" flex flex-col md:grid md:grid-cols-3 gap-8 lg:gap-16">
            <ul className="flex flex-col gap-3 text-sm">
              <li className="font-bold text-base mb-1 text-[18px]">
                What we do
              </li>
              <li className="hover:text-[#EF4353] cursor-pointer">
                Sustainability Services
              </li>
              <li className="hover:text-[#EF4353] cursor-pointer">
                Strategy Planning and Implementation{" "}
              </li>
              <li className="hover:text-[#EF4353] cursor-pointer">
                Tech Talent Solutions
              </li>
              <li className="hover:text-[#EF4353] cursor-pointer">
                Training & Development
              </li>
              <li className="hover:text-[#EF4353] cursor-pointer">
                IT Consulting
              </li>
              <li className="hover:text-[#EF4353] cursor-pointer">
                Social Impact{" "}
              </li>
            </ul>

            <ul className="flex flex-col gap-3 text-sm">
              <li className="font-bold text-base mb-1 text-white text-[18px]">
                Company
              </li>
              <li className="hover:text-[#EF4353] cursor-pointer">About</li>
              <li className="hover:text-[#EF4353] cursor-pointer">Jobs</li>
              <li className="hover:text-[#EF4353] cursor-pointer">Projects</li>
              <li className="hover:text-[#EF4353] cursor-pointer">
                Our Founder
              </li>
              <li className="hover:text-[#EF4353] cursor-pointer">
                Business Model{" "}
              </li>
              <li className="hover:text-[#EF4353] cursor-pointer">The Team</li>
              <li className="hover:text-[#EF4353] cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-[#EF4353] cursor-pointer">Blog</li>
              <li className="hover:text-[#EF4353] cursor-pointer uppercase">
                Faqs
              </li>
              <li className="hover:text-[#EF4353] cursor-pointer">
                Testimonials
              </li>
            </ul>

            <ul className="flex flex-col gap-3 text-sm col-span-2 md:col-span-1">
              <li className="font-bold text-base mb-1 text-[18px]">Solution</li>
              <li className="hover:text-[#EF4353] cursor-pointer">
                Tobams Group Academy{" "}
              </li>
              <li className="hover:text-[#EF4353] cursor-pointer">
                Help a Tech Talent
              </li>
              <li className="hover:text-[#EF4353] cursor-pointer">
                Campus Ambassadors Program
              </li>
              <li className="hover:text-[#EF4353] cursor-pointer">
                Join Our Platform
              </li>
              <li className="hover:text-[#EF4353] cursor-pointer">Pricing</li>
              <li className="hover:text-[#EF4353] cursor-pointer">
                Book a Consultation
              </li>
              <li className="hover:text-[#EF4353] cursor-pointer">
                Join Our Slack Community
              </li>
            </ul>
          </div>
        </div>

        {/* Office Locations & Contact */}
        <div className="max-w-7xl mx-auto mt-16 flex flex-col-reverse md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 border-t border-[#323031] pt-10">
          <div>
            <p className="mb-4 font-bold uppercase text-xs tracking-widest text-white">
              Registered Offices
            </p>
            <div>
              <p className="text-[#EF4353] font-semibold mb-1">
                United Kingdom
              </p>
              <p className="text-sm opacity-80">
                07451196 (Registered by Company House) Vine Cottages, 215 North
                Street, Romford, Essex, RM1 4QA
              </p>
            </div>

            <div className="md:border-l border-[#323031] md:pl-8">
              <p className="text-[#EF4353] font-semibold mb-1 mt-6 md:mt-0 lg:mt-8">
                Nigeria
              </p>
              <p className="text-sm opacity-80">
                Vine Cottages, 215 North Street, Romford, Essex, United Kingdom,
                RM1 4QA
              </p>
            </div>
          </div>

          <div className="lg:border-l border-[#323031] lg:pl-8 flex flex-col gap-4">
            <p className="font-bold uppercase text-xs tracking-widest text-white">
              Contact Information
            </p>
            <div className="flex gap-3 items-center text-sm">
              <Image src="/mailicon.png" alt="Email" width={20} height={20} />
              <p>theteam@tobamsgroup.com</p>
            </div>
            <div className="flex gap-3 items-center text-sm">
              <Image src="/phoneicon.png" alt="Phone" width={20} height={20} />
              <p>+447886600748</p>
            </div>
          </div>
        </div>

        <hr className="my-10 border-[#323031]" />

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between gap-6 items-center text-xs md:text-sm text-gray-400">
          <p className="text-center md:text-left">
            Copyright ⓒ Tobams Group, 2024. All rights reserved.
          </p>
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
            <li className="hover:text-white cursor-pointer transition-colors">
              Terms and Conditions
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Cookies Policy
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
