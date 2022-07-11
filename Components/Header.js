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
        <div>
          <b>
            <i>
              <h4>Property amenities</h4>
            </i>
          </b>
          <pre>
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
          </pre>
        </div>

        <hr />

        <div>
          <b>
            <i>
              <h4>Room amenities</h4>
            </i>
          </b>
          <pre>
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
          </pre>
        </div>
        <hr />
        <div>
          <b>
            <i>
              <h4>Services</h4>
            </i>
          </b>
          <pre>
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
          </pre>
        </div>
        <div className={bodyStyles.platform2}>
          <div
            class="card"
            className={bodyStyles.card}
            style={{ width: 18 + 'rem' }}
          >
            <Image
              class="card-img-top"
              src="/room1.jpeg"
              alt="Card image cap"
              width="286px"
              height="250px"
            />
            <div class="card-body">
              <h5 class="card-title">Rooms and suite</h5>
              <p class="card-text">
                Checkout our deluxe single and double rooms
              </p>
              <a href="/rooms" class="btn btn-success">
                Check out
              </a>
            </div>
          </div>
          <hr />

          <div
            class="card"
            className={bodyStyles.card}
            style={{ width: 18 + 'rem' }}
          >
            <Image
              class="card-img-top"
              src="/room1.jpeg"
              alt="Card image cap"
              width="286px"
              height="250px"
            />
            <div class="card-body">
              <h5 class="card-title">Rooms and suite</h5>
              <p class="card-text">
                Checkout our deluxe single and double rooms
              </p>
              <a href="/rooms" class="btn btn-success">
                Check out
              </a>
            </div>
          </div>
          <hr />

          <div
            class="card"
            className={bodyStyles.card}
            style={{ width: 18 + 'rem' }}
          >
            <Image
              class="card-img-top"
              src="/room1.jpeg"
              alt="Card image cap"
              width="286px"
              height="250px"
            />
            <div class="card-body">
              <h5 class="card-title">Rooms and suite</h5>
              <p class="card-text">
                Checkout our deluxe single and double rooms
              </p>
              <a href="/rooms" class="btn btn-success">
                Check out
              </a>
            </div>
          </div>
          <hr /> 

          <div
            class="card"
            className={bodyStyles.card}
            style={{ width: 18 + 'rem' }}
          >
            <Image
              class="card-img-top"
              src="/room1.jpeg"
              alt="Card image cap"
              width="286px"
              height="250px"
            />
            <div class="card-body">
              <h5 class="card-title">Rooms and suite</h5>
              <p class="card-text">
                Checkout our deluxe single and double rooms
              </p>
              <a href="/rooms" class="btn btn-success">
                Check out
              </a>
            </div>
          </div>
     </div>

    <div className={bodyStyles.platform3}>
      <h1 className='display-3'>Come and dine with us</h1>
        <div className={bodyStyles.inset}>
        <h6>We offer delicious local
            delicacies served with
               </h6>
            
        </div>
    </div>
          <hr />

          <card >
            <h2>Find Us:</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15958.97434957503!2d32.6162293!3d0.3506855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x889415edf7316b56!2sEight%20Winx%20Hotel!5e0!3m2!1sen!2sug!4v1657383956273!5m2!1sen!2sug"
              width="300"
              height="330"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <h4>for more info Contact Us:
              <h5><span class="material-icons">phone</span>  0392176756</h5>
            </h4>
            <a href="/rooms" class="btn btn-success">
                Book a reservation
              </a>

          </card>
        </div>
     
    </main>
  );
};

export default Header;
