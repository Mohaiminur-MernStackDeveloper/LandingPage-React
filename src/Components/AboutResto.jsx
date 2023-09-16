import React from "react";
import { BsMeta,BsArrowUpRightCircle } from "react-icons/bs";
import { MdOutlineFastfood, MdOutlineNoFood } from "react-icons/md";

const AboutResto = () => {
  return (
    <div className="w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-24 md:gap-5 justify-center items-center py-20">
      <div className="w-full flex justify-center items-center transform -rotate-45">
        <div className="w-fit grid grid-cols-2 justify-center items-center gap-2">
          <div className="bg-[url('https://images.pexels.com/photos/139751/pexels-photo-139751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] md:w-44 md:h-44 w-24 h-24 rounded-md bg-cover bg-no-repeat ml-auto mt-auto"></div>
          <div className="md:w-48 md:h-48 border-primary border-dashed rounded-md bg-cover bg-no-repeat mt-auto border flex justify-center items-center">
            <div className="flex justify-center text-2xl space-y-3 items-center flex-col rotate-45">
              <BsMeta className="text-primary" />
              <h1 className="font-Inter">
                <span className="text-4xl font-bold">20+</span> Years <br />{" "}
                Experience
              </h1>
              <BsMeta className="text-primary" />
            </div>
          </div>
          <div className="bg-[url('https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] md:w-44 md:h-44 w-24 h-24 rounded-md bg-cover bg-no-repeat ml-auto"></div>
          <div className="bg-[url('https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] md:w-44 md:h-44 w-24 h-24 rounded-md bg-cover bg-no-repeat mb-auto"></div>
        </div>
      </div>
      <div className="md:space-y-10 space-y-5">
        <div className="text-primary flex justify-start gap-3 font-Raleway items-center">
          <BsMeta />
          <h1>About to Restho</h1>
          <BsMeta />
        </div>
        <h1 className="text-4xl font-serif">
          Come to Our Restaurant, Ready Your Food.
        </h1>
        <p className="font-Raleway tracking-wide leading-7">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <div className="flex justify-start items-center gap-5">
          <div className="border p-5 inline-block border-primary text-primary rounded-md"><MdOutlineNoFood className="text-3xl" /></div>
          <div className="font-mono">
            <h1 className="text-2xl font-Cinzel">Pure Fresh Food</h1>
            <p className="text-xs">We are serve different type <br /> of fresh food</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-5">
          <div className="border p-5 inline-block border-primary text-primary rounded-md"><MdOutlineFastfood className="text-3xl" /></div>
          <div className="font-mono">
            <h1 className="text-2xl font-Cinzel">Experties Chef.</h1>
            <p className="text-xs">We are serve different type <br /> of fresh food</p>
          </div>
        </div>
        <button className="text-primary px-8 py-2 border border-primary rounded-full flex justify-center items-center gap-3">
                <BsArrowUpRightCircle /> Discover More
              </button>
      </div>
    </div>
  );
};

export default AboutResto;
