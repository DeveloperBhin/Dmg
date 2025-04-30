import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Pagination,Navigation,Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = () => {

    return (
        <div className='w-full max-w-screen max-auto'>
<Swiper 
modules={[Pagination,Navigation,Autoplay]}
navigation
pagination={{clickable:true}}
autoplay = {{dilay:3000}}
loop={true}
className='rounded-lg max-w-screen'

>
    <SwiperSlide>
        <div className='relative max-w-screen h-50'>
            <img src='/public/WED.webp' className='w-full h-50 object-cover'/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

{/* Optional Text */}
<div className="absolute bottom-10 left-10 text-white z-10">
  <h2 className="text-2xl font-bold">WEB DESINING</h2>
  <p className="text-sm">We deliver stunning and user-friendly website designs tailored to your brand and goals.<br/>
  From responsive layouts to modern UI/UX, we craft designs that leave a lasting impression.</p>
</div>
</div>
    </SwiperSlide>

    <SwiperSlide>
        <div className='relative w-full h-50'>
            <img src='/public/SEO.webp' className='w-full h-50 object-cover'/>
            <div  className='absolute bottom-10 left-10 text-white z-10'>
                <h2 className='text-white text-4xl font-bold'>SEO SERVICE</h2>
                <p className="text-sm">We provide expert SEO services to boost your website's visibility and drive organic traffic.<br/>
                From keyword optimization to technical SEO, we help you rank higher and grow faster.</p>
            </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className='relative w-full h-50'>
            <img src='/public/host.webp' className='w-full h-50 object-cover'/>
            <div  className='absolute bottom-10 left-10 text-white z-10'>
                <h2 className='text-white text-4xl font-bold'> WEB HOSTING</h2>
                <p className="text-sm"> We offer reliable and secure web hosting with 99.9% uptime and lightning-fast performance.<br/>
Get scalable solutions, free SSL, and 24/7 support to keep your website running smoothly.</p>
            </div>
        </div>
    </SwiperSlide>
    
    
    
    </Swiper>

        </div>



    );

};


export default Carousel;