type ToolsInfoProps = {
  label: string;
  icon: React.ReactNode;
};

export const ToolsInfo: React.FC<ToolsInfoProps> = ({ label, icon }) => {
  return (
    <div className="flex gap-2 items-center">
      {icon}
      <span>{label}</span>
    </div>
  );
};
