import { SkillType } from "@/data/skills";
import Image from "next/image";

export default function SkillItem({ name, icon, color }: SkillType) {
  return (
    <div
      className={`flex items-center gap-5 p-2 w-52 font-semibold text-sm font-inter rounded bg-[#101010] border ${color}`}
    >
      <Image src={icon} alt={name} width={50} />
      <span>{name}</span>
    </div>
  );
}
