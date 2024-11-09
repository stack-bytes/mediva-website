import { Download, Info } from "lucide-react";
import {Logo} from "../assets/logo.png"
const Herosection = () => {
  return (
    <div className="mt-40 flex flex-col items-center h-[100vh] justify-start">
      <img src="public/logo.png" width={100} height={100}/>
      <h1 className="bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-center lg:text-[12rem] text-8xl font-extrabold tracking-wide text-transparent">
        Mediva
      </h1>
      <p className="mt-5 max-w-4xl text-center text-2xl text-neutral-500">
        Your health, our no. 1 priority
      </p>
      <div className="my-10 flex justify-center lg:flex-row flex-col lg:gap-x-10 gap-y-10">
        <a
          href="#"
          className="mx-3 rounded-md  gap-x-5 bg-gradient-to-r bg-red-500 text-white hover:bg-red-600 px-4 py-3 text-2xl w-[20rem] h-[5rem] text-center flex items-center justify-center font-bold"
        >
          <Download/>
          Download
        </a>
        <a
          href="#"
          className="mx-3 rounded-md  gap-x-5 bg-gradient-to-r border-2 border-red-500 text-red-500 hover:bg-red-400  hover:text-white px-4 py-3 text-2xl w-[20rem] h-[5rem] text-center flex items-center justify-center font-bold"
        >
          <Info/>
          Information
        </a>
      </div>
    </div>
  );
};

export default Herosection;
