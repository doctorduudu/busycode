import React, { Component } from "react";
import Form from "./common/form";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextInputField from "../components/common/textInputField";
import * as firebase from "firebase/app";
import Joi from "joi-browser";

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

class BlogUpload extends Form {
  state = {
    data: {
      type: "",
      title: "",
      featuredImg: "",
    },
    errors: {},
    file: {},
    showAddBody: false,
    body: {
      text: "",
      Img: "",
    },
    bodyerrors: {},
  };

  schema = {
    type: Joi.string().required().label("Post Type"),
    title: Joi.string().min(5).max(200).required().label("Post Title"),
    featuredImg: Joi.string().required().label("Featured Image"),
  };

  bodySchema = {
    text: Joi.string().min(20).label("Body Text"),
    Img: Joi.string().label("Body Image"),
  };

  renderPostTypes = () => {
    return [
      {
        name: "Programming",
        id: "programming",
      },
      {
        name: "General Tech",
        id: "general-tech",
      },
    ];
  };

  doSubmit = () => {
    const { data } = this.state;

    const type = data.type;
    const title = data.title;

    const date = new Date();
    const dateUploaded = `${date.getDate()} - ${
      date.getMonth() + 1
    } - ${date.getFullYear()}`;
    console.log(dateUploaded);

    const file = this.state.file;

    const storageRef = firebase
      .storage()
      .ref(`featuredImgs/${title}_${dateUploaded}`);
    const task = storageRef.put(file);
    task.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error.message);
      },
      () => {
        task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("FIle available at ", downloadURL);

          const createPostBtn = document.getElementById("submit-btn");
          const continueBtn = document.getElementById("continue-btn");

          firebase
            .firestore()
            .collection("posts")
            .add({
              type: type,
              title: title,
              imgUrl: downloadURL,
              dateUploaded: dateUploaded,
            })
            .then((docRef) => {
              console.log("post created");
              createPostBtn.style.display = "none";
              continueBtn.style.display = "block";

              this.setState({
                data: {
                  type: "",
                  title: "",
                  featuredImg: "",
                },
              });
            })
            .catch((error) => {
              console.log(error.message);
            });
        });
      }
    );
  };

  render() {
    const classes = useStyles;
    const { showAddBody } = this.state;
    return (
      <React.Fragment>
        <section id="blogUpload">
          <div className="container post-details">
            <div className="row">
              <div className="col col-lg-9">
                {!showAddBody && (
                  <form className={classes.form} onSubmit={this.handleSubmit}>
                    {this.renderSelect(
                      "type",
                      "Post Type",
                      this.renderPostTypes()
                    )}
                    {this.renderTextField("title", "Title")}
                    <h5 style={{ margin: "20px" }}>
                      <strong>Featured Image</strong>
                    </h5>
                    {this.renderFileInput(
                      "featuredImg",
                      "Choose an image file:  ",
                      this.state.file
                    )}
                    {this.renderSubmitButton("Create Post")}
                  </form>
                )}
              </div>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                id="continue-btn"
                style={{ display: "none" }}
                onClick={this.gotoAddBody}
              >
                Continue to add Post Body
              </Button>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default BlogUpload;
