import React, { Component } from "react";
import HeroPaper from "./common/heroPaper";
import { getPosts } from "./getPosts";
import PostCard from "./common/postCard";
import * as firebase from "firebase/app";

class ReadPost extends Component {
  state = {
    postId: "",
    post: {},
    postHeroPaperContent: {},
    recentPosts: [],
  };

  componentDidMount() {
    const postId = this.props.match.params.id;
    let post = {};
    let recentPosts = [];

    // const post = getPosts().filter((post) => (post.id = postId))[0];
    // console.log("post", post);

    const getPost = firebase
      .firestore()
      .collection("posts")
      .where("id", "==", postId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          post = doc.data();
        });
      });

    const getRecentPosts = firebase
      .firestore()
      .collection("posts")
      .orderBy("dateUploaded", "desc")
      .limit(3)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const post = doc.data();
          recentPosts.push(post);
        });
      });

    Promise.all([getPost, getRecentPosts]).then(() => {
      const postHeroPaperContent = {
        name: "Reading ...",
        quote: post.title,
        imgUrl: post.featuredImg,
      };

      this.setState({ postId, post, postHeroPaperContent, recentPosts });
    });

    // const recentPosts = getPosts().slice(0, 4);
  }

  render() {
    const { post, postHeroPaperContent, recentPosts } = this.state;

    return (
      <React.Fragment>
        <HeroPaper pageDetails={postHeroPaperContent} />
        <section id="reading-post-body" style={{ overflow: "hidden" }}>
          <div className="container">
            <span className="text-secondary">
              posted on: {post.dateUploaded}
            </span>
            <div className="row mt-3">
              <div className="col">
                <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
              </div>
            </div>
          </div>
        </section>
        <hr></hr>
        <div style={{ marginLeft: "15%", marginTop: "20px" }}>
          <h4>Most Recent Posts</h4>
        </div>
        <section id="recent-posts">
          <div className="container">
            <div className="row post-row">
              {recentPosts.map((post) => (
                <div
                  style={{ padding: "0px 0px", marginTop: "15px" }}
                  className="col-8 col-md-5 col-lg-4"
                  key={post.id}
                >
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ReadPost;
