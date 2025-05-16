import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = () => {
  return (
    <div className='w-full max-w-full mx-auto'>
      <Swiper 
        modules={[Pagination, Navigation, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className='rounded-lg max-w-full'
        style={{ minHeight: '300px' }} // optional minimum height
      >
        <SwiperSlide>
          <div className='relative w-full' style={{ height: '50vh', minHeight: '250px' }}>
            <img src='/WED.webp' className='w-full h-full object-cover' alt="Slide 1" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-10 left-5 md:left-10 text-white z-10 max-w-xs md:max-w-lg">
              <h2 className="text-lg md:text-2xl font-bold">
                EMPOWERING BUSINESS THROUGH CUSTOM APP AND WEB DEVELOPMENT SOLUTIONS.
              </h2>
              <p className="text-xs md:text-sm mt-2">
                We build powerful and scalable mobile apps and websites that fit your unique needs.<br/>
                From idea to launch, we create digital solutions that help your business grow.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative w-full' style={{ height: '50vh', minHeight: '250px' }}>
            <img src='/SEO.webp' className='w-full h-full object-cover' alt="Slide 2" />
            <div className="absolute bottom-10 left-5 md:left-10 text-white z-10 max-w-xs md:max-w-lg">
              <h2 className='text-lg md:text-2xl font-bold'>
                WE DELIVER INNOVATIVE DIGITAL PRODUCTS AND IT SERVICES TAILORED FOR YOUR SUCCESS.
              </h2>
              <p className="text-xs md:text-sm mt-2">
                Whether it’s system development, maintenance, or tech support—we’ve got you covered.<br/>
                Our team blends creativity and technology to provide solutions that work for you.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative w-full' style={{ height: '50vh', minHeight: '250px' }}>
            <img src='/host.webp' className='w-full h-full object-cover' alt="Slide 3" />
            <div className="absolute bottom-10 left-5 md:left-10 text-white z-10 max-w-xs md:max-w-lg">
              <h2 className='text-lg md:text-2xl font-bold'>
                FROM WEBSITES TO MOBILE APPS — WE TURN TECH IDEAS INTO POWERFUL REALITIES.
              </h2>
              <p className="text-xs md:text-sm mt-2">
                Share your vision, and we’ll bring it to life with expert development and design.<br/>
                We handle the tech so you can focus on what matters most—your business.
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Carousel;
