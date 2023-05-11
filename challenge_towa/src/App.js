import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Headerpage from './objects/headerpage';
import Slides from './objects/slides';
import Footerpage from './objects/footerpage';

import data from './assets/data/BoardData.json';

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function App() {


  return (
    <>

      <Headerpage />

      <h1>Hellow World</h1>

      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">

        {
          data.products.slice(0, 5).map((products, i) => {
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
