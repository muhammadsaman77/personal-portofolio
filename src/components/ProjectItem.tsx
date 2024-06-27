import Image from "next/image";
import link from "../../public/icons/external-link.svg";
import github from "../../public/icons/github.svg";
import { SkillType } from "@/data/skills";
import { ProjectType } from "@/data/projects";

export default function ProjectItem({
  skills,
  name,
  description,
  liveUrl,
  githubUrl,
  image,
}: ProjectType) {
  return (
    <div
      data-aos="flip-right"
      className="w-[350px] bg-[rgb(29,29,29)] rounded-lg p-5"
    >
      <div className="w-[310px] h-[150px] mb-1">
        <Image src={image} alt={name} className="rounded" />
      </div>
      <h6 className="text-center my-2 text-yellow-primary font-bold text-base  font-inter">
        {name}
      </h6>
      <p className="font-inter  text-xs leading-5 h-24 text-justify mb-5">
        {description}
      </p>
      <div className="flex justify-between">
        <div className="flex gap-1">
          {skills.map((skill: Omit<SkillType, "color">) => (
            <Image
              key={skill.name}
              width={30}
              src={skill.icon}
              alt={skill.name}
            />
          ))}
        </div>
        <div className="flex gap-2 ">
          {liveUrl && (
            <a href={liveUrl} target="_blank">
              <Image width={30} src={link} alt="Link" />
            </a>
          )}

          <a href={githubUrl} target="_blank">
            <Image width={26} src={github} alt="Github" />
          </a>
        </div>
      </div>
    </div>
  );
}
