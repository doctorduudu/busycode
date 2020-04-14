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
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/learn" exact component={Learn} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/lesson/:lessonNo" exact component={Lesson} />
        <Route path="/lesson-upload" exact component={LessonUpload} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog-upload" exact component={BlogUpload} />

        <Redirect from="/" exact to="/home" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
