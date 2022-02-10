import React from "react";
import Akhila from "../../assets/Akhila.jpg";

function About() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div >
            <div className="card-body">
              <div className="row abstract-back">
                <img className="pic"
                  src={Akhila}
                  // style={{
                  //   width: "30%",
                  //   // height: 150,
                  //   // borderRadius: 150 / 2,
                  //   // overflow: "hidden",
                  //   // borderWidth: 3,
                  // }}
                  alt="Akhila"
                />
                <h1 className ="hi">Hello, World!</h1>
                <p>
                  I'm Akhila Srinagula, a full-stack developer from Austin
                  Texas.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="card-body">
        <div className="row">
          <p className="abtme">
            I'm obsessed with web developing and have deep understanding in
            Computer Science fundamentals, Javascript, ReactJS, NodeJS, MongoDB,
            CSS, HTML and other technologies.
          </p>
          <p>
            When i'm not designing, I'm probably hanging out with my
            husband,being entertained by our 2 year old girl.
          </p>
        </div>
      </div>
      {/* <div>
      <img
        src={Akhila}
        style={{
          width: "30%",
          height: 150,
          borderRadius: 150 / 2,
          overflow: "hidden",
          borderWidth: 3,
        }}
        alt="Akhila"
      />
      <h1>Hello, World!</h1>
      <p>
        I'm Akhila Srinagula, a full-stack developer from Austin Texas.{" "}
      </p>
      <hr />

      <p className="Arimo">
        I'm obsessed with web developing and has deep understanding in Computer
        Science fundamentals, Javascript, ReactJS, NodeJS, MongoDB, CSS, HTML
        and other technologies.
      </p>
      <p>
        When i'm not designing, I'm probably hanging out with my husband,being
        entertained by our 2 year old girl.
      </p>
    </div> */}
    </React.Fragment>
  );
}

export default About;
