import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Headerpage from './objects/headerpage';
import Slides from './objects/slides';
import Footerpage from './objects/footerpage';
import data from './assets/data/BoardData.json';

// Swiper Styles
import "swiper/css";


function App() {


  return (
    <>

      <Headerpage />

            <main className="mainWrapper">

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
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">

          {
            data.products.slice(0, 4).map((products) => {
              return (
                <SwiperSlide key={products.id}>
                  <Slides productTitle={products.title} productDescription={products.description} productImage={products.images[0]} />
                </SwiperSlide>
              );
            })
          }

        </Swiper>

      </main>

      <Footerpage />
      
    </>

  );
}

export default App;
