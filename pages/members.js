import homestyles from '../styles/Home.module.scss';
import backgroundImage from '../public/images/ourTeamsBackground.png';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import FigureCaption from 'react-bootstrap/FigureCaption'
import Button from 'react-bootstrap/Button';
import { membersPageData } from '../changableContent/membersPageContent.js';
import spotlightImage1 from '../changableContent/member1Spotlight.png';
import spotlightImage2 from '../changableContent/member2Spotlight.png';
import spotlightImage3 from '../changableContent/member3Spotlight.png';

import managementTeamImage from '../changableContent/blog.png';
import operationsTeamImage from '../changableContent/showcase.jpg';
import outreachTeamImage from '../changableContent/blog.png';
import hardwareTeamImage from '../changableContent/hardwareTeam.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';

const Members = () => (
  <div>
    <Image src={backgroundImage} fluid />
    <div style={{ paddingTop: '20px' }} />
    <br />
    <Container fluid>
      <Row>
        <Col>
          <h2>Member Spotlight </h2>
        </Col>

        <Col>
          <Carousel>
            <Carousel.Item>
            <Figure>
              <Figure.Image
                width={305}
                height={200}
                alt="171x180"
                src={spotlightImage1}
              />
              <Figure.Caption>
                <h3>{membersPageData.member1Spotlight}</h3>
                {membersPageData.member1SpotlightAbout}
              </Figure.Caption>
              </Figure>
            </Carousel.Item>
            <Carousel.Item>
             <Figure>
              <Figure.Image
                width={305}
                height={200}
                alt="171x180"
                src={spotlightImage2}
              />
              <Figure.Caption>
                <h3>{membersPageData.member2Spotlight}</h3>
                {membersPageData.member2SpotlightAbout}
              </Figure.Caption>
              </Figure>
            </Carousel.Item>
            <Carousel.Item>
              <Figure>
              <Figure.Image
                width={305}
                height={200}
                alt="171x180"
                src={spotlightImage3}
              />
              <Figure.Caption>
                <h3>{membersPageData.member3Spotlight}</h3>
                {membersPageData.member3SpotlightAbout}
              </Figure.Caption>
              </Figure>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
    <br />
      <div style={{ borderTop: '2px solid #FFBF3C ', marginLeft: 20, marginRight: 20 }} />
      <br /><br />
      <Container fluid>
      <Row>
        <Col>
          <h2>Meet our Teams </h2>
        </Col>
        </Row>
        <Row>
	        <Col>
	          <Figure.Image
	                width={305}
	                height={200}
	                alt="171x180"
	                src={managementTeamImage}
	              />
	        </Col>
	        <Col>
		        <h3>Management Team</h3>
		        {membersPageData.managmentTeamAbout}
		        <br/><br/>
		        <Button variant="outline-primary"> Apply Now</Button><br/><br/><br/><br/>
	        </Col>
        </Row>
        <Row>
        	<Col>
	          <h2>Build Studio</h2>
	        </Col>
	        <Col>
	          <Figure.Image
	                width={305}
	                height={200}
	                alt="171x180"
	                src={hardwareTeamImage}
	              />
	              <br/><br/>
	              <Figure.Image
	                width={305}
	                height={200}
	                alt="171x180"
	                src={managementTeamImage}
	              />
	        </Col>
	        <Col>
		        <h3>Hardware</h3>
		        <br/><br/>
		        <Button variant="outline-primary"> Apply Now</Button>
		        <br/><br/><br/><br/><br/><br/><br/>
		        <h3>Software</h3>
		        <br/><br/>
		        <Button variant="outline-primary"> Apply Now</Button>
	        </Col>
        </Row>
        <br/><br/>
        <Row>
	        <Col>
		          <Figure.Image
		                width={405}
		                height={300}
		                alt="171x180"
		                src={operationsTeamImage}
		              />
		     </Col>
		      <Col>
		        <h3>Operations Team</h3>
		        <br/><br/>
		        <Button variant="outline-primary"> Apply Now</Button>
	        </Col>
        </Row>
        <br/><br/>
         <Row>
	        <Col>
		          <Figure.Image
		                width={405}
		                height={300}
		                alt="171x180"
		                src={outreachTeamImage}
		              />
		     </Col>
		      <Col>
		        <h3>Outreach Team</h3>
		        <br/><br/>
		        <Button variant="outline-primary"> Apply Now</Button>
	        </Col>
        </Row>
        <br/><br/>
        <div style={{ borderTop: '2px solid #FFBF3C ', marginLeft: 20, marginRight: 20 }} />
        <br/><br/>
        <Row>
        <Col>
		   <h2> Our Impact </h2> <br/><br/>
		   {membersPageData.ourImpact}
		 </Col>
		 <Col>
		   *insert video here*
		 </Col>
		 </Row>
       </Container>


  </div>
);

export default Members;
