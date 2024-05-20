import React from 'react'

const WorkCard = ({work}) => {
  return (
    <div className="grid gap-3 md:gap-6">
      <img src={work.img} alt="img" />
      <h3 className="text-2xl lg:text-[26px] font-semibold">{work.title}</h3>
      <p className="text-lg">
        {work.desc}
      </p>
      <button className="bg-primary-blue text-white text-lg font-medium  px-4 py-2 rounded w-full">
        learn more
      </button>
    </div>
  );
}

export default WorkCard