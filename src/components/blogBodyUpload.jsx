import React, { Component } from "react";
import Form from "./common/form";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as firebase from "firebase/app";
import Joi from "joi-browser";
import TextInputField from "./common/textInputField";
import Title from "./common/title";

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

class BlogBodyUpload extends Form {
  state = {
    data: {
      bodyImg: "",
    },
    errors: {},
    file: {},
    textData: {
      text: "",
    },
    textErrors: {},
    showAddText: false,
    showAddImg: false,
    imgUrls: [],
  };

  schema = {
    bodyImg: Joi.string().required().label("Body Image"),
  };

  textSchema = {
    text: Joi.string().min(20).required().label("Body Text"),
  };

  componentDidMount() {
    const imgUrls = JSON.parse(localStorage.getItem("currentImgUrls")) || [];
    this.setState({ imgUrls });
  }

  validateAddText = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(
      this.state.textData,
      this.textSchema,
      options
    );
    if (!error) return null;

    const textErrors = {};
    for (let item of error.details) textErrors[item.path[0]] = item.message;
    return textErrors;
  };

  validateAddTextProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const textSchema = { [name]: this.textSchema[name] };
    const { error } = Joi.validate(obj, textSchema);
    return error ? error.details[0].message : null;
  };

  handleAddTextSubmit = (e) => {
    e.preventDefault();

    const textErrors = this.validateAddText();
    this.setState({ textErrors: textErrors || {} });
    if (textErrors) return;

    this.doAddTextSubmit();
  };

  handleAddTextChange = ({ currentTarget: input }) => {
    const textErrors = { ...this.state.textErrors };
    const errorMessage = this.validateAddTextProperty(input);
    if (errorMessage) textErrors[input.name] = errorMessage;
    else delete textErrors[input.name];

    const textData = { ...this.state.textData };
    textData[input.name] = input.value;

    this.setState({ textData, textErrors });
  };

  renderAddTextTextField(name, label, autoFocus) {
    const { textData, textErrors } = this.state;

    return (
      <TextInputField
        variant="outlined"
        margin="normal"
        fullWidth
        autoFocus={autoFocus}
        id={name}
        label={label}
        name={name}
        autoComplete={name}
        value={textData[name]}
        onChange={this.handleAddTextChange}
        error={textErrors[name]}
        type={name}
      />
    );
  }

  renderAddTextSubmitButton(label) {
    const classes = useStyles;

    return (
      <Button
        disabled={Boolean(this.validateAddText())}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        id="ques-add-submit-btn"
      >
        {label}
      </Button>
    );
  }

  showAddImg = () => {
    this.setState({ showAddText: false });
    this.setState({ showAddImg: !this.state.showAddImg });
  };

  showAddText = () => {
    this.setState({ showAddImg: false });
    this.setState({ showAddText: !this.state.showAddText });
  };

  doSubmit = () => {
    const { imgUrls } = this.state;
    console.log("image submitted");
    const file = this.state.file;

    const currentPost = JSON.parse(localStorage.getItem("currentPost"));
    console.log(currentPost);

    const storageRef = firebase
      .storage()
      .ref(`bodyImgs/${currentPost.title}_${currentPost.dateUploaded}`);

    const task = storageRef.put(file);

    task.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error.message);
      },
      () => {
        task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);

          imgUrls.push(downloadURL);
          localStorage.setItem("currentPost", JSON.stringify(currentPost));
          localStorage.setItem("currentImgUrls", JSON.stringify(imgUrls));
          this.setState({ data: { bodyImg: "" }, imgUrls });
          console.log(JSON.parse(localStorage.getItem("currentPost")));
        });
      }
    );
  };

  doAddTextSubmit = () => {
    console.log("body text submitted");
    const { textData } = this.state;

    const text = textData.text;

    const currentPost = JSON.parse(localStorage.getItem("currentPost"));
    console.log(currentPost);
    currentPost.body = text;

    localStorage.setItem("currentPost", JSON.stringify(currentPost));
    this.setState({ textData: { text: "" } });
    console.log(JSON.parse(localStorage.getItem("currentPost")));
  };

  goToFinish = () => {
    console.log("submitting the final post");
    const finalPost = JSON.parse(localStorage.getItem("currentPost"));
    localStorage.setItem("currentImgUrls", "[]");

    firebase
      .firestore()
      .collection("posts")
      .add(finalPost)
      .then((docRef) => {
        console.log("successfully submitted final post");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  goToBlogPreview = () => {
    window.location.assign("/post-preview");
  };

  render() {
    const classes = useStyles;
    const { showAddImg, showAddText, imgUrls } = this.state;
    return (
      <React.Fragment>
        <section id="blogBodyUpload">
          <div className="container blog-body">
            <Title title="Add Post Body" />
            <div className="row body-btns">
              <div className="col">
                <Button
                  className="add-img body-btn"
                  variant="contained"
                  color="primary"
                  onClick={this.showAddImg}
                >
                  Add Image
                </Button>
                <Button
                  className="add-text body-btn"
                  variant="contained"
                  color="primary"
                  onClick={this.showAddText}
                >
                  Add Text
                </Button>
                <Button
                  className="Preview body-btn"
                  variant="contained"
                  color="default"
                  onClick={this.goToBlogPreview}
                >
                  Preview Post
                </Button>
              </div>
            </div>
            <div className="row body-forms">
              <div className="col col-lg-9">
                {showAddImg && (
                  <form className={classes.form} onSubmit={this.handleSubmit}>
                    <h5 style={{ margin: "20px" }}>
                      <strong>Body Image</strong>
                    </h5>
                    {this.renderFileInput(
                      "bodyImg",
                      "Choose an image file:  ",
                      this.state.file
                    )}
                    {this.renderSubmitButton("Submit Image")}
                  </form>
                )}
                {showAddText && (
                  <form
                    className={classes.form}
                    onSubmit={this.handleAddTextSubmit}
                  >
                    {this.renderAddTextTextField("text", "body Text")}
                    {this.renderAddTextSubmitButton("Submit Text")}
                  </form>
                )}
              </div>
            </div>
            <div className="row img-urls">
              <div className="col col-lg-9">
                {imgUrls.map((url) => {
                  return (
                    <p key={url}>
                      <strong>Image Url:</strong> {url}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="row finish-btn">
              <div className="col col-lg-9">
                <Button
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  id="finish-btn"
                  onClick={this.goToFinish}
                >
                  Finish and Submit
                </Button>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default BlogBodyUpload;
