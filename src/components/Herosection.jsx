import { Download, Info } from "lucide-react";

const Herosection = () => {
  return (
    <div className="mt-20 flex h-[100vh] flex-col items-center justify-start">
      <h1 className="bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-center text-8xl font-extrabold tracking-wide text-transparent lg:text-[12rem]">
        Mediva
      </h1>
      <p className="mt-5 max-w-4xl text-center text-2xl text-neutral-500">
        Your health, our no. 1 priority
      </p>
      <div className="my-10 flex flex-col justify-center gap-y-10 lg:flex-row lg:gap-x-10">
        <a
          href="#"
          className="mx-3 flex h-[5rem] w-[20rem] items-center justify-center gap-x-5 rounded-full bg-red-600 bg-gradient-to-r px-4 py-3 text-center text-2xl font-bold text-white hover:bg-red-700"
        >
          <Download />
          Download
        </a>
        <a
          href="#"
          className="mx-3 flex h-[5rem] w-[20rem] items-center justify-center gap-x-5 rounded-full border-2 border-red-500 bg-gradient-to-r px-4 py-3 text-center text-2xl font-bold text-red-500 hover:bg-red-400 hover:text-white"
        >
          <Info />
          Information
        </a>
      </div>
    </div>
  );
};

export default Herosection;
