
import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function Resume() {
  return (
    <>
      
        <Container>
          <div className="p-md-3">
            <h1>Skills</h1>
          </div>
        </Container>
      

      <Container className="skills">
          <Card>
            <Card.Body>
              <h4 className="resume">Frontend Tech</h4>
              <ul>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Responsive Design</li>
                <li>React</li>
                
                
              </ul>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <h4 className="resume">Backend Tech</h4>
              <ul>
               
                <li>MySQL, Sequelize</li>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>GraphQL</li>
                <li>MongoDB, Mongoose</li>
                
              </ul>
            </Card.Body>
          </Card>
      </Container>
    </>
  )
}

export default Resume;