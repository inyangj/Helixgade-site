import React from 'react'
import HelixgadeLayout from '../../layout/HelixgadeLayout'
import { ServiceData, IconData } from './components/ServiceDatas';
import {ServiceCard, IconCard} from './components/ServiceCards';
import {interest} from '../../assets/images';
import { Button } from '../../components/elements';


const Services = () => {
  return (
    <HelixgadeLayout>
      <div className="md:text-center text-primary-blue bg-primary-white pt-[60px] md:pt-[120px] px-4">
        <h1 className="font-semibold text-4xl md:text-5xl">Our Services</h1>
        <p className="pt-[14px] pb-[84px] text-lg md:text-xl ">
          In close partnership with our clients, we design, develop and deploy
          intuitive, reliable and sustainable solutions for both business and
          social purposes.
        </p>
      </div>
      <article className="text-primary-blue my-5 md:my-10 lg:my-20 xl:my-[120px] px-4 md:px-[120.5px] xl:px-[160px]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold ">
          At Helixgade
        </h2>
        <p className="text-lg mt-[14px]">
          As technology partners we help you advance to the next level. Below
          are the things we can do for you.
        </p>
      </article>
      <section className="text-primary-blue px-4 md:px-[120.5px] xl:px-[160px] justify-center grid  md:grid-cols-6 lg:grid-cols-12 ">
        {ServiceData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </section>
      <section className="text-primary-blue px-4 md:px-[120.5px] xl:px-[160px] justify-center flex flex-col text-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-[14px] mt-8 md:mt-20 xl:mt-28">
          Our Practices
        </h3>
        <p className="text-lg mb-8 md:mb-20 xl:mb-28">
          We Deliver world Class standards in what ever we practice.!
        </p>
        <div className="flex  justify-center gap-6 lg:gap-12 mb-8 md:mb-20 xl:mb-28">
          {IconData.map((icon, index) => (
            <IconCard key={index} icon={icon} />
          ))}
        </div>
      </section>
      <section className="my-[120px] mx-[63px] bg-primary-white rounded-lg grid justify-center text-center p-2">
        <img src={interest} alt="interest" className="w-[129px] h-[142px] mx-auto mt-[60px] " />

        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-[14px] mt-8 md:mt-[45px]">
          Interested in working with us?
        </h3>
        <p className="text-lg mb-8 md:mb-[50px]">
          Contact us now and lets turn your ideas into a full Digital product
          that will suit your business needs.
        </p>
        <Button className="mx-auto bg-primary-blue mb-[50px] py-3 px-6 lg:py-6 lg:px-12 ">Get Started</Button>
      </section>
    </HelixgadeLayout>
  );
}

export default Services;