import React from "react";
import { BsMeta, BsArrowUpRightCircle } from "react-icons/bs";

const MenuList = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="flex justify-between items-center">
        <div className="space-y-3">
          <div className="flex justify-start items-center gap-3 text-primary">
            <BsMeta />
            <h1>Menu List</h1>
            <BsMeta />
          </div>
          <h1 className="text-2xl font-Inter tracking-tighter font-bold">
            Find Your Food Item
          </h1>
        </div>
        <button className="text-black px-8 py-2 border border-primary rounded-full flex justify-center items-center gap-3">
          <BsArrowUpRightCircle /> View More
        </button>
      </div>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-5 items-center my-5">
        <div className="border rounded-md">
          <div className="relative w-full h-fit flex flex-col justify-center items-center">
            <img
              className="w-full h-80 rounded-md z-20"
              src="https://static-01.daraz.com.bd/p/e800369ef3988a588a033c80f61fc666.jpg"
              alt=""
            />
            <button className="px-10 absolute py-1 -bottom-4 border bg-white rounded-full font-bold text-primary z-30">
              $45
            </button>
            <p className="absolute top-5 font-Cinzel text-sm right-0 bg-white px-5 py-1 rounded-s-full z-30">Lunch</p>
          </div>
          <div className="py-10 px-5 text-center">
            <h1 className="text-3xl tracking-tighter">Prawn with Noodles</h1>
            <p className="text-gray-400">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
        <div className="border rounded-md">
          <div className="relative w-full h-fit flex flex-col justify-center items-center">
            <img
              className="w-full h-80 rounded-md z-20"
              src="https://static-01.daraz.com.bd/p/e800369ef3988a588a033c80f61fc666.jpg"
              alt=""
            />
            <button className="px-10 absolute py-1 -bottom-4 border bg-white rounded-full font-bold text-primary z-30">
              $45
            </button>
            <p className="absolute top-5 font-Cinzel text-sm right-0 bg-white px-5 py-1 rounded-s-full z-30">Lunch</p>
          </div>
          <div className="py-10 px-5 text-center">
            <h1 className="text-3xl tracking-tighter">Prawn with Noodles</h1>
            <p className="text-gray-400">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
        <div className="border rounded-md">
          <div className="relative w-full h-fit flex flex-col justify-center items-center">
            <img
              className="w-full h-80 rounded-md z-20"
              src="https://static-01.daraz.com.bd/p/e800369ef3988a588a033c80f61fc666.jpg"
              alt=""
            />
            <button className="px-10 absolute py-1 -bottom-4 border bg-white rounded-full font-bold text-primary z-30">
              $45
            </button>
            <p className="absolute top-5 font-Cinzel text-sm right-0 bg-white px-5 py-1 rounded-s-full z-30">Lunch</p>
          </div>
          <div className="py-10 px-5 text-center">
            <h1 className="text-3xl tracking-tighter">Prawn with Noodles</h1>
            <p className="text-gray-400">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
        <div className="border rounded-md">
          <div className="relative w-full h-fit flex flex-col justify-center items-center">
            <img
              className="w-full h-80 rounded-md z-20"
              src="https://static-01.daraz.com.bd/p/e800369ef3988a588a033c80f61fc666.jpg"
              alt=""
            />
            <button className="px-10 absolute py-1 -bottom-4 border bg-white rounded-full font-bold text-primary z-30">
              $45
            </button>
            <p className="absolute top-5 font-Cinzel text-sm right-0 bg-white px-5 py-1 rounded-s-full z-30">Lunch</p>
          </div>
          <div className="py-10 px-5 text-center">
            <h1 className="text-3xl tracking-tighter">Prawn with Noodles</h1>
            <p className="text-gray-400">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
        <div className="border rounded-md">
          <div className="relative w-full h-fit flex flex-col justify-center items-center">
            <img
              className="w-full h-80 rounded-md z-20"
              src="https://static-01.daraz.com.bd/p/e800369ef3988a588a033c80f61fc666.jpg"
              alt=""
            />
            <button className="px-10 absolute py-1 -bottom-4 border bg-white rounded-full font-bold text-primary z-30">
              $45
            </button>
            <p className="absolute top-5 font-Cinzel text-sm right-0 bg-white px-5 py-1 rounded-s-full z-30">Lunch</p>
          </div>
          <div className="py-10 px-5 text-center">
            <h1 className="text-3xl tracking-tighter">Prawn with Noodles</h1>
            <p className="text-gray-400">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
        <div className="border rounded-md">
          <div className="relative w-full h-fit flex flex-col justify-center items-center">
            <img
              className="w-full h-80 rounded-md z-20"
              src="https://static-01.daraz.com.bd/p/e800369ef3988a588a033c80f61fc666.jpg"
              alt=""
            />
            <button className="px-10 absolute py-1 -bottom-4 border bg-white rounded-full font-bold text-primary z-30">
              $45
            </button>
            <p className="absolute top-5 font-Cinzel text-sm right-0 bg-white px-5 py-1 rounded-s-full z-30">Lunch</p>
          </div>
          <div className="py-10 px-5 text-center">
            <h1 className="text-3xl tracking-tighter">Prawn with Noodles</h1>
            <p className="text-gray-400">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
