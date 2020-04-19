import React, { Component } from "react";
// import Logo from "../img/BC-logo.png";
import HtmlLogo from "../img/html-icon.png";
import CssLogo from "../img/css-icon.png";
import JsLogo from "../img/js-logo.png";
import BootstrapLogo from "../img/bootstrap-logo.png";
import FirebaseLogo from "../img/firebase-logo.jpg";
import GitLogo from "../img/git-logo.png";
import GithubLogo from "../img/github-logo.png";
import TerminalLogo from "../img/terminal-logo.jpg";
import Customer from "../img/customer.jpg";
import { Button } from "@material-ui/core";
import Title from "./common/title";

class Home extends Component {
  state = {};
  s;
  render() {
    return (
      <React.Fragment>
        <section id="jumbo">
          <div className="container-fluid">
            <h1>Get Into the Tech World</h1>
            <p>Home of Programming and Tech Newbies</p>
            <p>
              Here we will introduce you to the wonderful world of Programming
              and Tech
            </p>
          </div>
        </section>

        <section id="techs">
          <div className="container">
            <div className="row">
              <div className="col-4 col-md-3">
                <img
                  className="img img-fluid"
                  src={HtmlLogo}
                  alt="html logo"
                ></img>
              </div>
              <div className="col col-4 col-md-3">
                <img
                  className="img img-fluid"
                  src={CssLogo}
                  alt="css logo"
                ></img>
              </div>
              <div className="col col-4 col-md-3">
                <img
                  className="img img-fluid"
                  src={JsLogo}
                  alt="javascript logo"
                ></img>
              </div>
              <div className="col col-4 col-md-3">
                <img
                  className="img img-fluid"
                  src={BootstrapLogo}
                  alt="bootstrap logo"
                ></img>
              </div>
              <div className="col col-4 col-md-3">
                <img
                  className="img img-fluid"
                  src={GitLogo}
                  alt="git logo"
                ></img>
              </div>
              <div className="col col-4 col-md-3">
                <img
                  className="img img-fluid"
                  src={FirebaseLogo}
                  alt="firebase logo"
                ></img>
              </div>
              <div className="col col-4 col-md-3">
                <img
                  className="img img-fluid"
                  src={GithubLogo}
                  alt="github logo"
                ></img>
              </div>
              <div className="col col-4 col-md-3">
                <img
                  className="img img-fluid"
                  src={TerminalLogo}
                  alt="terminal logo"
                ></img>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <Title title="Expensive Skills Await" />
            <div className="row">
              <div className="col">
                <p style={{ textAlign: "justify" }}>
                  This course is intended to introduce you to the basic concepts
                  of computer programming and software development.We will start
                  from the basics of programming all the way to building
                  complete projects. In this course our focus shall be on
                  developing for the internet (ie websites and web apps). But we
                  will also look at how we can convert our web app into a mobile
                  app. I am assuming that you know next to nothing about
                  programming. And so we shall be starting completely from
                  scratch and we will go through bit by bit in a manner that
                  will be appropriate for even a very busy person, such that
                  with just about 4-6hrs per week commitment you can comfortably
                  follow this program.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-5 shadow-lg">
                Universal Programming Concepts
              </div>
              <div className="col-5 shadow-lg">Creating a Website</div>
              <div className="col-5 shadow-lg">Creating a web application</div>
              <div className="col-5 shadow-lg">
                Convertion of web app to Mobile app
              </div>
              <div className="col-5 shadow-lg">Free web app hosting</div>
              <div className="col-5 shadow-lg">
                Database creation with less code
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ marginBottom: "5px" }}
                >
                  Start Your Journey! click here
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="customer-review">
          <div className="container">
            <Title title="From Grateful Students" />
            <div className="row">
              <div className="col-10 col-md-5 col-lg-5 review">
                <img className="img img-fluid" src={Customer} alt="customer" />
                <h5>Akwasi Nyantakyi</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                  ratione alias, obcaecati quae laudantium est! ratione alias,
                  obcaecati quae laudantium est!ratione alias, obcaecati quae
                  laudantium est! ratione alias, obcaecati quae laudantium est!
                </p>
              </div>
              <div className="col-10 col-md-5 col-lg-5 review">
                <img className="img img-fluid" src={Customer} alt="customer" />
                <h5>Akwasi Nyantakyi</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                  ratione alias, obcaecati quae laudantium est!
                </p>
              </div>
              <div className="col-10 col-md-5 col-lg-5 review">
                <img className="img img-fluid" src={Customer} alt="customer" />
                <h5>Akwasi Nyantakyi</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                  ratione alias, obcaecati quae laudantium est!
                </p>
              </div>
              <div className="col-10 col-md-5 col-lg-5 review">
                <img className="img img-fluid" src={Customer} alt="customer" />
                <h5>Akwasi Nyantakyi</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                  ratione alias, obcaecati quae laudantium est!
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
