import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/NavBar/Navbar'
import Hero from '../components/HeroSection/Hero'
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Hero/>
    </div>
  )
}
