import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaGithub, FaLink } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';

import gHunt from "../assets/img/game-hunt.jpg";
import iFitNut from "../assets/img/iFitNut.png";
import boredGenie from "../assets/img/bored-genie.png";
import eCommerce from "../assets/img/eCommerce.gif";
import tBlog from "../assets/img/tBlog.gif";
import nTaker from "../assets/img/nTaker.gif";
import eTracker from "../assets/img/eTracker.gif";
import bsEngine from "../assets/img/bsEngine.gif";
import bTracker from "../assets/img/bTracker.png";
import pGenerator from "../assets/img/pGenerator.png";
import noSQL from "../assets/img/noSQL.gif";
import rGenerator from "../assets/img/rGenerator.png";
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
      name: 'MVC-Tech-Blog',
      image: tBlog,
      info: "This is a CMS-style blog site that follows the MVC paradigm. It utilizes handlebars.js, sequelize, and the express-session package to deliver a platform where developers can post, edit and delete blog posts, and comment on other developers’ posts.",
      imgTxt: 'C14-MVC-Tech-Blog',
      liveURL: 'https://c14-tech-blog.herokuapp.com/',
      gitHub: 'https://github.com/Seifenan/C14-MVC-Tech-Blog',
    },
    {
      id: 3,
      name: 'ORM eCommerce',
      image: eCommerce,
      info: 'This is an e-commerce site originally build with an Express.js API and has been reconfigured to use Sequelize to interact with a MySQL database.',
      imgTxt: 'c13-orm-ecommerce',
      liveURL: 'https://drive.google.com/file/d/1MiiSjMwoyTXNfDCtEk54V6XIWRty8D0y/view',
      gitHub: 'https://github.com/Seifenan/c13-orm-ecommerce',
    },
    {
      id: 4,
      name: 'Bored Genie',
      image: boredGenie,
      info: 'This is a wellness appication that allows the user to randomly select an activity to stimulate either the mind or the body. We also included a fun feature to allow the User to document, and journal down their favorite ideas.',
      imgTxt: 'project2:bored-genie',
      liveURL: 'https://seifenan.github.io/Bored-Genie/',
      gitHub: 'https://github.com/Seifenan/Bored-Genie',
    },
    {
      id: 5,
      name: 'SQL Employee Tracker',
      image: eTracker,
      info: "This is a command-line application that uses an interface known as Content Management Systems (CMS) to manage a company's database of employees using Node.js, Inquirer, and MySQL.",
      imgTxt: 'c12-SQL-Employee-Tracker',
      liveURL: 'https://drive.google.com/file/d/1LsklopwsTss6mB0cRHaWTnrl8oIxvx7u/view',
      gitHub: 'https://github.com/Seifenan/c12-sql-employee-tracker',
    },
    {
      id: 6,
      name: 'Note Taker',
      image: nTaker,
      info: "This Note Taker application uses Express.js to save and retrieve note data from a JSON file. Users are able to add and remove notes in any order.",
      imgTxt: 'C11-Note-Taker',
      liveURL: 'https://c11-note-taker.herokuapp.com/',
      gitHub: 'https://github.com/Seifenan/C11-Note-Taker',
    },
    {
      id: 7,
      name: 'PWA Budget Tracker',
      image: bTracker,
      info: "This is a budget tracker application that allows for offline access and functionality using IndexedDB. Users will be able to add expenses and deposits to their budget with or without an internet connection. Users are able to see an updated total when the app is brought back online.",
      imgTxt: 'C-19-PWA-Budget-Tracker',
      liveURL: 'https://c19-budget-tracker.herokuapp.com/',
      gitHub: 'https://github.com/Seifenan/C19-PWA-Budget-Tracker',
    },
    {
      id: 8,
      name: 'OOP Profile Generator',
      image: pGenerator,
      info: "This application allows users to generate a team profile document by answering questions on the command line and generating the responce in an HTML document. This app uses node.js and requires inquirer and the file system dependencies to generate the team profile documentation.",
      imgTxt: 'C10-OOP-Profile-Generator',
      liveURL: 'https://drive.google.com/file/d/1kkHcOR-exucekMLNFNFQ_Ykpf4Cnt_dN/view',
      gitHub: 'https://github.com/Seifenan/C10-OOP-Profile-Generator',
    }, 
    {
      id: 9,
      name: 'Code Quiz',
      image: cQuiz,
      info: 'This is a responsive Quiz that will provide feedback with each question response, and allows user to save or reset highscores.',
      liveURL: 'https://seifenan.github.io/c4-code-quiz/',
      imgTxt: 'project6:code-quiz',
      gitHub: 'https://github.com/Seifenan/c4-code-quiz',
    },
    {
      id: 10,
      name: 'Professional README Generator',
      image: rGenerator,
      info: "This basic app uses node and requires the user to install the inquirer package. The generator will ask a series of questions to automatically generate a README file.",
      imgTxt: 'C9: Professional README Generator',
      liveURL: 'https://drive.google.com/file/d/1-2hrw6vVQqzCc7pyaO9nYrXrz51aIpDy/view',
      gitHub: 'https://github.com/Seifenan/c9-node.js-readme-generator',
    },
    {
      id: 11,
      name: 'Weather Dashboard',
      image: weatherDash,
      info: 'This weather app allows users to access weather information for multiple cities and plan a trip accordingly.',
      liveURL: 'https://seifenan.github.io/c6-weather-dashboard/',
      imgTxt: 'project4:weather-dashboard',
      gitHub: 'https://github.com/Seifenan/c6-weather-dashboard',
    },
    {
      id: 12,
      name: 'Password Generator',
      image: passGen,
      info: 'An average Password can be guessed by the average user or be vulnerable to brute-force attacks. Using a combination of random uppercase and lowercase alphabets, as well as, numbers and special characters in your Password, increases its strength and prevents malicious users from getting in!',
      liveURL: 'https://seifenan.github.io/c3-password-generator/',
      imgTxt: 'project3:password-generator',
      gitHub: 'https://github.com/Seifenan/c3-password-generator',
    },
    {
      id: 13,
      name: 'NoSQL API',
      image: noSQL,
      info: "This is an API for a social network that uses a NoSQL database that allows the servers to handle large amounts of unstructured data. This database allows for users to create, update and share or delete their thoughts, add friends or react to another user's thoughts. Users may also be deleted, this will in turn delete all thoughts or reactions associated with that user.",
      imgTxt: 'C-18-NoSQL-API',
      liveURL: 'https://drive.google.com/file/d/1MxV1z_DKfoisPPpg7u553nb9HqJeUAYA/view',
      gitHub: 'https://github.com/Seifenan/C18-NoSQL-API',
    }, 
    {
      id: 14,
      name: 'Mern Book Search Engine',
      image: bsEngine,
      info: "This is a fully functioning Google Books API search engine originally built with a RESTful API. It has been refactored to be a GraphQL API built with Apollo Server. This app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. Users are able to search, add and remove any book and it's details to and from their profile.",
      imgTxt: 'c21-mern-book-search-engine',
      liveURL: 'https://c21-book-search-engine.herokuapp.com/',
      gitHub: 'https://github.com/Seifenan/c21-book-search-engine',
    },
    {
      id: 15,
      name: 'Work Day Scheduler',
      image: wdScheduler,
      info: 'It is very easy to miss out on important events or even simple tasks. It is crucial to use some form of planner or log to help keep you organized and on task.',
      liveURL: 'https://seifenan.github.io/c5-work-day-scheduler/',
      imgTxt: 'project5:work-day-scheduler',
      gitHub: 'https://github.com/Seifenan/c5-work-day-scheduler',
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
                  target="_blank"
                ><FaLink /></motion.a>
                <motion.a
                  whileHover={{ scale: 1.7 }}
                  whileTap={{ scale: 0.9 }}
                  href={allWork.gitHub}
                  target="_blank"
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
