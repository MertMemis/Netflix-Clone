import React from "react";
import NetflixLogo from "~/assets/logo/netflix-logo";

export default function Header() {
   return(
      <header className=" w-full bg-black min-h-[70px] flex items-center sticky px-[60px]">
         <NetflixLogo />
         <ul className=" flex item-center ml-5">
            <li className="ml-2 text-[14px] font-bold"><a href="/">Home</a></li>
            <li className="ml-4 text-[14px] font-bold"><a href="/tv-shows">TV Shows</a></li>
            <li className="ml-4 text-[14px] font-bold"><a href="/movies">Movies</a></li>
            <li className="ml-4 text-[14px] font-bold"><a href="/latest">New & Popular</a></li>
            <li className="ml-4 text-[14px] font-bold"><a href="/my-list">My List</a></li>
            <li className="ml-4 text-[14px] font-bold"><a href="/original-audio">Browse by Languages</a></li>
         </ul>
      </header>
   )
}