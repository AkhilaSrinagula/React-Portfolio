import React from "react";
import Akhila from "../../assets/Akhila.jpg";


function About() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
            <div className="card-body">
                <img className="pic"
                  src={Akhila}
                  
                  alt="Akhila"
                />
                <h1 className ="hi">Hello, World!</h1>
                <p>
                  I'm Akhila Srinagula, a full-stack developer from Austin
                  Texas.{" "}
                </p>
 <hr />
                <p className="abtme">
            I'm obsessed with web developing and have deep understanding in
            Computer Science fundamentals, Javascript, ReactJS, NodeJS, MongoDB,
            CSS, HTML and other technologies.
          </p>
          <p>
            When i'm not designing, I'm probably hanging out with my
            husband, being entertained by our 2 year old girl.
          </p>
              
          </div>
        </div>
      </div>
  
      
    </React.Fragment>
  );
}

export default About;

