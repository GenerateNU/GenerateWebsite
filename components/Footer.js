import styles from '../styles/Navbar.module.scss';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import generateLogo from '../public/images/generatelogotext.png'
import shermCenterLogo from '../public/images/ShermanCenterLogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default function Footer() {
  return (
    <footer>
    	<Container fluid>
    	<Row> 
    	<Col sm={1}/><Col><a className="ourHistory" styles={styles.ourHistory} href="/">Home</a> </Col>
		<Col>Contact Us </Col>
		<Col> Subscribe To Our Newsletter</Col>
    	</Row>
         <Row>
        <Col sm={1}/>
        <Col> <a className="ourHistory" styles={styles.ourHistory} href="/our-history">Our History </a></Col>
         <Col> Email: </Col> <Col/>
           <Col>
         <InputGroup className="mb-3">
		    <FormControl
		      placeholder="enter your email"
		      aria-label="Recipient's username"
		      aria-describedby="basic-addon2"
		    />
		    <InputGroup.Append>
		      <Button variant="outline-secondary">Submit</Button>
		    </InputGroup.Append>
		  </InputGroup>
		  </Col>
         </Row>

         <Row>
         <Col sm={1}/>
         <Col sm={8}><a className="productDevelopment" styles={styles.productDevelopment} href="/product-development"> Product Development </a></Col>

         </Row>
         <Row><Col sm={1}/><Col sm={8}><a className="Impact" styles={styles.Impact} href="/impact">Impact </a></Col></Row>
         <Row><Col sm={1}></Col><Col sm={8}><a styles={styles.members} styles={styles.Members} href="/members">Members</a></Col></Row>
         <Row><Col sm={1}></Col><Col sm={8}><a styles={styles.clients} styles={styles.Clients} href="/clients">Clients  </a> <br/></Col></Row>
          <Row>
          	<Col>
      		<Image src={generateLogo}/> <Image src={shermCenterLogo}/>
    		</Col>

          </Row>
          </Container>
    </footer>
  );
}
