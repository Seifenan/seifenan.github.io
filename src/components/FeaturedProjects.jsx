import React from 'react';

import iFitNut from "../assets/img/iFitNut.png";
import boredGenie from "../assets/img/bored-genie.png";

import { FaGithub, FaLink } from "react-icons/fa";



function Project() {
  const projects = [
    {
      id: 0,
      name: 'iFitNut',
      image: iFitNut,
      info: 'This app is for the health conscious individual. A way to record your fitness progress, so that you can view personal historical data and remain motivated in reaching your goals.',
      imgTxt: 'project1:iFitNut',
      liveURL: 'https://ifitnut.herokuapp.com/',
      gitHub: 'https://github.com/Seifenan/Project-2-iFitNut',
    },
    {
      id: 1,
      name: 'Bored Genie',
      image: boredGenie,
      info: 'This is a wellness appication that allows the user to randomly select an activity to stimulate either the mind or the body. We also included a fun feature to allow the User to document, and journal down their favorite ideas.',
      imgTxt: 'project2:bored-genie',
      liveURL: 'https://seifenan.github.io/Project-1-Bored-Genie/',
      gitHub: 'https://github.com/Seifenan/Project-1-Bored-Genie',
    }
  ];

  return (
    <div className='projectSection'>
      {projects.map((projects) => (
        <div key={projects.id} className="testC">
          <div className="card">
            <img src={projects.image} alt={projects.imgTxt} style={{ borderRadius: "5px" }} width="100%" />
            <h3>{projects.name}</h3>
            <p>{projects.info}</p>
            <div className="cardLink">
              <a href={projects.liveURL} target="blank"><FaLink /></a>
              <a href={projects.gitHub} target="blank"><FaGithub /></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;