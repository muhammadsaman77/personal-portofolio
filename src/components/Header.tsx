import Image from "next/image";
import download from "../../public/icons/iconoir--download.svg";

export default function Header() {
  return (
    <header className="w-10/12 mx-auto  flex justify-between items-center mt-1">
      <h1 className="text-2xl font-extrabold text-yellow-primary">{"<MS/>"}</h1>
      <div className="flex items-center gap-10">
        <div className="flex gap-16 text-sm">
          <a href="#" className="hover:text-yellow-primary">
            Home
          </a>
          <a href="#" className="hover:text-yellow-primary">
            About
          </a>
          <a href="#" className="hover:text-yellow-primary">
            Skills
          </a>
          <a href="#" className="hover:text-yellow-primary">
            Projects
          </a>
          <a href="#" className="hover:text-yellow-primary">
            Contact
          </a>
        </div>
        <a
          type="button"
          href="/pdf/CV_Muhamad Saman (2).pdf"
          target="_blank"
          className=" bg-yellow-primary rounded-lg px-2 py-2 font-semibold flex items-center   text-sm text-slate-800 font-inter"
        >
          <Image src={download} alt="download" width={24} /> Download CV
        </a>
      </div>
    </header>
  );
}
