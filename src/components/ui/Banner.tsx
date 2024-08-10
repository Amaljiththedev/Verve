import React, { Suspense, lazy } from 'react';
import Button from "@/components/ui/Button"; // Import the Button component
import Link from 'next/link';

const Spline = lazy(() => import('@splinetool/react-spline'));
const Banner = () => {


  return (
    <div className="relative h-80">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene='https://prod.spline.design/j1OfpmntSw6xiKh1/scene.splinecode' className="w-full h-full" />
      </Suspense>
      <div className="mb-20 absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center p-6 sm:text-2xl">
        <h1 className="text-4xl font-bold text-white mb-4 sm:mb-8">Explore New Latest Products</h1>
        <p className="text-lg text-white lg:mb-4">Discover the newest and most exciting products in our store.</p>
        <Link href="">        
        <Button variant="outline" size="lg" className="mt-2 sm:mt-4">
          <p className='text-white'>Shop Now</p>
        </Button>
        </Link>

      </div>
    </div>
  );
};

export default Banner;
