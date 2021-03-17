import Link from 'next/link'
import Image from 'next/image' 

import React from "react"
import styles from "../styles/Navbar.module.scss"

const Navbar = () => {
  return (
    <div className="Navbar"
    //styles={styles.Navbar}
    >
      
      <nav>
      <div style={{ width: "100%", flexDirection: "column" }}>
      <a href="/">
        <img
          alt=""
          styles={styles.generateLogoText2}
          src="https://static.overlay-tech.com/assets/f1973cfe-3358-4931-9e45-91fff14f0025.png"
        />
        </a>
        </div>
        
        <a className="ourHistory" styles={styles.ourHistory} href="/our-history">Our History </a>
        <a className="productDevelopment" styles={styles.productDevelopment} href="/product-development">
          Product Development 
        </a>
        <a className="Impact" styles={styles.impact} href="/impact">Impact </a>
        <a styles={styles.members} href="/members">Members</a>
        <a styles={styles.clients} href="/clients">Clients</a>
       
        </nav>
      
      <div styles={styles.line1} />
    </div>
  );
};

export default Navbar;