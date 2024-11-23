interface Loaderops {
  // TODO: add props
  text: string;
}

const Loader: React.FC<Loaderops> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="loader"></div>
      <h1>{text}</h1>
    </div>
  );
};

export default Loader;
