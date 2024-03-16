import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div class="w-full">
     <div class="flex justify-center bg-[#1778BE] py-1.5 text-white font-semibold">
        <ul class="flex gap-10">
        <li class="flex items-center gap-2 "><span><img src="https://cdn-kelfh.nitrocdn.com/begWoDQDZEUcpvmaVrpuAYEsFreFVIlI/assets/images/optimized/rev-75cf915/indeedseo.com/images/us.png"/></span>+1{" "}323{" "}982{" "}7665</li>
        <li class="flex items-center gap-2 "><span><img src="https://cdn-kelfh.nitrocdn.com/begWoDQDZEUcpvmaVrpuAYEsFreFVIlI/assets/images/optimized/rev-75cf915/indeedseo.com/images/india.png"/></span>+91-7743047049</li>
        <li class="items-center gap-2 hidden md:flex "><span><img src="https://cdn-kelfh.nitrocdn.com/begWoDQDZEUcpvmaVrpuAYEsFreFVIlI/assets/images/optimized/rev-75cf915/indeedseo.com/images/email.png" /></span>info@indeedseo.com</li>
        </ul>
    </div>   
    <nav className="max-w-[1380px] mx-auto bg-white py-2 px-4 flex flex-wrap md:flex-nowrap justify-between items-center">
        <div class="flex items-center">
      <a class="w-[140px] h-[60px]" href="https://indeedseo.com/">
        <img
          className="w-[120px] h-[60px]"
          src="https://cdn-kelfh.nitrocdn.com/begWoDQDZEUcpvmaVrpuAYEsFreFVIlI/assets/images/optimized/rev-75cf915/indeedseo.com/images/logo.png"
          alt="indeed seo"
        />
      </a>
      <a href="https://www.google.com/partners/agency?id=6391920880">
        <img
          className="w-20 h-20 mr-6"
          src="https://cdn-kelfh.nitrocdn.com/begWoDQDZEUcpvmaVrpuAYEsFreFVIlI/assets/images/optimized/rev-75cf915/indeedseo.com/images/google-partner.svg"
          alt="google partner"
        />
      </a>
      </div>
      <div className="hidden lg:flex w-full lg:w-auto lg:flex-grow lg:items-center lg:justify-between">
        <ul className="flex gap-10 lg:w-auto lg:ml-auto lg:mr-10 ">
          <li class="hover:text-[#30ad1c]"><a href="https://indeedseo.com/">Solutions</a></li>
          <li class="hover:text-[#30ad1c]"><a href="https://indeedseo.com/about">About Us</a></li>
          <li class="hover:text-[#30ad1c]"><a href="https://indeedseo.com/seo-services/">Case Studies</a></li>
          <li class="hover:text-[#30ad1c]"><a href="https://indeedseo.com/seo-packages/">Resources</a></li>
          <li class="hover:text-[#30ad1c]"><a href="https://indeedseo.com/contact-us/">Contact Us</a></li>
        </ul>
       
      </div>
      <div class="flex">
      <div className="border-2 border-[#1778be] text-[#1778be] text-base px-8 py-2.5 hidden md:flex">
          <a className="section__btn" href="https://indeedseo.com/requestaquote">Get Quote</a>
      </div>
      <button
        className="ml-4 lg:hidden md:block">
        <span className=""><GiHamburgerMenu size={35} color='#30ad1c'/></span>
      </button>
      </div>
    </nav>
    </div>
    
  );
};

export default Navbar;
