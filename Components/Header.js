import React from 'react';
import bodyStyles from '../styles/body.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <main className={bodyStyles.grid}>
      <div className={bodyStyles.platform}>
         <div>
            <Image 
          className='rounded'
          src="/building.jpeg" alt="pic" width="600px" height="600px" />
          <br />
          </div>
          <Image 
          className='rounded'
          src="/restaurant.jpeg" alt="pic" width="600px" height="600px" />
          <br />
    
          <Image
           className='rounded'
           src="/conference hall.jpeg" alt="pic" width="250p" height="220px" />
          <br />
          <Image 
           className='rounded'
           src="/catering2.jpeg" alt="pic" width="250px" height="220px" />
          <br />
          <Image
            className='rounded'
            src="/matooke dish.jpg"
            alt="pic"
            width="250px"
            height="220px"
          />
          <br />
          <Image 
          className='rounded'
          src="/room2.jpeg" alt="pic" width="250px" height="220px" />
          <br />
          <Image 
          className='rounded'
          src="/room1.jpeg" alt="pic" width="250px" height="220px" />
          <br />
         
          
        </div>
    </main>
  );
};

export default Header;
