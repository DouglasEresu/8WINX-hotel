import React from 'react';
import bodyStyles from '../styles/body.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <main className={bodyStyles.grid}>
      <header className={bodyStyles.platform}>
        <div>
          <Image
            className='rounded  id="img-fluid"'
            src="/building.jpeg"
            alt="pic"
            width="600px"
            height="600px"
          />
          <br />
        </div>
        <Image
          className='rounded  id="img-fluid"'
          src="/restaurant.jpeg"
          alt="pic"
          width="600px"
          height="600px"
        />
        <br />

        <Image
          className='rounded  id="img-fluid"'
          src="/conference hall.jpeg"
          alt="pic"
          width="250p"
          height="220px"
        />
        <br />
        <Image
          className='rounded  id="img-fluid"'
          src="/catering2.jpeg"
          alt="pic"
          width="250px"
          height="220px"
        />
        <br />
        <Image
          className='rounded  id="img-fluid"'
          src="/matooke dish.jpg"
          alt="pic"
          width="250px"
          height="220px"
        />
        <br />
        <Image
          className="rounded"
          src="/room2.jpeg"
          alt="pic"
          width="250px"
          height="220px"
        />
        <br />
        <Image
          className="rounded"
          src="/room1.jpeg"
          alt="pic"
          width="250px"
          height="220px"
        />
        <br />
      </header>

      <div className={bodyStyles.platform2}>
        <pre>
          <b>
            <i>
              <h3>Best price guaranteed at</h3>
            </i>
          </b>
          <h5>
            <b className="display-4">8winx hotel</b>
          </h5>
          <Image src="/star.png" alt="rating icon" width="20px" height="20px" />
          <Image src="/star.png" alt="rating icon" width="20px" height="20px" />
          <br />
        </pre>
        <hr />
        <div >
          <b>
            <i>
              <h4>Property amenities</h4>
            </i>
          </b>
        
            <p>
              <span class="material-icons">diversity_3</span> Conference hall{' '}
            </p>
            <p>
              <span class="material-icons">wifi</span> Free wifi
            </p>
            <p>
              <span class="material-icons">spa</span> Spa and massage{' '}
            </p>
            <p>
              <span class="material-icons">directions_car</span> Free Parking
            </p>
            <p>
              <span class="material-icons">restaurant</span> Restaurant
            </p>
        
        </div>
        <div className={bodyStyles.vl}></div>
        <hr/>

        <div >
          <b>
            <i>
              <h4>Room amenities</h4>
            </i>
          </b>
            <p>
              <span class="material-icons">room_service</span> Room service
            </p>
            <p>
              <span class="material-icons">free_breakfast</span> Free breakfast
            </p>
            <p>
              <span class="material-icons">cleaning_services</span> Daily
              housekeeping
            </p>
            <p>
              <span class="material-icons">tv</span> Flat sreen tv
            </p>
            <p>
              <span class="material-icons">air</span> Air conditioning
            </p>
  
        </div>
        <div className={bodyStyles.vl}></div>
        <hr />
        <div>
          <b>
            <i>
              <h4>Services</h4>
            </i>
          </b>
        
            <p>
              <span class="material-icons">celebration</span> Event catering
            </p>
            <p>
              <span class="material-icons">dry_cleaning</span> Dry cleaning and
              laundry
            </p>
            <p>
              <span class="material-icons">luggage</span> Luggage storage
            </p>
            <p>
              <span class="material-icons">assignment</span> Concierge services
            </p>
            <p>
              <span class="material-icons">local_police</span>24hour security
            </p>
      
        </div>
        <div className={bodyStyles.platform2}>
       <div class="col">
         <div class="card ">
           <img  class="card-img-top"
              src="/bedroom1.jpeg"
              alt="Card image cap"
              width="286px"
              height="250px"/>
              
          <div class="card-body">
        <h4 class="card-title">Deluxe single room</h4>
        <h3 class='card-img-overlay' id={bodyStyles.price}>$20
        <p>per night</p></h3>
        <p class="card-text" >
                single bed<br/>
                bathroom</p>
        <a href="/Rooms" class="btn btn-success d-flex justify-content-center">
                Check out
              </a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img  class="card-img-top"
              src="/bedroom2.jpeg"
              alt="Card image cap"
              width="286px"
              height="250px"/>
      <div class="card-body">
        <h4 class="card-title">Deluxe double room</h4>
        <h3 class='card-img-overlay' id={bodyStyles.price}>$42
        <p>per night</p></h3>
        <p class="card-text"> 
                Double bed<br/>
                spacious bedroom<br/>
                bathroom</p>
        <a href="/Rooms" class="btn btn-success d-flex justify-content-center">
                Check out
              </a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img  class="card-img-top"
              src="/room2.jpeg"
              alt="Card image cap"
              width="286px"
              height="250px"/>
      <div class="card-body">
        <h4 class="card-title">Deluxe twin room</h4>
        <h3 class='card-img-overlay' id={bodyStyles.price}>$50
        <p>per night</p></h3>
        <p class="card-text">
               twin beds<br/>
                bathroom</p>
        <a href="/Rooms" class="btn btn-success d-flex justify-content-center">
                Check out
              </a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img  class="card-img-top"
              src="/room1.jpeg"
              alt="Card image cap"
              width="286px"
              height="250px"/>
      <div class="card-body">
        <h4 class="card-title">Hotel suite</h4>
        <h3 class='card-img-overlay' id={bodyStyles.price}>$70
        <p>per night</p></h3>
        <p class="card-text">
                double bed<br/>
                bathroom<br/>
                kitchen<br/>
                living room</p>
        <a href="/Rooms" class="btn btn-success d-flex justify-content-center">
                Check out
              </a>
      </div>
    </div>
  </div>
</div>
  

    <div className={bodyStyles.platform3}>
      <h1 className='display-3'>Come and dine with us</h1>
        <div className={bodyStyles.inset}>
        <h5>We offer delicious local and exotic 
            delicacies served from 
            our morning continental breakfast to sumptuous lunch buffet and a la carte dinner.
            Join us for a memorable dining experience.
               </h5>
            
        </div>
    </div>
          <hr />

          <div >
            <h2>Find Us:</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15958.97434957503!2d32.6162293!3d0.3506855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x889415edf7316b56!2sEight%20Winx%20Hotel!5e0!3m2!1sen!2sug!4v1657383956273!5m2!1sen!2sug"
              width="300"
              height="330"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <h4>for more info Contact Us:
              <p><span class="material-icons">phone</span>  0392176756</p>
            </h4>
            <a href="/bookings" class="btn btn-success">
                Book a reservation
              </a>

          </div>
        </div>
     
    </main>
  );
};

export default Header;
