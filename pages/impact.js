import homestyles from '../styles/Home.module.scss';
import backgroundImage from '../public/images/ourImpactBackground.png';
import Image from 'react-bootstrap/Image';

const Impact = () => (
  <div>
    <Image src={backgroundImage} fluid />
  </div>
);

export default Impact;
