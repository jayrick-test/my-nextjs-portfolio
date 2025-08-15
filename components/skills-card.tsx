import { ProgressBar } from "./progress-bar";

type SkillsCardProps = {
  skill: React.ReactNode;
  value: number;
};

export const SkillsCard: React.FC<SkillsCardProps> = ({ skill, value }) => {
  return (
    <div className="p-4 space-y-4">
      <div className="font-bold text-2xl">{skill}</div>
      <ProgressBar value={value} animate />
    </div>
  );
};
