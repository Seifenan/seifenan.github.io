import React from 'react';

import iFitNut from "../assets/img/iFitNut.png";
import gameHunt from "../assets/img/game-hunt.jpg";


import { FaGithub, FaLink } from "react-icons/fa";



function Project() {
  const projects = [
    {
      id: 0,
      name: 'Game Hunt',
      image: gameHunt,
      info: 'This application allows you to search for games from any platform, from any year, of any genre. It will show a cover image of the game, the name of the game, relese date, and an option to add the game to a list of favorites that you can access later by creating a secure login.',
      imgTxt: 'project3:Game Hunt',
      liveURL: 'https://project-3-game-hunt.herokuapp.com/',
      gitHub: 'https://github.com/Seifenan/project-3-game-hunt',
    },
    {
      id: 1,
      name: 'iFitNut',
      image: iFitNut,
      info: 'This app is for the health conscious individual. A way to record your fitness progress, so that you can view personal historical data and remain motivated in reaching your goals.',
      imgTxt: 'project1:iFitNut',
      liveURL: 'https://ifitnut.herokuapp.com/',
      gitHub: 'https://github.com/Seifenan/Project-2-iFitNut',
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