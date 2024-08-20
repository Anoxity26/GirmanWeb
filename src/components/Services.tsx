import React, { useState } from "react";
import Image from "next/image";

export const Services = () => {
  return (
    <div className="relative pb-6 md:pb-12 2xl:pb-20">
      <div className="container  mx-auto mt-12 flex items-center px-3  ">
        <div className="invisible absolute -top-12 right-0 -z-50 md:visible ">
          <Image
            src={"/EllipseServices.svg"}
            width={500}
            height={500}
            alt=""
            className=""
          />
        </div>
        <div className="invisible absolute left-0  -top-12 -z-50 md:visible ">
          <Image
            src={"/BoxServices.svg"}
            width={100}
            height={100}
            alt=""
            className=""
          />
        </div>

        <div className="flex w-full  justify-center   py-6 ">
          <div className=" mx-auto ">
            <h1 className="mb-16 text-3xl font-semibold md:text-4xl   lg:text-5xl">
              Our Services
            </h1>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border-2 border-[#5F9FFF] bg-[#EAEDFF] p-4">
                <div className=" ">
                  <Image
                    src={"/Icon1.svg"}
                    width={20}
                    height={20}
                    alt=""
                    className=""
                  />
                </div>
                <h2 className="mb-2 mt-2 text-sm font-semibold md:text-base lg:text-lg">
                  Enterprise Software Development
                </h2>
                <p className="text-xs font-light md:text-sm lg:text-base">
                  Our custom enterprise software is designed to enhance team
                  efficiency and achieve business goals, seamlessly integrating
                  with your current system.
                </p>
              </div>

              <div className="rounded-lg border-2 border-[#5F9FFF] bg-[#EAEDFF] p-4">
                <div className=" ">
                  <Image
                    src={"/Icon2.svg"}
                    width={20}
                    height={20}
                    alt=""
                    className=""
                  />
                </div>
                <h2 className="mb-2 mt-2 text-sm font-semibold md:text-base lg:text-lg">
                  Cloud Infrastructure & Backend
                </h2>
                <p className="text-xs font-light md:text-sm lg:text-base">
                  Empower your business with our comprehensive cloud solutions,
                  specializing in building robust backend microservices for AWS,
                  GCP, and Azure.
                </p>
              </div>

              <div className="rounded-lg border-2 border-[#5F9FFF] bg-[#EAEDFF] p-4">
                <div className=" ">
                  <Image
                    src={"/Icon3.svg"}
                    width={20}
                    height={20}
                    alt=""
                    className=""
                  />
                </div>
                <h2 className="mb-2 mt-2 text-sm font-semibold md:text-base lg:text-lg">
                  Web & Mobile App Development
                </h2>
                <p className="text-xs font-light md:text-sm lg:text-base">
                  Elevate your online presence with our tailored web & mobile
                  app solutions, uniquely crafted to enhance your brand's
                  digital performance.
                </p>
              </div>

              <div className="rounded-lg border-2 border-[#5F9FFF] bg-[#EAEDFF] p-4">
                <div className=" ">
                  <Image
                    src={"/Icon4.svg"}
                    width={20}
                    height={20}
                    alt=""
                    className=""
                  />
                </div>
                <h2 className="mb-2 mt-2 text-sm font-semibold md:text-base lg:text-lg">
                  Quality Assurance
                </h2>
                <p className="text-xs font-light md:text-sm lg:text-base">
                  Our commitment to quality assurance ensures that your products
                  meet the highest industry standards, providing reliability and
                  peace of mind.
                </p>
              </div>

              <div className="rounded-lg border-2 border-[#5F9FFF] bg-[#EAEDFF] p-4">
                <div className=" ">
                  <Image
                    src={"/Icon5.svg"}
                    width={20}
                    height={20}
                    alt=""
                    className=""
                  />
                </div>
                <h2 className="mb-2 mt-2 text-sm font-semibold md:text-base lg:text-lg">
                  AI & ML Solutions
                </h2>
                <p className="text-xs font-light md:text-sm lg:text-base">
                  Elevate your business with our technical consultation,
                  delivering valuable expertise in optimising processes and
                  sustaining growth.
                </p>
              </div>

              <div className="rounded-lg border-2 border-[#5F9FFF] bg-[#EAEDFF] p-4">
                <div className=" ">
                  <Image
                    src={"/Icon6.svg"}
                    width={20}
                    height={20}
                    alt=""
                    className=""
                  />
                </div>
                <h2 className="mb-2 mt-2 text-sm font-semibold md:text-base lg:text-lg">
                  Technical Business Consultation
                </h2>
                <p className="text-xs font-light md:text-sm lg:text-base">
                  Elevate your business with our technical consultation,
                  delivering valuable expertise in optimising processes and
                  sustaining growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
