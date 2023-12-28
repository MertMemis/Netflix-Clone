import React from 'react';
import netflixLogo from '~/assets/logo/netflix-logo.png';

const NetflixLogo = () => {
  return (
   <a 
      href="/" 
      className='w-[92.5px] h-[25px] mr-[25px]'
   >
      <img src={netflixLogo} alt="Netflix Logo"/>
   </a>
      
  );
};

export default NetflixLogo;