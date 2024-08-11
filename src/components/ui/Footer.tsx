import React from 'react';
import Button from './Button';
import { FaceIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { Facebook } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Verve Apple Store</h2>
          <p className="text-sm text-gray-400">© 2024 Your Company. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
          <a href="#" className="text-gray-400 hover:text-white">Home</a>
          <a href="#" className="text-gray-400 hover:text-white">About</a>
          <a href="#" className="text-gray-400 hover:text-white">Services</a>
          <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 items-center">
          <form className="flex mb-4 md:mb-0 border-white">
            <input
              type="email"
              className="px-4 py-2 rounded-l bg-white border-white text-black"
              placeholder="Enter your email"
            />
            <Button 
            variant='outline'>
              Subscribe
            </Button>
          </form>
          <div className="flex space-x-4">
            <InstagramLogoIcon/>
            <FaFacebook />
            <TwitterLogoIcon/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
