import React from 'react';
import NavBar from './components/Navbar';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

function About() {
  return (
    <div class="content">
    <NavBar />
    
    <MDBCard style={{width:"40%",margin:"20px auto"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/125.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>The Story of Us</MDBCardTitle>
        <MDBCardText>
        Wildlife Safari began as the vision & dream of one man- Frank Hart. It was Hart’s goal to create a facility in the Pacific Northwest that would work to save rare and endangered species from all around the world. 50 years later, Wildlife Safari has grown into an internationally recognized non-profit wildlife park dedicated to conservation, education, and animals in wide open spaces.The park opened in 1972 and is the only drive-through animal park in the state of Oregon. Wildlife Safari features over 600 animals representing their wild counterparts from all around the globe, making us a true intersection of human and nature nestled into the picturesque hills of Southern Oregon; a veritable Garden of Eden, horticultural wonderland and Giraffic Park, all in one. With over 600 acres of space for some of the rarest, most endangered and simply coolest species on earth to roam, Wildlife Safari is truly an experience beyond a zoo.Today, annual attendance to the park reaches over 200,000 individuals- individuals engaging with the wildlife around them and obtaining new awe and respect for the natural world.
        </MDBCardText>
        <MDBBtn href='#' style={{backgroundColor:"#000000"}}>Know More</MDBBtn>
      </MDBCardBody>
      
    </MDBCard>
    
    </div>
    
  );
}
export default About;