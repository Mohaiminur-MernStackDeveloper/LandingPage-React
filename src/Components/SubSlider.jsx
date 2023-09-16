import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const SubSlider = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={screenWidth > 700 ? 3 : 1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-11/12 mx-auto h-[400px] flex justify-center items-center gap-5"
      >
        <SwiperSlide>
          <div className="flex h-full justify-center items-center font-Inter">
            <div className="flex items-center relative">
              <img
                className="w-32 h-32 absolute -left-20 animate-spin"
                src="https://freepngimg.com/save/139184-food-plate-healthy-free-photo/792x798"
              />
              <div className="border rounded-md w-[200px] h-28 flex justify-end items-center">
                <div className="w-3/5 text-sm mr-3">
                  <h1 className="text-2xl font-serif">Thai Food</h1>
                  <p className="font-Raleway text-xs">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full justify-center items-center font-Inter">
            <div className="flex items-center relative">
              <img
                className="w-32 h-32 absolute -left-20 animate-spin"
                src="https://specialdocs.com/wp-content/uploads/2017/11/AICR_NewAmericanPlate-824x824-1.png"
              />
              <div className="border rounded-md w-[200px] h-28 flex justify-end items-center">
                <div className="w-3/5 text-sm mr-3">
                  <h1 className="text-2xl font-serif">Thai Food</h1>
                  <p className="font-Raleway text-xs">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full justify-center items-center font-Inter">
            <div className="flex items-center relative">
              <img
                className="w-32 h-32 absolute -left-20 animate-spin"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMqG4ITUdcsttaNR9HPfGVLlAwL2bCaEkB_YitmzD05B5nwlCPtOtiR3aXiI36n2cfLU&usqp=CAU"
              />
              <div className="border rounded-md w-[200px] h-28 flex justify-end items-center">
                <div className="w-3/5 text-sm mr-3">
                  <h1 className="text-2xl font-serif">Thai Food</h1>
                  <p className="font-Raleway text-xs">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full justify-center items-center font-Inter">
            <div className="flex items-center relative">
              <img
                className="w-32 h-32 absolute -left-20 animate-spin"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6y0039cUpKEl11hznIzfwT18virVqcHK1Hw&usqp=CAU"
              />
              <div className="border rounded-md w-[200px] h-28 flex justify-end items-center">
                <div className="w-3/5 text-sm mr-3">
                  <h1 className="text-2xl font-serif">Thai Food</h1>
                  <p className="font-Raleway text-xs">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full justify-center items-center font-Inter">
            <div className="flex items-center relative">
              <img
                className="w-32 h-32 absolute -left-20 animate-spin"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4pMQxZ979XhlTKYui8r5D4eGKHHg7UswUg&usqp=CAU"
              />
              <div className="border rounded-md w-[200px] h-28 flex justify-end items-center">
                <div className="w-3/5 text-sm mr-3">
                  <h1 className="text-2xl font-serif">Thai Food</h1>
                  <p className="font-Raleway text-xs">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full justify-center items-center font-Inter">
            <div className="flex items-center relative">
              <img
                className="w-32 h-32 absolute -left-20 animate-spin"
                src="https://static.vecteezy.com/system/resources/thumbnails/026/757/129/small_2x/varieties-of-food-chart-nutrient-serving-size-healthy-diet-food-pyramid-ai-generative-free-png.png"
              />
              <div className="border rounded-md w-[200px] h-28 flex justify-end items-center">
                <div className="w-3/5 text-sm mr-3">
                  <h1 className="text-2xl font-serif">Thai Food</h1>
                  <p className="font-Raleway text-xs">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full justify-center items-center font-Inter">
            <div className="flex items-center relative">
              <img
                className="w-32 h-32 absolute -left-20 animate-spin"
                src="https://knowledge4policy.ec.europa.eu/sites/default/files/styles/media_full/public/jrc-kg-de-wheel.png?itok=jfJiOnwb"
              />
              <div className="border rounded-md w-[200px] h-28 flex justify-end items-center">
                <div className="w-3/5 text-sm mr-3">
                  <h1 className="text-2xl font-serif">Thai Food</h1>
                  <p className="font-Raleway text-xs">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full justify-center items-center font-Inter">
            <div className="flex items-center relative">
              <img
                className="w-32 h-32 absolute -left-20 animate-spin"
                src="https://www.vedantu.com/seo/content-images/0867b892-336b-456a-89e7-a6056614cc26.png"
              />
              <div className="border rounded-md w-[200px] h-28 flex justify-end items-center">
                <div className="w-3/5 text-sm mr-3">
                  <h1 className="text-2xl font-serif">Thai Food</h1>
                  <p className="font-Raleway text-xs">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full justify-center items-center font-Inter">
            <div className="flex items-center relative">
              <img
                className="w-32 h-32 absolute -left-20 animate-spin"
                src="https://www.pngmart.com/files/15/Food-Plate-Top-View-Non-Veg-PNG.png"
              />
              <div className="border rounded-md w-[200px] h-28 flex justify-end items-center">
                <div className="w-3/5 text-sm mr-3">
                  <h1 className="text-2xl font-serif">Thai Food</h1>
                  <p className="font-Raleway text-xs">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default SubSlider;
