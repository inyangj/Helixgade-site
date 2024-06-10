import React from 'react'
import { useNavigate } from "react-router-dom";

const WorkCard = ({work, index}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${index}`);
  };
  return (
    <div className="grid gap-3 md:gap-6">
      <img src={work.img} alt="img" />
      <h3 className="text-2xl lg:text-[26px] font-semibold">{work.title}</h3>
      <div className='lg:min-h-[200px]'>

      <p className="text-lg">
        {work.desc}
      </p>
      </div>
      <button className="bg-primary-blue text-white text-lg font-medium h-fit px-4 py-2 rounded w-full" onClick={handleClick}>
        learn more
      </button>
    </div>
  );
}

export default WorkCard