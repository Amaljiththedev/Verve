"use client";
import { Check, Star } from "lucide-react";
import MaxwidthWrapper from "@/components/ui/MaxwidthWrapper";
import Banner from "./ui/Banner";
import { AppleCardsCarouselDemo } from "./ui/Carsoual";
import Testimonals from "./ui/Testimonals";
import Footer from "./ui/Footer";

const HeroSection = () => {
  return (
    <section className="bg-slate-50">
      <MaxwidthWrapper className="pb-24 pt-10 lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-8 lg:pt-24 xl:pt-32 lg:pb-52">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center flex flex-col items-center">
          <div className="relative flex justify-center items-center">
          <img src="./apple.png" className="w-15 h-20"/> {/* Adjust the size as needed */}
          <div className="flex flex-col items-center ml-2">
            <h1></h1>
            <h1 className="text-6xl mt-5">xVerve</h1>
            </div>
            </div>

            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-6xl">
              Welcome to the Apple Exclusive Store <span className="text-blue-500">Verve</span> !
            </h1>
            <p className="mt-8 text-lg max-w-prose text-center text-balance">
              Discover the latest Apple products, including iPhones, MacBooks, iPads, and accessories. Experience innovation and style with our exclusive collection.
            </p>
            <ul className="mt-8 space-y-2 text-left font-medium">
              <li className="flex items-center">
                <Check className="h-5 w-5 shrink-0 text-blue-400" />
                <span className="ml-2">High-Quality, Apple-certified products</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 shrink-0 text-blue-400" />
                <span className="ml-2">Exclusive deals on the latest iPhones</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 shrink-0 text-blue-400" />
                <span className="ml-2">Free shipping on all orders</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 shrink-0 text-blue-400" />
                <span className="ml-2">24/7 customer support</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 shrink-0 text-blue-400" />
                <span className="ml-2">Hassle-free returns and exchanges</span>
              </li>
            </ul>
            <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-5">
              <div className="flex space-x-0">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-1.png" alt="User" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-2.png" alt="User" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-3.png" alt="User" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-4.jpg" alt="User" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-5.jpg" alt="User" />
              </div>
               </div>
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 mt-4 lg:mt-0">
                <div className="flex gap-0.5 mt-5 mb-1">
                  <Star className='h-4 w-4 text-purple-600 fill-purple-950' />
                  <Star className='h-4 w-4 text-purple-600 fill-purple-950' />
                  <Star className='h-4 w-4 text-purple-600 fill-purple-950' />
                  <Star className='h-4 w-4 text-purple-600 fill-purple-950' />
                  <Star className='h-4 w-4 text-purple-600 fill-purple-950' />
                  <Star className='h-4 w-4 text-purple-600 fill-purple-950' />
                </div>
                </div>
                <p><span className="font-semibold">2M</span> Happy customers</p>
          </div>
        </div>
        </MaxwidthWrapper>
      <Banner/>
      <AppleCardsCarouselDemo />
      <Testimonals/>
      <Footer/>
      
    </section>
  );
};

export default HeroSection;
