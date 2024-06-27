import Image from "next/image";
import projects from "@/data/projects";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div className="w-10/12 mx-auto mt-20" id="projects">
      <div className="text-center font-inter mb-10">
        <h1 className="text-3xl font-bold mb-2 text-yellow-primary">
          Projects
        </h1>
        <p className="text-base">Explore the project i’ve worked on so far</p>
      </div>

      <div className=" flex flex-wrap justify-start gap-x-8 gap-y-10 mt-5 ">
        {projects.map((project) => (
          <ProjectItem
            image={project.image}
            key={project.name}
            name={project.name}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            skills={project.skills}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
