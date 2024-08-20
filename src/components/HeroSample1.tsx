import React, { useState } from "react";

export const HeroSample1 = () => {
  return (
    <div className="py-6 md:py-12 2xl:py-20">
      {/* Header */}
      <div className="container mx-auto px-3">
        {/* Use Nextjs Image tag */}
        <img className="h-6 md:h-10" src="/Logo.svg" />
      </div>

      <div className="container mx-auto mt-12 flex flex-col flex-wrap items-center px-3 md:flex-row">
        {/* <!--Left Col--> */}
        <div className="flex w-full flex-col items-start justify-center text-center md:w-2/5 md:text-left">
          <p className="tracking-loose w-full text-sm font-light uppercase lg:text-lg">
            IT consulting and services
          </p>
          <h1 className="my-4 text-3xl font-semibold leading-tight lg:text-[38px] 2xl:text-[42px]">
            Empowering Ideas,{" "}
            <span className="text-[#3063E6]">Transforming</span> Businesses
          </h1>
          <p className="mb-4 text-xl font-light leading-normal lg:text-2xl">
            Elevate your business strategy with software crafted to your
            specifications. We create the tools that delight your customers,
            streamline your processes, and drive strategic success.
          </p>
          <button className="focus:shadow-outline mx-auto my-6 transform rounded-full bg-[#18004C] px-8 py-4 font-normal text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none md:mx-0 lg:mx-0">
            Book a free consultation
          </button>
        </div>
        {/* <!--Right Col--> */}
        <div className="flex w-full flex-row justify-center self-stretch py-6 text-center md:w-3/5">
          <img className="z-50 w-full md:w-2/3" src="/circle.svg" />
        </div>
      </div>
    </div>
  );
};
