import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import * as firebase from "firebase/app";

class Lesson extends Component {
  state = {
    lesson: {},
    currentLessonNo: this.props.match.params.lessonNo,
  };

  componentDidMount() {
    const { currentLessonNo } = this.state;
    console.log(currentLessonNo);

    firebase
      .firestore()
      .collection("lessons")
      .where("lessonNo", "==", currentLessonNo)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const lesson = doc.data();
          console.log(lesson);
          this.setState({
            lesson,
          });
        });
        //   this.setState(lesson: )
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  doNext = () => {
    console.log("next clicked");
    const currentLessonNo = String(Number(this.state.currentLessonNo) + 1);
    this.setState({ currentLessonNo });

    window.location.assign(`/lesson/${currentLessonNo}`);
  };

  doPrevious = () => {
    console.log("Previous clicked");
    const currentLessonNo = String(Number(this.state.currentLessonNo) - 1);
    if (currentLessonNo < 1) {
      return;
    }
    this.setState({ currentLessonNo });

    window.location.assign(`/lesson/${currentLessonNo}`);
  };

  render() {
    const { lesson, currentLessonNo } = this.state;
    return (
      <React.Fragment>
        <section id="lesson">
          <div className="container">
            <div className="row">
              <div className="col">
                <h5>Section {lesson.sectionNo}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h5>
                  Lesson {lesson.lessonNo}: {lesson.lessonTitle}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col iframe-container">
                <iframe
                  src={lesson.url}
                  width="560"
                  height="315"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="row control-btns">
              <div className="col-6">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.doPrevious}
                  disabled={currentLessonNo < 2}
                >
                  <SkipPreviousIcon />
                  Prev
                </Button>
              </div>
              <div className="col-6">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.doNext}
                >
                  Next
                  <SkipNextIcon />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Lesson;
