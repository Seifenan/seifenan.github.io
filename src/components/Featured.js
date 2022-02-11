import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaLink } from "react-icons/fa";

import gHunt from "../assets/img/game-hunt.jpg";
import iFitNut from "../assets/img/iFitNut.png";
import boredGenie from "../assets/img/bored-genie.png";
import tBlog from "../assets/img/tBlog.gif";



const Featured = () => {
  const fProjects = [
    {
      id: 0,
      name: 'Game Hunt',
      image: gHunt,
      imgTxt: 'game-hunt',
      info: 'This application allows you to search for games from any platform, from any year, of any genre. It will show a cover image of the game, the name of the game, relese date, and an option to add the game to a list of favorites that you can access later by creating a secure login.',
      tAnt: 'MERN Stack, Mongoose, GraphQL, Heroku, RAWG API',
      liveURL: 'https://game-hunt-3.herokuapp.com/',
      gitHub: 'https://github.com/Seifenan/Game-Hunt-3',
    },
    {
      id: 1,
      name: 'iFitNut',
      image: iFitNut,
      imgTxt: 'iFitNut',
      info: 'This app is for the health conscious individual. A way to record your fitness progress, so that you can view personal historical data and remain motivated in reaching your goals.',
      tAnt: 'Figma, HTML/CSS, JavaScript, jQuery, Node JS, Express JS, MySQL, Sequelize, Handlebars JS, Nodemailer',
      liveURL: 'https://ifitnut.herokuapp.com/',
      gitHub: 'https://github.com/Seifenan/iFitNut',
    },
    {
      id: 2,
      name: 'MVC-Tech-Blog',
      image: tBlog,
      imgTxt: 'C14-MVC-Tech-Blog',
      info: "This is a CMS-style blog site that follows the MVC paradigm. It utilizes handlebars.js, sequelize, and the express-session package to deliver a platform where developers can post, edit and delete blog posts, and comment on other developers’ posts.",
      tAnt: 'Heroku, Handlebars JS, MySQL2, Sequelize, express-handlebars, express-session, dotenv, bcrypt.',
      liveURL: 'https://c14-tech-blog.herokuapp.com/',
      gitHub: 'https://github.com/Seifenan/C14-MVC-Tech-Blog',
    },
    {
      id: 3,
      name: 'Bored Genie',
      image: boredGenie,
      imgTxt: 'bored-genie',
      info: 'This is a wellness appication that allows the user to randomly select an activity to stimulate either the mind or the body. We also included a fun feature to allow the User to document, and journal down their favorite ideas.',
      tAnt: 'Figma, HTML/CSS, JavaScript, PureCSS, FontAwesome, jQuery, GIPHY API, AudioDB API, OpenTBD API',
      liveURL: 'https://seifenan.github.io/Bored-Genie/',
      gitHub: 'https://github.com/Seifenan/Bored-Genie',
    }
  ];

  return (
    <Row xs={1} md={2} className="py-1 py-md-5 px-4 px-md-5 g-5">
      {fProjects.map((fProjects) => (
        <Col className='px-md-5 mx-auto'>
          <Card style={{ height: '100%' }}>
            <Card.Img variant="top" src={fProjects.image} alt={fProjects.imgTxt} />
            <Card.Body>
              <Card.Title>{fProjects.name}</Card.Title>
              <Card.Text>Summary: {fProjects.info}</Card.Text>
              <Card.Text>Tools & Technologies: {fProjects.tAnt}</Card.Text>
            </Card.Body>
            <AnimatePresence>
              <Card.Footer>
                <motion.a
                  whileHover={{ scale: 1.7 }}
                  whileTap={{ scale: 0.9 }}
                  href={fProjects.liveURL}
                  target="_blank"
                ><FaLink /></motion.a>
                <motion.a
                  whileHover={{ scale: 1.7 }}
                  whileTap={{ scale: 0.9 }}
                  href={fProjects.gitHub}
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

export default Featured;
