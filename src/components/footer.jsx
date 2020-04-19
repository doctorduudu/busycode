import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-4">
                <a href="/learn">Start Learning</a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/blog">Read Blog Posts</a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/privacy-policy">Privacy Policy</a>
              </div>
              <div className="col-6 col-md-4">
                <a href="/terms-of-service">Terms of Service</a>
              </div>
              <div className="col-6 col-md-4">
                <a href="">Contact Us</a>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
