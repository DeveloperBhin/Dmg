
import './App.css'
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Carousel from './components/Carousel';
import analytics from './components/analytics';
import CircleCarousel from './components/CircleCarousel';
import { Link } from 'react-router-dom';



function App() {
 
  return (
    <>
      <Navbar/>
      <Routes className="justify-center ">
      <Route path="/analytics" element={<analytics />} />

        <Route path='/' element={
          <div className=' min-h-screen   w-full  bg-opacity-10 p-6 rounded-2xl '>
         
        <div className='flex items-center justify-center h-min min-w-full '>

          <Carousel />
          
          </div>
          
          <div className=" fixed  top-100 right-0 w-25 z-index-1000 text-center p-1 rounded-l-2xl shadow-amber-500 transform-fill text-white">
            
        
        <a href="https://wa.me/255759233403" target="_blank"  className="font-semibold ">
            <img src='public/social.png' className=""/>
        </a>
    </div>
          <div className='text-black p-3' >
          <p className='text-center  font-extralight'>Welcome to DMG Technology</p>
          <h2 className='text-2xl font-light text-center'>We are an Information and Technology company offering customized IT solutions, including Programming, Database Management, and Hardware Development. Our goal is to enhance your experience and optimize your digital operations.
         </h2> </div>
         <div className='grid'>
          <div className='text-black grid grid-cols-4 gap-3 p-4'> 
            <div className='bg-blue-950 rounded-2xl shadow-black  border-2 border-amber-400'>
              <div className='flex tems-center justify-center p-10 ' >
              <img src='public/code.png' className='flex tems-center justify-center w-20 bg-white'/>
              </div>
              <p className='text-center text-white'>DEVELOPMENT</p>
              <h3 className='text-2xl text-center text-white p-5 font-extralight'>Website and software development tailored to your needs</h3></div>
              <div className='bg-blue-950 rounded-2xl shadow-black  border-2 border-amber-400'>
              <div className='flex tems-center justify-center p-10' >
              <img src='public/dashboard.png' className='flex tems-center justify-center w-20 bg-white'/>
              </div>
              <p className='text-center text-white'>DATA ANALYTICS</p>
              <h3 className='text-2xl text-center text-white p-5 font-extralight'>Intelligence - Unlocking the power of your data to drive informed decisions.
              </h3></div>
              <div className='bg-blue-950 rounded-2xl shadow-black   border-2 border-amber-400'>
              <div className='flex tems-center justify-center p-10' >
              <img src='public/curve.png' className='flex tems-center justify-center w-20 p-3 bg-white'/>
              </div>
              <p className='text-center text-white'>DESIGNING</p>
              <h3 className='text-2xl text-center text-white p-5 font-extralight'>Website and software development tailored to your needs</h3></div>
              <div className='bg-blue-950 rounded-2xl shadow-black  border-2 border-amber-400'>
              <div className='flex tems-center justify-center p-10 ' >
              <img src='public/shuttle.png' className='flex tems-center justify-center w-20 p-3 bg-white'/>
              </div>
              <p className='text-center text-white'>DEPLOYMENT</p>
              <h3 className='text-2xl text-center text-white p-5 font-extralight'>Effortless web hosting and seamless software deployment solutions</h3></div>
           
          </div>
          
         </div>
         <div className='grid p-8'>
          <p className='text-black  font-stretch-ultra-condensedp-3'>What Makes Us Stand Front</p>
          <div className=' grid grid-cols-2  '>
            
            <div className='text-black'>
           <p className='font-extrabold'> BidhaaLink </p>
<h3 className='text-center font-thin font[i]'><i>BidhaaLink is a trusted and easy-to-use platform that connects buyers and sellers across Tanzania. Whether you’re looking to expand your business or find quality products at affordable prices, BidhaaLink is here to help. With secure payment options, verified listings, and a user-friendly interface, buying and selling has never been more convenient.

Join the BidhaaLink community today and be part of the future of online shopping in Tanzania!</i></h3>
            </div>
            <div className='text-black flex items-center justify-center h-full max-w-full border-l-2'>
              <img src='public/bdl.png ' className='w-full'/>
            </div>
         
          </div>
         </div>
         <div className='bg-amber-600 p-8 '>
          <div className='grid grid-cols-2'>
            <div className='text-black justify-items-center p-3'>
              <p className='text-white font-semibold text-4xl'>Let's break an Ice</p>
            </div>
            <div className='text-black items-center justify-items-end'>
              <div className='bg-white text-black rounded-2xl p-8 w-50 font-semibold'>Let's talk</div>
            </div>
          </div>
         </div>
         <p className='text-blue-600 text-center p-8 text-3xl font-semibold'> OUR CLIENTS  </p>
          
         <div className='grid grid-cols-4  grid-rows-2 p-8 gap-5'>
        <div className=' rounded-full p-15'>
            <img src='public/se.jpeg' className='bg-amber-400 rounded-full border-3 p-1  border-blue-900  w-30 h-30'/>
          </div>
          <div className=' rounded-full p-15'>
            <img src='public/sn.jpeg' className='rounded-full border-3 border-blue-900 p-1 w-30 h-30 bg-amber-400'/>
          </div>
          <div className=' rounded-full p-15'>
            <img src='public/pk.jpeg' className='rounded-full border-3 border-blue-900 p-1 w-30 h-30 bg-amber-400'/>
          </div>
          <div className=' rounded-full p-15'>
            <img src='public/dl.jpeg' className='rounded-full border-3 border-blue-900 p-1 w-30 h-30 bg-amber-500'/>
          </div>
          <div className=' rounded-full p-15'>
            <img src='public/tt.jpeg' className='rounded-full border-3 blue-900 p-1 w-30 h-30 bg-amber-500'/>
          </div>
          <div className=' rounded-full p-15'>
            <img src='public/kp.jpeg' className='rounded-full border-3 border-blue-900 p-1 w-30 h-30 bg-amber-500'/>
          </div>
          <div className=' rounded-full p-15'>
            <img src='public/zn.jpeg' className='rounded-full border-3 border-blue-900 p-1 w-30 h-30 bg-amber-500'/>
          </div>
         
          <div className=' rounded-full p-15'>
            <img src='public/wt.jpg' className='rounded-full border-3 border-blue-900 p-1 w-30 h-30 bg-amber-500'/>
          </div>
          
         


         </div>
         <div className='grid grid-cols-3 bg-gray-400 p-4 h-50'>
          <div>
            <p className='text-black text-center'> OUR SERVICES</p>
          </div>
          <div>
            <p className='text-black text-center'> RELATED LINKS</p>
          </div>
          <div>
            <p className='text-black text-center'> SOCIAL MEDIA</p>
          </div>
         </div>
         
        </div>

        
        
        
      
        
        }
        
        
        />
        <Route path='/OurTechnology/' element={<div className='p-4 '> 

          <div>
            <div className='relative min-w-full min-h-full justify-center text-center'>
              <img src='web.jpg' className='w-full h-full object-cover'/>
              <div className='absolute bottom-20 z-10 text-white overlay left-50'>
                <p className='text-center font-extrabold text-4xl'>"Code with passion, build with purpose."</p>
              </div>
              
            </div>
            <div className=" fixed  top-100 right-0 w-25 z-index-1000 text-center p-1 rounded-l-2xl shadow-amber-500 transform-fill text-white">
            
        
            <a href="https://wa.me/255759233403" target="_blank"  className="font-semibold ">
                <img src='public/social.png' className=""/>
            </a>
        </div>
            
              <p className='p-6 font-stretch-condensed text-2xl'>OUR TECHNOLOGY USED</p>
              <div className='grid grid-cols-4'>
           <div><h3 className='font-semibold text-2xl'>Analytics</h3>
           <li className='text-blue-500'>Front-End Analytics </li>
           <li className='text-blue-500'>Mobile Application Analytics</li>
           <li className='text-blue-500'>Desktop Application Analytics</li>
           <li className='text-blue-500'>UI/UX Analytics</li>
           <li className='text-blue-500'>Web Application Analytics</li>
           </div>
           <div>
           <h3 className='font-semibold text-2xl'>Consultancy</h3>
           <li className='text-blue-500'> Strategic Front-End Development Consulting</li>
           <li className='text-blue-500'>Comprehensive Mobile Application Consulting</li>
           <li className='text-blue-500'>Tailored Desktop Application Consulting</li>
           <li className='text-blue-500'>End-to-End Web Application Consulting</li>
           <li className='text-blue-500'>Expert UI/UX Design Consulting</li>
           </div>
           <div>
           <h3 className='font-semibold text-2xl'>FrontEnd</h3>
           <li className='text-blue-500'>Mobile Apps</li>
           <li className='text-blue-500'>Desktop Apps</li>
           <li className='text-blue-500'>Web Apps</li>
           <li className='text-blue-500'>UI/UX Design</li>
           </div>
           <div>
           <h3 className='font-semibold text-2xl'>BackEnd</h3> 
           <li className='text-blue-500'>Server Apps</li>
           <li className='text-blue-500'>Intergrations</li>
           <li className='text-blue-500'>API</li>
           <li className='text-blue-500'>Data Mining & Processing</li>
           </div>
           </div>
         
          </div>
          <CircleCarousel/>

          <div className='grid grid-cols-2'>
            <div className='min-w-full w-99 pt-10'>
              <img src='public/coffee.jpg' className='min-w-full'/>
            </div>
            <div  className='p-6'>
              <p className='font-extrabold text-amber-500 text-4xl'>Let's explore how we can support and elevate your vision.</p>
<h3 className=' text-4xl text-amber-500 font-light'>Our team is made up of seasoned professionals who harness the power of the latest technologies to deliver innovative digital solutions.

We craft products and services with a focus on excellence, ease of use, and complete customer satisfaction.
<div className='bg-blue-600 text-white rounded-2xl p-4 w-80 font-semibold'>Partner with our team today.</div>

</h3></div>
 
           </div>
           <div className='grid grid-cols-3 bg-gray-400 p-4 h-50'>
          <div>
            <p className='text-black text-center'> OUR SERVICES</p>
          </div>
          <div>
            <p className='text-black text-center'> RELATED LINKS</p>
          </div>
          <div>
            <p className='text-black text-center'> SOCIAL MEDIA</p>
          </div>
         </div>
         
        </div>}/>
        <Route path='HowWeWork' element={<div className='p-4'>
          
            <div className='relative min-w-full min-h-full justify-center text-center'>
              <img src='steps.jpg' className='w-full h-full object-cover'/>
              <div className='absolute bottom-20 z-10 text-white overlay left-50'>
                <p className='text-center font-extrabold text-4xl'>"Code with passion, build with purpose."</p>
              </div>
              
            </div>
            <div className=" fixed  top-100 right-0 w-25 z-index-1000 text-center p-1 rounded-l-2xl shadow-amber-500 transform-fill text-white">
            
        
            <a href="https://wa.me/255759233403" target="_blank"  className="font-semibold ">
                <img src='public/social.png' className=""/>
            </a>
        </div>
            <div className='grid grid-cols-4 p-5 gap-8'>
            <div>
                <div className='grid grid-cols-2 '>
                <div><p className='bg-blue-400 rounded-2xl  text-center font-extrabold text-4xl '>1</p> </div>
                <div className='  '>
                  
                </div>
                </div>
                <div className='   border-2 border-blue-400 rounded-2xl w-full h-full'>
                  <p className='text-3xl font-bold text-center text-amber-500'>Discuss </p>                                                                                                                                                                       
                  <h3 className='  text-center flex  text-2xl  font-light'>Our team is made up of seasoned professionals who harness the power of the latest technologies to deliver innovative digital solutions.

We craft products and services with a focus on excellence, ease of use, and complete customer satisfaction.</h3>
</div>
                </div>
                <div>
                <div className='grid grid-cols-2 '>
                <div><p className='bg-blue-400 rounded-2xl  text-center font-extrabold text-4xl '>2</p> </div>
                <div className='  '>
                  
                </div>
                </div>
                <div className='   border-2 border-blue-400 rounded-2xl w-full h-full'>
                  <p className='text-3xl font-bold text-center text-amber-500'>Define </p>                                                                                                                                                                       
                  <h3 className='  text-center flex  text-2xl  font-light'>Our team is made up of seasoned professionals who harness the power of the latest technologies to deliver innovative digital solutions.

We craft products and services with a focus on excellence, ease of use, and complete customer satisfaction.</h3>
</div></div>
<div>
                <div className='grid grid-cols-2 '>
                <div><p className='bg-blue-400 rounded-2xl  text-center font-extrabold text-4xl '>3</p> </div>
                <div className='  '>
                  
                </div>
                </div>
                <div className='   border-2 border-blue-400 rounded-2xl w-full h-full'>
                  <p className='text-3xl font-bold text-center text-amber-500'>Design </p>                                                                                                                                                                       
                  <h3 className='  text-center flex  text-2xl  font-light'>Our team is made up of seasoned professionals who harness the power of the latest technologies to deliver innovative digital solutions.

We craft products and services with a focus on excellence, ease of use, and complete customer satisfaction.</h3>
</div></div>
<div>
                <div className='grid grid-cols-2 '>
                <div><p className='bg-blue-400 rounded-2xl  text-center font-extrabold text-4xl '>4</p> </div>
                <div className='  '>
                  
                </div>
                </div>
                <div className='   border-2 border-blue-400 rounded-2xl w-full h-full'>
                  <p className='text-3xl font-bold text-center text-amber-500'>Develop </p>                                                                                                                                                                       
                  <h3 className='  text-center flex  text-2xl  font-light'>Our team is made up of seasoned professionals who harness the power of the latest technologies to deliver innovative digital solutions.

We craft products and services with a focus on excellence, ease of use, and complete customer satisfaction.</h3>
</div></div>
            </div>
            <div className='grid grid-cols-4 p-10 gap-8'>
            <div>
                <div className='grid grid-cols-2 '>
                <div><p className='bg-blue-400 rounded-2xl  text-center font-extrabold text-4xl '>5</p> </div>
                <div className='  '>
                  
                </div>
                </div>
                <div className='   border-2 border-blue-400 rounded-2xl w-full h-full'>
                  <p className='text-3xl font-bold text-center text-amber-500'>Concepts </p>                                                                                                                                                                       
                  <h3 className='  text-center flex  text-2xl  font-light'>Our team is made up of seasoned professionals who harness the power of the latest technologies to deliver innovative digital solutions.

We craft products and services with a focus on excellence, ease of use, and complete customer satisfaction.</h3>
</div>
                </div>
                <div>
                <div className='grid grid-cols-2 '>
                <div><p className='bg-blue-400 rounded-2xl  text-center font-extrabold text-4xl '>6</p> </div>
                <div className='  '>
                  
                </div>
                </div>
                <div className='   border-2 border-blue-400 rounded-2xl w-full h-full'>
                  <p className='text-3xl font-bold text-center text-amber-500'>Testing </p>                                                                                                                                                                       
                  <h3 className='  text-center flex  text-2xl  font-light'>Our team is made up of seasoned professionals who harness the power of the latest technologies to deliver innovative digital solutions.

We craft products and services with a focus on excellence, ease of use, and complete customer satisfaction.</h3>
</div></div>
<div>
                <div className='grid grid-cols-2 '>
                <div><p className='bg-blue-400 rounded-2xl  text-center font-extrabold text-4xl '>7</p> </div>
                <div className='  '>
                  
                </div>
                </div>
                 <div className='   border-2 border-blue-400 rounded-2xl w-full h-full'>
                  <p className='text-3xl font-bold text-center text-amber-500'>Executing </p>                                                                                                                                                                       
                  <h3 className='  text-center flex  text-2xl  font-light'>Our team is made up of seasoned professionals who harness the power of the latest technologies to deliver innovative digital solutions.

We craft products and services with a focus on excellence, ease of use, and complete customer satisfaction.</h3>
</div></div>

            </div>
            <div className='p-8'>
            <div className='bg-amber-600 p-8 '>
          <div className='grid grid-cols-2'>
            <div className='text-black justify-items-center p-3'>
              <p className='text-white font-semibold text-4xl'>Let's break an Ice</p>
            </div>
            <div className='text-black items-center justify-items-end'>
              <div className='bg-white text-black rounded-2xl p-8 w-50 font-semibold'>Let's talk</div>
            </div>
          </div>
         </div>
         </div>
         <div className='grid grid-cols-3 bg-gray-400 p-4 h-50'>
          <div>
            <p className='text-black text-center'> OUR SERVICES</p>
          </div>
          <div>
            <p className='text-black text-center'> RELATED LINKS</p>
          </div>
          <div>
            <p className='text-black text-center'> SOCIAL MEDIA</p>
          </div>
         </div>
        </div>}/>
        <Route path='OurServices' element={<div >

          <div className='relative min-w-full min-h-full justify-center text-center  p-10  bg-gray-500'>
              <img src='steps.jpg' className='w-full h-full object-cover p-4 bg-gray-400'/>
              <div className='absolute bottom-20 z-10 text-white overlay left-50'>
                <p className='text-center font-extrabold text-4xl'>"Code with passion, build with purpose."</p>
              </div>
              
            </div>
            <div className=" fixed  top-100 right-0 w-25 z-index-1000 text-center p-1 rounded-l-2xl shadow-amber-500 transform-fill text-white">
            
        
            <a href="https://wa.me/255759233403" target="_blank"  className="font-semibold ">
                <img src='public/social.png' className=""/>
            </a>
        </div>
        <div className='grid'>
          <div className='text-black grid grid-cols-3 gap-3 p-4'> 
            <div className='bg-blue-950 rounded-2xl shadow-black  border-2 border-amber-400'>
              <div className='flex tems-center justify-center p-10 ' >
              <img src='public/cst.jpg' className='flex tems-center justify-center  bg-white'/>
              </div>
              <p className='text-center text-white text-3xl' >Custom Software Development</p>
              


              <h3 className='text-2xl text-center text-white p-5 font-extralight'>Tailored solutions to meet your unique business needs.</h3></div>
              <div className='bg-blue-950 rounded-2xl shadow-black  border-2 border-amber-400'>
              <div className='flex tems-center justify-center p-10' >
              <img src='public/ap.jpg' className='flex tems-center justify-center  bg-white'/>
              </div>
              <p className='text-center text-white text-3xl'>Mobile App Development</p>
              

              <h3 className='text-2xl text-center text-white p-5 font-extralight'>Creating innovative, user-friendly apps for iOS and Android platforms.

              </h3></div>
              <div className='bg-blue-950 rounded-2xl shadow-black   border-2 border-amber-400'>
              <div className='flex tems-center justify-center p-10' >
              <img src='public/analy.jpg' className='flex tems-center justify-center   bg-white'/>
              </div>
              <p className='text-center text-white text-3xl'>Data Analytics & Business</p>
              


              <h3 className='text-2xl text-center text-white p-5 font-extralight'>Intelligence - Unlocking the power of your data to drive informed decisions......       <Link to="/analytics" className="font-semibold text-amber-400 hover:underline">See More</Link>
              </h3></div>
              <div className='bg-blue-950 rounded-2xl shadow-black  border-2 border-amber-400'>
              <div className='flex tems-center justify-center p-10 ' >
              <img src='public/so.jpg' className='flex tems-center justify-center  bg-white'/>
              </div>
              <p className='text-center text-white text-3xl'>Website development and SEO systems</p>
              

              <h3 className='text-2xl text-center text-white p-5 font-extralight'>Helping businesses evolve and stay ahead with the latest technology trends.</h3></div>
           
          </div>
          
         </div>
         
         
            
         
          
         <div className='grid grid-cols-3 bg-gray-400 p-4 h-50'>
          <div>
            <p className='text-black text-center'> OUR SERVICES</p>
          </div>
          <div>
            <p className='text-black text-center'> RELATED LINKS</p>
          </div>
          <div>
            <p className='text-black text-center'> SOCIAL MEDIA</p>
          </div>
         </div>
        </div>}/>
        <Route path='Photos' element={<div className='p-4'>Photos</div>}/>
        <Route path='contactUs' element={<div className='p-4'>Contact Us</div>}/>
      </Routes>
  
    
    </>
  );
};

export default App
