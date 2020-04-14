import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import * as firebase from "firebase/app";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class LessonUpload extends Form {
  state = {
    data: {
      sectionNo: "",
      lessonNo: 0,
      lessonTitle: "",
      length: 0,
      url: "",
    },
    errors: {},
  };

  schema = {
    sectionNo: Joi.number().min(1).max(50).required().label("Section Number"),
    lessonNo: Joi.number()
      .integer()
      .min(1)
      .max(200)
      .required()
      .label("Lesson Number"),
    lessonTitle: Joi.string().min(5).required().label("Lesson Title"),
    length: Joi.number().integer().min(1).max(60).required().label("Length"),
    url: Joi.string().min(3).required().label("Video url"),
  };

  sectionsList = () => {
    return [
      { name: "1. Introduction to Programming and HTML", id: "1" },
      { name: "2. Introduction to CSS", id: "2" },
    ];
  };

  doSubmit = () => {
    const { data } = this.state;

    const sectionNo = data.sectionNo;
    const lessonNo = data.lessonNo;
    const lessonTitle = data.lessonTitle;
    const length = data.length;
    const url = data.url;
    // let sectionTitle = "";

    // if (sectionNo == 1) {
    //   sectionTitle = "Introduction to Programming and HTML";
    // }

    // switch (sectionNo) {
    //   case 1:
    //     sectionTitle = "Introduction to Programming and HTML";
    //     break;
    //   default:
    //     console.log("an error occurred");
    // }

    console.log(sectionNo, lessonNo, length, url);

    firebase
      .firestore()
      .collection("lessons")
      .add({
        sectionNo: sectionNo,
        lessonNo: lessonNo,
        lessonTitle: lessonTitle,
        length: length,
        url: url,
        // sectionTitle: sectionTitle,
      })
      .then((docRef) => {
        console.log("successfully submitted");

        this.setState({
          data: {
            sectionNo: "",
            lessonNo: 0,
            lessonTitle: "",
            length: 0,
            url: "",
            // sectionTitle: "",
          },
        });
      })
      .catch((error) => {
        console.log(error.message);
        return;
      });
  };

  render() {
    const classes = useStyles;
    return (
      <React.Fragment>
        <section id="lesson-upload">
          <div className="container">
            <div className="row">
              <div
                className="col"
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                <h3>Upload Lesson</h3>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-8" style={{ margin: "10px auto" }}>
                <form className={classes.form} onSubmit={this.handleSubmit}>
                  {/* {this.renderTextField("sectionNo", "Section Number")} */}
                  {this.renderSelect(
                    "sectionNo",
                    "Section",
                    this.sectionsList()
                  )}
                  {this.renderTextField("lessonNo", "Lesson Number")}
                  {this.renderTextField("lessonTitle", "Lesson Title")}
                  {this.renderTextField("length", "Length")}
                  {this.renderTextField("url", "Video url")}
                  {this.renderSubmitButton("Submit")}
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default LessonUpload;
