import React, { Component } from "react";
import HeroPaper from "./common/heroPaper";
import PostCard from "./common/postCard";
import { getPosts } from "./getPosts";
import * as firebase from "firebase/app";

class Blog extends Component {
  state = {
    heroPaperContent: {},
    posts: [],
    lastItem: {},
  };

  componentDidMount() {
    const heroPaperContent = {
      name: "Tech is Awesome!",
      quote:
        "What if i told you there are so many things that you waste your time with that tech tools can easily do for you",
      imgUrl: "https://source.unsplash.com/user/erondu",
    };

    // const posts = getPosts();
    const posts = [];

    const getPosts = firebase
      .firestore()
      .collection("posts")
      .orderBy("dateUploaded", "desc")
      .limit(4)
      .get()
      .then((documentSnapshots) => {
        const lastItem =
          documentSnapshots.docs[documentSnapshots.docs.length - 1];
        documentSnapshots.forEach((doc) => {
          posts.push(doc.data());
        });
      });

    Promise.all([getPosts]).then(() => {
      this.setState({ posts });
    });

    this.setState({ heroPaperContent });
  }

  render() {
    const { heroPaperContent, posts } = this.state;

    return (
      <React.Fragment>
        <HeroPaper pageDetails={heroPaperContent} />

        <section id="blog-posts">
          <div className="container">
            <div className="row post-row">
              {posts.map((post) => (
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

export default Blog;
