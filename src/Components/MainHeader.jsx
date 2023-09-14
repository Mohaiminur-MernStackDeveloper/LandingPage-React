import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const MainHeader = () => {
  const [home, setHome] = useState(true);
  const [menu, setmenu] = useState(true);
  const [pages, setpages] = useState(true);
  const [blogs, setblog] = useState(true);
  const MenuItems = (
    <>
      <li className="relative">
        <button
          onMouseEnter={() => setHome(false)}
          onMouseLeave={() => setHome(true)}
          className="flex justify-center items-center gap-3"
        >
          <a>Home</a>
          <IoMdArrowDropdown />
        </button>
        <ul
          hidden={home}
          onMouseEnter={() => setHome(false)}
          onMouseLeave={() => setHome(true)}
          className="absolute bg-white px-5 w-56 shadow-sm rounded-md space-y-4 py-5"
        >
          <li>Home one</li>
          <li>Home two</li>
          <li>Home three</li>
        </ul>
      </li>
      <li className="cursor-pointer">About</li>
      <li className="relative">
        <button
          onMouseEnter={() => setmenu(false)}
          onMouseLeave={() => setmenu(true)}
          className="flex justify-center items-center gap-3"
        >
          <a>Menu</a>
          <IoMdArrowDropdown />
        </button>
        <ul
          hidden={menu}
          onMouseEnter={() => setmenu(false)}
          onMouseLeave={() => setmenu(true)}
          className="absolute bg-white px-5 w-56 shadow-sm rounded-md space-y-4 py-5"
        >
          <li>Menu List-01</li>
          <li>Menu List-02</li>
          <li>3 Columns Menu</li>
        </ul>
      </li>
      <li className="relative">
        <button
          onMouseEnter={() => setpages(false)}
          onMouseLeave={() => setpages(true)}
          className="flex justify-center items-center gap-3"
        >
          <a>Pages</a>
          <IoMdArrowDropdown />
        </button>
        <ul
          hidden={pages}
          onMouseEnter={() => setpages(false)}
          onMouseLeave={() => setpages(true)}
          className="absolute bg-white px-5 w-56 shadow-sm rounded-md space-y-4 py-5"
        >
          <li>Food Category</li>
          <li>Reservations</li>
          <li className="flex justify-between items-center gap-3">
            Gallery <IoMdArrowDropdown />
          </li>
          <li className="flex justify-between items-center gap-3">
            chef <IoMdArrowDropdown />
          </li>
          <li className="flex justify-between items-center gap-3">
            shop <IoMdArrowDropdown />
          </li>
          <li>Faq</li>
          <li>Error</li>
        </ul>
      </li>
      <li className="relative">
        <button
          onMouseEnter={() => setblog(false)}
          onMouseLeave={() => setblog(true)}
          className="flex justify-center items-center gap-3"
        >
          <a>Blogs</a>
          <IoMdArrowDropdown />
        </button>
        <ul
          hidden={blogs}
          onMouseEnter={() => setblog(false)}
          onMouseLeave={() => setblog(true)}
          className="absolute bg-white px-5 w-56 shadow-sm rounded-md space-y-4 py-5"
        >
          <li>Blog Grid</li>
          <li>Blog Standard</li>
          <li>Blog Details</li>
        </ul>
      </li>
      <li className="cursor-pointer">Contact</li>
    </>
  );
  return (
    <div className="w-full bg-black">
      <div className="w-11/12 mx-auto bg-base-100 rounded-full">
        <div className="navbar text-black w-11/12 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex justify-center items-center gap-5 font-Inter"
              >
                {MenuItems}
              </ul>
            </div>
            <img className="" src="/src/assets/logo.PNG" alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal px-1 flex justify-center items-center gap-5 font-Inter">
              {MenuItems}
            </ul>
          </div>
          <div className="navbar-end">
            <button className="px-10 py-2 bg-primary text-white rounded-full font-Inter tracking-tighter">
              Find Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
