import Button from "../ui/button";

export default function Hero() {
  return (
    <main className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(/TobamsheroImage.jpg)] bg-cover bg-center w-full flex flex-col items-center py-[112px] px-[64px]">
      <h1 className="bg-[#00000043] uppercase py-2 px-5 rounded-full mb-3 text-white">
        What we do
      </h1>
      <h2 className="text-center text-[52px] text-white font-bold mb-5">
        Training and Development
      </h2>
      <p className="mb-15 text-center text-[18px] text-white">
        Our comprehensive range of programs and resources is designed to enhance
        skills, broaden knowledge, and propel careers forward in today's
        ever-evolving landscape.
      </p>
      <Button className="px-4 py-2.5 text-white bg-[#571244] rounded-md">
        Book a Consultation
      </Button>
    </main>
  );
}
