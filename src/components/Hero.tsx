import Image from "next/image";
import location from "../../public/icons/location.svg";
import available from "../../public/icons/availabel.svg";
import fotoFormal from "../../public/images/foto-formal.png";
export default function Hero() {
  return (
    <section className="mx-auto  flex justify-center w-10/12 items-center mt-20 mb-40  ">
      <div className="w-8/12" data-aos="fade-right">
        <h2 className="text-3xl font-bold">
          Hi Dude, I&apos;m {"  "}
          <span className="text-yellow-primary">Muhamad Saman</span>🤫
        </h2>
        <h1 className="text-6xl font-bold mt-6 mb-8">
          <span className="text-yellow-primary">Backend</span> Developer
        </h1>
        <div className="flex gap-4 items-center">
          <Image src={location} alt="location" width={30} />
          <span className="font-inter text-sm">East Borneo, Indonesia</span>
        </div>
        <div className="flex gap-4 items-center mt-2  ">
          <Image src={available} alt="available" width={30} />
          <span className="font-inter text-sm">
            Ready to collaborate on projects
          </span>
        </div>
      </div>
      <Image
        data-aos="fade-left"
        src={fotoFormal}
        alt="MuhammadSaman"
        className="rounded-full"
        width={330}
      />
    </section>
  );
}
