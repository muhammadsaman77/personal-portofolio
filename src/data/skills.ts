import HTML from "../../public/icons/html.svg";
import css from "../../public/icons/css.svg";
import javascript from "../../public/icons/js.svg";
import bootstrap from "../../public/icons/bootstrap.svg";
import react from "../../public/icons/reactjs.svg";
import redux from "../../public/icons/redux.svg";
import tailwind from "../../public/icons/tailwind.svg";
import nextjs from "../../public/icons/next-js.svg";
import express from "../../public/icons/express.svg";
import golang from "../../public/icons/golang.svg";
import mysql from "../../public/icons/mysql.svg";
import postgre from "../../public/icons/postgresql.svg";
import mongodb from "../../public/icons/mongodb (2).svg";
import nodejs from "../../public/icons/nodejs.svg";
import redis from "../../public/icons/redis.svg";
import prisma from "../../public/icons/prisma_kali.svg";
import typescript from "../../public/icons/typescript.svg";
import gcp from "../../public/icons/gcp-light.svg";
import aws from "../../public/icons/aws-light.svg";
import githubaction from "../../public/icons/githubactions.svg";
import docker from "../../public/icons/docker.svg";
import git from "../../public/icons/git.svg";
import github from "../../public/icons/github.svg";
import dart from "../../public/icons/dart.svg";
import flutter from "../../public/icons/flutter.svg";
import python from "../../public/icons/python.svg";
import laravel from "../../public/icons/laravel (2).svg";
import inertia from "../../public/icons/inertiaa.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
export type SkillType = {
  name: string;
  icon: StaticImport;
  color: string;
};
const baseProgramming: SkillType[] = [
  {
    name: "HTML",
    icon: HTML,
    color: "#ffffff",
  },
  {
    name: "CSS",
    icon: css,
    color: "#2965F1",
  },
  {
    name: "Javascript",
    icon: javascript,
    color: "#F7DF1E",
  },
  {
    name: "Typescript",
    icon: typescript,
    color: "#F7DF1E",
  },

  {
    name: "Golang",
    icon: golang,
    color: "#F7DF1E",
  },
  {
    name: "Dart",
    icon: dart,
    color: "#F7DF1E",
  },
  {
    name: "Python",
    icon: python,
    color: "#F7DF1E",
  },
];
const frontend = [
  {
    name: "Tailwind",
    icon: tailwind,
    color: "#F7DF1E",
  },
  {
    name: "React",
    icon: react,
    color: "#F7DF1E",
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    color: "#F7DF1E",
  },

  {
    name: "Redux",
    icon: redux,
    color: "#F7DF1E",
  },
  {
    name: "Next.js",
    icon: nextjs,
    color: "#F7DF1E",
  },
  {
    name: "Flutter",
    icon: flutter,
    color: "#F7DF1E",
  },
  {
    name: "Inertia.js",
    icon: inertia,
    color: "#F7DF1E",
  },
];
const backend: SkillType[] = [
  {
    name: "Laravel",
    icon: laravel,
    color: "#F7DF1E",
  },
  {
    name: "Express.js",
    icon: express,
    color: "#F7DF1E",
  },
  {
    name: "Redis",
    icon: redis,
    color: "#F7DF1E",
  },
  {
    name: "MySQL",
    icon: mysql,
    color: "#F7DF1E",
  },
  {
    name: "PostgreSQL",
    icon: postgre,
    color: "#F7DF1E",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    color: "#F7DF1E",
  },
  {
    name: "Node.js",
    icon: nodejs,
    color: "#F7DF1E",
  },

  {
    name: "Prisma.js",
    icon: prisma,
    color: "#F7DF1E",
  },
];
const otherTools = [
  {
    name: "Git",
    icon: git,
    color: "#F7DF1E",
  },
  {
    name: "GitHub",
    icon: github,
    color: "#F7DF1E",
  },
  {
    name: "GitHub Actions",
    icon: githubaction,
    color: "#F7DF1E",
  },
  {
    name: "Docker",
    icon: docker,
    color: "#F7DF1E",
  },
  {
    name: "GCP",
    icon: gcp,
    color: "#F7DF1E",
  },
  {
    name: "AWS",
    icon: aws,
    color: "#F7DF1E",
  },
];
const skillList = {
  baseProgramming,
  frontend,
  backend,
  otherTools,
};
export default skillList;
