import React from 'react'
import { interest } from '../../../assets/images';
import {Button} from '../../../components/elements';

const Interest = () => {
  return (
    <section className="my-[120px]  md:mx-[63px] bg-primary-white rounded-lg grid justify-center text-center p-2">
      <img
        src={interest}
        alt="interest"
        className="w-[129px] h-[142px] mx-auto mt-[60px] "
      />

      <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-[14px] mt-8 md:mt-[45px]">
        Interested in working with us?
      </h3>
      <p className="text-lg mb-8 md:mb-[50px]">
        Contact us now and lets turn your ideas into a full Digital product that
        will suit your business needs.
      </p>
      <Button className="mx-auto bg-primary-blue mb-[50px] py-3 px-6 lg:py-6 lg:px-12 ">
        Get Started
      </Button>
    </section>
  );
}

export default Interest