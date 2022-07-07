import Head from 'next/head'
import Main from '../Components/Main'
// import Upload from '../Storage/images'
import styles from '../styles/Home.module.css'
import bodyStyles from '../styles/body.module.css'
import Body from '../Components/Body'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>8Winx hotel</title>
        <meta name="description" content="Ntinda hotel and restaurant" />
      </Head>
<div className={styles.main}>
  <Main/>
</div>
<div className={bodyStyles.grid}>
  <Body/>
</div>

        
        
    </div>
  )
}
