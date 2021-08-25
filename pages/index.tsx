import type { NextPage } from 'next'

import Image from "next/image"
import { FixedImage } from '../components'

import logo from "../public/vercel.png"

import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <main className={styles.grid}>
      <div className={styles.item}>
        <p className={styles.title}>Raw image - fixed - no placeholder</p>
        <Image src={logo} layout="fixed" width={128} height={128} alt="Vercel" />
      </div>
      <div className={styles.item}>
        <p className={styles.title}>Raw image - fixed - blur placeholder</p>
        <Image src={logo} layout="fixed" width={128} height={128} alt="Vercel" placeholder="blur" />
      </div>
      <div className={styles.item}>
        <p className={styles.title}>Raw image - fixed - blur placeholder - rounded</p>
        <Image src={logo} layout="fixed" width={128} height={128} alt="Vercel" placeholder="blur" className={styles.rounded} />
      </div>
      <div className={styles.item}>
        <p className={styles.title}>Cool image - fixed - manual blur placeholder</p>
        <FixedImage src={logo} layout="fixed" width={128} height={128} alt="Vercel" />
      </div>
      <div className={styles.item}>
        <p className={styles.title}>Cool image - fixed - manual blur placeholder - rounded</p>
        <FixedImage src={logo} layout="fixed" width={128} height={128} alt="Vercel" className={styles.rounded} />
      </div>
      <div className={styles.item}>
        <p className={styles.title}>Cool image - fixed - manual blur placeholder - rounded from container</p>
        <div style={{width: 128, height: 128, overflow: 'hidden', borderRadius: 12}}>
          <FixedImage src={logo} layout="fixed" width={128} height={128} alt="Vercel" className={styles.rounded} />
        </div>
      </div>
    </main>
  )
}

export default Home
