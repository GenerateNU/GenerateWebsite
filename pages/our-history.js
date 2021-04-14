import homestyles from '../styles/Home.module.scss';
import backgroundImage from '../public/images/ourHistoryBackground.png';
import Image from 'react-bootstrap/Image';

const History = () => (
  <div>
    <Image src={backgroundImage} fluid />
    <p>History Info goes here</p>
  </div>
);
export default History;
