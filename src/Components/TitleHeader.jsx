import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";

const TitleHeader = () => {
  return (
    <div className="bg-black text-white">
      <div className="w-4/5 mx-auto grid grid-cols-2 justify-between items-center text-sm py-2 font-Inter">
        <div className="flex justify-start items-center gap-3">
          <h1 className="text-primary tracking-tighter">Opening Hour:</h1>
          <h2>9.00 am to 10.00 pm</h2>
        </div>
        <div className="flex justify-start items-center gap-5">
          <div className="flex justify-start gap-2 items-center">
            <TfiEmail className="text-primary" />
            <h1>info@example.com</h1>
          </div>
          <div className="flex justify-start gap-2 items-center">
            <CiLocationOn className="text-primary" />
            <h1>Road-01, Block-B, West London City</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleHeader;
