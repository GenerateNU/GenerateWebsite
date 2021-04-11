import React from 'react';
import styles from '../styles/Navbar.module.scss';
import generateLogo from '../public/images/logo.png'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

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
          <a className="ourHistory" styles={styles.ourHistory} href="/our-history">Our History </a>{' '}
          <a className="productDevelopment" styles={styles.productDevelopment} href="/product-development"> Product Development {' '} </a>{' '}
          <a className="Impact" styles={styles.Impact} href="/impact">Impact </a>{' '}
          <a styles={styles.members} styles={styles.Members} href="/members">Members</a>{' '}
          <a styles={styles.clients} styles={styles.Clients} href="/clients">Clients  </a>{' '}
        </div>
      </nav>
    </div>
  );
}
