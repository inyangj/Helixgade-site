import React from "react";
import {
  goo,
  kd,
  bamboo,
  bluechip,
  andela,
  interswitch,
} from "../../assets/icons";

const Partners = () => {
  const icons = [goo, andela, interswitch, bluechip, bamboo, kd];

  return (
    <div className="relative overflow-hidden mb-16 md:mb-32">
      <div className="flex animate-scroll space-x-4 w-max">
        {icons.concat(icons, icons).map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`partner-${index}`}
            className="h-24 w-24 lg:w-52 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
