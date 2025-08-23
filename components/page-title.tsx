type PageTitle = {
  title: string | React.ReactNode;
};

const TitlePage: React.FC<PageTitle> = ({ title }) => {
  return (
    <div className="relative w-full max-w-3xl mx-auto h-auto bg-inherit">
      {/* Horizontal line behind the title */}
      <span className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-300 transform -translate-y-1/2 z-0" />

      {/* Title container */}
      <div className="relative mx-auto w-fit px-6 py-2 font-medium text-6xl text-center z-10 bg-inherit">
        {title}
      </div>
    </div>
  );
};

export default TitlePage;
