import React from 'react'
import logoStyles from '../styles/logo.module.css'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className={logoStyles.logo}>
        <Image
      className=' id="img-fluid"'
      src="/8winx logo.jpg"
      alt="8winx logo"
      width="150px"
      height="80px"
    />
    </div>
  )
}

export default Logo