import React from 'react'

export const ServiceCard = ({service}) => {
  return (
    <div className="flex   w-fit flex-col px-4 py-5 md:px-8 md:py-10 lg:px-12 lg:py-14 md:col-span-5 lg:col-span-6  xl:col-span-4">
      <img src={service.icon} className="w-[80px] h-[80px] m-2" alt="icon" />
      <h3 className="text-3xl font-semibold mt-10 mb-5">{service.title}</h3>
      <p className="text-lg w-[300px] md:w-[370px]">{service.desc}</p>
    </div>
  );
}

 
export const IconCard = ({ icon }) => {
  return (
    <div>
      <img src={icon.icon} className="w-[80px] h-[80px] m-2" alt="icon" />
      <h4 className="text-xl font-semibold">{icon.title}</h4>
    </div>
  );
};