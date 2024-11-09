const Herosection = () => {
  return (
    <div className="mt-4 flex flex-col items-center">
      <h1 className="bg-gradient-to-r from-red-700 to-red-300 bg-clip-text text-center text-8xl tracking-wide text-transparent">
        Mediva
      </h1>
      <p className="mt-5 max-w-4xl text-center text-2xl text-neutral-500">
        Your health, our no. 1 priority
      </p>
      <div className="my-10 flex justify-center">
        <a
          href="#"
          className="mx-3 rounded-md bg-gradient-to-r from-red-600 to-red-500 px-4 py-3"
        >
          Download
        </a>
        <a
          href="#"
          className="mx-3 rounded-md bg-gradient-to-r from-red-500 to-red-400 px-4 py-3"
        >
          Information
        </a>
      </div>
    </div>
  );
};

export default Herosection;
