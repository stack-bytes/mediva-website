import hartaImg from "../assets/harta.png";
import simptomImg from "../assets/simptome.png";
import doctorImg from "../assets/doctor.png";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="mt-6 text-center text-3xl tracking-wide sm:text-5xl lg:text-6xl">
        Your health,
        <span className="bg-gradient-to-r from-red-700 to-red-400 bg-clip-text text-transparent">
          {" "}
          faster!
        </span>
      </h2>
      <div className="ml-8 mt-20 flex flex-wrap justify-center px-4">
        <div className="w-full p-2 lg:w-1/3">
          <img src={hartaImg} alt="Code" />
        </div>

        <div className="w-full p-2 lg:w-1/3">
          <img src={simptomImg} alt="Code" />
        </div>

        <div className="w-full p-2 lg:w-1/3">
          <img src={doctorImg} alt="Code" />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
