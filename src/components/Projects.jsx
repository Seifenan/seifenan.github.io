import React from 'react';

import passGen from "../assets/img/password-gen.png";
import weatherDash from "../assets/img/weather-dashboard.png";
import wdScheduler from "../assets/img/scheduler.png";
import cQuiz from "../assets/img/code-quiz.png";

import { FaGithub, FaLink } from "react-icons/fa";

function Project() {
  const projects = [
    {
      id: 0,
      name: 'Weather Dashboard',
      image: weatherDash,
      info: 'This weather app allows users to access weather information for multiple cities and plan a trip accordingly.',
      liveURL: 'https://seifenan.github.io/c6-weather-dashboard/',
      imgTxt: 'project4:weather-dashboard',
      gitHub: 'https://github.com/Seifenan/c6-weather-dashboard',
    },
    {
      id: 1,
      name: 'Password Generator',
      image: passGen,
      info: 'An average Password can be guessed by the average user or be vulnerable to brute-force attacks. Using a combination of random uppercase and lowercase alphabets, as well as, numbers and special characters in your Password, increases its strength and prevents malicious users from getting in!',
      liveURL: 'https://seifenan.github.io/c3-password-generator/',
      imgTxt: 'project3:password-generator',
      gitHub: 'https://github.com/Seifenan/c3-password-generator',
    },
    {
      id: 2,
      name: 'Work Day Scheduler',
      image: wdScheduler,
      info: 'It is very easy to miss out on important events or even simple tasks. It is crucial to use some form of planner or log to help keep you organized and on task.',
      liveURL: 'https://seifenan.github.io/c5-work-day-scheduler/',
      imgTxt: 'project5:work-day-scheduler',
      gitHub: 'https://github.com/Seifenan/c5-work-day-scheduler',
    },
    {
      id: 3,
      name: 'Code Quiz',
      image: cQuiz,
      info: 'This is a responsive Quiz that will provide feedback with each question response, and allows user to save or reset highscores.',
      liveURL: 'https://seifenan.github.io/c4-code-quiz/',
      imgTxt: 'project6:code-quiz',
      gitHub: 'https://github.com/Seifenan/c4-code-quiz',
    }
    ,
    {
      id: 3,
      name: 'Code Quiz',
      image: cQuiz,
      info: 'This is a responsive Quiz that will provide feedback with each question response, and allows user to save or reset highscores.',
      liveURL: 'https://seifenan.github.io/c4-code-quiz/',
      imgTxt: 'project6:code-quiz',
      gitHub: 'https://github.com/Seifenan/c4-code-quiz',
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