import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./common/title";
import Section from "../components/section";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

class Learn extends Component {
  state = {};
  render() {
    const classes = useStyles;

    return (
      <React.Fragment>
        <section id="intro">
          <div className="container">
            <Title title="Introduction" />
            <div className="row">
              <div className="col">
                <p>
                  In this course I shall introduce you to JAVASCRIPT, HTML and
                  CSS. These are the languages you need to build websites or web
                  apps.You will also learn about how to put your website or web
                  app online for free. Then I will briefly introduce you to a
                  number of techs and resources that will make your life easier
                  as a developer. These include BOOTSTRAP and FIREBASE. There
                  are other resources and techs that make you a better
                  developer, I will not really teach these techs here but i will
                  show you how to go about learning them. You will not just be
                  learning to code but I want to teach you to UNDERSTAND the
                  code and what it does in the background. I will also be
                  teaching you some of the best practices in software
                  development and mistakes you should avoid. Lots of people get
                  stuck going from one tutorial to the other without knowing how
                  to turn the code into a real life project. I hope to be able
                  to teach you how to turn your code into a real world project.
                  But note that this course is not intended to teach you to
                  mastery but to teach you the fundamentals and to show you how
                  to think about coding and software development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="stucture">
          <div className="container">
            <Title title="Structure" />
            <div className="col">
              <div className={classes.root}>
                <Section
                  sectionTitle="Introduction to Programming and HTML"
                  sectionNo={1}
                />
                <Section sectionTitle="Introduction to CSS" sectionNo={2} />
                <Section
                  sectionTitle="Project: Simple Website for Ideas Farms ltd"
                  sectionNo={3}
                />
                {/* <Section sectionTitle="Project: Simple Website for Ideas Farms ltd" sectionNo={4} />
                <Section sectionTitle="Project: Simple Website for Ideas Farms ltd" sectionNo={5} />
                <Section sectionTitle="Project: Simple Website for Ideas Farms ltd" sectionNo={6} />
                <Section sectionTitle="Project: Simple Website for Ideas Farms ltd" sectionNo={7} />
                <Section sectionTitle="Project: Simple Website for Ideas Farms ltd" sectionNo={8} />
                <Section sectionTitle="Project: Simple Website for Ideas Farms ltd" sectionNo={9} /> */}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Learn;
