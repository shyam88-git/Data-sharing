import { Swiper, SwiperSlide } from "swiper/react";
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";
import { RxArrowTopRight } from "react-icons/rx";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import SpaceCity9 from "/image1.jpg";
import SpaceCity1 from "/image2.webp";
import SpaceCity6 from "/image3.webp";
import SpaceCity7 from "/image4.jpg";
import SpaceCity5 from "/image6.jpeg";
import SpaceCity8 from "/hero-image.png";

export const ServiceData = [
  {
    icon: RxCrop,
    title: "Development",
    content:
      "Lorem ipsum dolor sit /amet, consectetur adipiscing elit Lorem ipsum dolor sit /amet, ",
    backgroundImage: SpaceCity9,
  },
  {
    icon: RxPencil2,
    title: "Branding",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    backgroundImage: SpaceCity1,
  },
  {
    icon: RxDesktop,
    title: "Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    backgroundImage: SpaceCity6,
  },
  {
    icon: RxReader,
    title: "Seo",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    backgroundImage: SpaceCity7,
  },
  {
    icon: RxAccessibility,
    title: "Management",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    backgroundImage: SpaceCity5,
  },
  {
    icon: RxRocket,
    title: "Production",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    backgroundImage: SpaceCity8,
  },
];

const ActiveSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ServiceData.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center flex-col h-[900px] bg-slate-200">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-3 max-w-2xl mb-8 mx-auto text-xl text-blue-900 sm:mt-4">
          We take pride in our partnerships and the relationships we've built
          with our clients.
        </p>
      </div>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item, index) => (
          <SwiperSlide className="text-2xl" key={item.title}>
            <div
              className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white bg-blue-900 rounded-xl px-6 py-8  lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer"
              style={{
                backgroundImage: `url(${
                  index === currentIndex ? item.backgroundImage : "transparent"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-50" />
              <div className="relative rounded-lg flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl text-white lg:text-2xl">
                  {item.title}{" "}
                </h1>
                <p className="lg:text-[18px]">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
