import React from 'react'
import bodyStyles from '../styles/body.module.css'

const Slider = () => {
  return (
    <div className={bodyStyles.slider}>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>

  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="/bedroom1.jpeg" alt="First slide" width='1000px' height='500px'/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/bedroom2.jpeg" alt="Second slide" width='1000px' height='500px'/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/food1.jpeg" alt="Third slide" width='1000px' height='500px'/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/food4.jpeg" alt="fourth slide" width='1000px' height='500px'/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/room2.jpeg" alt="fifth slide" width='1000px' height='500px'/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="/restaurant.jpeg" alt="sixth slide" width='1000px' height='500px'/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}

export default Slider