import React from 'react'
import HelixgadeLayout from '../../layout/HelixgadeLayout';
import { about } from '../../assets/images';
import { arrow } from '../../assets/icons';
import { AboutData, ValuesData } from './components/AboutData';
import { AboutCard, ValueCard } from './components/AboutCard';
import { Input } from '../../components/elements';
import Newsletter from './components/Newsletter';

const About = () => {
  const about = {
    icon: arrow,
    title: "About Us",
    desc: "We strive for perfection in everything we do, ranging from development to deployment"

  }
  return (
    <HelixgadeLayout>
      <div className="md:text-center text-primary-blue bg-primary-white pt-[60px] md:pt-[120px] px-4">
        <h1 className="font-semibold text-4xl md:text-5xl">About Us</h1>
        <p className="pt-[14px] pb-[84px] text-lg md:text-xl ">
          We strive for perfection in everything we do, ranging from development
          to deployment
        </p>
      </div>
      <article className="text-primary-blue my-5 md:my-10 lg:my-20 xl:my-[120px] px-4 md:px-[120.5px] xl:px-[160px] lg:flex flex-row-reverse justify-between items-center gap-[100px]">
        <div className="lg:w-full">
          <img
            src={about}
            className="md:w-2/3 lg:w-full"
            alt="about hero image"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold ">
            About Helixgade
          </h2>
          <p className="text-lg mt-[14px] lg:w-[652px]">
            Helidgade is a digital product agency that is passionate about
            crafting exceptional digital experiences. We specialize in design,
            engineering, and project management, helping businesses thrive in
            the digital landscape. At Helixgade, we follow a structured and
            collaborative process to ensure the successful delivery of
            exceptional digital products. Our process combines industry best
            practices, creative thinking, and a client-centric approach.
          </p>
        </div>
      </article>
      <section className="text-primary-blue px-4 md:px-[120.5px] xl:px-[160px] justify-center flex flex-col text-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-[14px] mt-8 md:mt-20 xl:mt-28">
          Our Story
        </h3>
        <p className="text-lg mb-8 md:mb-20 xl:mb-28">
          We strive for perfection in everything we do, ranging from development
          to deployment.
        </p>

        <section className="text-primary-blue px-4 justify-center grid md:grid-cols-6 lg:grid-cols-12  ">
          {AboutData.map((about, index) => (
            <AboutCard key={index} about={about} />
          ))}
        </section>
      </section>
      <section className="text-primary-blue px-4 md:px-[120.5px] xl:px-[160px] justify-center flex flex-col text-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-[14px] mt-8 md:mt-20 xl:mt-28">
          Our Values
        </h3>
        <p className="text-lg mb-8 md:mb-20 xl:mb-28">
          We strive for perfection in everything we do, ranging from development
          to deployment.
        </p>





        <section className="text-primary-blue px-4 justify-center grid md:grid-cols-6 lg:grid-cols-12  ">
          {ValuesData.map((about, index) => (
            <ValueCard key={index} about={about} />
          ))}
        </section>
      </section>

     <Newsletter />
    </HelixgadeLayout>
  );
}

export default About;