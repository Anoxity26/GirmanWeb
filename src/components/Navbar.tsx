"use client";

import Image from "next/image";
import Link from "next/link";
import LinkButton from "./LinkButton";
import { useState } from "react";

interface NavbarProps {}

const links = ["Home", "Services", "Portfolio", "Blogs", "Contact"];

const Navbar: React.FC<NavbarProps> = () => {
  const [selected, setSelected] = useState(links[0]);
  const handleSelect = (selectedLink: string) => {
    setSelected(selectedLink);
  };
  return (
    <div className="h-1/5 !z-10 flex flex-row  pt-11 mx-0 pl-24 pr-24">
      <div className="ml-0 w-8 h-12  flex flex-row">
        <Image src={"/Vector.svg"} width={24} height={24} alt={""} />
        <Image src={"/Vector1.svg"} width={14} height={16} alt={""} />
        {/* <div className="flex flex-row pl-2 mt-1">
                <p className="text-3xl font-semibold">Girman</p>
                <p className="text-3xl">Technologies</p>
            </div> */}
      </div>

      <nav>
        {/*Container*/}
        <div className="container mx-auto">
          {/*Company name*/}
          <a href="#" className="inline-flex pl-4 pt-1 text-3xl font-semibold">
            Girman Technologies
          </a>
          {/*Company name*/}

          {/*toggle btn*/}
          <button className="lg:hidden inline-flex items-center justify-center border h-10 w-10 ml-32">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          {/*toggle btn*/}

          {/*menu*/}
          <div className="w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0">
            <ul className="w-full lg:w-auto flex flex-col  lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 pl-96">
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 font-medium text-black hover:bg-[#18004C] hover:text-white rounded-full "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 font-medium text-black hover:bg-[#18004C] hover:text-white rounded-full"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 font-medium text-black hover:bg-[#18004C] hover:text-white rounded-full"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 font-medium text-black hover:bg-[#18004C] hover:text-white rounded-full"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 font-medium text-black hover:bg-[#18004C] hover:text-white rounded-full"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/*menu*/}
        </div>
      </nav>

      {/* <div className="h-12  flex flex-row text-lg text-black mr-6 p-1 rounded-md transition-all duration-200">
                {links.map((item , idx) => (<LinkButton handleClick={handleSelect} label={item} isActive={ item === selected ? true : false}/>))}
            </div> */}
    </div>
  );
};

export default Navbar;
