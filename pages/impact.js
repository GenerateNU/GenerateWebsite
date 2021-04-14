import Image from 'react-bootstrap/Image';
import homestyles from '../styles/Home.module.scss';
import backgroundImage from '../public/images/ourImpactBackground.png';

const Impact = () => (
  <div>
    <Image src={backgroundImage} fluid />
  </div>
);

export default Impact;
