import React from 'react';
import bodyStyles from '../styles/body.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <main className={bodyStyles.grid}>
      <header className={bodyStyles.platform}>
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
        </header>


        <div className={bodyStyles.platform2}>
          <pre>
            <h3>Best price guaranteed</h3>
            <h5>at 8winx hotel with bar and restaurant</h5>
              <Image src='/star.png' alt='rating icon' width="20px" height="20px"/>
            <Image src='/star.png' alt='rating icon' width="20px" height="20px"/>
         
</pre>
<hr/>
<div>
   <h5>Property amenities</h5>
       <pre>
         <p>Conference hall</p>
         <p>Free wifi</p>
         <p>Spa and massage</p>
         <p>Free Parking</p>
         <p>Restaurant(indoor and outdoor)</p>
       </pre> 
</div>
 <hr/>
       <div>
         <h5>Room amenities</h5>
       <pre>
        <p>Room service</p>
         <p>Free breakfast</p>
         <p>Daily housekeeping</p>
         <p>Flat sreen tv</p>
         <p>Air conditioning</p>
       </pre>
       </div>
       <hr/>
       <div>
        <h5>Services</h5>
       <pre>
        <p>Concierge service</p>
         <p>Dry cleaning and laundry</p>
         <p>Luggage storage</p>
         <p>24hour front desk</p>
         <p> 24hour security</p>
        
       </pre>
       </div>
            
          <card className={bodyStyles.platform2map} >
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15958.97434957503!2d32.6162293!3d0.3506855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x889415edf7316b56!2sEight%20Winx%20Hotel!5e0!3m2!1sen!2sug!4v1657383956273!5m2!1sen!2sug"
           width="500" height="480"
      
             allowfullscreen=""
              loading="lazy"
               referrerpolicy="no-referrer-when-downgrade"></iframe>
          </card>
        </div>
    </main>
  );
};

export default Header;
