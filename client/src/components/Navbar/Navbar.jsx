import React from "react";
import LogoLight from "../../assets/website/logo.png";
import LogoDark from "../../assets/website/logoDark.png";
//import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import Dropdown from 'react-bootstrap/Dropdown'


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
  
];

const DropdownLinks = [
  {
    name: "Trending Books",
    link: "/#",
  },
  {
    name: "Best Selling",
    link: "/#",
  },
  {
    name: "Authors",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const uData = JSON.parse(window.localStorage.getItem("user"));
  const user_role = uData?.role;
  // console.log(user_role);
  return (
    <>
      <div className="shadow-md bg-white dark:bg-black dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="/" className="font-bold text-6x6 sm:text-6x6 flex gap-2">
                <img
                  src={LogoDark}
                  alt="Logo"
                  className="logo-dark hidden dark:flex w-40 scale-95 -mt-1"
                />
                <img
                  src={LogoLight}
                  alt="Logo"
                  className="logo-light flex dark:hidden w-40"
                />
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-primary duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                {/* Simple Dropdown and Links */}
                <li className="group relative cursor-pointer">
                  <a
                    href={"/#home"}
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
              {uData && uData?.email && (
                <>
                  <button
                    onClick={() => handleOrderPopup()}
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
                  >
                    Books
                    <IoBookSharp className="text-xl text-white drop-shadow-sm cursor-pointer" />
                  </button>

                  <a
                    href={"/allbooks"}
                    className="bg-gradient-to-r cursor-pointer from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
                  >
                    Books
                  </a>

                  <a
                    href={"/login"}
                    onClick={() => {
                      window.localStorage.setItem("user", null);
                      // window.localStorage.setItem("loggedIn", false)
                      // window.localStorage.setItem("user-role", "")
                    }}
                    className="bg-gradient-to-r cursor-pointer from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
                  >
                    Logout
                  </a>
                </>
              )}
              {uData == null && (
                <a
                  href={"/login"}
                  className="bg-gradient-to-r cursor-pointer from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
                >
                  Login
                </a>
              )}
              {user_role == "admin" && (
                <a
                  href={"/admin"}
                  className="bg-gradient-to-r cursor-pointer from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
                >
                  Admin
                </a>
              )}
               <div className='right'>
                   
                   <Dropdown>
                       <Dropdown.Toggle variant="" id="dropdown-basic">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                           </svg>
                       </Dropdown.Toggle>

                       <Dropdown.Menu>
                           <Dropdown.Item href="/user/accountsettings">Profile</Dropdown.Item>
                           <Dropdown.Item href="#">Logout</Dropdown.Item>
                       </Dropdown.Menu>
                   </Dropdown>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
