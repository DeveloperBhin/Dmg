
import './App.css'
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';


import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Carouselup from './components/Carouselup';
import Carouseltxt from './components/Carouseltxt';


import MobileApp from './pages/MobileApp';
import Custom from './pages/Custom';

import CircleCarousel from './components/CircleCarousel';
import { Link } from 'react-router-dom';



function App() {
 
  return (
    <>
      <Navbar/>
      <Routes className="justify-center ">
      
      <Route path="/MobileApp" element={<MobileApp />} />
<Route path='/Custom' element={<Custom/>}/>
    <Route path='/' element={
  <div className='min-h-screen w-full bg-opacity-10 rounded-2xl'>

    {/* Carousel Section */}
    <div className='flex items-center justify-center w-full'>
      <Carousel />
    </div>

    {/* WhatsApp Floating Button */}
    <div className='fixed bottom-4 right-4 z-50'>
      <a href="https://wa.me/255759233403" target="_blank" rel="noopener noreferrer">
        <img src='/social.png' alt='WhatsApp' className="w-12 h-12" />
      </a>
    </div>

    {/* Welcome Message */}
    <div className='text-black p-6 text-center'>
      <p className='text-2xl font-extralight'>Welcome to DMG Technology</p>
      <h2 className='text-xl font-light mt-4'>
        Welcome to the forefront of Tanzania’s economic revolution! I’m Dmgtechnology, a passionate innovating company dedicated to skyrocketing businesses with cutting-edge software that screams growth...
      </h2>
    </div>

    {/* Services Section */}
    <div className='grid grid-cols-1 md:grid-cols-5 gap-4 p-6 text-white'>
      {[
        { img: '/bas.png', title: 'BUSINESS SOFTWARE DEVELOPMENT', desc: 'From inventory management to customer engagement tools, we build what you need to dominate your market!' },
        { img: '/md.png', title: 'DIGITAL TRANSFORMATION CONSULTING', desc: 'Get expert guidance to integrate cutting-edge tech and shake up every corner of your enterprise for maximum impact.' },
        { img: '/eco.png', title: 'E-COMMERCE PLATFORM CREATION', desc: 'Launch your online store with epic, user-friendly platforms designed to drive sales and expand your reach in Tanzania and beyond.' },
        { img: '/anl.png', title: 'DATA ANALYTICS & GROWTH STRATEGIES', desc: 'Unlock actionable insights with our data-driven tools, helping your biz scream success with smart, growth-focused decisions.' },
        { img: '/app.png', title: 'MOBILE APP DEVELOPMENT', desc: 'Empower your customers with custom mobile apps that put your services in their pockets, boosting engagement and loyalty.' },
      ].map((item, index) => (
        <div key={index} className='bg-blue-950 rounded-2xl border-2 border-amber-400 shadow-lg'>
          <div className='flex justify-center p-6'>
            <img src={item.img} alt={item.title} className='w-20 bg-white p-2 rounded-full' />
          </div>
          <p className='text-center text-xl font-semibold'>{item.title}</p>
          <h3 className='text-center font-light p-4'>{item.desc}</h3>
        </div>
      ))}
    </div>

      <div className='grid p-8'>
            <p className='text-blue-600 text-center py-6 text-3xl font-semibold'>What Makes Us Stand Front</p>
        
    <div className='grid md:grid-cols-2 gap-6 p-8 text-black'>
   <div className='flex justify-center items-center'>
        <Carouseltxt /> 
        </div>
      <div className='flex justify-center items-center '>
        <Carouselup /> 
        </div>
    </div>
    </div>
     

    {/* Call to Action */}
    <div className='bg-amber-600 py-8'>
      <div className='grid md:grid-cols-2 px-6'>
        <p className='text-white text-3xl font-semibold mb-4 md:mb-0'>Let's break the ice</p>
        <div className='flex justify-end'>
          <a href="https://wa.me/255759233403" target="_blank" rel="noopener noreferrer"
            className='bg-white text-black font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-100 transition'>
            Let's Talk
          </a>
        </div>
      </div>
    </div>

    {/* Our Clients */}
    <p className='text-blue-600 text-center py-6 text-3xl font-semibold'>OUR CLIENTS</p>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 px-8 pb-8'>
      {[
        '/se.jpeg', '/sn.jpeg', '/pk.jpeg', '/dl.jpeg',
        '/tt.jpeg', '/kp.jpeg', '/zn.jpeg', '/wt.jpg'
      ].map((imgSrc, idx) => (
        <div key={idx} className='flex justify-center'>
          <img src={imgSrc} alt={`Client ${idx + 1}`} className='w-24 h-24 rounded-full border-4 border-blue-900 bg-amber-400 p-1' />
        </div>
      ))}
    </div>

    {/* Footer */}
    <Footer />
  </div>
} />

       <Route path='/OurTechnology/' element={
  <div className="min-h-screen w-full bg-opacity-10 rounded-2xl">

    {/* Banner Section with Overlay Text */}
    <div className='relative w-full max-w-fit text-center'>
      <img src='/web.jpg' className='w-full h-80 object-cover rounded-xl' alt="Technology Banner" />
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white bg-black bg-opacity-50 p-4 rounded-xl'>
        <p className='text-2xl font-extrabold'>"Code with passion, build with purpose."</p>
      </div>
    </div>
    {/* WhatsApp Floating Icon */}
    <div className="fixed top-1/2 right-0 z-50 text-center p-1 rounded-l-2xl bg-green-500 shadow-lg">
      <a href="https://wa.me/255759233403" target="_blank" rel="noopener noreferrer">
        <img src='/social.png' alt="WhatsApp" className="w-10 h-10"/>
      </a>
    </div>

    {/* Technology Section */}
    <div className='p-8 text-black'>
      <p className='text-3xl font-bold text-center text-amber-600 mb-6'>OUR TECHNOLOGY USED</p>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>

        <div>
          <h3 className='font-semibold text-2xl mb-2'>Analytics</h3>
          <ul className='space-y-1 text-blue-500'>
            <li>Front-End Analytics</li>
            <li>Mobile App Analytics</li>
            <li>Desktop App Analytics</li>
            <li>UI/UX Analytics</li>
            <li>Web Application Analytics</li>
          </ul>
        </div>

        <div>
          <h3 className='font-semibold text-2xl mb-2'>Consultancy</h3>
          <ul className='space-y-1 text-blue-500'>
            <li>Strategic Front-End Consulting</li>
            <li>Mobile App Consulting</li>
            <li>Desktop App Consulting</li>
            <li>Web App Consulting</li>
            <li>UI/UX Design Consulting</li>
          </ul>
        </div>

        <div>
          <h3 className='font-semibold text-2xl mb-2'>FrontEnd</h3>
          <ul className='space-y-1 text-blue-500'>
            <li>Mobile Apps</li>
            <li>Desktop Apps</li>
            <li>Web Apps</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        <div>
          <h3 className='font-semibold text-2xl mb-2'>BackEnd</h3>
          <ul className='space-y-1 text-blue-500'>
            <li>Server Applications</li>
            <li>Integrations</li>
            <li>APIs</li>
            <li>Data Mining & Processing</li>
          </ul>
        </div>

      </div>
    </div>

    {/* Carousel Section */}
      <div className="my-10 w-full max-w-4xl">
      <CircleCarousel />
    </div>

    {/* Call to Action Section */}
    <div className='grid grid-cols-1 md:grid-cols-2 items-center bg-amber-100 p-10'>
      <div className='w-full'>
        <img src='/coffee.jpg' alt="Team Collaboration" className='w-full rounded-xl shadow-md'/>
      </div>
      <div className='p-6 text-black space-y-4'>
        <p className='font-extrabold text-4xl text-amber-600'>Let's explore how we can support and elevate your vision.</p>
        <h3 className='text-lg font-light'>
          Our team is made up of seasoned professionals who harness the power of the latest technologies to deliver innovative digital solutions.
          <br /><br />
          We craft products and services with a focus on excellence, ease of use, and complete customer satisfaction.
        </h3>
        <div className='bg-blue-600 text-white rounded-2xl p-4 w-64 text-center font-semibold'>
          <a href="https://wa.me/255759233403" target="_blank" rel="noopener noreferrer">Partner with our team today</a>
        </div>
      </div>
    </div>

    {/* Footer */}
    <Footer />

  </div>
} />

      <Route path='HowWeWork' element={
  <div className="flex flex-col  w-full">

    {/* Banner Section */}
    <div className='relative w-full max-w-full text-center'>
      <img src='steps.jpg' className='w-full h-80 object-cover rounded-xl' alt="Steps" />
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white bg-black bg-opacity-50 p-4 rounded-xl'>
        <p className='font-extrabold text-4xl'>"Code with passion, build with purpose."</p>
      </div>
    </div>

    {/* WhatsApp Floating Icon */}
    <div className="fixed top-1/2 right-0 z-50 text-center p-1 rounded-l-2xl bg-green-500 shadow-lg">
      <a href="https://wa.me/255759233403" target="_blank" rel="noopener noreferrer">
        <img src='/social.png' alt="WhatsApp" className="w-10 h-10" />
      </a>
    </div>

    {/* Process Grid */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 max-w-7xl'>

      {/* Step Cards */}
      {[
        { number: 1, title: "Discuss", desc: "Engage with the client to gain a deep understanding of their business..." },
        { number: 2, title: "Define", desc: "Clearly articulate the core problem by analyzing insights gathered..." },
        { number: 3, title: "Design", desc: "Translate insights from the client’s business into design concepts..." },
        { number: 4, title: "Develop", desc: "Build and implement solutions based on validated concepts..." },
        { number: 5, title: "Concepts", desc: "Shape initial ideas into strategic concepts..." },
        { number: 6, title: "Testing", desc: "Evaluate the solution through real-world scenarios and feedback..." },
        { number: 7, title: "Executing", desc: "Coordinate tasks and deliver solutions that align with defined goals..." },
      ].map(({ number, title, desc }) => (
        <div key={number} className='space-y-3 border-2 border-blue-400 rounded-2xl p-4 text-center'>
          <p className='bg-blue-400 w-12 h-12 mx-auto flex items-center justify-center rounded-full text-white text-2xl font-extrabold'>{number}</p>
          <p className='text-2xl font-bold text-amber-500'>{title}</p>
          <h3 className='text-lg font-light text-blue-900'>{desc}</h3>
        </div>
      ))}

    </div>

    {/* Call to Action */}
    <div className='bg-amber-600 p-8 w-full max-w-full rounded-xl mx-auto mt-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-6'>
        <p className='text-white font-semibold text-3xl text-center md:text-left'>Let's break the ice</p>
        <div className='flex justify-center md:justify-end'>
          <a href="https://wa.me/255759233403" target="_blank" rel="noopener noreferrer"
            className='bg-white text-black rounded-2xl px-6 py-3 font-semibold shadow-md hover:bg-amber-100 transition'>
            Let's Talk
          </a>
        </div>
      </div>
    </div>

    {/* Footer */}
    <Footer />

  </div>
} />
<Route path='OurServices' element={
  <div>

    {/* Hero Section */}
    <div className='relative w-full max-w-full text-center'>
      <img src='steps.jpg' className='w-full h-80 object-cover rounded-xl'/>
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white bg-black bg-opacity-50 p-4 rounded-xl'>
        <p className='font-extrabold text-2xl sm:text-3xl md:text-4xl'>"Code with passion, build with purpose."</p>
      </div>
    </div>

    {/* WhatsApp Floating Icon */}
    <div className="fixed bottom-10 right-4 z-50 text-center p-1 rounded-full shadow-amber-500">
      <a href="https://wa.me/255759233403" target="_blank">
        <img src='/social.png' className="w-12 h-12"/>
      </a>
    </div>

    {/* Services Grid */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-10'>

      {/* Service Item */}
      <div className='bg-blue-950 rounded-2xl shadow-lg border-2 border-amber-400 text-white p-4'>
        <div className='flex items-center justify-center bg-white p-4 rounded-2xl'>
          <img src='/cst.jpg' className='h-24 sm:h-28 object-contain'/>
        </div>
        <p className='text-center text-xl sm:text-2xl mt-4 font-bold'>Custom Software Development</p>
        <h3 className='text-center text-base sm:text-lg font-light mt-2'>Tailored solutions to meet your unique business needs.</h3>
      </div>

      <div className='bg-blue-950 rounded-2xl shadow-lg border-2 border-amber-400 text-white p-4'>
        <div className='flex items-center justify-center bg-white p-4 rounded-2xl'>
          <img src='/ap.jpg' className='h-24 sm:h-28 object-contain'/>
        </div>
        <p className='text-center text-xl sm:text-2xl mt-4 font-bold'>Mobile App Development</p>
        <h3 className='text-center text-base sm:text-lg font-light mt-2'>Creating innovative, user-friendly apps for iOS and Android platforms.</h3>
      </div>

      <div className='bg-blue-950 rounded-2xl shadow-lg border-2 border-amber-400 text-white p-4'>
        <div className='flex items-center justify-center bg-white p-4 rounded-2xl'>
          <img src='/analy.jpg' className='h-24 sm:h-28 object-contain'/>
        </div>
        <p className='text-center text-xl sm:text-2xl mt-4 font-bold'>Data Analytics & Business Intelligence</p>
        <h3 className='text-center text-base sm:text-lg font-light mt-2'>Unlocking the power of your data to drive informed decisions.</h3>
      </div>

      <div className='bg-blue-950 rounded-2xl shadow-lg border-2 border-amber-400 text-white p-4'>
        <div className='flex items-center justify-center bg-white p-4 rounded-2xl'>
          <img src='/so.jpg' className='h-24 sm:h-28 object-contain'/>
        </div>
        <p className='text-center text-xl sm:text-2xl mt-4 font-bold'>Website Development & SEO</p>
        <h3 className='text-center text-base sm:text-lg font-light mt-2'>Helping businesses evolve and stay ahead with modern tech and visibility.</h3>
      </div>
    </div>

    {/* Call to Action */}
    <div className='bg-amber-600 p-6 sm:p-10'>
      <div className='flex flex-col sm:flex-row justify-between items-center'>
        <p className='text-white font-bold text-2xl sm:text-3xl mb-4 sm:mb-0'>Let's break an Ice</p>
        <a href="https://wa.me/255759233403" target="_blank" className='bg-white text-black px-6 py-2 rounded-2xl font-semibold shadow-md'>
          Let's talk
        </a>
      </div>
    </div>

    {/* Footer */}
    <Footer />

  </div>
}/>


        <Route path='Photos' element={<div className='p-4'>Photos</div>}/>
      <Route path='AboutUs' element={
  <div className="w-full bg-white text-gray-900">

    {/* Header */}
    <div className="px-6 py-10 max-w-6xl mx-auto text-center">
      <p className='font-bold text-3xl sm:text-4xl text-blue-600 mb-6'>About Us</p>

      <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-justify">
        <p>
          <strong>DMG Technology</strong> is a leading innovator in the IT industry, committed to delivering cutting-edge tech solutions designed to meet the ever-evolving demands of businesses globally. Founded with a vision to empower organizations through technology, DMG Technology is dedicated to providing exceptional IT services across a wide range of sectors.
        </p>
        <p>
          With expertise in software development, IT consulting, cloud computing, cybersecurity, data analytics, and network management, DMG Technology helps clients streamline operations, enhance security, and leverage data for smarter decision-making. Our solutions are tailored to scale and adapt as our clients’ goals evolve, fostering sustainable growth and technological progress.
        </p>
        <p>
          At DMG Technology, we believe in the power of innovation to ignite economic transformation. We are not just another software company—we are architects of change, crafting cutting-edge digital solutions that fuel business growth and drive national progress.
        </p>
        <p>
          Our mission is clear and impactful: to transform businesses through technology, positively influencing their operations and improving the lives of their customers. As DMG Technology expands its global presence, we remain dedicated to our core values of integrity, innovation, and customer satisfaction.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="mt-10 text-left space-y-6">
        <h3 className='text-2xl font-semibold text-blue-600'>Why Choose DMG Technology</h3>

        <ul className="space-y-4 text-lg sm:text-xl leading-relaxed">
          <li>
            <span className='text-blue-600 font-bold'>Comprehensive IT Solutions</span> – We provide a complete range of IT services, from network security to software development, ensuring every aspect of your technological needs is covered.
          </li>
          <li>
            <span className='text-blue-600 font-bold'>Innovative Approach</span> – We embrace the latest technological advancements, ensuring that our solutions are both forward-thinking and future-proof.
          </li>
          <li>
            <span className='text-blue-600 font-bold'>Client-Focused</span> – Our clients are at the heart of everything we do. We offer tailored strategies and provide responsive support to meet their unique needs.
          </li>
          <li>
            <span className='text-blue-600 font-bold'>Experienced Team</span> – Our team of highly skilled professionals brings years of experience and deep industry knowledge to every project.
          </li>
        </ul>

        <p className="pt-6">
          At DMG Technology, we don’t just offer IT services—we build lasting partnerships that drive long-term success.
          <br />
          <span className='text-blue-500 font-semibold'>Let DMG Technology help your business thrive in today’s digital world.</span>
          <br />
          <span className="text-sm text-gray-600">📧 dmg@dmgtechnology.co.tz</span>
        </p>
      </div>
    </div>

    {/* WhatsApp Floating Button */}
    <div className="fixed bottom-10 right-4 z-50">
      <a href="https://wa.me/255759233403" target="_blank">
        <img src='social.png' alt="Contact us on WhatsApp" className="w-12 h-12"/>
      </a>
    </div>

    {/* Footer */}
    <Footer />

  </div>
}/>

      </Routes>
  
    
    </>
  );
};

export default App
