import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Headerpage from './objects/headerpage';
import Footerpage from './objects/footerpage';

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function App() {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>

      <Headerpage />

      <h1>Hellow World</h1>

      <Swiper navigation={true} modules={[Navigation, Pagination]} pagination={pagination} className="mySwiper">
        <SwiperSlide>
          <img src="https://source.unsplash.com/random?landscape,mountain" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random?landscape,night" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random?landscape,city" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random?landscape,cars" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random?landscape,dog" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random?landscape,cat" alt="" />
        </SwiperSlide>
      </Swiper>

      <Footerpage />

    </>

  );
}

export default App;
