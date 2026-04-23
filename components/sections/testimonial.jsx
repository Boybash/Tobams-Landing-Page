"use client";

import Image from "next/image";
import Button from "../ui/button";
import { useState } from "react";

export default function Testimonial() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const testimonials = [
    {
      name: "Aisha Yusuf",
      image: "/TestimonialImage1.png",
      title: "Founder, CraftHub NG",
      testimonial:
        "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    },
    {
      name: "John Davies",
      image: "/TestimonialImage2.png",
      title: "Marketing Manager, E-Commerce Emporium",
      testimonial:
        "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    },
    {
      name: "Chinonso Nwankwo",
      image: "/TestimonialImage3.png",
      title: "HR Director, FutureTech Solutions",
      testimonial:
        "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    },
  ];

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = testimonials.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <main className="px-4 py-10">
      {/* Call to Action Section */}
      <div className="flex flex-col items-center gap-6 md:gap-10 bg-[#571244] w-full max-w-[1134px] p-6 md:p-10 rounded-md mx-auto text-center">
        <div>
          <h1 className="text-white text-lg md:text-[20px] font-semibold leading-tight">
            Want to accelerate professional growth and development at your
            organisation?
          </h1>
          <h2 className="text-white text-lg md:text-[20px] font-semibold mt-2">
            See how we can help.
          </h2>
        </div>
        <Button className="px-6 py-2.5 text-[#571244] bg-white rounded-md w-fit font-medium hover:bg-gray-100 transition-colors">
          Book a Consultation
        </Button>
      </div>

      {/* Testimonials Section */}
      <div className="my-16 max-w-7xl mx-auto">
        <h1 className="text-center text-3xl md:text-[40px] font-bold text-[#151515] mb-8">
          Testimonials
        </h1>

        {/* Responsive Grid: 2 cols on tablet, 3 cols on desktop */}
        <div className=" hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 px-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 bg-white p-6 rounded-md shadow-sm border-l-[3px] border-[#EF4353] h-full"
            >
              <div className="flex gap-3 items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h2 className="text-[16px] text-black font-semibold leading-none">
                    {testimonial.name}
                  </h2>
                  <p className="text-[#696969] text-[13px] mt-1">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              <p className="text-[#151515] text-[15px] leading-relaxed">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
        {/* Responsive Grid: For Mobile */}
        <div className="grid grid-cols-1 md:hidden gap-6 mb-10 px-2">
          {currentItems.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 bg-white p-6 rounded-md shadow-sm border-l-[3px] border-[#EF4353] h-full"
            >
              <div className="flex gap-3 items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h2 className="text-[16px] text-black font-semibold leading-none">
                    {testimonial.name}
                  </h2>
                  <p className="text-[#696969] text-[13px] mt-1">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              <p className="text-[#151515] text-[15px] leading-relaxed">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4 justify-end mr-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`transition-opacity ${currentPage === 1 ? "opacity-20 cursor-not-allowed" : "hover:opacity-60"} ${currentPage === totalPages ? "opacity-20 cursor-not-allowed" : "hover:opacity-60"}`}
          >
            <Image
              src="/arrow-left.png"
              alt="previous"
              width={32}
              height={32}
            />
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`transition-opacity ${currentPage === totalPages ? "opacity-20 cursor-not-allowed" : "hover:opacity-60"}`}
          >
            <Image src="/arrow-right.png" alt="next" width={32} height={32} />
          </button>
        </div>
      </div>
    </main>
  );
}
