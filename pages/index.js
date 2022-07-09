import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../Components/Header'




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>8Winx hotel</title>
        <meta name="description" content="Ntinda hotel and restaurant" />
      </Head>
      <div className={styles.main}>
        <Header/>
      </div>



        
        
    </div>
  )
}
