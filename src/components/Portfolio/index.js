import React from 'react';
import Project from '../../components/Project';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import firstProject from "../../assets/first project.png";
import quizImage from "../../assets/quiz.png";
import secondProject from "../../assets/secondproject.png";
import weatherDashboard from "../../assets/weather dashboard.png";
import workDayScheduler from "../../assets/Work-day scheduler.png";
import budgetTracker from "../../assets/budget tracker.png";


function Projects()  {
    const projects =  [
        {
            "title": "Taco-Shops",
            "description": "A website that highlights the top three taco shops in Austin",
            "key": "first-project",
            "imageSrc": firstProject,
            "repository": "https://github.com/trujilml/top-3-taco-shops",
            "deployed_website": "https://trujilml.github.io/top-3-taco-shops/"
        },
        {
            "title": "Budget-Tracker",
            "description": "This is a budget tracking app where the user can track withdrawals and deposits with or without a data/internet connection.",
            "key": "budget tracker",
            "imageSrc": budgetTracker,
            "repository": "https://github.com/AkhilaSrinagula/19-Budget-Tracker.git",
            "deployed_website": "https://gentle-escarpment-42819.herokuapp.com/"
        },
        {
            "title": "ACT-Bank",
            "description": "An online banking website which allows the user to login and view the transaction history",
            "key": "second-project",
            "imageSrc": secondProject,
            "repository": "https://github.com/SmasherCoder/bank.git",
            "deployed_website": "https://act-bank.herokuapp.com/"
        },
        {
            "title": "Weather-Dashboard",
            "description": "A Weather Dashboard where the user can see the weather outlook for multiple cities",
            "key": "weather-dashboard",
            "imageSrc": weatherDashboard,
            "repository": "https://github.com/trujilml/top-3-taco-shops",
            "deployed_website": "https://akhilasrinagula.github.io/Weather-Dashboard/"
        },
        {
            "title": "Work-Day-Scheduler",
            "description": "A calendar application that allows a user to save events for each hour of the day",
            "key": "Work-Day-Scheduler",
            "imageSrc": workDayScheduler,
            "repository": "https://github.com/AkhilaSrinagula/Work-Day-Scheduler.git",
            "deployed_website": "https://akhilasrinagula.github.io/Work-Day-Scheduler/"
        },
        {
            "title": "Code-Quiz",
            "description": "This is a javascript code related quiz with multiple-choice questions",
            "key": "code-quiz",
            "imageSrc": quizImage,
            "repository": "https://github.com/AkhilaSrinagula/code-quiz.git",
            "deployed_website": "https://akhilasrinagula.github.io/code-quiz/"
        },

    ]
    return (
    <>
        <Container className="text-center">
          <div className="p-md-5">
            <h1>My Projects</h1>
          </div>
        </Container>

      <Container className="p-3 ">
        <Row>
          {projects.map((project) => {
            return(
              <Col s={12} lg={6} key={project.key}>
                <Project project={project} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default Projects;



