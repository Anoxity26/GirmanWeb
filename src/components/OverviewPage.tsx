import React from 'react';
import Image from "next/image";

const OverviewPage = () => {
  return (
    <div className={"mt-10 md:mt-0"}>
      <div className="flex items-center justify-center h-screen bg-[#0075FF]">
        <div className="w-full md:w-2/3 h-96 flex justify-between mx-2">
          <div className="pl-8">
            <p className=" text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Company Overview
            </p>
            <p className="text-white text-xl mt-[20px]">
              Welcome to Girman Technologies, where excellence, trust, and
              relationships are the foundation of our business. We excel at
              delivering top-tier IT solutions, establishing trust with each and
              every project, and fostering lasting relationships that grow with
              your organisation.
            </p>
          </div>
          {/* <div className=" ">
            <Image
              src={"/Pattern.svg"}
              width={100}
              height={100}
              alt=""
              className="w-full h-full "
            />
          </div> */}
        </div>

        <div className="hidden md:block w-1/3 h-screen flex relative justify-between bg-cyan-500">
          <Image
            src={"/StockImage.svg"}
            layout="fill"
            objectFit="cover"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default OverviewPage