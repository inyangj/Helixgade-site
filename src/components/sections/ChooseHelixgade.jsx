import React from "react";
import { who, why, client, difference } from "../../assets/icons";

const Datas = [
  {
    icon: who,
    title: "Who We Are",
    desc: `Helixgade is a company that is focused on building people and
            products. We know that there is a better way of representing
            technology.`,
  },
  {
    icon: why,
    title: "Why Us",
    desc: `Helixgade delivers the best of quality in their work. We are
            determined to give our customers innovative solutions using
            21st-century methodologies with perpetuity.`,
  },
  {
    icon: difference,
    title: "Our Difference",
    desc: `We are driven by the passion to give our customers the best,
            guaranteeing that their projects are handled efficiently and
            effectively.`,
  },
  {
    icon: client,
    title: "Client-Centric Approach",
    desc: `In close partnership with our clients, we design, develop and
            deploy intuitive, reliable and sustainable solutions for both
            business and social purposes.`,
  },
];

const ChooseHelixgade = () => {
  return (
    <div className="md:text-center text-primary-blue  bg-primary-white pt-[60px] md:pt-[120px] px-4">
      <h1 className="font-semibold text-4xl md:text-5xl">
        Why Choose Helixgade?
      </h1>
      <p className="pt-[14px] pb-[84px] text-lg md:text-xl">
        We strive for perfection in everything we do, ranging from development
        to deployment.
      </p>
      <aside className="flex flex-wrap gap-8 justify-between items-center px-5 xl:px-[160px]">
        {Datas.map((data, index) => (
          <div
            key={index}
            className="flex w-fit flex-col gap-5 md:gap-10 px-4 py-5 md:px-8 md:py-10 xl:min-w-[500px]"
          >
            <div className="flex gap-5 items-center">
              <img
                src={data.icon}
                className="w-[50px] md:w-16 h-[50px] md:h-16 m-2"
                alt="icon"
              />
              <h3 className="text-xl md:text-3xl whitespace-nowrap font-semibold">
                {data.title}
              </h3>
            </div>
            <div className="min-h-[120px]">
              <p className="md:text-lg text-left w-[300px] md:w-[370px]">
                {data.desc}
              </p>
            </div>
          </div>
        ))}
       
      </aside>
    </div>
  );
};

export default ChooseHelixgade;
