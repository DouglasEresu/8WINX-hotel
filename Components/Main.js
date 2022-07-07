import React from 'react'
import Slider from './Slider'
import Image from 'next/image'

const Main = () => {
  return (
    <>
      <Slider/>
    
       <Image
      src="/bronchure.jpeg"
      alt="8winx bronchure"
      width="450px"
      height="600px"/>
    
    </>
    
    
  )
}

export default Main