import React from "react";
import Form from "./common/form";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as firebase from "firebase/app";
import Joi from "joi-browser";
import Title from "./common/title";
import { toast } from "react-toastify";

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
      previewStory: "",
    },
    errors: {},
    file: {},
    showAddBody: false,
  };

  schema = {
    type: Joi.string().required().label("Post Type"),
    title: Joi.string().min(5).required().label("Post Title"),
    featuredImg: Joi.string().required().label("Featured Image"),
    previewStory: Joi.string()
      .min(20)
      .max(100)
      .required()
      .label("Preview Story"),
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
    const previewStory = data.previewStory;

    const date = new Date();
    const id = Date.now();
    const dateUploaded = date.toDateString();

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
          // console.log("FIle available at ", downloadURL);
          toast.success(
            "successfully created post. Click Continue to add the post body"
          );

          const createPostBtn = document.getElementById("submit-btn");
          const continueBtn = document.getElementById("continue-btn");

          // firebase
          //   .firestore()
          //   .collection("posts")
          //   .add({
          //     type: type,
          //     title: title,
          //     imgUrl: downloadURL,
          //     dateUploaded: dateUploaded,
          //     body: [],
          //   })
          //   .then((docRef) => {
          //     console.log("post created");
          //   })
          //   .catch((error) => {
          //     console.log(error.message);
          //   });

          this.setState({
            data: {
              type: "",
              title: "",
              featuredImg: "",
              previewStory: "",
            },
          });

          localStorage.setItem(
            "currentPost",
            JSON.stringify({
              type: type,
              title: title,
              featuredImg: downloadURL,
              dateUploaded: dateUploaded,
              id: date,
              body: "",
              previewStory: previewStory,
            })
          );
          createPostBtn.style.display = "none";
          continueBtn.style.display = "block";
        });
      }
    );
  };

  gotoAddBody = () => {
    console.log("go to add post body clicked");
    window.location.assign("/blog-body-upload");
  };

  render() {
    const classes = useStyles;
    const { showAddBody } = this.state;
    return (
      <React.Fragment>
        <section id="blogUpload">
          <div className="container post-details">
            <Title title="Create Post" />
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
                    {this.renderTextField("previewStory", "Preview Story")}
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
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default BlogUpload;
