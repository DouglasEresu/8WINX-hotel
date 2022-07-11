import React from 'react'
import footerStyles from "../styles/Footer.module.css";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
    <div>
        <Image
      className=' id="img-fluid"'  
      src="/8winx logo.jpg"
      alt="8winx logo"
      width="200px"
      height="100px"
    />
     </div>
     <br/>
     <div>
     <p>Plot 7 Kakungulu Road Ntinda next to Ntinda police station  P.o Box 689 Kampala</p>
         <p>TEL: 0392176756 / 8 winxhotel.ntinda@gmail.com/ www.8winxhotel.com</p>
     </div>
     
    </footer>
   
  )
}

export default Footer