type PageTitle = {
  title: string | React.ReactNode;
};

export const PageTitle = ({ title }: PageTitle) => {
  return (
    <div className="relative block py-48">
      <div className="max-w-3xl relative mx-auto">
        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-300 rounded-full transform -translate-y-1/2 z-0" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white px-6 font-medium text-6xl text-center inline-block">
          {title}
        </div>
      </div>
    </div>
  );
};
