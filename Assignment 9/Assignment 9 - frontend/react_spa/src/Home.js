import React, { Component } from "react";
import NavBar from './components/Navbar';

class Home extends Component {
render() {
  return (
    
    <div className="content">
    <NavBar />
     <h2> Hello {sessionStorage.getItem("name")}!!!</h2>
     <br></br>
     <p>Take a trip past the incredibly inspiring African elephants and prepare to enter the land of emu, yak and white-naped cranes as your tour of the incredibly diverse wildlife of planet Earth continues on in Asia. Dare yourself to end your journey with a trip through a carnivore loop featuring Wildlife Safari’s top cheetah breeding grounds and ferocious Sumatran Tigers. At Wildlife Safari, adventure rules daily.</p>

     <p>And it isn’t just a drive-through animal park. Wildlife Safari boasts one of the top cheetah breeding research centers on Earth, is the number one cheetah breeding facility outside of Africa & number two on Earth. Scores of students enter Wildlife Safari’s internship programs each year and an international veterinary medicine program resides on Safari grounds. Hundreds of young students are reached each year by education programs for school-aged children and some high school students even attend ecology, English and mathematics classes on site.</p>

     <p>As a 501(c)(3) non-profit and self funded park, your support- through ticket sales, online purchases, membership, donations or volunteer assistance- help us to maintain the highest standards of animal husbandry and care. Wildlife Safari receives no tax funding but, with your help, maintains the highest standards in the zoological community through accreditation with the Zoological Association of America (ZAA) and the Association of Zoos and Aquariums (AZA), a designation that fewer than 10% of animal parks in the country can claim.</p>
     <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
   </div>
  );
 }
}

export default Home;
