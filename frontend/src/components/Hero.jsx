import '../css/Landing.css'
import { Container, Card, Button } from 'react-bootstrap';
import { PROFILE_IMAGE_DIR_PATH } from '../utils/Constants'
import Landheader from './Landheader';

const Hero = () => {
    const cardStyle = {
        borderRadius: '10px', // Adjust the border radius as needed
        border: '1px solid #F4C2F4;', // Adjust the border color as needed
      };

  return (
    <>
    <Landheader/>
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-white w-75 border-rounded' style={cardStyle}>
        <img src= {PROFILE_IMAGE_DIR_PATH} alt='Your Image' className="imageContainer" /> {/* Add your image here */}
          <h1 className='text-center mb-4'>Welcome to Littlelifts!</h1>
          <p className='text-center mb-4'>
            This is a boilerplate for MERN authentication that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit and the React
            Bootstrap library
          </p>
          <div className='d-flex'>
          <Button variant='secondary' href='/register' style={{backgroundColor: '#F4C2F4', color: 'black'}}>
  Register
</Button>
          </div>
        </Card>
      </Container>
    </div>
    </>
  );
};

export default Hero;