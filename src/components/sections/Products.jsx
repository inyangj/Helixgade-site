import React from "react";
import ProductCard from "./ProductCard";

const projectData = [
  {
    id: 1,
    title: "Scahfng.org",
    description:
      "Sickle Cell Awareness and Health Foundation is a non-profit organization that started in March 2018 as an awareness forum and was incorporated in January 2020. We are driven by two significant objectives: to amplify awareness on Sickle Cell Disorder (SCD) and to ensure that less privileged persons with this disorder have access to quality healthcare.",
    shortDescription:
      "Sickle Cell Awareness and Health Foundation is a non-profit organization that started in March 2018 as an awareness forum and was incorporated in January 2020. We are driven by two significant objectives: to amplify awareness...",
  },
  {
    id: 2,
    title: "Scahfng.org",
    description:
      "Sickle Cell Awareness and Health Foundation is a non-profit organization that started in March 2018 as an awareness forum and was incorporated in January 2020. We are driven by two significant objectives: to amplify awareness on Sickle Cell Disorder (SCD) and to ensure that less privileged persons with this disorder have access to quality healthcare.",
    shortDescription:
      "Sickle Cell Awareness and Health Foundation is a non-profit organization that started in March 2018 as an awareness forum and was incorporated in January 2020. We are driven by two significant objectives: to amplify awareness...",
  },
  {
    id: 3,
    title: "Scahfng.org",
    description:
      "Sickle Cell Awareness and Health Foundation is a non-profit organization that started in March 2018 as an awareness forum and was incorporated in January 2020. We are driven by two significant objectives: to amplify awareness on Sickle Cell Disorder (SCD) and to ensure that less privileged persons with this disorder have access to quality healthcare.",
    shortDescription:
      "Sickle Cell Awareness and Health Foundation is a non-profit organization that started in March 2018 as an awareness forum and was incorporated in January 2020. We are driven by two significant objectives: to amplify awareness...",
  },

];

const ProductSec = () => {
  return (
    <div className="bg-blue-50 text-primary-blue min-h-screen flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-4">Product Creek</h1>
      <p className="text-center max-w-4xl mb-8">
        Product Creek is an inclusive haven where impassioned individuals
        synergize their expertise to meticulously dissect societal dilemmas,
        cultivate ingenious remedies, and galvanize transformative endeavors,
        epitomizing a steadfast dedication to perpetual evolution and profound
        societal betterment.
      </p>
      <div className="flex justify-center space-x-8 mb-8">
        <div className="flex flex-col justify-center ">
          <div className="flex flex-col items-center rounded-full border w-fit border-primary-blue p-0 self-center">
            <p className="text-2xl font-bold bg-primary-blue  m-1 text-white pit">
              20+
            </p>
          </div>

          <span className="text-lg">Project Done</span>
        </div>
        <div className="flex flex-col justify-center ">
          <div className="flex flex-col items-center rounded-full border w-fit border-primary-blue p-0 self-center">
            <p className="text-2xl font-bold bg-primary-blue  m-1 text-white px-5 py-5 rounded-full">
              17+
            </p>
          </div>

          <span className="text-lg">Satisfied clients</span>
        </div>
        <div className="flex flex-col justify-center ">
          <div className="flex flex-col items-center rounded-full border w-fit border-primary-blue p-0 self-center">
            <p className="text-2xl font-bold bg-primary-blue  m-1 text-white pit">
              20+
            </p>
          </div>

          <span className="text-lg">Project Done</span>
        </div>
      </div>
     <ProductCard projectData={projectData} />
    </div>
  );
};

export default ProductSec;
