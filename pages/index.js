import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer' 
import Link from 'next/link'
import homestyles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={homestyles.container}>
    <h3>Big Mission Stamtent Goes Here </h3>
    <Link href="/our-history">
    <a>See Our History!</a>
    </Link>
    </div>
  )
}