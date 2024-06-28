import Image from "next/image";
import fotoAbout from "../../public/images/foto-about.png";
export default function About() {
  return (
    <div
      data-aos="fade-up"
      className="w-10/12 mx-auto  mt-20 bg-[#1D1D1D]  border-yellow-primary   p-10 rounded-xl"
      id="about"
    >
      <div className=" flex gap-20 md:gap-5 md:flex-col-reverse">
        <Image
          src={fotoAbout}
          alt="MuhammadSaman"
          height={350}
          className="rounded-md"
        />
        <div className="w-8/12 md:w-full">
          <h1 className="font-inter text-3xl font-bold  text-white">
            About Me
          </h1>
          <hr className="w-48 border-2 border-yellow-primary rounded-sm" />
          <p className=" font-inter mt-6 text-justify text-sm">
            Hi there! My name is Muhamad Saman, but you can call me Saman. I
            hail from East Kalimantan, Indonesia, and I&apos;m currently a
            third-year student majoring in Informatics at the Kalimantan
            Institute of Technology in Balikpapan.
          </p>
          <p className="text-justify mt-4 font-inter text-sm">
            Technology is my passion, particularly server-side software
            development. I&apos;m a quick learner and always eager to stay
            up-to-date with the latest trends. This love for learning has
            enabled me to master various programming languages and frameworks,
            including Next.js, TypeScript, Golang, and gRPC.
          </p>
          <p className="text-justify mt-4 text-sm">
            Apart from my technical skills, I&apos;m also a team player who
            enjoys collaborating and sharing knowledge. Looking for a team that
            values enthusiasm, a thirst for knowledge, and teamwork? I&apos;m
            your guy!
          </p>
        </div>
      </div>
    </div>
  );
}
