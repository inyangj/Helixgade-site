import { Link } from "react-router-dom";
import routes from "../router/routes";
import HelixgadeLayout from "../layout/HelixgadeLayout";
import { Button } from "../components/elements";
import { pen } from "../assets/icons";
import ChooseHelixgade from "../components/sections/ChooseHelixgade";
import WorkList from "./Works/components/WorkList";
import Partners from "../components/sections/Partners";
import Interest from "./Servicess/components/Interest";
import Testimonials from "../components/sections/Testimonials";
import ProductSec from "../components/sections/Products";


const Home = () => {
  const worksLimit = 2

  return (
    <HelixgadeLayout>
      <div className="md:text-center lg:grid justify-center mt-[100px] grid gap-6  text-primary-blue bg-hero pt-[30px] pb-16 md:py-[120px] lg:py-[200px] px-4">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-[52px] xl:text-[68px] lg:w-[800px] xl:w-[1000px]">
          Creating Global Impact with Remarkable Digital Experiences!
        </h1>
        <p className=" text-lg md:text-xl lg:w-[800px] xl:w-[990px]">
          Redefining technology representation through continuous learning and
          collaboration. We aspire to impact globally, building individuals and
          creating products that resonate.
        </p>
        <div className="flex gap-3 md:justify-center">
          <Button
            className={`bg-primary-blue text-white py-3 px-6 font-medium  lg:flex`}
          >
            Get a Free Quote
          </Button>
          <Link to={routes.WORKS}>
            <Button
              className={`bg-white text-primary-blue py-3 px-6 font-medium  lg:flex`}
            >
              Our Works
            </Button>
          </Link>
        </div>
      </div>
      <section className="text-primary-blue px-4 my-5 md:my-10 lg:my-16 xl:my-20 md:px-0 md:grid justify-center lg:px-[120.5px]">
        <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl md:text-center">
          Our Services{" "}
        </h2>
        <p className=" text-lg mb-8 md:mb-16 lg:mb-28 md:text-center">
          We strive for perfection in everything we do, ranging from development
          to deployment.
        </p>
        <aside className="grid md:justify-center lg:justify-start lg:grid-cols-2 xl:grid-cols-3">
          <div className="flex w-fit flex-col px-4 py-5 md:px-8 md:py-10  ">
            <img src={pen} className="w-[50px] h-[50px] m-2" alt="icon" />
            <div className="min-h-[220px]">
              <h3 className="text-3xl font-semibold mt-10 mb-5">
                Software Development
              </h3>
              <p className="text-lg w-[300px] md:w-[370px]">
                We’re a software consulting firm that designs, develops, and
                deploys custom software solutions for organizations that want to
                make an impact through technology.
              </p>
            </div>
            <p className="bg-primary-blue text-white rounded-md py-2 mt-5 text-center">
              learn more
            </p>
          </div>
          <div className="flex w-fit flex-col px-4 py-5 md:px-8 md:py-10  ">
            <img src={pen} className="w-[50px] h-[50px] m-2" alt="icon" />
            <div className="min-h-[220px]">
              <h3 className="text-3xl font-semibold mt-10 mb-5">Training</h3>
              <p className="text-lg w-[300px] md:w-[370px]">
                HelixGade is built on a success oriented culture. Above all - we
                know both candidate and client want quality and they want it
                now. thats why our training curriculum is world class.
              </p>
            </div>
            <p className="bg-primary-blue text-white rounded-md py-2 mt-5 text-center">
              learn more
            </p>
          </div>
          <div className="flex w-fit flex-col px-4 py-5 md:px-8 md:py-10  ">
            <img src={pen} className="w-[50px] h-[50px] m-2" alt="icon" />
            <div className="min-h-[220px]">
              <h3 className="text-3xl font-semibold mt-10 mb-5">Design</h3>
              <p className="text-lg w-[300px] md:w-[370px]">
                Real-time tools and rich insights mean our support solution
                amplifies your team for an unbeatable experience.
              </p>
            </div>
            <p className="bg-primary-blue text-white rounded-md py-2 mt-5 text-center">
              learn more
            </p>
          </div>
        </aside>
      </section>
      <ChooseHelixgade />
      <div className="md:text-center text-primary-blue  pt-[60px] md:pt-[120px] px-4">
        <h1 className="font-semibold text-4xl md:text-5xl">Our Works</h1>
        <p className="pt-[14px] pb-[84px] text-lg md:text-xl">
          We have had the privilege of working with a diverse range of clients
          and delivering exceptional digital products that drive success.
        </p>

        <aside className="text-primary-blue my-5 md:my-10 lg:my-20 xl:my-[120px] px-4 md:px-[120.5px] xl:px-[160px] ">
          <WorkList limit={worksLimit} />
        </aside>
      </div>

      <section className="xl:px-[0px]">
        <Partners/>
      </section>
      <ProductSec />
      <Testimonials />
      <Interest />
    </HelixgadeLayout>
  );
};

export default Home;
