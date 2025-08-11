type PageTitle = {
  title: string | React.ReactNode;
};

const TitlePage: React.FC<PageTitle> = ({ title }) => {
  return (
    <div className="max-w-3xl relative mx-auto max-h-fit h-auto">
      <span className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-300 rounded-full transform -translate-y-1/2 z-0" />
      <div className="relative mx-auto w-fit bg-white px-6 font-medium text-6xl text-center">
        {title}
      </div>
    </div>
  );
};

export default TitlePage;
