import homestyles from '../styles/Home.module.scss';
import backgroundImage from '../public/images/HomepageTop.png'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import membersImage from '../changableContent/members.jpeg'
import clientsImage from '../changableContent/clients.jpg'
import blogImage from '../changableContent/blog.png'
import showcaseImage from '../changableContent/showcase.jpg'
import Button from 'react-bootstrap/Button'

import {homePageData} from '../changableContent/content.js'


const Home = () => (
    <div>
      <Image src={backgroundImage} fluid/>
      <div style={{paddingTop: '20px'}}/>
      <div className={homestyles.titleMission}>
      Our Mission Stamtent 
      </div>
      <div className={homestyles.description}>
     {homePageData.missionStatement}
      </div> <br/>
      <div className={homestyles.titleMission}>
      Values
      </div>
      <div className={homestyles.bold}> We are </div>
       <div className={homestyles.description}>
     	<Container fluid>
     	<Row>
    	<Col>
    	<div className={homestyles.bold}> {homePageData.value1} </div>
    	<div className={homestyles.description}> 

    	{homePageData.value1Description}

    	 </div>
    	 </Col>
    	<Col>
    	<div className={homestyles.bold}> Collaborative </div>
    	<div className={homestyles.description}> 

		We bring together students with diverse perspectives and levels of experience to work towards accomplishing a common goal and become a part of a community. We encourage members to share their knowledge and to both seek out, provide, and accept help from others.    	

    	 </div>
    	 </Col>
    	<Col>
    	<div className={homestyles.bold}> Bold </div>
    	<div className={homestyles.description}> 

		We actively pursue challenges that push members to develop. We embrace failure and uncertainty as part of our process and actively work to learn from our mistakes    	

    	 </div>
    	 </Col>
    	</Row>
    	</Container>
    	<br/> <br/><br/>
    	 <div style={{ borderTop: "2px solid #FFBF3C ", marginLeft: 20, marginRight: 20 }}></div>
      <br/><br/><br/>
      <Container fluid>
     	<Row>
     	<Col/>
    	<Col sm={8}>
    	<div className={homestyles.boldHeader}>Why Generate?</div><br/>
    	Generate is Northeastern’s only student-led product development studio. We are a Sherman Center program that connects real Northeastern ventures with teams who bring their ideas to life. Our interdisciplinary Build Studio teams have worked on projects ranging from physical devices to data-driven software. At our core we are makers who are excited by tackling new problems. <br/><br/>
    	</Col>
    	<Col/>
    	</Row>
    	<Row>
    	<Col>
    	 <Figure.Image
	    width={605}
	    height={440}
	    alt="171x180"
	    src={clientsImage}/>
	    <br/><br/> <div className={homestyles.boldHeader}>Clients</div><br/>
	    <div className={homestyles.description}> {homePageData.clientsText} </div> <br/>
	    <Button variant="outline-secondary" href='/clients'>Learn more</Button>
    	</Col>
    	<Col>
    	<Figure.Image
	    width={605}
	    height={440}
	    alt="171x180"
	    src={membersImage}/>
	    <br/><br/> <div className={homestyles.boldHeader}>Members</div><br/>
	    <div className={homestyles.description}> {homePageData.membersText} </div> <br/>
	    <Button variant="outline-secondary"  href='/members'>Learn more</Button>
    	</Col>
    	</Row>
    	</Container>
    	<br/> <br/><br/>
    	 <div style={{ borderTop: "2px solid #FFBF3C ", marginLeft: 20, marginRight: 20 }}></div><br/><br/>
    	 <Container fluid>
     	<Row>
     	<Col> <br/><br/><br/><br/><div className={homestyles.bold}> Keeping Up with Us </div></Col>
     	<Col> 
     	 <Figure.Image
	    width={605}
	    height={440}
	    alt="171x180"
	    src={showcaseImage}/>
	    <br/><br/> <div className={homestyles.boldHeader}>Show Case</div><br/>
	    <div className={homestyles.description}> {homePageData.showcase} </div> <br/>
	    <Button variant="outline-secondary" href={homePageData.showcaseLink}>Learn more</Button>
     	</Col>
     	<Col> 
     	<Figure.Image
	    width={605}
	    height={440}
	    alt="171x180"
	    src={blogImage}/>
     	<br/><br/> <div className={homestyles.boldHeader}>Blog</div><br/>
	    <div className={homestyles.description}> {homePageData.blog} </div> <br/>
	    <Button variant="outline-secondary" href={homePageData.blogLink}> Learn more</Button>
     	</Col>
     	</Row>
     	</Container>

      </div> 
     
    </div>
  );
export default Home;
