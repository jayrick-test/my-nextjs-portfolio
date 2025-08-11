type DetailsCardProps = {
  icon: React.ReactNode;
  title: string;
  data: React.ReactNode;
};

const DetailsCard: React.FC<DetailsCardProps> = ({ icon, title, data }) => {
  return (
    <div className="group cursor-pointer hover:bg-green-300 border border-green-300 rounded-xl p-6 space-y-4 max-w-2xs w-full transition-colors duration-100">
      <div className="text-green-300 group-hover:text-white transition-colors duration-100">
        {icon}
      </div>
      <div className="font-bold text-lg">{title}</div>
      <div className="text-slate-500">{data}</div>
    </div>
  );
};

export default DetailsCard;
