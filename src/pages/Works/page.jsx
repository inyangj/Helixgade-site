import React from 'react'
import HelixgadeLayout from '../../layout/HelixgadeLayout'

const Works = () => {
  return (
    <HelixgadeLayout>
      <div className="md:text-center text-primary-blue bg-primary-white pt-[60px] md:pt-[120px] px-4">
        <h1 className="font-semibold text-4xl md:text-5xl">Our Works</h1>
        <p className="pt-[14px] pb-[84px] text-lg md:text-xl ">
          Discover a portfolio of visually stunning and strategically crafted
          digital projects that showcase our creativity and expertise.
        </p>
      </div>
      <article className="text-primary-blue my-5 md:my-10 lg:my-20 xl:my-[120px] px-4 md:px-[120.5px] xl:px-[160px]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold ">
          At Helixgade
        </h2>
        <p className="text-lg mt-[14px] mb-6 md:mb-10 xl:mb-12">
          We have had the privilege of working with a diverse range of clients
          and delivering exceptional digital products that drive success.
        </p>

        <div>
          
        </div>
      </article>
    </HelixgadeLayout>
  );
}

export default Works;