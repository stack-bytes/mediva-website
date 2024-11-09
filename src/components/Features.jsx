import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 min-h-[800px]">
      <div className="text-center">
        <span className="h-6 rounded-full bg-white px-2 py-1 text-sm font-medium uppercase text-red-500">
          Features
        </span>
        <h2 className="mt-10 text-xl tracking-wide text-neutral-700 sm:text-3xl lg:mt-10 lg:text-3xl">
          Mediva va pune la dispozitie:
        </h2>
      </div>
      <div className="mt-10 flex flex-wrap lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="mx-6 flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 text-red-500">
                {feature.icon}
              </div>
              <div>
                <h5 className="mb-6 mt-1 text-xl">{feature.text}</h5>
                <p className="text-md mb-20 p-2 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
