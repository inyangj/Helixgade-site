import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialCards = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1444,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="ml-6">
      <Slider {...settings}>
        {testimonials?.map((testimonial, index) => (
          <div key={index} className="lg:max-w-[520px] p-4 ">
            <div className=" lg:min-h-56 ">

            <h4 className="text-lg md:text-xl font-semibold text-left mb-5">
              {testimonial?.topic}
            </h4>
            <p className="mb-4 text-left">{testimonial?.text}</p>
            </div>
            <div className="flex items-center bg-primary-white rounded-md p-2 justify-between md:mt-4">
              <div className="flex items-center mt-auto">
                <img
                  src={testimonial?.image}
                  alt={testimonial?.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="text-left">
                  <p className="font-bold">{testimonial?.name}</p>
                  <p className="text-sm">{testimonial?.title}</p>
                </div>
              </div>
              <button className="bg-primary-blue text-white py-2 px-4 rounded">
                Open Website
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCards;
