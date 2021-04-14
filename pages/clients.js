import backgroundImage from '../public/images/clientsBackground.png';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import FigureCaption from 'react-bootstrap/FigureCaption'
import Button from 'react-bootstrap/Button';

import hardwareImage from '../changableContent/clientHardwareImage.jpg';
import softwareImage from '../changableContent/clientSoftwareImage.png';

import 'bootstrap/dist/css/bootstrap.min.css';

const Clients = () => (
  <div style={{ paddingTop: '20px' }}>
    <Image src={backgroundImage} fluid />
     <div style={{ paddingTop: '20px' }} />
    <br />
    <Container fluid>
      <Row>
        <Col>
          <Figure>
              <Figure.Image
                width={305}
                height={200}
                alt="171x180"
                src={hardwareImage}
              />
              <br/><br/>
              <Figure.Caption>
                <h3>Hardware</h3> <br/>
                Hardware about
                <br/><br/>
		        <Button variant="outline-primary"> Apply Now</Button>
              </Figure.Caption>
            </Figure>
        </Col>
        <Col>
          <Figure>
              <Figure.Image
                width={305}
                height={200}
                alt="171x180"
                src={softwareImage}
              />
              <br/><br/>
              <Figure.Caption>
                <h3>Software</h3> <br/>
                Software about
                <br/><br/>
		        <Button variant="outline-primary"> Apply Now</Button>
              </Figure.Caption>
            </Figure>
        </Col>
      </Row>
      <br />
      <div style={{ borderTop: '2px solid #FFBF3C ', marginLeft: 20, marginRight: 20 }} />
      <br /><br />
      <Row>
      	<Col>
      		<h2>What we do</h2>
	     </Col>
	     <Col></Col>
	     <Col></Col>
      </Row>
      <br />
      <div style={{ borderTop: '2px solid #FFBF3C ', marginLeft: 20, marginRight: 20 }} />
      <br /><br />
      <Row>
      	<Col>
      		<h3>Testimonials</h3>
	     </Col>
	     <Col></Col>
	     <Col></Col>
      </Row>
     </Container>
  </div>
);

export default Clients;
