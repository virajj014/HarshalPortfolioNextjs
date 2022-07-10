import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Homesection1 from '../components/Homesection1'
import Homesection2 from '../components/Homesection2'
import Homesection3 from '../components/Homesection3'
import Homesection4 from '../components/Homesection4'
import Homesection5 from '../components/Homesection5'
import Homesection2_5 from '../components/Homesection2_5'
export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Splash&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <Homesection1 />
      <Homesection2 />
      <Homesection2_5 />
      <Homesection3 />
      <Homesection4 />
      <Homesection5 />
    </div>
  )
}
