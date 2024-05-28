import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductCard = () => {
  const [visibleSlides, setVisibleSlides] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleSlides(1); // Mobile
      } else if (width >= 768 && width < 1024) {
        setVisibleSlides(2); // Tablet
      } else if (width >= 1024 && width < 1440) {
        setVisibleSlides(3); // Laptop
      } else {
        setVisibleSlides(4); // Desktop
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const onChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className=" w-full h-full  py-8 mx-4">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        useKeyboardArrows={true}
        selectedItem={activeIndex}
        onChange={onChange}
        showIndicators={true}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const baseClass = "mx-2 cursor-pointer";
          const selectedClass = isSelected ? "text-blue-500" : "text-gray-500";
          return (
            <span
              className={`${baseClass} ${selectedClass}`}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
              &#x2022;
            </span>
          );
        }}
        centerMode={true}
        centerSlidePercentage={100 / visibleSlides}
      >
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`flex  justify-center items-center h-auto px-2  `}
          >
            <div
              className={`text-primary-blue p-5 text-left transition-all rounded-lg duration-500 ${
                activeIndex === index
                  ? "scale-110  w-[651px]"
                  : " w-[400px] opacity-75"
              } `}
              style={{
                width:
                  window.innerWidth >= 1024
                    ? activeIndex === index
                      ? "651px"
                      : "463px"
                    : "auto",
              }}
            >
              <div className="h-[200px] bg-primary-blue"></div>

              <div className="bg-white p-5">
                <h3 className="mb-2">Scahfng.org</h3>
                <p>
                  Sickle Cell Awareness and Health Foundation is a non-profit
                  organization that started in March 2018 as an awareness forum
                  and was incorporated in January 2020. We are driven by two
                  significant objectives: to amplify awareness on Sickle Cell
                  Disorder (SCD) and to ensure that less privileged persons with
                  this disorder have access to quality healthcare.
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCard;
