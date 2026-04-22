import Image from "next/image";
import Button from "../ui/button";

export default function Testimonial() {
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
    // {
    //   name: "Aisha Yusuf",
    //   image: "/TestimonialImage1.png",
    //   title: "Founder, CraftHub NG",
    //   testimonial:
    //     "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    // },
  ];

  return (
    <main>
      <div className="flex flex-col items-center gap-10 bg-[#571244] w-[1134px] p-10 rounded-md m-auto ">
        <div>
          <h1 className="text-white text-[20px] text-center font-semibold">
            Want to accelerate professional growth and development at your
            organisation?
          </h1>
          <h2 className="text-white text-[20px] text-center font-semibold">
            See how we can help.
          </h2>
        </div>
        <Button className="px-4 py-2.5 text-[#571244] bg-white rounded-md w-fit">
          Book a Consultation
        </Button>
      </div>

      <div className=" my-10">
        <h1 className="text-center text-[40px] font-bold text-[#151515]">
          Testimonials
        </h1>
        <div className="flex justify-between mb-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 bg-[#FFFFFF] w-[422px] p-5 rounded-md m-auto mt-10 border-l-[2px] border-[#EF4353]"
            >
              <div className="flex gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={30}
                  height={10}
                  className="rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <h2 className=" text-[16px] text-black font-semibold">
                    {testimonial.name}
                  </h2>
                  <p className="text-[#696969] text-[14px]">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              <p className="text-[#151515] text-[16px]">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-end mr-12">
          <Image src="/arrow-left.png" alt="arrow" width={32} height={32} />
          <Image src="/arrow-right.png" alt="arrow" width={32} height={32} />
        </div>
      </div>
    </main>
  );
}
