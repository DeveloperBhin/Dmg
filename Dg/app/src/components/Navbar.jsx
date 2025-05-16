import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: Install `lucide-react` or use any icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white text-black p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-semibold'>
          <img
            src='/TRANSARENT DMG TECHNOLOGY CV.webp'
            alt="Logo"
            className='h-10 w-auto'
          />
        </div>

        {/* Hamburger icon for mobile */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6 text-lg'>
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/OurTechnology" className="hover:text-yellow-300">Our Technology</Link></li>
          <li><Link to="/HowWeWork" className="hover:text-yellow-300">How we Work</Link></li>
          <li><Link to="/OurServices" className="hover:text-yellow-300">Our Services</Link></li>
          <li><Link to="/Photos" className="hover:text-yellow-300">Photos</Link></li>
          <li><Link to="/AboutUs" className="hover:text-yellow-300">About Us</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden mt-4 space-y-4 px-4 text-lg'>
          <li><Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Home</Link></li>
          <li><Link to="/OurTechnology" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Our Technology</Link></li>
          <li><Link to="/HowWeWork" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">How we Work</Link></li>
          <li><Link to="/OurServices" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Our Services</Link></li>
          <li><Link to="/Photos" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Photos</Link></li>
          <li><Link to="/AboutUs" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">About Us</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
