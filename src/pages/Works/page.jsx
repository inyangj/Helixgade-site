import React, { useState } from "react";
import HelixgadeLayout from "../../layout/HelixgadeLayout";
import { down } from "../../assets/icons";
import Interest from "../Servicess/components/Interest";
import { workData } from "./components/WorkDatas";
import WorkCard from "./components/WorkCard";
import ChooseHelixgade from "../../components/sections/ChooseHelixgade";

const Works = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

 const toggleModal = (e) => {
   setIsModalOpen(!isModalOpen);
   if (e && e.target) {
     const rect = e.target.getBoundingClientRect();
     const viewportHeight = window.innerHeight;
     const viewportWidth = window.innerWidth;
     const modalHeight = 250; // Adjust as needed
     let top = rect.bottom + window.scrollY;
     let left = rect.left + window.scrollX;

     // Centralize modal on mobile screens
     if (viewportWidth <= 640) {
       left = (viewportWidth - 100) / 2;
       top = (viewportHeight - modalHeight) / 2; // Adjust 300 based on modal width
     }

     setModalPosition({
       top: top + modalHeight > viewportHeight ? top - modalHeight : top,
       left: left,
     });
   }
 };


  const closeModal = () => {
    setIsModalOpen(false);
  };

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

        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <p className="cursor-pointer bg-primary-blue text-sm lg:text-base whitespace-nowrap text-white lg:text-white px-4 py-2 rounded">
            Here are examples of our notable works:
          </p>
          <p
            onClick={toggleModal}
            className="flex gap-2 items-center justify-between border border-primary-blue text-sm lg:text-base whitespace-nowrap px-3 lg:px-4 py-2 rounded font-medium"
          >
            <span>Filter by Category </span> <img src={down} alt="icon" />
          </p>
        </div>
      </article>
      <section className="text-primary-blue my-5 md:my-10 lg:my-20 xl:my-[120px] px-4 md:px-[120.5px] xl:px-[160px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
        {workData.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </section>
      <ChooseHelixgade />
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg modal-content min-w-[350px] "
            style={{
              position: "fixed",
              top: modalPosition.top,
              left: modalPosition.left,
              transform: "translate(-50%, -50%)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <p className=" text-primary-blue text-sm md:text-lg font-medium hover:bg-primary-white p-2   md:p-4 ">
              Branding
            </p>
            <p className=" text-primary-blue text-sm md:text-lg font-medium hover:bg-primary-white p-2   md:p-4 ">
              Websites
            </p>
            <p className=" text-primary-blue text-sm md:text-lg font-medium hover:bg-primary-white p-2 py-1  md:p-4 ">
              Mobile Apps
            </p>
            <button onClick={closeModal} className="mt-4">
              Close Modal
            </button>
          </div>
        </div>
      )}
      <Interest />
    </HelixgadeLayout>
  );
};

export default Works;
