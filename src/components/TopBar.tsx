import { Menu } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useRef } from "react";
import router from "next/router";

const TopBar = () => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  
  const openBlog = () => {
    window.open("https://", "_blank");
  };
  const openSignUp = () => {
    window.open("https://", "_blank");
  };
  const openPricing = () => {
    router.push("/");
  };

return (
    
  <div className=" container mx-auto px-3">
    <div className=" py-12 ">
      <div className=" ">      
        <div className=" flex justify-between">
                <Image
                  src={"/Logo.svg"}
                  alt="HR"
                  width={214}
                  height={226}
                  className="w-45 md:w-64 cursor-pointer"
                  onClick={() => router.push("/")}
                />
                <div className="">
                  <div className="flex flex-row-reverse">
                    <div className="hidden md:flex md:flex-grow">
                      <button
                        className="flex px-4 py-2 font-medium text-black hover:bg-[#000000] hover:text-white rounded-full "
                        onClick={openBlog}
                      >
                        Home
                      </button>

                      <button
                        className="flex px-4 py-2 font-medium text-black hover:bg-[#000000] hover:text-white rounded-full "
                        onClick={openBlog}
                      >
                        Services
                      </button>

                      <button
                        className="flex px-4 py-2 font-medium text-black hover:bg-[#000000] hover:text-white rounded-full "
                        onClick={openBlog}
                      >
                        Portfolio
                      </button>

                      <button
                        className="flex px-4 py-2 font-medium text-black hover:bg-[#000000] hover:text-white rounded-full "
                        onClick={openBlog}
                      >
                        Blogs
                      </button>
                      <button
                        className="flex px-4 py-2 font-medium text-black hover:bg-[#000000] hover:text-white rounded-full "
                        onClick={openPricing}
                      >
                        Contact
                      </button>
                    </div>

                    <div className="md:hidden mr-5 relative ">
                      <DropdownMenu >
                        <DropdownMenuTrigger
                          onClick={(e) => e.stopPropagation()}
                          asChild
                        >
                          <Menu />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-2">
                          <DropdownMenuItem
                            className="text-lg text-black "
                            onClick={openBlog}
                          >
                            Home
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-lg text-black "
                            onClick={openBlog}
                          >
                            Services
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-lg text-black "
                            onClick={openBlog}
                          >
                            Portfolio
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-lg text-black"
                            onClick={openBlog}
                          >
                            Blogs
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-lg text-black"
                            onClick={openPricing}
                          >
                            Contact
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
        </div>       
      </div>  
    </div>
  </div>
    
  
  );
};

export default TopBar;