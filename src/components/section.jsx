import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

class Section extends Component {
  state = {
    sectionNo: "",
    sectionTitle: "",
    lessons: [],
  };

  componentDidMount() {
    const { sectionNo, sectionTitle } = this.props;
    this.setState({ sectionNo, sectionTitle });
    console.log(sectionNo);

    let lessons = [];

    const getLessons = firebase
      .firestore()
      .collection("lessons")
      .where("sectionNo", "==", sectionNo)
      .orderBy("lessonNo", "asc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const lesson = doc.data();
          console.log(lesson);
          lessons.push(lesson);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
    Promise.all([getLessons]).then(() => {
      this.setState({ lessons });
    });
  }

  render() {
    const classes = useStyles;
    const { sectionNo, sectionTitle, lessons } = this.state;
    console.log(this.state.lessons[1]);

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Section {sectionNo}: {sectionTitle}
          </Typography>
        </ExpansionPanelSummary>

        {lessons.map((lesson) => (
          <ExpansionPanelDetails key={lesson.lessonNo}>
            <Link to={`/lesson/${lesson.lessonNo}`}>
              {lesson.lessonNo}. {lesson.lessonTitle}
            </Link>
          </ExpansionPanelDetails>
        ))}
      </ExpansionPanel>
    );
  }
}

export default Section;
