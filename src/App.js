import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/NavBar";
import Learn from "./components/learn";
import SignIn from "./components/signIn";
import Lesson from "./components/lesson";
import LessonUpload from "./components/lessonUpload";
import Blog from "./components/blog";
import BlogUpload from "./components/blogUpload";
import BlogBodyUpload from "./components/blogBodyUpload";
import PostPreview from "./components/postPreview";
import ReadPost from "./components/readPost";
import { ToastContainer } from "react-toastify";
import TermsOfService from "./components/termsOfService";
import PrivacyPolicy from "./components/privacyPolicy";
import Footer from "./components/footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ToastContainer position="top-center" newestOnTop />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/learn" exact component={Learn} />
        <Route path="/sign-in/:urlTo" exact component={SignIn} />
        <Route path="/sign-in/:urlTo/:id" exact component={SignIn} />
        <Route path="/lesson/:lessonNo" exact component={Lesson} />
        <Route path="/lesson-upload" exact component={LessonUpload} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog-upload" exact component={BlogUpload} />
        <Route path="/blog-body-upload" exact component={BlogBodyUpload} />
        <Route path="/post-preview" exact component={PostPreview} />
        <Route path="/read-post/:id" exact component={ReadPost} />
        <Route path="/terms-of-service" exact component={TermsOfService} />
        <Route path="/privacy-policy" exact component={PrivacyPolicy} />

        <Redirect from="/" exact to="/home" />
      </Switch>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
