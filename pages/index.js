import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer' 
import Link from 'next/link'
import homestyles from '../styles/Home.module.scss'
import React from "react";


export default function Home() {
  return (
    <div className={homestyles.container}>

    <div className={homestyles.component1}>
      <div className={homestyles.rectangleLogo} />
      <img
        alt=""
        className={homestyles.generateLogoText3}
        src="https://static.overlay-tech.com/assets/7935f3ac-3414-496d-a3a5-a2f43d059563.png"
      />
    </div>
    </div>
    
  )
}