import styles from '../styles/Navbar.module.scss';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import generateLogo from '../public/images/logo.png'
export default function Footer() {
  return (
    <footer>
    	<Container fluid>
    	<Row> <Col><a className="ourHistory" styles={styles.ourHistory} href="/">Home</a> </Col></Row>
         <Row><Col> <a className="ourHistory" styles={styles.ourHistory} href="/our-history">Our History </a></Col></Row>
         <Row><Col><a className="productDevelopment" styles={styles.productDevelopment} href="/product-development"> Product Development </a></Col></Row>
         <Row> <Col><a className="Impact" styles={styles.Impact} href="/impact">Impact </a></Col></Row>
         <Row><Col><a styles={styles.members} styles={styles.Members} href="/members">Members</a></Col></Row>
         <Row><Col><a styles={styles.clients} styles={styles.Clients} href="/clients">Clients  </a> <br/> <br/></Col></Row>
          <Row>
          	<Col>
      		<Image src={generateLogo}/> 
    		</Col>
    		<Col>
      		<Image src={generateLogo} rounded />
   			 </Col>
          </Row>
          </Container>
    </footer>
  );
}
