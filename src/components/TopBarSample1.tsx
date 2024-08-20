import React, { useState } from "react";
import router from "next/router";

export const TopBarSample1 = () => {
  return (
    <nav id="header" className="fixed top-0 z-30 w-full text-white">
      <div className="container mx-auto mt-0 flex w-full flex-wrap items-center justify-between py-2">
        <div className="flex items-center pl-4">
          <a
            className="toggleColour text-2xl font-bold text-black no-underline hover:no-underline lg:text-4xl"
            href="#"
          >
            <img className="z-50 w-full md:w-2/3" src="/Logo.svg" />
          </a>
        </div>
      </div>
      <hr className="my-0 border-b border-gray-100 py-0 opacity-25" />
    </nav>
  );
};
