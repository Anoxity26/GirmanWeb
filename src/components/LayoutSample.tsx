import React, { useState } from "react";

export const LayoutSample = () => {
  return (
    <div className="py-6 md:py-12 2xl:py-20">
      <div className="container mx-auto mt-12 flex flex-col flex-wrap items-center px-3 md:flex-row">
        {/* <!--Left Col--> */}
        <div className="flex w-full flex-col items-start justify-center text-center md:w-2/5 md:text-left">
          <h1 className="my-4 bg-blue-300 text-3xl font-semibold leading-tight text-blue-500 lg:text-[38px] 2xl:text-[42px]">
            Empowering Ideas, Transforming Businesses
          </h1>
          <p className="mb-4 bg-yellow-300 text-xl font-light leading-normal text-yellow-500 lg:text-2xl">
            Elevate your business strategy with software crafted to your
            specifications. We create the tools that delight your customers,
            streamline your processes, and drive strategic success.
          </p>
          <button className="focus:shadow-outline mx-auto my-6 transform rounded-full bg-pink-300 px-8 py-4 font-normal text-pink-500 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none md:mx-0 lg:mx-0">
            Book a free consultation
          </button>
        </div>
        {/* <!--Right Col--> */}
        <div className="flex w-full flex-row justify-center self-stretch bg-purple-300 py-6 text-center md:w-3/5">
          <div className="z-50 h-[600px] w-full bg-red-500 md:w-2/3" />
        </div>
      </div>
    </div>
  );
};
