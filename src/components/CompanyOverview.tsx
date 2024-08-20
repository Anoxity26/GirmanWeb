import React, { useState } from "react";
import Image from "next/image";

export const CompanyOverview = () => {
  return (
    <div className="relative bg-[#0075FF] py-0 md:py-0 2xl:py-0">
      <div className=" container mx-auto mt-0 flex flex-col flex-wrap items-center px-3 md:flex-row">
        <div className="absolute bottom-0  -left-28 -z-1 invisible lg:visible">
          <Image
            src={"/PatternOverview.svg"}
            width={300}
            height={300}
            alt=""
            className=""
          />
        </div>
        {/* <!--Left Col--> */}
        <div className="flex w-full flex-col items-start justify-center md:w-2/5 md:text-left">
          <h1 className="mt-10 text-3xl font-semibold leading-tight text-white lg:text-[42px]">
            Company Overview
          </h1>
          <p className="mb-4 mt-5 text-lg font-light leading-normal text-white lg:text-2xl">
            Welcome to Girman Technologies, where excellence, trust, and
            relationships are the foundation of our business. We excel at
            delivering top-tier software solutions, establishing trust with
            every project, and fostering lasting relationships that grow with
            your organisation.
          </p>
        </div>
        {/* <!--Right Col--> */}
        <div className="mb-3 flex w-full flex-row justify-center self-stretch text-center md:mb-0 md:w-3/5">
          <img className="z-50 h-full md:w-2/3" src="/StockImage.svg" />
        </div>
      </div>
    </div>
  );
};
