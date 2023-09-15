import React from "react";
import { BsMeta } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const NewItems = () => {
  return (
    <div className='w-full bg-[url("https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-food-seasoning-food-banner-image_169169.jpg")] bg-no-repeat bg-gray-600 bg-blend-multiply text-white bg-cover'>
      <div>
        <div className="flex flex-col justify-center items-center py-10 font-Inter space-y-2">
          <h1 className="flex justify-center items-center gap-5 text-primary">
            <BsMeta />
            <span>Our New Item</span>
            <BsMeta />
          </h1>
          <h2 className="text-4xl font-Raleway">Restho New Item List</h2>
          <p className="text-sm">
            Various versions have evolved over the years, sometimes on purpose.
          </p>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper w-11/12 mx-auto h-[500px] flex justify-center items-center"
          >
            <SwiperSlide className="flex justify-center items-center">
              <div className="space-y-14">
                <div className="border border-dashed w-fit p-2 rounded-md border-primary rotate-45">
                  <div className="bg-[url(https://images.unsplash.com/photo-1481819167214-0427aac02394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80)] w-48 h-48 bg-cover rounded-md shadow-md relative border border-black">
                    <div className="absolute bg-white text-black bottom-1 right-1 p-3 rounded-md font-bold shadow-md">
                      <div className="-rotate-45">
                        <span>$30</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-serif">Soup with Sugar</h1>
                  <p className="text-sm text-gray-100">
                    It is a long established fact that a reader <br /> will be
                    distracted
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <div className="space-y-14">
                <div className="border border-dashed w-fit p-2 rounded-md border-primary rotate-45">
                  <div className="bg-[url(https://ae01.alicdn.com/kf/Hd39e7a84dabe4583ac09ee07ea0485825/Western-Food-Plate-Steak-Tray-Set-Home-Ceramic-Dinner-Plate-Black-Cutlery-Kitchenware-Restaurant-Decorative-Bowl.jpg)] w-48 h-48 bg-cover rounded-md shadow-md relative">
                    <div className="absolute bg-white text-black bottom-1 right-1 p-3 rounded-md font-bold shadow-md">
                      <div className="-rotate-45">
                        <span>$30</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-serif">Soup with Sugar</h1>
                  <p className="text-sm text-gray-100">
                    It is a long established fact that a reader <br /> will be
                    distracted
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <div className="space-y-14">
                <div className="border border-dashed w-fit p-2 rounded-md border-primary rotate-45">
                  <div className="bg-[urlhttps://ae01.alicdn.com/kf/Scf2fa7b228e747fe958a6e2a0e922524A/Kitchen-Dinner-Set-Plates-and-Dishes-Black-Plate-Frosted-Ceramic-Dinner-Plate-Dessert-Plate-Commercialround-Dishes.jpg)] w-48 h-48 bg-cover rounded-md shadow-md relative">
                    <div className="absolute bg-white text-black bottom-1 right-1 p-3 rounded-md font-bold shadow-md">
                      <div className="-rotate-45">
                        <span>$30</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-serif">Soup with Sugar</h1>
                  <p className="text-sm text-gray-100">
                    It is a long established fact that a reader <br /> will be
                    distracted
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <div className="space-y-14">
                <div className="border border-dashed w-fit p-2 rounded-md border-primary rotate-45">
                  <div className="bg-[url(https://media.gettyimages.com/id/1194154363/photo/vegan-meal-plant-based-food-roasted-parsley-root-with-mushrooms.jpg?s=612x612&w=gi&k=20&c=iLIIdx0-0Hm7Z3iR6BqS2g1fjwMjK6wJvo0oDPRPvKk=)] w-48 h-48 bg-cover rounded-md shadow-md relative">
                    <div className="absolute bg-white text-black bottom-1 right-1 p-3 rounded-md font-bold shadow-md">
                      <div className="-rotate-45">
                        <span>$30</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-serif">Soup with Sugar</h1>
                  <p className="text-sm text-gray-100">
                    It is a long established fact that a reader <br /> will be
                    distracted
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <div className="space-y-14">
                <div className="border border-dashed w-fit p-2 rounded-md border-primary rotate-45">
                  <div className="bg-[url(https://media.gettyimages.com/id/1194154363/photo/vegan-meal-plant-based-food-roasted-parsley-root-with-mushrooms.jpg?s=612x612&w=gi&k=20&c=iLIIdx0-0Hm7Z3iR6BqS2g1fjwMjK6wJvo0oDPRPvKk=)] w-48 h-48 bg-cover rounded-md shadow-md relative">
                    <div className="absolute bg-white text-black bottom-1 right-1 p-3 rounded-md font-bold shadow-md">
                      <div className="-rotate-45">
                        <span>$30</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-serif">Soup with Sugar</h1>
                  <p className="text-sm text-gray-100">
                    It is a long established fact that a reader <br /> will be
                    distracted
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <div className="space-y-14">
                <div className="border border-dashed w-fit p-2 rounded-md border-primary rotate-45">
                  <div className="bg-[url(https://media.gettyimages.com/id/1194154363/photo/vegan-meal-plant-based-food-roasted-parsley-root-with-mushrooms.jpg?s=612x612&w=gi&k=20&c=iLIIdx0-0Hm7Z3iR6BqS2g1fjwMjK6wJvo0oDPRPvKk=)] w-48 h-48 bg-cover rounded-md shadow-md relative">
                    <div className="absolute bg-white text-black bottom-1 right-1 p-3 rounded-md font-bold shadow-md">
                      <div className="-rotate-45">
                        <span>$30</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-3xl font-serif">Soup with Sugar</h1>
                  <p className="text-sm text-gray-100">
                    It is a long established fact that a reader <br /> will be
                    distracted
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewItems;
