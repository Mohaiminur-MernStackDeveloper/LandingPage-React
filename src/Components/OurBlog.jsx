import React from "react";
import SectionTitle from "./SectionTitle";

const OurBlog = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <SectionTitle subtitle="Our Blog" title="Our Latest Blog" />
      <div className="mt-10 grid grid-cols-3 justify-center items-center gap-5">
        <div className="border rounded-md">
            <div className="bg-[url(https://images.hindustantimes.com/img/2022/03/11/1600x900/alex-haney-CAhjZmVk5H4-unsplash_1646991894325_1646991912005.jpg)] w-full h-96 bg-cover rounded-md relative">
                <div className="inline-block p-5 bg-white rounded-md absolute top-5 right-5 font-Inter text-center font-bold text-primary text-sm hover:bg-primary hover:text-white">17 <br />Apr</div>
            </div>
            <div className="text-center p-5 space-y-2">
                <div className="flex justify-center items-center gap-3 text-sm text-gray-500">
                    <hr className="w-10"/>
                    <h1>By Clone Watson</h1>
                </div>
                <h1 className="text-2xl font-Inter">To Make Good Health Take <br /> Nutrition Food</h1>
                <button className="text-primary border border-primary px-8 py-2 rounded-full">Read Moe</button>
            </div>
        </div>
        <div className="border rounded-md">
            <div className="bg-[url(https://images.healthshots.com/healthshots/en/uploads/2021/12/23084654/eating-food.jpg)] w-full h-96 bg-cover rounded-md relative">
                <div className="inline-block p-5 bg-white rounded-md absolute top-5 right-5 font-Inter text-center font-bold text-primary text-sm hover:bg-primary hover:text-white">17 <br />Apr</div>
            </div>
            <div className="text-center p-5 space-y-2">
                <div className="flex justify-center items-center gap-3 text-sm text-gray-500">
                    <hr className="w-10"/>
                    <h1>By Clone Watson</h1>
                </div>
                <h1 className="text-2xl font-Inter">To Make Good Health Take <br /> Nutrition Food</h1>
                <button className="text-primary border border-primary px-8 py-2 rounded-full">Read Moe</button>
            </div>
        </div>
        <div className="border rounded-md">
            <div className="bg-[url(https://blog.nasm.org/hubfs/food-restriction-header.jpg)] w-full h-96 bg-cover rounded-md relative">
                <div className="inline-block p-5 bg-white rounded-md absolute top-5 right-5 font-Inter text-center font-bold text-primary text-sm hover:bg-primary hover:text-white">18 <br />Apr</div>
            </div>
            <div className="text-center p-5 space-y-2">
                <div className="flex justify-center items-center gap-3 text-sm text-gray-500">
                    <hr className="w-10"/>
                    <h1>By Clone Watson</h1>
                </div>
                <h1 className="text-2xl font-Inter">To Make Good Health Take <br /> Nutrition Food</h1>
                <button className="text-primary border border-primary px-8 py-2 rounded-full">Read Moe</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
