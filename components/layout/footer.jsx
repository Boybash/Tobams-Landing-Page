import Image from "next/image";
import Button from "../ui/button";

export default function Footer() {
  return (
    <>
      <div className="bg-[#1D0617] w-full max-w-full flex items-center justify-between px-20 py-5 text-white m-auto">
        <span>
          <p className="mb-3 text-[18px]">
            Ready to be a part of something extraordinary?
          </p>
          <h1 className="text-[32px]">
            Let’s work together to create a difference
          </h1>
        </span>
        <span>
          <Button className="px-4 py-2.5 text-white bg-[#571244] rounded-md">
            Get In Touch
          </Button>
        </span>
      </div>
      <hr className=" border-[#323031] w-full" />

      <footer className="flex flex-col items-center justify-between px-10 py-5 w-full m-auto bg-[#11040E] ">
        <div className="flex  justify-between gap-40 bg-[#11040E] p-10 w-full max-w-full m-auto">
          <div className="flex flex-col gap-6 w-[356px]">
            <Image src="/TobamsLogo.png" alt="Logo" width={165} height={64} />
            <span className="text-white">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </span>
            <span className="flex gap-4">
              <Image
                src="/linkedinlogo.png"
                alt="Logo"
                width={30}
                height={30}
              />
              <Image
                src="/instagramlogo.png"
                alt="Logo"
                width={30}
                height={30}
              />
              <Image src="/twitterlogo.png" alt="Logo" width={30} height={30} />
            </span>
          </div>

          <ul className="flex flex-col gap-2 text-white text-left">
            <li className="font-semibold">What we do</li>
            <li>Sustainability Services</li>
            <li>Strategy Planning and Implementation</li>
            <li>Tech Talent Solutions</li>
            <li>Training and Development</li>
            <li>IT Consulting Services</li>
            <li>Social Impact</li>
            <li>Talent Recruitment</li>
          </ul>

          <ul className="flex flex-col gap-2 text-white text-left">
            <li className="font-semibold">Company</li>
            <li>About</li>
            <li>Projects</li>
            <li>Our Founder</li>
            <li>Business Model</li>
            <li>The Team</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Testimonials</li>
          </ul>

          <ul className="flex flex-col gap-2 text-white text-left">
            <li className="font-semibold">Solution</li>
            <li>Tobams Group Academy</li>
            <li>Help a Tech Talent</li>
            <li>Campus Ambassadors Program</li>
            <li>Join Our Platform</li>
            <li>Pricing</li>
            <li>Book a Consultation</li>
            <li>Join Our Slack Community</li>
          </ul>
        </div>

        <div className="flex justify-between gap-30 mt-10 ">
          <div className="flex  ">
            <div className="flex justify-between gap-20">
              <div className="flex flex-col w-[410px]">
                <p className="mb-3 font-semibold">Registered Offices</p>
                <div>
                  <span>
                    <p className="text-[#EF4353]">United Kingdom</p>
                    <p>
                      07451196 (Registered by Company House) Vine Cottages, 215
                      North Street, Romford, Essex, United Kingdom, RM1 4QA
                    </p>
                  </span>
                </div>
              </div>

              <div className="border-l-2 border-[#323031] h-20 mt-10"></div>

              <span className=" w-[417px] mt-8">
                <p className="text-[#EF4353]">Nigeria</p>
                <p>
                  07451196 (Registered by Company House) Vine Cottages, 215
                  North Street, Romford, Essex, United Kingdom, RM1 4QA
                </p>
              </span>
            </div>
          </div>

          <div className="flex gap-10 text-left">
            <div className="border-l-2 border-[#323031] h-20 mt-10"></div>
            <div>
              <p className="mb-5 font-semibold">Contact Information</p>

              <span className="flex gap-2 items-center">
                <Image
                  src="/mailicon.png"
                  alt="mail icon"
                  width={30}
                  height={30}
                />
                <p>theteam@tobamsgroup.com</p>
              </span>
              <span className="flex gap-2 items-center">
                <Image
                  src="/phoneicon.png"
                  alt="phone icon"
                  width={30}
                  height={30}
                />
                <p>+447886600748</p>
              </span>
            </div>
          </div>
        </div>

        <hr className="my-5 border-[#323031] w-full" />

        <div className="flex justify-between gap-5 items-center w-full max-w-full m-auto">
          <p>Copyright ⓒ Tobams Group, 2024. All rights reserved.</p>
          <ul className="flex gap-5">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
