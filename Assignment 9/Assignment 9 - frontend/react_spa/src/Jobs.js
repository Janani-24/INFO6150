import React, { Component } from "react";
import NavBar from './components/Navbar';
 import "bootstrap/dist/css/bootstrap.min.css";
import Cards from '../src/components/Cards';
import dolphin from '../src/images/dolphin.jpg';
import jeremy from '../src/images/jeremy.jpg';
import koala from '../src/images/koala.jpg';
import monkey from '../src/images/monkey.jpg';

function Jobs() {
    const jobInfo = [
        {
            image: monkey,
            title: "Education Ambassador Animal Care Internship - Spring",
            text: "Elmwood Park Zoo"
        },
        {
            image: jeremy,
            title: "Executive Director Animal Care Internship - Spring",
            text: "Riverside Discovery Center"
        },
        {
          image: koala,
          title: "Education Animal Keeper Animal Care Internship - Spring",
          text: "Mystic Aquarium"
      },
      {
        image: dolphin,
        title: "Senior Trainer - Dolphins Animal Care Internship - Spring",
        text: "Mystic Aquarium"
    }
    ]
    return (
        <div class="content">
            <NavBar />
            <h2>Open Positions</h2>

            <Cards info={jobInfo}/>
        </div>
    )
}

export default Jobs;