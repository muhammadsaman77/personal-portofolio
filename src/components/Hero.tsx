import Image from "next/image";
import location from "../../public/icons/location.svg";
import available from "../../public/icons/availabel.svg";
import fotoFormal from "../../public/images/foto-formal.png";
export default function Hero() {
  return (
    <section className="mx-auto flex md:gap-7 flex-row md:flex-col md:items-start justify-center w-10/12 items-center mt-20 mb-40 md:mb-16  ">
      <div className="w-8/12 md:w-full" data-aos="fade-right">
        <h2 className="text-3xl md:text-2xl font-bold">
          Hi, I&apos;m {"  "}
          <span className="text-yellow-primary">Muhamad Saman</span>🤫
        </h2>
        <h1 className="text-6xl md:text-5xl font-bold mt-6 mb-8 md:mt-4 md:mb-6">
          <span className="text-yellow-primary">Backend</span> Developer
        </h1>
        <div className="flex gap-4 items-center">
          <Image src={location} alt="location" className="w-[30px] md:w-6" />
          <span className="font-inter text-sm md:text-xs">
            East Borneo, Indonesia
          </span>
        </div>
        <div className="flex gap-4 items-center mt-2  ">
          <Image src={available} alt="available" className="w-[30px] md:w-6" />
          <span className="font-inter text-sm md:text-xs">
            Ready to collaborate on projects
          </span>
        </div>
      </div>
      <Image
        data-aos="fade-left"
        src={fotoFormal}
        alt="MuhammadSaman"
        className="rounded-full w-[330px] md:w-[280px]"
      />
    </section>
  );
}
