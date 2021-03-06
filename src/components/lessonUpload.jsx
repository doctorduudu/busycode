import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
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
      sectionNo: 0,
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
      { name: "3. Project: Simple Website for Ideas Farms ltd", id: "3" },
      // { name: "4. Project: Simple Website for Ideas Farms ltd", id: "4" },
      // { name: "5. Project: Simple Website for Ideas Farms ltd", id: "5" },
      // { name: "6. Project: Simple Website for Ideas Farms ltd", id: "6" },
      // { name: "7. Project: Simple Website for Ideas Farms ltd", id: "7" },
      // { name: "8. Project: Simple Website for Ideas Farms ltd", id: "8" },
      // { name: "9. Project: Simple Website for Ideas Farms ltd", id: "9" },
    ];
  };

  doSubmit = () => {
    const { data } = this.state;

    const sectionNo = Number(data.sectionNo);
    const lessonNo = Number(data.lessonNo);
    const lessonTitle = data.lessonTitle;
    const length = Number(data.length);
    const url = data.url;
    let sectionTitle = "";

    switch (sectionNo) {
      case 1:
        sectionTitle = "Introduction to Programming and HTML";
        break;
      case 2:
        sectionTitle = "Introduction to CSS";
        break;
      case 3:
        sectionTitle = "Project: Simple Website for Ideas Farms ltd";
        break;
      // case 4:
      //   sectionTitle = "Introduction to CSS";
      //   break;
      // case 5:
      //   sectionTitle = "Introduction to CSS";
      //   break;
      // case 6:
      //   sectionTitle = "Introduction to CSS";
      //   break;
      // case 7:
      //   sectionTitle = "Introduction to CSS";
      //   break;
      // case 8:
      //   sectionTitle = "Introduction to CSS";
      //   break;
      // case 9:
      //   sectionTitle = "Introduction to CSS";
      //   break;
      default:
        console.log("an error occurred");
        break;
    }

    console.log(sectionNo, lessonNo, length, url, sectionTitle);

    firebase
      .firestore()
      .collection("lessons")
      .add({
        sectionNo: sectionNo,
        lessonNo: lessonNo,
        lessonTitle: lessonTitle,
        length: length,
        url: url,
        sectionTitle: sectionTitle,
      })
      .then((docRef) => {
        // console.log("successfully submitted");
        toast.success("Successfully added lesson");

        this.setState({
          data: {
            sectionNo: 0,
            lessonNo: 0,
            lessonTitle: "",
            length: 0,
            url: "",
          },
        });
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error(error.message);
        return;
      });
  };

  render() {
    const classes = useStyles;
    return (
      <React.Fragment>
        <section id="lesson-upload">
          <div className="container">
            <Button
              component={Link}
              to="/blog-upload"
              fullWidth
              color="primary"
              variant="contained"
              className="mt-2"
            >
              Upload Blog Post
            </Button>
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
