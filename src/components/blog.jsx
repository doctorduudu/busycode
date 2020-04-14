import React, { Component } from "react";
import { Link } from "react-router-dom";

class Blog extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>The Blog</h1>
        <Link to="/blog-upload">Upload blog</Link>
      </React.Fragment>
    );
  }
}

export default Blog;
