import React, { useState, useRef, useEffect } from 'react';

const SearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
   <div className="relative" ref={searchRef}>
      <button
        className={` ${isSearchVisible ? 'hidden' : ''}`}
        onClick={toggleSearch}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" >
            <path 
               fill-rule="evenodd"
               d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" 
               fill="currentColor">
            </path>
         </svg>
      </button>
      {isSearchVisible && (
      <div>
         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg width="24" height="24" viewBox="0 0 24 24" >
              <path
                fill-rule="evenodd"
                d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" 
                fill="currentColor"
              >
               </path>
            </svg>
         </div>
        <input
          className="block w-72 px-4 py-1.5 ps-12 text-sm border border-white bg-black focus:outline-none"
          placeholder="Titles, peoples, genres"
        />
      </div>
      )}
   </div>
  );
};

export default SearchBar;