export const AboutCard = ({ about }) => {
  return (
    <div className="flex   w-fit flex-col px-4 py-5 md:px-8 md:py-10 lg:px-12 lg:py-14 text-left md:col-span-5 lg:col-span-6  xl:col-span-4">
      <img src={about.icon} className="w-[80px] h-[80px] m-2" alt="icon" />
      <h3 className="text-3xl font-semibold mt-10 mb-5">{about.title}</h3>
      <p className="text-lg w-[300px] md:w-[315px]">{about.desc}</p>
    </div>
  );
};
export const ValueCard = ({ about }) => {
  return (
    <div className="flex hover:bg-primary-white  w-fit flex-col px-4 py-5 md:px-8 md:py-10 lg:px-12 lg:py-[50px] text-left md:col-span-5 lg:col-span-6  xl:col-span-6">
      <img src={about.icon} className="w-[80px] h-[80px] m-2" alt="icon" />
      <h3 className="text-3xl font-semibold mt-10 mb-5">{about.title}</h3>
      <p className="text-lg w-[300px] md:w-[315px] lg:w-[505px]">
        {about.desc}
      </p>
    </div>
  );
};
