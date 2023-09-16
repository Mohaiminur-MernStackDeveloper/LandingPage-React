import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsMeta, BsArrowUpRightCircle } from "react-icons/bs";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full min-h-[500px] h-fit flex justify-center items-center flex-wrap bg-black text-white">
      <Swiper
        spaceBetween={30}
        loop={true}
         autoplay={{
             delay: 2500,
         }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper h-full w-11/12 mx-auto font-Inter py-10"
      >
        <SwiperSlide>
          <div className="h-full flex justify-between items-center md:flex-row flex-col gap-16">
            <div className="space-y-10 w-full">
              <span className="flex justify-start items-center gap-2 text-primary">
                <BsMeta /> <span>Welcome To Restho</span> <BsMeta />
              </span>
              <h1 className="text-5xl tracking-tight font-serif">
                Find Your Best Healthy & <br /> Teasty Food.
              </h1>
              <p className="text-sm">
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p>
              <button className="text-primary px-8 py-2 border border-primary rounded-full flex justify-center items-center gap-3">
                <BsArrowUpRightCircle /> Discover More
              </button>
            </div>
            <div className="w-full flex justify-center items-center transform -rotate-45">
              <div className="w-fit grid grid-cols-2 justify-center items-center gap-2">
                <div className="bg-[url('https://images.pexels.com/photos/139751/pexels-photo-139751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] md:w-44 md:h-44 w-24 h-24 rounded-md bg-cover bg-no-repeat ml-auto"></div>
                <div className="bg-[url('https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] md:w-40 md:h-40 w-20 h-20 rounded-md bg-cover bg-no-repeat mt-auto"></div>
                <div className="bg-[url('https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] md:w-52 md:h-52 w-32 h-32 rounded-md bg-cover bg-no-repeat mt-auto"></div>
                <div className="bg-[url('https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] md:w-44 md:h-44 w-24 h-24 rounded-md bg-cover bg-no-repeat mb-auto"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
