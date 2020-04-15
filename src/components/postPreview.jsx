import React, { Component } from "react";
import Title from "./common/title";
import Button from "@material-ui/core/Button";

class PostPreview extends Component {
  state = {
    post: {},
    postBody: "",
  };

  componentDidMount() {
    const post = JSON.parse(localStorage.getItem("currentPost"));
    const postBody = post.body;

    this.setState({ post, postBody });
  }

  goToReturn = () => {
    window.location.assign("/blog-body-upload");
  };

  render() {
    const { post, postBody } = this.state;

    return (
      <React.Fragment>
        <section id="post-preview">
          <div className="container">
            <Title title="Preview of Post" />
            <div className="row">
              <div className="col col-lg-9">
                <Button
                  variant="contained"
                  color="primary"
                  className="return"
                  onClick={this.goToReturn}
                >
                  Return
                </Button>
                <h2 className="post-title">{post.title}</h2>
                <img
                  className="img img-fluid featured-img"
                  src={post.imgUrl}
                  alt="featured image"
                ></img>

                {/* {postBody.map((body) => {
                  if (body.type === "text") {
                    // return <p className="post-text">{body.value}</p>;
                    return (
                      <div
                        className="post-text"
                        dangerouslySetInnerHTML={{ __html: body.value }}
                      />
                    );
                  } else {
                    return (
                      <img
                        className="body-img"
                        src={body.value}
                        key={body.value}
                        alt="img"
                      ></img>
                    );
                  }
                })} */}
                {
                  <div
                    className="post-text"
                    dangerouslySetInnerHTML={{ __html: postBody }}
                  />
                }
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default PostPreview;
