// src/pages/Product.js
import React from "react";
import HelixgadeLayout from "../../layout/HelixgadeLayout";
import { workData } from "../Works/components/WorkDatas";
import WorkCard from "../Works/components/WorkCard";
import { work2 } from "../../assets/images";
import { useParams } from "react-router-dom";

const defaultProduct = {
  title: "Scahfng.org",
  description:
    "Sickle Cell Awareness and Health Foundation is a non-profit organization that started in March 2018 as an awareness forum and was incorporated in January 2020. We are driven by two significant objectives: to amplify awareness on Sickle Cell Disorder (SCD) and to ensure that less privileged persons with this disorder have access to quality healthcare.",
  imageUrl: work2,
  overview:
    "Sickle Cell Awareness and Health Foundation is a non-profit organization that started in March 2018 as an awareness forum and was incorporated in January 2020. We are driven by two significant objectives: to amplify awareness on Sickle Cell Disorder (SCD) and to ensure that less privileged persons with this disorder have access to quality healthcare.",
  problemStatement:
    "Sickle Cell Awareness and Health Foundation is a non-profit organization that started in March 2018 as an awareness forum and was incorporated in January 2020. We are driven by two significant objectives: to amplify awareness on Sickle Cell Disorder (SCD) and to ensure that less privileged persons with this disorder have access to quality healthcare.",
  solution: [
    "Be able to make payments easily and fast directly to a Nigerian bank account from USA and Canada",
    "Be able to receive payments easily and fast from Nigeria directly to a USA or Canada bank account",
    "Make a payment by entering the account details directly.",
    "Create and fund virtual dollar card for online transaction worldwide",
    "Be able to transfer funds to other users in any of the available currencies",
    "Be able to automate recurring payments",
    "Save beneficiaries account details",
    "Make multiple payments at once",
    "Keep track of all transactions",
    "View my balance and transaction history in dollars and naira",
    "Be able to export transaction history to Excel, CSV or PDF format",
    "Connect my bank account so that I can move money in and out of Finza",
  ],
};

const products = {
  "product-1": {
    title: "Scahfng.org",
    description:
      "Sickle Cell Awareness and Health Foundation is a non-profit organization that started in March 2018 as an awareness forum and was incorporated in January 2020. We are driven by two significant objectives: to amplify awareness on Sickle Cell Disorder (SCD) and to ensure that less privileged persons with this disorder have access to quality healthcare.",
    imageUrl: "/path_to_image.png",
    overview:
      "Sickle Cell Awareness and Health Foundation is a non-profit organization that started in March 2018 as an awareness forum and was incorporated in January 2020. We are driven by two significant objectives: to amplify awareness on Sickle Cell Disorder (SCD) and to ensure that less privileged persons with this disorder have access to quality healthcare.",
    problemStatement:
      "Sickle Cell Awareness and Health Foundation is a non-profit organization that started in March 2018 as an awareness forum and was incorporated in January 2020. We are driven by two significant objectives: to amplify awareness on Sickle Cell Disorder (SCD) and to ensure that less privileged persons with this disorder have access to quality healthcare.",
    solution: [
      "Be able to make payments easily and fast directly to a Nigerian bank account from USA and Canada",
      "Be able to receive payments easily and fast from Nigeria directly to a USA or Canada bank account",
      "Make a payment by entering the account details directly.",
      "Create and fund virtual dollar card for online transaction worldwide",
      "Be able to transfer funds to other users in any of the available currencies",
      "Be able to automate recurring payments",
      "Save beneficiaries account details",
      "Make multiple payments at once",
      "Keep track of all transactions",
      "View my balance and transaction history in dollars and naira",
      "Be able to export transaction history to Excel, CSV or PDF format",
      "Connect my bank account so that I can move money in and out of Finza",
    ],
  },
  // Add more products as needed
};

const Product = () => {
  const { productId } = useParams();
  const product = products[productId] || defaultProduct;

  return (
    <HelixgadeLayout>
      <div className="flex flex-col gap-6 lg:flex-row-reverse items-center text-primary-blue bg-primary-white px-5 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 xl:px-32 xl:py-28">
        <div>
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full rounded-lg"
          />
        </div>
        <div className="lg:w-[690px] xl:w-[890px] grid gap-3 md:gap-5 pb-6 md:pb-0">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold">
            {product.title}
          </h1>
          <p className="text-lg">{product.description}</p>
        </div>
      </div>

      <section className="px-5 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 xl:px-32 xl:py-28">
        <div className="mt-12 text-primary-blue">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Overview</h2>
            <p className="text-lg mt-4 md:mt-5">{product.overview}</p>
          </div>
          <aside className="flex flex-col lg:flex-row items-center gap-8 mt-28">
            <div className="flex justify-center gap-3">
              <div className="h-[327px] w-[150px] md:w-[224px] bg-primary-white"></div>
              <div className="h-[327px] w-[150px] md:w-[224px] bg-primary-white"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Problem Statement</h2>
              <p className="text-lg mt-4">{product.problemStatement}</p>
            </div>
          </aside>
        </div>

        <section className="py-6 md:py-12 lg:py-28 xl:py-32">
          <h2 className="text-3xl font-bold text-primary-blue mb-4">
            Core User Stories
          </h2>
          <ul className="list-disc list-inside space-y-2 text-primary-blue text-lg">
            {product.solution.map((userStory, index) => (
              <li key={index}>{userStory}</li>
            ))}
          </ul>
        </section>
        <div className="pb-4 md:pb-6 lg:pb-8 xl:pb-28 text-center text-primary-blue">
          <h2 className="text-3xl font-semibold">Our Solution</h2>
          <p className="text-lg mt-4">
            Sickle Cell Awareness and Health Foundation is a non-profit
            organization that started in March 2018.
          </p>
        </div>
        <div className="w-full bg-primary-white rounded-lg h-[327px] md:h-[527px] mb-4 md:mb-6 lg:mb-8 xl:mb-28"></div>
        <aside className="flex flex-col lg:flex-row-reverse pb-6 md:pb-12 lg:pb-28 xl:pb-32 items-center gap-8 mt-28">
          <div>
            <div className="flex justify-center gap-3">
              <div className="h-[127px] w-[154px] md:w-[224px] bg-primary-white"></div>
              <div className="h-[127px] w-[154px] md:w-[224px] bg-primary-white"></div>
            </div>
            <div className="flex justify-center gap-3 mt-4">
              <div className="h-[127px] w-[154px] md:w-[224px] bg-primary-white"></div>
              <div className="h-[127px] w-[154px] md:w-[224px] bg-primary-white"></div>
            </div>
          </div>
          <div className="text-primary-blue">
            <h2 className="text-2xl font-bold">Problem Statement</h2>
            <p className="text-lg mt-4">{product.problemStatement}</p>
          </div>
        </aside>
        <div className="py-4 md:py-6 lg:py-8 xl:py-28 text-center text-primary-blue">
          <h2 className="text-3xl font-semibold">
            View other projects we’ve worked on
          </h2>
          <p className="text-lg mt-4">
            Sickle Cell Awareness and Health Foundation is a non-profit
            organization that started in March 2018.
          </p>
        </div>
        <div className="pb-6 md:pb-12 lg:pb-28 xl:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 text-primary-blue">
          {workData.map((work, index) => (
            <WorkCard key={index} work={work} index={index} />
          ))}
        </div>
      </section>
    </HelixgadeLayout>
  );
};

export default Product;
