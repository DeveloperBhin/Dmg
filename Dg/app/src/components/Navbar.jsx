import React from 'react';
import {Link} from 'react-router-dom'

const Navbar=()=> {
  return (
    <nav className='border-amber-500 text-whit p-4 shadow-md'>
           <div className='container mx-auto flex justify-between items-center'>
            <div className='text-2xl font-semibold'><img src='public/TRANSARENT DMG TECHNOLOGY CV.webp'/></div>
            <ul className='flex space-x-6 text-lg'>
          
                <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
                <li><Link to="/OurTechnology" className="hover:text-yellow-300">Our Technology</Link></li>
                <li><Link to="/HowWeWork" className="hover:text-yellow-300">How we Work</Link></li>
                <li><Link to="/OurServices" className="hover:text-yellow-300">Our Services</Link></li>
                <li><Link to="/Photos" className="hover:text-yellow-300">Photos</Link></li>
                <li><Link to="/ContactUs" className="hover:text-yellow-300">Contact Us</Link></li>
           
            </ul>
            </div>
    </nav>
 
  )
}

export default Navbar