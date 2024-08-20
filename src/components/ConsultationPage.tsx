import React from "react";
import { FaArrowRight } from "react-icons/fa";
const ConsultationComponent = () => {
  return (
    <div
      className="relative flex h-[700px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundColor: `rgba(0, 117, 255, 1)
      `,
      }}
    >
      <div className="invisible md:visible">
        <img
          src="Pattern1.svg"
          alt="Pattern Image"
          className="absolute bottom-0 left-0 "
        />
        <img
          src="Pattern2.svg"
          alt="Pattern Image"
          className="absolute right-0 top-0"
        />
      </div>

      <div className="m-auto mt-6 flex h-[70%] w-[85%] flex-col items-center justify-center text-center md:w-4/5 lg:pt-12">
        <h1 className="mb-4  mt-2 pt-3 text-3xl font-bold text-white md:text-5xl lg:text-6xl">
          Book A Free Consultation
        </h1>

        <p className="mx-auto w-[70%] font-medium text-white md:w-[65%] md:text-2xl lg:w-[50%] lg:text-3xl">
          Ready To Transform Your Business? Set-Up A Meet With us Today!
        </p>
        <a href="https://app.cal.com/girish-budhwani/30min" target="_blank">
          <button className="mt-4 flex items-center justify-center rounded-full bg-white px-8 py-2 text-xl font-bold text-slate-800 hover:bg-gray-300 md:mr-2 md:mt-[1.5rem] md:px-10 md:py-2.5">
            Let's Go{" "}
            <span className="pl-[0.1rem] pt-[0.25rem]">
              <FaArrowRight />
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ConsultationComponent;
