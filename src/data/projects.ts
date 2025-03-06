import { SkillType } from "./skills";
import tailwind from "../../public/icons/tailwind.svg";
import react from "../../public/icons/reactjs.svg";
import laravel from "../../public/icons/laravel (2).svg";
import inertia from "../../public/icons/inertiaa.svg";
import typescript from "../../public/icons/typescript.svg";
import express from "../../public/icons/express.svg";
import postgree from "../../public/icons/postgresql.svg";
import prisma from "../../public/icons/prisma_kali.svg";
import mysql from "../../public/icons/mysql.svg";
import nodejs from "../../public/icons/nodejs.svg";
import semiotika from "../../public/images/semiotika.png";
import meraih from "../../public/images/Meraih.webp";
import siti from "../../public/images/siti.png";
import mongodb from "../../public/icons/mongodb (2).svg";
import redux from "../../public/icons/redux.svg";
import mobileLegend from "../../public/images/mobile-legend.png";
import incare from "../../public/images/incare.png";
import golang from "../../public/icons/golang.svg";
import flutter from "../../public/icons/flutter.svg";
import karyaBerdaya from "../../public/images/karyaberdaya.jpg";
import bootstrap from "../../public/icons/bootstrap.svg";
import reserva from "../../public/images/reserva.jpg";
import midtrans from "../../public/icons/midtrans.jpg";
import django from "../../public/icons/django.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
export type ProjectType = {
  name: string;
  description: string;
  image: StaticImport;
  githubUrl: string | null;
  liveUrl: string | null;
  skills: Omit<SkillType, "color">[];
};
const projects: ProjectType[] = [
  {
    name: "E-Commerce Application Karya Berdaya",
    description:
      "Created a marketplace for merchandise by people with disabilities, promoting economic independence. Developed key features and delivered API endpoints for seamless integration with front-end and mobile apps.",
    githubUrl: null,
    liveUrl: null,
    image: karyaBerdaya,
    skills: [
      {
        name: "Django",
        icon: django,
      },
      {
        name: "Bootstrap",
        icon: bootstrap,
      },
      {
        name: "MySQL",
        icon: mysql,
      },
    ],
  },
  {
    name: "Hotel Booking Application Reserva",
    description:
      "Developed a platform for searching, checking availability, and booking hotel rooms online with a user-friendly interface. Integrated room management, booking schedules, and payment systems for efficiency.",
    githubUrl: "https://github.com/muhammadsaman77/reserva-mobile",
    liveUrl: null,
    image: reserva,
    skills: [
      {
        name: "Flutter",
        icon: flutter,
      },
      {
        name: "Express.js",
        icon: express,
      },
      {
        name: "Midtrans",
        icon: midtrans,
      },
    ],
  },
  {
    name: "SIM Teknik Industri ITK",
    description:
      "Practical work and final assignment management website for the ITK Industrial Engineering study program with features for registration, assessment, generating event news, guidance, and data recapitulation related to practical work and final assignments.",
    githubUrl: "https://github.com/muhammadsaman77/semiotika-2023",
    image: siti,
    liveUrl: null,
    skills: [
      {
        name: "Laravel 10",
        icon: laravel,
      },
      {
        name: "Inertia.js",
        icon: inertia,
      },
      {
        name: "React",
        icon: react,
      },
      {
        name: "Tailwind",
        icon: tailwind,
      },
      {
        name: "MySQL",
        icon: mysql,
      },
    ],
  },
  {
    name: "API Meraih Application",
    description:
      "Development of the Meraih Application API (HR Management) based on mobile (employees) and website (owners and managers) with attendance features, management of various submissions and various recapitulation of data regarding employees.",
    githubUrl: "https://github.com/muhammadsaman77/semiotika-2023",
    liveUrl: null,
    image: meraih,
    skills: [
      {
        name: "Typescript",
        icon: typescript,
      },
      {
        name: "Express",
        icon: express,
      },
      {
        name: "Node.js",
        icon: nodejs,
      },
      {
        name: "PostgreSQL",
        icon: postgree,
      },
      {
        name: "Prisma",
        icon: prisma,
      },
    ],
  },
  {
    name: "Incare (Mental Care)",
    description:
      "Developing a website-based mental health consultation application with counselor message features, sharing stories in forums, as well as various other features with various consultation methods such as chat in app, zoom, and meet.",
    githubUrl: "https://github.com/muhammadsaman77/semiotika-2023",
    liveUrl: "https://incare-frontend.vercel.app/",
    image: incare,
    skills: [
      {
        name: "React",
        icon: react,
      },
      {
        name: "Tailwind",
        icon: tailwind,
      },
      {
        name: "Redux",
        icon: redux,
      },
      {
        name: "Node.js",
        icon: nodejs,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "Express.js",
        icon: express,
      },
    ],
  },
  {
    name: "Mock API Mobile Legend",
    description:
      "Developing a simple mobile legend clone API using Go Fiber and a MySQL database is a big task with the topic of implementing native query management (store procedures, views, transactions, etc.) into a restful API. ",
    githubUrl: "https://github.com/muhammadsaman77/mobile-legend-api-go",
    image: mobileLegend,
    liveUrl: null,
    skills: [
      {
        name: "Go",
        icon: golang,
      },
      {
        name: "MySQL",
        icon: mysql,
      },
    ],
  },
  {
    name: "Semiotika 2023",
    description:
      "The official landing page website for the National Information Technology and Mathematics Seminar event or usually called SEMIOTIKA which will be held by the Kalimantan Institute of Technology in 2023",
    githubUrl: "https://github.com/muhammadsaman77/semiotika-2023",
    liveUrl: "https://semiotika.itk.ac.id/",
    image: semiotika,
    skills: [
      {
        name: "React",
        icon: react,
      },
      {
        name: "Tailwind",
        icon: tailwind,
      },
    ],
  },
];

export default projects;
