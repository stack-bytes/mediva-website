import { ArrowDown, Download, Info } from "lucide-react";

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
          onClick={() => scrollTo({ left: 0, top: 1200, behavior: "smooth" })}
          className="mx-3 flex h-[5rem] w-[20rem] items-center justify-center gap-x-5 rounded-full border-2 border-red-500 bg-gradient-to-r px-4 py-3 text-center text-2xl font-bold text-red-500 hover:bg-red-400 hover:text-white"
        >
          <Info />
          Information
        </a>
        <ArrowDown className="absolute bottom-5" width={50} height={50}  onClick={() => scrollTo({ left: 0, top: 1200, behavior: "smooth" })}/>
        <div class="absolute -left-96 w-[50rem] -top-32 h-[50rem] bg-red-600 blur-3xl opacity-30 rounded-full"></div>
        <div class="absolute -right-96 w-[50rem] -bottom-32 h-[50rem] bg-red-600 blur-3xl opacity-30 rounded-full"></div>
     
      </div>
    </div>
  );
};

export default Herosection;
