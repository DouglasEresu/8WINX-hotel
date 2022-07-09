import React from 'react'
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import bodyStyles from '../styles/body.module.css'
import Logo from './logo'

const Nav = () => {
  return (

    <nav className={navStyles.nav}>
        <Logo/>
        <ul className={navStyles.ul}> 
            <li>
                <Link href='/'>HOME</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href='/rooms'>ROOMS</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href='/dining'>DINING</Link> 
                
            </li>
        </ul>
        <ul>
            <li>
                <Link href='/events'>EVENTS</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href='/bookings'>BOOKINGS</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav