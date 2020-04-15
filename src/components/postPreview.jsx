import React, { Component } from "react";
import Title from "./common/title";

class PostPreview extends Component {
  state = {
    post: {},
    postBody: [],
  };

  componentDidMount() {
    const post = JSON.parse(localStorage.getItem("currentPost"));
    const postBody = post.body;
    this.setState({ post, postBody });
  }

  render() {
    const { post, postBody } = this.state;

    return (
      <React.Fragment>
        <section id="post-preview">
          <div className="container">
            <Title title="Preview of Post" />
            <div className="row">
              <div className="col col-lg-9">
                <h3 className="post-title">{post.title}</h3>
                <img src={post.imgUrl} alt="featured image"></img>
                {postBody.map((body) => {
                  if (body.type === "text") {
                    return <p className="post-text">{body.value}</p>;
                  } else {
                    return <img src={body.value} alt="img"></img>;
                  }
                })}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default PostPreview;
