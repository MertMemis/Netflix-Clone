import React from "react";
import NetflixLogo from "~/assets/logo/netflix-logo";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { headerMenu } from "~/utils/const";
import classNames from "classnames";
import SearchBar from "./search-bar";

export default function Header() {
   return(
      <header className="w-full bg-black min-h-[70px] flex sticky top-0">
         <div className="flex items-center sticky mx-[60px] w-full">
            <NetflixLogo />
            <nav className=" flex item-center">    
               {headerMenu.map((menu, index) => (
                  <NavLink to={menu.path} >
                     {({isActive}) => (
                        <div 
                           type="button"
                           className={classNames("hover:text-[#b3b3b3] transition-colors text-[14px] ml-5", {
                              "font-bold cursor-default hover:text-[#e5e5e5]": isActive
                           })}
                        >
                           {menu.title}
                        </div>
                     )}
                  </NavLink>
               ))}
            </nav>
      </header>
   )
}