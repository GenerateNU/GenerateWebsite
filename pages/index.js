import homestyles from '../styles/Home.module.scss';
import backgroundImage from '../public/images/HomepageTop.png'
import Image from 'react-bootstrap/Image'

const Home = () => (
    <div className={homestyles.container} >
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Image src={backgroundImage} fluid/>
      <div style={{paddingTop: '20px'}}/>
      <div className={homestyles.titleMission}>
      Our Mission Stamtent 
      </div>
      <div className={homestyles.description}>
      We educate Northeastern students about product development and support Northeastern ventures with all of their product development needs. <br/>
     We are cultivating a product development community where tech-minded people thrive.
      </div> <br/>
      <div className={homestyles.titleMission}>
      Our Values
      </div>
       <div className={homestyles.description}>
      We educate Northeastern students about product development and support Northeastern ventures with all of their product development needs. <br/>
     We are cultivating a product development community where tech-minded people thrive.
      </div> <br/> <br/><br/>
      <div style={{ borderTop: "2px solid #FFBF3C ", marginLeft: 20, marginRight: 20 }}></div>
      <br/>
    </div>
  );
export default Home;
