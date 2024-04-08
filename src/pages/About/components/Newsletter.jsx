import React from 'react'
import { Input } from '../../../components/elements';
import { arrow } from '../../../assets/icons';

const Newsletter = () => {
  return (
    <section className="my-[120px] mx-[63px] md:py-[120px] bg-primary-white rounded-lg grid justify-center text-center p-2 text-primary-blue">
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-[14px] mt-8 ">
        Newsletter Personalized for You
      </h3>
      <p className="text-lg mb-8 md:mb-[50px]">
        Instant Sign up, anytime. No credit card required.
      </p>
      <Input
        type="text"
        inputClass={` text-primary-blue `}
        coverClass=" bg-white "
        placeholder={"Email Address"}
        className="mx-auto"
      >
        <img src={arrow} alt="submit-icon" />
      </Input>
    </section>
  );
}

export default Newsletter