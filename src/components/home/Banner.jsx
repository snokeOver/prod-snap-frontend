import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import SecondaryButton from "../shared/SecondaryButton";

const Banner = () => {
  const sliderImages = [
    {
      image:
        "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-5g-0.jpg",
    },
    {
      image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6-1.jpg",
    },
    {
      image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-pro-1.jpg",
    },
    {
      image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi11-1.jpg",
    },
    {
      image: "https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-5-iii-02.jpg",
    },
  ];

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}`;
  };

  return (
    <div className="pb-10 mt-5 z-0 max-h-fit grid grid-cols-1 md:grid-cols-2">
      {/* Left part */}
      <div className="flex justify-center items-center p-5">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, EffectFade]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
          effect={"fade"}
        >
          {sliderImages?.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.image} alt={item.name} className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-70"></div>
            </SwiperSlide>
          ))}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>

      {/* Right part */}
      <div className="flex flex-col items-center justify-center gap-8 lg:gap-16 w-[90%]">
        <div>
          <h2 className="text-xl md:text-4xl lg:text-6xl font-bold text-center text-primary">
            Search & Find Your Favourite Mobile Phone
          </h2>
        </div>

        <div
          onClick={() =>
            document
              .querySelector("#latest_section")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="w-[70%] lg:w-3/4 xl:w-1/2 mx-auto flex justify-center"
        >
          <SecondaryButton btntext="Explore" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
