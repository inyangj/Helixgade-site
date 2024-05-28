
import { ayo, dabota, joy } from "../../assets/images";
import TestimonialCards from "./TestimonialCard";

const testimonials = [
  {
    name: "Dabota",
    topic: "Helixgade has been A Pivotal Partner in Our Success Story!",
    title: "CEO of Scafhng.org",
    text: "Helixgade has been an ideal partner with our business. Their ability to work within our budget, adjust to our ever-changing product development priorities, and provide innovative and thoughtful solutions has been a large part of our success!",
    image: dabota,
  },
  {
    name: "Ayo",
    topic: "Working with Helixgade was a breeze.",
    title: "Founder of TechPadi",
    text: "My experience with the Helixgade team has been one of a kind. It’s like they know what I am about to say before I say it and they hit the nail on the head and that alone is World class standard!",
    image: ayo,
  },
  {
    name: "JOY",
    topic: "Helixgade has been consistent in delivering service",
    title: "Owner Nesiscos",
    text: "Helixgade has been one of the best partners I have worked with for 2 years and since then, I have never had any reason to call another firm.",
    image: joy,
  },
  {
    name: "Ayo",
    topic: "Working with Helixgade was a breeze.",
    title: "Founder of TechPadi",
    text: "My experience with the Helixgade team has been one of a kind. It’s like they know what I am about to say before I say it and they hit the nail on the head and that alone is World class standard!",
    image: ayo,
  },
  {
    name: "JOY",
    topic: "Helixgade has been consistent in delivering service",
    title: "Owner Nesiscos",
    text: "Helixgade has been one of the best partners I have worked with for 2 years and since then, I have never had any reason to call another firm.",
    image: joy,
  },
  {
    name: "Ayo",
    topic: "Working with Helixgade was a breeze.",
    title: "Founder of TechPadi",
    text: "My experience with the Helixgade team has been one of a kind. It’s like they know what I am about to say before I say it and they hit the nail on the head and that alone is World class standard!",
    image: ayo,
  },
  {
    name: "JOY",
    topic: "Helixgade has been consistent in delivering service",
    title: "Owner Nesiscos",
    text: "Helixgade has been one of the best partners I have worked with for 2 years and since then, I have never had any reason to call another firm.",
    image: joy,
  },
];


const Testimonials = () => {

  return (
    <div className="text-primary-blue py-16 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          What our Clients say About us
        </h2>
        <p className="text-lg mb-16 xl:w-[1001px] mx-auto">
          At Helixgade, we take pride in delivering exceptional digital products
          and services that drive success for our clients. Here's what some of
          our satisfied clients have to say about their experience working with
          us.
        </p>
        
      </div>
      <div>
        <TestimonialCards testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Testimonials;
