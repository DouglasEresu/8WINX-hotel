import React from 'react'
import styles from '../styles/Home.module.css'
import  Nav  from './Nav'
import Header from './Header'
import Footer from './Footer'

 const Layout = ({children}) => {
  return (
    <>
    <Nav/>
    <div className={styles.container}>
        <main className={styles.main}>
          <Header/>
          {children}
        
        </main>
        <Footer/>
    </div>
    </>
    
  )
}

export default Layout
