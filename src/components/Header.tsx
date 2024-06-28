"use client";
import Image from "next/image";
import download from "../../public/icons/iconoir--download.svg";
import { useState } from "react";
import closeIcon from "../../public/icons/mdi--close.svg";
import hamburger from "../../public/icons/charm--menu-hamburger.svg";

export default function Header() {
  const [show, setShow] = useState(false);
  const buttonClass = "md:block hidden" + (show ? "" : "");
  const navMenu =
    "md:mt-5 md:items-start  flex items-center md:gap-4 gap-10 md:flex-col " +
    (show ? "" : "md:hidden");
  return (
    <header className="w-10/12 md:w-full mx-auto  flex justify-between md:items-start md:px-8 md:py-4  items-center  md:mt-0 md:right-0 md:bg-[#101010cb] md:flex-col md:top-0 md:fixed md:z-10">
      <div className="md:flex  md:justify-between md:w-full">
        <h1 className="text-2xl font-extrabold text-yellow-primary">
          {"<MS/>"}
        </h1>
        <button className={buttonClass} onClick={() => setShow(!show)}>
          <span>
            <Image width={24} src={show ? closeIcon : hamburger} alt="menu" />
          </span>
        </button>
      </div>
      <div className={navMenu}>
        <div className="flex gap-16 md:gap-8 text-sm md:flex-col ">
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
