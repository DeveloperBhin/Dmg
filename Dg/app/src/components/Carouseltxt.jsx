

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';



const Carousel = () => {
  return (
    <div className='w-full max-w-full mx-auto h-[50vh] min-h-[250px]'>
      <Swiper
        direction="vertical"
        modules={[Pagination, Navigation, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop={true}
        className='rounded-lg max-w-full h-full custom-swiper'
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className='slide-item'>
            <div className='slide-item'>
   <div className="absolute  left-3 sm:left-6 md:left-10 text-black z-10 px-2 sm:px-4 max-w-full animate-slide-up">
  <h2 className="text-sm sm:text-lg md:text-2xl font-bold text-black">
     <a href='http://bidhaalink.com/' target='_blank' rel='noopener noreferrer' className='text-amber-500'>BidhaaLink</a>
     </h2>
  <p className="text-xs sm:text-sm mt-1 sm:mt-2">
  <h3 className='italic font-light'>
 BidhaaLink is a trusted and easy-to-use platform that connects buyers and sellers across Tanzania. <br />
Whether you’re looking to expand your business or find quality products at affordable prices, BidhaaLink makes it seamless and secure. <br />
With a wide range of categories and verified sellers, you can shop or sell with confidence from anywhere in the country. <br />
Join thousands of users who trust BidhaaLink to power their online trade and grow their business faster.

      </h3></p>
</div>

  </div>
          </div>
        </SwiperSlide>

            <SwiperSlide>
          <div className='slide-item '>
            <div className='slide-item'>
   <div className="absolute  left-3 sm:left-6 md:left-10 text-black z-10 px-2 sm:px-4 max-w-full animate-slide-up">
  <h2 className="text-sm sm:text-lg md:text-2xl font-bold text-black">
     <a href='http://bidhaalink.com/' target='_blank' rel='noopener noreferrer' className='text-amber-500'>Safariboost</a>
     </h2>
  <p className="text-xs sm:text-sm mt-1 sm:mt-2">
  <h3 className='italic font-light'>
  Safariboost is a cutting-edge SEO system tailored for tour operators and hotels, designed to skyrocket your website’s authority and visibility. By leveraging advanced strategies, Safariboost ensures your site ranks higher on search engines, connecting you with a global audience. Drive more traffic, attract more bookings, and stand out in the competitive travel industry with Safariboost’s proven results.</h3></p>
</div>

  </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};
export default Carousel;

