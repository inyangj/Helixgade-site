import React from "react";
import { logo2, facebook, twitter, instagram, linkedin } from "../../assets/icons";

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-primary-white  p-4 md:p-8 lg:px-20 xl:px-28">
      <section className="flex flex-col md:flex-row justify-between gap-8 w-full flex-wrap">
        <div className="flex flex-col gap-4 md:gap-8 w-full md:w-1/4">
          <img
            src={logo2}
            className=" w-[250px] md:w-[350px] lg:w-[450px] "
            alt="logo"
          />
          <p className="text-lg font-medium w-full min-w-min">
            Redefining technology representation through continuous learning and
            collaboration. We aspire to impact globally, building individuals
            and creating products that resonate.{" "}
          </p>
          <ul className="flex gap-4">
            <li>
              <img src={facebook} alt="facbook-icon" />
            </li>
            <li>
              <img src={twitter} alt="twitter-icon" />
            </li>
            <li>
              <img src={instagram} alt="instagram-icon" />
            </li>
            <li>
              <img src={linkedin} alt="linkedin-icon" />
            </li>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-semibold pb-4 md:pb-8">Contact Us</p>
          <ul className=" text-lg flex flex-col gap-3 font-medium md:gap-[18px]">
            <li>holla@helixgade.com</li>
            <li>(+234) 802 979 4667</li>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-semibold pb-4 md:pb-8">Shortcuts</p>
          <ul className=" text-lg flex flex-col gap-3 font-medium md:gap-[18px]">
            <li>PlayStore Apps</li>
            <li>Apple Store Apps</li>
            <li>Websites</li>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-semibold pb-4 md:pb-8">Quick Links</p>
          <ul className=" text-lg flex flex-col gap-3 font-medium md:gap-[18px]">
            <li>Works</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </section>
      <div className="w-full h-[1px] bg-primary-white mt-[50px] md:mt-[100px]"></div>
      <p className="text-center text-lg font-medium mt-4 mb-[50px] md:mb-[100px] xl:mb-[124px]">
        &copy;{" "}
        <span className="text-primary-white text-[15px] font-normal">
          © 2020 HelixGade, LLC. All rights reserved.
        </span>
      </p>
    </footer>
  );
};

export default Footer;
