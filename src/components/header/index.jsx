import React, { useEffect, useState } from "react";
import NetflixLogo from "~/assets/logo/netflix-logo";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { headerMenu } from "~/utils/const";
import classNames from "classnames";
import SearchBar from "./search-bar";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 10;
      if (isTop !== scrolling) {
        setScrolling(isTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  return (
    <div className="top-0 w-full inset-x-0 sticky">
      <header
        className={`${
          scrolling ? "bg-transparent" : "bg-black"
        } transition-colors duration-500 min-h-[70px] flex absolute w-full z-[20]`}
      >
        <div className="flex items-center sticky mx-[60px] w-full">
          <NetflixLogo />
          <nav className=" flex item-center invisible md:visible">
            {headerMenu.map((menu) => (
              <NavLink to={menu.path}>
                {({ isActive }) => (
                  <div
                    type="button"
                    className={classNames(
                      "hover:text-[#b3b3b3] transition-colors text-[14px] ml-5",
                      {
                        "font-bold cursor-default hover:text-[#e5e5e5]":
                          isActive,
                      }
                    )}
                  >
                    {menu.title}
                  </div>
                )}
              </NavLink>
            ))}
          </nav>
          <div className="flex absolute right-0">
            <div className=" mr-6">
              <SearchBar />
            </div>
            <button className=" w-8 mr-[15px]">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <div className="flex items-center justify-center cursor-pointer">
              <img
                className=" w-8 h-8 rounded-md"
                src="https://occ-0-7330-1490.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABdd49moEsEFKTKDZsK17AC2zdae3-Gcz3IV9avV0l2LW5jn5Mg7ZgbHYkG8eQeLj2Fd_sstZ0PTRRDQoU4mpFG9TPqz7CsY.png?r=3e2"
                alt=""
              />
              <span className="ml-[5px]">
                <IoMdArrowDropdown />
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
