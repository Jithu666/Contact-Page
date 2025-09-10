import React from "react";
import outlineMessage from "../assets/outline-message.svg";
import outlineMessageWhite from "../assets/ic_outline-message.svg";
import baselinePhone from "../assets/baseline-phone.svg";
import { Link } from "react-router-dom";
import heroImage from "../assets/Service 24_7.svg";

const Hero = () => {
  return (
    <div className="ml-28 w-3/4 mt-4">
      <h1 className="text-4xl font-bold ml-4">CONTACT US</h1>
      <p className="text-sm ml-4 mt-3.5 mr-24 font-medium">
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.{" "}
      </p>

      {/* Form & Image Container */}
      <div className="flex flex-row mt-2 gap-8">
        {/* Form Container */}
        <div className="flex flex-col ml-10 mt-8 w-1/2 p-4">
          {/* Buttons Wrapper Container */}
          <div className="flex flex-row mb-4">
            <Link to="/">
              <button className="flex justify-center items-center bg-black rounded text-white font-medium px-4 py-2 pl-2 text-sm w-46 mr-6 cursor-pointer">
                <img
                  src={outlineMessage}
                  alt="outline message"
                  className="w-4 mr-1"
                />
                VIA SUPPORT CHAT
              </button>
            </Link>
            <Link to="/">
              <button className="flex justify-center items-center bg-black rounded text-white font-medium px-2 py-2 pl-2 text-sm w-44 cursor-pointer">
                <img
                  src={baselinePhone}
                  alt="outline message"
                  className="w-4 mr-1"
                />
                VIA CALL
              </button>
            </Link>
          </div>
          <Link to="/">
            <button className="flex justify-center items-center rounded border-2 font-medium py-2 text-sm w-96 mb-4 cursor-pointer">
              <img
                src={outlineMessageWhite}
                alt="outline message"
                className="w-6 mr-1"
              />
              VIA EMAIL FORM
            </button>
          </Link>
          <fieldset className="border w-96 mb-4">
            <legend className="font-medium text-[13px] ml-6 px-1">Name</legend>
            <input type="text" />
            <br />
          </fieldset>
          <fieldset className="border w-96 mb-4">
            <legend className="font-medium text-[13px] ml-6 px-1">
              E-Mail
            </legend>
            <input type="text" />
            <br />
          </fieldset>
          <fieldset className="border w-96 mb-4">
            <legend className="font-medium text-[13px] ml-6 px-1">TEXT</legend>
            <textarea type="text" rows={1} />
            <br />
          </fieldset>

          <button className="bg-black text-white text-sm font-medium ml-60 px-3 py-1.5 rounded-sm cursor-pointer">
            SUBMIT
          </button>
          {/* Buttons Wrapper Container */}
        </div>
        {/* Form Container ends here. */}
        {/* ======================================= */}

        {/* Image Container Begins here */}
        <div className="">
          <img src={heroImage} alt="Hero Image" className="ml-6" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
