import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Headerpage from './objects/headerpage';
import Slides from './objects/slides';
import Footerpage from './objects/footerpage';

import data from './assets/data/BoardData.json';

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

        {
          data.products.map((products, i) => {
            return (
              <SwiperSlide>
                <Slides productTitle={products.title} productDescription={products.description} productImage={products.images[0]} />
              </SwiperSlide>
            );
          })
        }

      </Swiper>

      <Footerpage />
      
    </>

  );
}

export default App;
