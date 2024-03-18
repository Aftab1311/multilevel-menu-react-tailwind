import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedSubmenu, setSelectedSubmenu] = useState(null);
  
    const submenus = [
      { title: 'SEO Services', description: ' Unlock the Benefits of SEO and Enhance Your Site',logo:'https://cdn-kelfh.nitrocdn.com/begWoDQDZEUcpvmaVrpuAYEsFreFVIlI/assets/images/optimized/rev-75cf915/indeedseo.com/images/mega-images/indeed-mega-tab-1-icon.svg', leftList: ['Item A', 'Item B', 'Item C'], rightList: ['Option X', 'Option Y', 'Option Z'] },
      { title: 'Social Media Marketing', description: 'Boost Your Social Presence with the Right Social Media Services',logo:'https://cdn-kelfh.nitrocdn.com/begWoDQDZEUcpvmaVrpuAYEsFreFVIlI/assets/images/optimized/rev-75cf915/indeedseo.com/images/mega-images/indeed-mega-tab-3-icon.svg', leftList: ['Item B', 'Item B', 'Item C'], rightList: ['Option X', 'Option Y', 'Option Z'] },
      { title: 'Online Reputation Managemnet', description: 'Take Control of Your Business with Our Robust ORM Services',logo:'https://cdn-kelfh.nitrocdn.com/begWoDQDZEUcpvmaVrpuAYEsFreFVIlI/assets/images/optimized/rev-75cf915/indeedseo.com/images/mega-images/indeed-mega-tab-5-icon.svg', leftList: ['Item C', 'Item B', 'Item C'], rightList: ['Option X', 'Option Y', 'Option Z']},
      { title: 'Pay Per Click', description: 'Revolutionise Your Aadvertising with Pay Per Click', leftList: ['Item D', 'Item B', 'Item C'],logo:'https://cdn-kelfh.nitrocdn.com/begWoDQDZEUcpvmaVrpuAYEsFreFVIlI/assets/images/optimized/rev-75cf915/indeedseo.com/images/mega-images/indeed-mega-tab-2-icon.svg', rightList: ['Option X', 'Option Y', 'Option Z']},
      { title: 'Link Building', description: 'Explode your Business with the Miracle of Link Building' ,logo:'https://cdn-kelfh.nitrocdn.com/begWoDQDZEUcpvmaVrpuAYEsFreFVIlI/assets/images/optimized/rev-75cf915/indeedseo.com/images/mega-images/indeed-mega-tab-4-icon.svg', leftList: ['Item A', 'Item B', 'Item C'], rightList: ['Option X', 'Option Y', 'Option Z']},
      { title: 'Content Writing', description: 'Take Your Business to the Next Level with Content writing',logo:'https://cdn-kelfh.nitrocdn.com/begWoDQDZEUcpvmaVrpuAYEsFreFVIlI/assets/images/optimized/rev-75cf915/indeedseo.com/images/mega-images/indeed-mega-tab-6-icon.svg', leftList: ['Item A', 'Item B', 'Item C'], rightList: ['Option X', 'Option Y', 'Option Z']},
    ];
  
    const handleItemClick = () => {
      setShowDropdown(!showDropdown);
    };
  
    const handleSubmenuHover = (index) => {
      setSelectedSubmenu(submenus[index]);
    };
  
  
  return (
    <div className="w-full">
      <div className="flex justify-center bg-[#1778BE] py-1.5 text-white font-semibold">
        <ul className="flex gap-10">
          <li className="flex items-center gap-2 ">
            <img
              src="https://cdn-kelfh.nitrocdn.com/begWoDQDZEUcpvmaVrpuAYEsFreFVIlI/assets/images/optimized/rev-75cf915/indeedseo.com/images/us.png"
              alt="photu"
            />
            +1 323 982 7665
          </li>
          <li className="flex items-center gap-2 ">
            <img
              src="https://cdn-kelfh.nitrocdn.com/begWoDQDZEUcpvmaVrpuAYEsFreFVIlI/assets/images/optimized/rev-75cf915/indeedseo.com/images/india.png"
              alt="photu"
            />
            +91-7743047049
          </li>
          <li className="items-center gap-2 hidden md:flex ">
            <img
              src="https://cdn-kelfh.nitrocdn.com/begWoDQDZEUcpvmaVrpuAYEsFreFVIlI/assets/images/optimized/rev-75cf915/indeedseo.com/images/email.png"
              alt="photu"
            />
            info@indeedseo.com
          </li>
        </ul>
      </div>
      <nav className="max-w-[1380px] mx-auto bg-white py-2 px-4 flex flex-wrap md:flex-nowrap justify-between items-center">
        <div className="flex items-center">
          <a className="w-[140px] h-[60px]" href="https://indeedseo.com/">
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
            <li className="hover:text-[#30ad1c] flex flex-wrap justify-center relative group "onClick={handleItemClick}>
                Solutions
      {showDropdown && (
        <div className="submenu-container absolute w-[1380px] z-10 flex ">
          <div className="submenu-list w-1/4  mt-20 flex flex-col justify-center bg-[#1778BE]">
            {submenus.map((submenu, index) => (
              <div
                key={index}
                className="submenu-item p-2 hover:white  "
                onMouseEnter={() => handleSubmenuHover(index)}
              >
                <div className="flex gap-2 items-center">
                <img
                        className="w-6 h-6 mr-2 hover:text-black"
                        src={submenu.logo}
                        alt={`Logo for ${submenu.title}`}
                      />
        
                   <div className="flex flex-col">
                   <h1 className="text-xl text-white hover:text-black"> {submenu.title}</h1>
                   {selectedSubmenu && selectedSubmenu.title === submenu.title && (
                  <p className="submenu-description text-sm text-gray-400">
                    {submenu.description}
                  </p>
                )}
                    </div>  
               
                </div>
                
               
              </div>
            ))}
          </div>
          <div className="w-3/4 mt-20 ">
            {selectedSubmenu && (
                <div>
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">{selectedSubmenu.leftList}</h1>
                        <p className="text-sm">{selectedSubmenu.rightList}</p>
                </div>
        </div>
      )}
    </div>
    </div>
    )}

            </li>
            <li className="hover:text-[#30ad1c]">
              <a href="https://indeedseo.com/about">About Us</a>
            </li>
            <li class="hover:text-[#30ad1c] relative group">
              <a href="https://indeedseo.com/seo-packages/">Resources</a>
              <ul class="absolute bg-[#fff] text-black w-[130px] rounded-lg  mt-2 p-2  shadow-lg opacity-0 group-hover:opacity-100 transition duration-300">
                <li class="mt-2 mb-1 hover:text-[#30ad1c] ">
                  <a class="nav-link" href="https://indeedseo.com/news">
                    News
                  </a>
                </li>
                <li class="py-1 hover:text-[#30ad1c] ">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="https://indeedseo.com/blog"
                  >
                    Blog
                  </a>
                </li>
                <li class="py-1 hover:text-[#30ad1c] ">
                  <a class="nav-link" href="https://indeedseo.com/videos">
                    Videos
                  </a>
                </li>
                <li class="mt-1 mb-2 hover:text-[#30ad1c] ">
                  <a
                    class="nav-link"
                    href="https://indeedseo.com/blog/web-stories/"
                  >
                    Web Stories
                  </a>
                </li>
              </ul>
            </li>
            <li class="hover:text-[#30ad1c]">
              <a href="https://indeedseo.com/contact-us/">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="border-2 border-[#1778be] text-[#1778be] text-base px-8 py-2.5 hidden md:flex">
            <a
              className="section__btn"
              href="https://indeedseo.com/requestaquote"
            >
              Get Quote
            </a>
          </div>
          <button className="ml-4 lg:hidden md:block">
            <span className="">
              <GiHamburgerMenu size={35} color="#30ad1c" />
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
