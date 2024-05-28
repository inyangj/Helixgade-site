import React, { useEffect, useState } from "react";
import {logo } from "../../assets/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../elements";
import { Link } from "react-router-dom";
import routes  from "../../router/routes";



const Nav = ({ className }) => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 h-[100px] text-primary-blue w-full z-30 bg-primary-white flex justify-between items-center px-6  py-6 lg:px-12 xl:px-[120.5px]  lg:py-[49.5px] whitespace-nowrap ${className}`}
    >
      <img src={logo} className=" " alt="Helixgade-logo" />{" "}
      <FontAwesomeIcon
        icon={faBars}
        onClick={toggleMenu}
        className="w-[30px] h-[30px] sm:hidden "
      />
      <div className="hidden sm:flex">
        <ul className="hidden md:flex items-center justify-between gap-8   text-nav font-semibold xl:text-lg">
          <Link to={routes.HOME}>
            <li>Home</li>
          </Link>

          <Link to={routes.WORKS}>
            <li>Works</li>
          </Link>
          <Link to={routes.ABOUT}>
            <li>About</li>
          </Link>

          <Link to={routes.SERVICES}>
            <li>Service</li>
          </Link>
          <Link to={routes.PRODUCT}>
            <li>Product Creek</li>
          </Link>

          <Link to={routes.CONTACTS}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <Button
        className={`bg-primary-blue text-white py-3 px-6 font-medium hidden  lg:flex`}
      >
        Get a Free Quote
      </Button>
      {isMenuOpen && (
        <div className="nav fixed right-0 top-0 bg-primary-white p-14 w-[65%] h-screen z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
            className="absolute right-4 top-6 w-[30px] h-[30px] "
            onClick={toggleMenu}
          >
            <style>svg</style>
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
          <ul className="  grid gap-8  pt-12 text-nav font-medium text-lg">
            <Link to={routes.HOME}>
              <li>Home</li>
            </Link>

            <Link to={routes.WORKS}>
              <li>Works</li>
            </Link>
            <Link to={routes.ABOUT}>
              <li>About</li>
            </Link>

            <Link to={routes.SERVICES}>
              <li>Service</li>
            </Link>
            <Link to={routes.PRODUCT}>
              <li>Product Creek</li>
            </Link>

            <Link to={routes.CONTACTS}>
              <li>Contact</li>
            </Link>
            <li>
              <Button
                className={`bg-primary-blue text-white py-3 px-6 font-medium`}
              >
                Get a Free Quote
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
