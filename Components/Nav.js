import React from 'react'
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={navStyles.nav}>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href='/rooms'>Rooms</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href='/dining'>Dining</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href='/events'>Events</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href='/bookings'>Bookings</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav