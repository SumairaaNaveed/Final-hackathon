
 import React from 'react';
import { FaHeart, FaBell, FaSearch, FaCog } from 'react-icons/fa';
import { VscSettings } from "react-icons/vsc";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white py-4 px-4 md:px-8 shadow-md flex flex-wrap items-center justify-between">
      {/* Logo and Search Bar Container section */}
    <div className="flex items-center space-x-4 lg:space-x-20 w-full lg:w-auto">
        {/* Logo section*/}
       <div className="text-xl md:text-2xl font-bold text-blue-600">MORENT</div>
        
        {/* Search Bar section */}
      <div className="relative w-full lg:w-[492px] h-[44px] mt-2 lg:mt-0">
          <input
            type="text"
            placeholder="Search something here"
            className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ borderRadius: '70px' }}
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FaSearch />
          </div>
          <div className="absolute text-2xl right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <VscSettings />
          </div>
        </div>
      </div> 

      {/* Icons section*/}
      <div className="flex items-center space-x-2 lg:space-x-4 mt-2 lg:mt-0">
        <Link href="/favorites">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <div className='text-lg md:text-xl text-gray-600 cursor-ponter'>
            <FaHeart />
            </div>
          </div>
        </Link>
        <Link href="/notifications">

          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <div className='text-lg md:text-xl text-gray-600 cursor-pointer'>
            <FaBell/>
            </div>
            <span className="absolute top-1 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
        </Link>
        <Link href="/settings">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <div className=' text-lg md:text-xl text-gray-600 cursor-pointer'>
            <FaCog />
            </div>
          </div>
        </Link> 

        {/* Profile Picture section*/}

        <Link href="/profile">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
            <Image src="/images/profile.png" alt="Profile" width={40} height={40} />
          </div>
        </Link>
      </div>
    </header>
  );
      };
      export default Header
