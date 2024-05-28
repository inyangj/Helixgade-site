import React from "react";
import { workData } from "./WorkDatas";
import WorkCard from "./WorkCard";


const WorkList = ({ limit }) => {
  const limitedWorkData = limit ? workData.slice(0, limit) : workData;

  return (
    <aside className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 text-left">
      {limitedWorkData.map((work, index) => (
        <WorkCard key={index} work={work} />
      ))}
    </aside>
  );
};

export default WorkList;
