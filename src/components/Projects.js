import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaGithub, FaLink } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';

import gHunt from "../assets/img/game-hunt.jpg";
import iFitNut from "../assets/img/iFitNut.png";
import boredGenie from "../assets/img/bored-genie.png";
import passGen from "../assets/img/password-gen.png";
import weatherDash from "../assets/img/weather-dashboard.png";
import wdScheduler from "../assets/img/scheduler.png";
import cQuiz from "../assets/img/code-quiz.png";

const Projects = () => {
  const allWork = [
    {
      id: 0,
      name: 'Game Hunt',
      image: gHunt,
      info: 'This application allows you to search for games from any platform, from any year, of any genre. It will show a cover image of the game, the name of the game, relese date, and an option to add the game to a list of favorites that you can access later by creating a secure login.',
      imgTxt: 'project3:game-hunt',
      liveURL: 'https://game-hunt-3.herokuapp.com/',
      gitHub: 'https://github.com/Seifenan/Game-Hunt-3',
    },
    {
      id: 1,
      name: 'iFitNut',
      image: iFitNut,
      info: 'This app is for the health conscious individual. A way to record your fitness progress, so that you can view personal historical data and remain motivated in reaching your goals.',
      imgTxt: 'project2:iFitNut',
      liveURL: 'https://ifitnut.herokuapp.com/',
      gitHub: 'https://github.com/Seifenan/iFitNut',
    },
    {
      id: 2,
      name: 'Bored Genie',
      image: boredGenie,
      info: 'This is a wellness appication that allows the user to randomly select an activity to stimulate either the mind or the body. We also included a fun feature to allow the User to document, and journal down their favorite ideas.',
      imgTxt: 'project2:bored-genie',
      liveURL: 'https://seifenan.github.io/Bored-Genie/',
      gitHub: 'https://github.com/Seifenan/Bored-Genie',
    },
    {
      id: 3,
      name: 'Weather Dashboard',
      image: weatherDash,
      info: 'This weather app allows users to access weather information for multiple cities and plan a trip accordingly.',
      liveURL: 'https://seifenan.github.io/c6-weather-dashboard/',
      imgTxt: 'project4:weather-dashboard',
      gitHub: 'https://github.com/Seifenan/c6-weather-dashboard',
    },
    {
      id: 4,
      name: 'Password Generator',
      image: passGen,
      info: 'An average Password can be guessed by the average user or be vulnerable to brute-force attacks. Using a combination of random uppercase and lowercase alphabets, as well as, numbers and special characters in your Password, increases its strength and prevents malicious users from getting in!',
      liveURL: 'https://seifenan.github.io/c3-password-generator/',
      imgTxt: 'project3:password-generator',
      gitHub: 'https://github.com/Seifenan/c3-password-generator',
    },
    {
      id: 5,
      name: 'Work Day Scheduler',
      image: wdScheduler,
      info: 'It is very easy to miss out on important events or even simple tasks. It is crucial to use some form of planner or log to help keep you organized and on task.',
      liveURL: 'https://seifenan.github.io/c5-work-day-scheduler/',
      imgTxt: 'project5:work-day-scheduler',
      gitHub: 'https://github.com/Seifenan/c5-work-day-scheduler',
    },
    {
      id: 6,
      name: 'Code Quiz',
      image: cQuiz,
      info: 'This is a responsive Quiz that will provide feedback with each question response, and allows user to save or reset highscores.',
      liveURL: 'https://seifenan.github.io/c4-code-quiz/',
      imgTxt: 'project6:code-quiz',
      gitHub: 'https://github.com/Seifenan/c4-code-quiz',
    }
  ];
  
  return (
    <Row xs={1} sm={2} md={3} className="g-5 m-auto">
      {allWork.map((allWork) => (
        <Col className='mx-auto'>
          <Card style={{ height: '100%' }}>
            <Card.Img variant="top" src={allWork.image} alt={allWork.imgTxt} />
            <Card.Body>
              <Card.Title>{allWork.name}</Card.Title>
              <Card.Text>{allWork.info}</Card.Text>
            </Card.Body>
            <AnimatePresence>
              <Card.Footer>
                <motion.a
                  whileHover={{ scale: 1.7 }}
                  whileTap={{ scale: 0.9 }}
                  href={allWork.liveURL}
                  target="blank"
                ><FaLink /></motion.a>
                <motion.a
                  whileHover={{ scale: 1.7 }}
                  whileTap={{ scale: 0.9 }}
                  href={allWork.gitHub}
                  target="blank"
                ><FaGithub /></motion.a>
              </Card.Footer>
            </AnimatePresence>

          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Projects;
