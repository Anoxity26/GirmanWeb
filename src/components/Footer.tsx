import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer2 = () => {
  const handleCall = (phoneNumber: String) => {
    // Check if user is on mobile device
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      // Use a tel link to open the phone app with the number pre-filled
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Inform user that call can't be initiated directly on desktop
      alert(
        "Call functionality is not available on desktop devices. Please use a phone to call.",
      );
    }
  };

  const handleWhatsapp = (phoneNumber: String) => {
    // Open WhatsApp chat with pre-filled number (might require additional setup)
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank"); // Check compatibility for your region
  };
  return (
    <div className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/3 ">
            <div className="">
              <h2 className="mb-2 text-[#87A8FF]">CONTACT</h2>
              <div className="text-sm text-[#EAEAEA]">
                <div className="flex py-1">
                  <div className="mr-2 flex justify-center items-center">
                    <FaWhatsapp
                      className="mr-1 cursor-pointer"
                      onClick={() => handleWhatsapp("7760560137")}
                    />{" "}
                    <FaPhoneAlt
                      className="mr-1 cursor-pointer"
                      onClick={() => handleCall("7760560137")}
                    />
                    7760560137,
                  </div>{" "}
                  <div className="flex justify-center items-center">
                    <FaWhatsapp
                      className="mr-1 cursor-pointer"
                      onClick={() => handleWhatsapp("8123259095")}
                    />{" "}
                    <FaPhoneAlt
                      className="mr-1 cursor-pointer"
                      onClick={() => handleCall("8123259095")}
                    />{" "}
                    8123259095{" "}
                  </div>
                </div>
                <p>girish@girmantech.com</p>
                <p>manish@girmantech.com</p>
                <p className="mt-2 text-xs text-[#DAF5FF]">
                  © 2024 — Copyright
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8 w-full px-4  md:mb-0 md:w-1/3 ">
            <h2 className="mb-2 pb-2 text-[#87A8FF]">ADDRESS</h2>
            <div className="flex flex-row pr-8 text-sm text-[#EAEAEA]">
              <p>BRIGADE NORTHRIDGE, PHASE-1, Yelahanka, Bangalore- 560064 </p>
            </div>
            <div>
              <p className="mt-4 pt-3 text-xs text-[#DAF5FF]">
                Girman Technologies Pvt. Ltd.
              </p>
            </div>
          </div>

          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/3 ">
            <h2 className="mb-2 pb-2 text-[#87A8FF]">FOLLOW US</h2>
            <div className="flex flex-row text-[#EAEAEA]">
              <div className="mx-2 flex flex h-12 w-12 flex-col items-center justify-center rounded-full border-[1px] border-[#4765CF] bg-transparent">
                <FaInstagram size={24} />
              </div>
              <div className="mx-2 flex flex h-12 w-12 flex-col items-center justify-center rounded-full border-[1px] border-[#4765CF] bg-transparent">
                <FaWhatsapp size={24} />
              </div>
              <div className="mx-2 flex flex h-12 w-12 flex-col items-center justify-center rounded-full border-[1px] border-[#4765CF] bg-transparent">
                <FaTwitter size={24} />
              </div>
              <div className="mx-2 flex flex h-12 w-12 flex-col items-center justify-center rounded-full border-[1px] border-[#4765CF] bg-transparent">
                <FaLinkedin size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
