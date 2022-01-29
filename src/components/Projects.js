import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaGithub, FaLink } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';

import boredGenie from "../assets/img/bored-genie.png";
import passGen from "../assets/img/password-gen.png";
import weatherDash from "../assets/img/weather-dashboard.png";
import wdScheduler from "../assets/img/scheduler.png";
import cQuiz from "../assets/img/code-quiz.png";

const Projects = () => {
  const allWork = [
    {
      id: 0,
      name: 'Bored Genie',
      image: boredGenie,
      info: 'This is a wellness appication that allows the user to randomly select an activity to stimulate either the mind or the body. We also included a fun feature to allow the User to document, and journal down their favorite ideas.',
      imgTxt: 'project2:bored-genie',
      liveURL: 'https://seifenan.github.io/Project-1-Bored-Genie/',
      gitHub: 'https://github.com/Seifenan/Project-1-Bored-Genie',
    },
    {
      id: 1,
      name: 'Weather Dashboard',
      image: weatherDash,
      info: 'This weather app allows users to access weather information for multiple cities and plan a trip accordingly.',
      liveURL: 'https://seifenan.github.io/c6-weather-dashboard/',
      imgTxt: 'project4:weather-dashboard',
      gitHub: 'https://github.com/Seifenan/c6-weather-dashboard',
    },
    {
      id: 2,
      name: 'Password Generator',
      image: passGen,
      info: 'An average Password can be guessed by the average user or be vulnerable to brute-force attacks. Using a combination of random uppercase and lowercase alphabets, as well as, numbers and special characters in your Password, increases its strength and prevents malicious users from getting in!',
      liveURL: 'https://seifenan.github.io/c3-password-generator/',
      imgTxt: 'project3:password-generator',
      gitHub: 'https://github.com/Seifenan/c3-password-generator',
    },
    {
      id: 3,
      name: 'Work Day Scheduler',
      image: wdScheduler,
      info: 'It is very easy to miss out on important events or even simple tasks. It is crucial to use some form of planner or log to help keep you organized and on task.',
      liveURL: 'https://seifenan.github.io/c5-work-day-scheduler/',
      imgTxt: 'project5:work-day-scheduler',
      gitHub: 'https://github.com/Seifenan/c5-work-day-scheduler',
    },
    {
      id: 4,
      name: 'Code Quiz',
      image: cQuiz,
      info: 'This is a responsive Quiz that will provide feedback with each question response, and allows user to save or reset highscores.',
      liveURL: 'https://seifenan.github.io/c4-code-quiz/',
      imgTxt: 'project6:code-quiz',
      gitHub: 'https://github.com/Seifenan/c4-code-quiz',
    }
  ];
  return (
    <Row xs={1} md={3} className="g-5 m-auto">
      {allWork.map((allWork) => (
        <Col className='mx-auto'>
          <Card style={{ height: '550px' }}>
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




//{/* <AnimatePresence>
  // <motion.div
  //   className='card-footer'
  //   whileHover={{ scale: 2, translateY: -20 }}

  // >
  //   <Card.Link target="blank" href={allWork.liveURL}><FaLink /></Card.Link>
  //   <Card.Link target="blank" href={allWork.gitHub}><FaGithub /></Card.Link>
  // </motion.div>
//</AnimatePresence> */}

// style = {{ alignItems: 'center', alignContent: 'center', textAlign: 'center' }}