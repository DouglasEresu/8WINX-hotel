import React from 'react'
import styles from '../styles/Home.module.css'
import  Nav  from './Nav'
import Footer from './Footer'

 const Layout = ({children}) => {
  return (
    <>
    <Nav/>
    <div className={styles.container}>
        <main className={styles.main}>
          {children}
        
        </main>
        <Footer/>
    </div>
    </>
    
  )
}

export default Layout
