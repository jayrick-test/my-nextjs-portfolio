type PageTitle = {
  title: string | React.ReactNode;
  horizontalLineColor?: string;
};

const TitlePage: React.FC<PageTitle> = ({ title, horizontalLineColor }) => {
  return (
    <section className="relative w-full max-w-3xl mx-auto h-auto bg-inherit">
      <span
        className={`absolute top-1/2 left-0 w-full h-[0.5px] transform -translate-y-1/2 z-0
          ${horizontalLineColor ?? "bg-slate-200"}`}
      />
      <h1 className="relative mx-auto w-fit px-6 py-2 font-bold text-[clamp(2rem,5vw,3.5rem)] text-center z-10 bg-inherit">
        {title}
      </h1>
    </section>
  );
};

export default TitlePage;
