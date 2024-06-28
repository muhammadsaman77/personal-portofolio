import skillsData from "@/data/skills";
import SkillItem from "./SkillItem";
export default function Skill() {
  return (
    <div className="w-10/12 mx-auto mt-14">
      <h1 className="text-3xl font-bold font-inter mb-3">Skills</h1>
      <div className="mb-5" data-aos="fade-up-right">
        <h2 className="font-inter  font-bold text-yellow-primary mb-3">
          Base Programming
        </h2>

        <div className="grid md:grid-cols-2  grid-cols-5 gap-y-8   ">
          {skillsData.baseProgramming.map((skill) => (
            <SkillItem
              key={skill.name}
              color={skill.color}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </div>
      </div>
      <div className="mb-5" data-aos="fade-up-left">
        <h2 className="font-inter  font-bold text-yellow-primary mb-3">
          Frontend
        </h2>

        <div className="grid md:grid-cols-2  grid-cols-5 gap-y-8 place-content-around">
          {skillsData.frontend.map((skill) => (
            <SkillItem
              key={skill.name}
              color={skill.color}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </div>
      </div>

      <div className="mb-5" data-aos="fade-down-right">
        <h2 className="font-inter  font-bold text-yellow-primary mb-3">
          Backend
        </h2>

        <div className="grid md:grid-cols-2  grid-cols-5 gap-y-8 place-content-around">
          {skillsData.backend.map((skill) => (
            <SkillItem
              key={skill.name}
              color={skill.color}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </div>
      </div>
      <div className="" data-aos="fade-down-left">
        <h2 className="font-inter  font-bold text-yellow-primary mb-3">
          Other Tools
        </h2>

        <div className="grid md:grid-cols-2   grid-cols-5 gap-y-8 place-content-around">
          {skillsData.otherTools.map((skill) => (
            <SkillItem
              key={skill.name}
              color={skill.color}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
