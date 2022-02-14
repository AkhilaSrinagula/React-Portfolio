import React from "react";
import Akhila from "../../assets/Akhila.jpg";


function About() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
            <div className="card-body">
            <div className ="Hello">
                <img className="pic"
                  src={Akhila}
                  
                  alt="Akhila"
                />
                <h1 className ="hi">Hello, World!</h1>
                <p className ="AS">
                  I'm Akhila Srinagula, a full-stack developer from Austin
                  Texas.{" "}
                </p>
                </div>


 <div>
                <p className="abtme">
            I'm obsessed with web developing and have deep understanding in
            Computer Science fundamentals, Javascript, ReactJS, NodeJS, MongoDB,
            CSS, HTML and other technologies.
         
            When I'm not designing, I'm probably hanging out with my
            husband, being entertained by our 2 year old girl.
          </p>
              </div>
          </div>
        </div>
      </div>
  
      
    </React.Fragment>
  );
}

export default About;

