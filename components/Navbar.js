import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import styles from '../styles/Navbar.module.scss';
import generateLogo from '../public/images/logo.png';

export default function Navbar() {
  return (
    <div className="Navbar">
      <a href="/">
        <img
          alt=""
          src={generateLogo}
        />
      </a>
      <nav>
        <div>
          <a styles={styles.members} styles={styles.Members} href="/members">Our Teams</a>
          <a styles={styles.clients} styles={styles.Clients} href="/clients">Clients  </a>
          <a className="ourHistory" styles={styles.ourHistory} href="/our-history">Our History </a>
          <a className="productDevelopment" styles={styles.productDevelopment} href="/product-development"> Product Development </a>
          <a className="Impact" styles={styles.Impact} href="/impact">Impact </a>
        </div>
      </nav>
    </div>
  );
}
