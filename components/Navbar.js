import Link from 'next/link'
import Image from 'next/image' 

import React from "react"
import styles from "../styles/Navbar.module.scss"

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.flexWrapperOne}>
        <img
          alt=""
          className={styles.generateLogoText2}
          src="https://static.overlay-tech.com/assets/f1973cfe-3358-4931-9e45-91fff14f0025.png"
        />
        <p className={styles.ourHistory}>Our History</p>
        <p className={styles.productDevelopment}>
          Product Development
        </p>
        <p className={styles.impact}>Impact</p>
        <p className={styles.members}>Members</p>
        <p className={styles.clients}>Clients</p>
      </div>
      <div className={styles.line1} />
    </div>
  );
};

export default Navbar;