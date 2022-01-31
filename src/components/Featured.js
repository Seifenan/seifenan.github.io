import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaLink } from "react-icons/fa";

import gHunt from "../assets/img/game-hunt.jpg";
import iFitNut from "../assets/img/iFitNut.png";

const Featured = () => {
  const fProjects = [
    {
      id: 0,
      name: 'Game Hunt',
      image: gHunt,
      info: 'This application allows you to search for games from any platform, from any year, of any genre. It will show a cover image of the game, the name of the game, relese date, and an option to add the game to a list of favorites that you can access later by creating a secure login.',
      imgTxt: 'project3:game-hunt',
      liveURL: 'https://project-3-game-hunt.herokuapp.com/',
      gitHub: 'https://github.com/Seifenan/project-3-game-hunt',
    },
    {
      id: 1,
      name: 'iFitNut',
      image: iFitNut,
      info: 'This app is for the health conscious individual. A way to record your fitness progress, so that you can view personal historical data and remain motivated in reaching your goals.',
      imgTxt: 'project2:iFitNut',
      liveURL: 'https://ifitnut.herokuapp.com/',
      gitHub: 'https://github.com/Seifenan/Project-2-iFitNut',
    }
  ];

  return (
    <Row xs={1} md={2} className="py-1 py-md-5 px-4 px-md-5 g-5">
      {fProjects.map((fProjects) => (
        <Col className='px-md-5'>
          <Card className='text-center' style={{ height: '100%' }}>
            <Card.Img variant="top" src={fProjects.image} alt={fProjects.imgTxt} />
            <Card.Body>
              <Card.Title>{fProjects.name}</Card.Title>
              <Card.Text>{fProjects.info}</Card.Text>
            </Card.Body>
            <AnimatePresence>
              <Card.Footer>
                <motion.a
                  whileHover={{ scale: 1.7 }}
                  whileTap={{ scale: 0.9 }}
                  href={fProjects.liveURL}
                  target="blank"
                ><FaLink /></motion.a>
                <motion.a
                  whileHover={{ scale: 1.7 }}
                  whileTap={{ scale: 0.9 }}
                  href={fProjects.gitHub}
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

export default Featured;
