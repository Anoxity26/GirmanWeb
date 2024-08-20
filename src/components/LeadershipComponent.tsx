import React, { useState } from "react";
import Image from "next/image";

export const Leadership = () => {
  return (
    <div className="relative  bg-[#F5F9FF] py-4 md:py-6 2xl:py-10">
      <div className="invisible absolute right-0 top-0  lg:visible ">
        <Image
          src={"/EclipseLead.svg"}
          width={200}
          height={200}
          alt=""
          className=""
        />
      </div>
      <div className="invisible absolute left-0 top-0 lg:visible lg:-left-20 ">
        <Image
          src={"/RectPattern.svg"}
          width={300}
          height={300}
          alt=""
          className=""
        />
      </div>
      <div className="mx-auto  text-center ">
        <h2 className=" text-3xl font-semibold md:text-4xl lg:text-5xl">
          Leadership Team
        </h2>
      </div>
      <div className="container mx-auto  flex flex-col items-center px-3 md:flex-row">
        {/* <!--Left Col--> */}
        <div className="flex w-full flex-row justify-center self-stretch   text-center md:w-3/5">
          <div className="">
            <div className="  flex w-full flex-col items-center justify-center drop-shadow-2xl sm:px-4 lg:mb-0">
              <div className="flex h-[250px] w-[250px] items-center justify-center   md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px]">
                <img
                  src={"/Girish.png"}
                  alt="GirishImage"
                  className="w-[80%]"
                />
              </div>
              <div className="mt-2 px-6">
                <h1 className="mb-1 text-center text-lg font-bold md:text-xl lg:text-2xl">
                  Girish Budhwani
                </h1>
                <p className="text-center text-sm  font-medium text-gray-800 lg:text-lg">
                  Co-Founder
                </p>
                <div className="flex w-full justify-center gap-[10px] pb-2 pt-2">
                <a href="https://www.linkedin.com/in/girishbudhwani/" target="_blank">
                    <div
                      className="flex h-[30px] w-[30px] items-center justify-center"
                      style={{
                        border: "0.5px solid rgba(71, 134, 255, 1)",
                        borderRadius: "9999px",
                      }}
                    >
                      <img
                        src="linkedinIcon.svg"
                        alt=""
                        className="h-[15px] w-[15px]"
                      />
                    </div>
                  </a>
                  <a href={`tel:7760560137`}>
                    <div
                      className="flex h-[30px] w-[30px] items-center justify-center"
                      style={{
                        border: "0.5px solid rgba(100, 191, 98, 1)",
                        borderRadius: "9999px",
                      }}
                    >
                      <img
                        src="phoneIcon.svg"
                        alt=""
                        className="h-[15px] w-[15px]"
                      />
                    </div>
                  </a>
                  <a href= {`mailto:girish@girmantech.com`}>
                    <div
                      className="flex h-[30px] w-[30px] items-center justify-center"
                      style={{
                        border: "0.5px solid rgba(255, 128, 128, 1)",
                        borderRadius: "9999px",
                      }}
                    >
                      <img
                        src="mailIcon.svg"
                        alt=""
                        className="h-[15px] w-[15px]"
                      />
                    </div>
                  </a>
                </div>
                <p className="pt-1  text-center text-base font-normal lg:h-[120px]">
                  Girish Budhwani, Co-founder at Girman Technologies, drives
                  business development and operations at the company. He brings
                  over a decade of experience from industry giants like
                  Microsoft and Khatabook. At Khatabook, he led a 20-person
                  team, crafting software solutions for SMEs, and at Microsoft,
                  he was instrumental in enhancing products like Teams, Outlook,
                  and Dynamics CRM. His expertise spans team leadership and
                  mobile and web development. Girish has a Bachelor's degree in
                  Computer Science from Indian Institute of Technology, Jodhpur
                  (IIT)
                </p>

                <img
                  src="FrameIITJ.png"
                  alt=""
                  className="mx-auto md:pt-4 lg:pt-16 xl:pt-28"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!--Right Col--> */}
        <div className="flex w-full flex-row justify-center self-stretch  text-center md:w-3/5">
          <div className="">
            <div className="  flex w-full flex-col items-center justify-center drop-shadow-2xl sm:px-4 lg:mb-0">
              <div className="flex h-[250px] w-[250px] items-center justify-center   md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px]">
                <img
                  src={"/Manish.png"}
                  alt="ManishImage"
                  className="w-[80%]"
                />
              </div>
              <div className="mt-2 px-6">
                <h1 className="mb-1 text-center text-2xl font-bold">
                  Manish Dipankar
                </h1>
                <p className="text-center text-lg font-medium text-gray-800">
                  Co-Founder
                </p>
                <div className="flex w-full justify-center gap-[10px] pb-2 pt-2">
                <a href="https://www.linkedin.com/in/manish-dipankar-75771042/" target="_blank">
                    <div
                      className="flex h-[30px] w-[30px] items-center justify-center"
                      style={{
                        border: "0.5px solid rgba(71, 134, 255, 1)",
                        borderRadius: "9999px",
                      }}
                    >
                      <img
                        src="linkedinIcon.svg"
                        alt=""
                        className="h-[15px] w-[15px]"
                      />
                    </div>
                  </a>
                  <a href={`tel:8123259095`}>
                    <div
                      className="flex h-[30px] w-[30px] items-center justify-center"
                      style={{
                        border: "0.5px solid rgba(100, 191, 98, 1)",
                        borderRadius: "9999px",
                      }}
                    >
                      <img
                        src="phoneIcon.svg"
                        alt=""
                        className="h-[15px] w-[15px]"
                      />
                    </div>
                  </a>
                  <a href= {`mailto:manish@girmantech.com`}>
                    <div
                      className="flex h-[30px] w-[30px] items-center justify-center"
                      style={{
                        border: "0.5px solid rgba(255, 128, 128, 1)",
                        borderRadius: "9999px",
                      }}
                    >
                      <img
                        src="mailIcon.svg"
                        alt=""
                        className="h-[15px] w-[15px]"
                      />
                    </div>
                  </a>
                </div>
                <p className="pt-1  text-center text-base font-normal lg:h-[120px] ">
                  Manish Dipankar, Co-founder at Girman Technologies, is
                  responsible for all technology decision-making at the company.
                  With over 10 years of experience, his journey includes roles
                  at Palo Alto Networks, where he was key in skyrocketing the
                  Prisma Cloud product's revenue from $5 million to $650
                  million. Manish's expertise in Cloud technology and full-stack
                  development makes him an invaluable asset to businesses
                  seeking innovative IT solutions. Manish has a Bachelor's
                  degree in Computer Science from Vellore Institute of
                  Technology (VIT)
                </p>
                <img
                  src="FrameVIT.png"
                  alt=""
                  className="mx-auto  md:pt-6 lg:pt-28"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
