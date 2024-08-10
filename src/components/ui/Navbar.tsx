import React from 'react';
import Link from 'next/link';
import MaxwidthWrapper from './MaxwidthWrapper';
import Button from '@/components/ui/Button'; // Ensure this path is correct
import { ArrowRight, Search } from 'lucide-react';
import logo from '/logo.png'; // Adjust this path to where your logo is located

const Navbar = () => {
  const user = undefined; // Logic to determine if the user is logged in
  const isAdmin = false; // Logic to determine if the user is an admin

  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/20 backdrop-blur-lg transition-all'>
      <MaxwidthWrapper>
        <div className='flex h-14 items-center justify-between'>
          <Link href='/' className='flex items-center space-x-2'>
            <img src="./apple.png"  alt='Logo' className='h-8 w-auto' /> {/* Adjust height and width as needed */}
            <p>x</p>
            <span className='font-semibold text-black'>Verve</span>
          </Link>
          <div className='flex h-full items-center space-x-4'>
            <Link href='/browse'>
              <Button variant='ghost' size='sm'>
                Browse
                <Search className='ml-1.5 h-5 w-5' />
              </Button>
            </Link>
            {user ? (
              <Link href='/api/auth/logout'>
                <Button variant='ghost' size='sm'>
                  Logout
                </Button>
              </Link>
            ) : (
              <>
                <Link href='/login'>
                  <Button variant='ghost' size='sm'>
                    Login
                    <ArrowRight className='ml-1.5 h-5 w-5' />
                  </Button>
                </Link>
                <Link href='/signup'>
                  <Button variant='ghost' size='sm'>
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxwidthWrapper>
    </nav>
  );
};

export default Navbar;
