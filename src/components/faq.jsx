import React, { Component } from "react";

class Faq extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3>FAQ Page</h3>
        {/* {
          {
            section: "1",
            lessonNo: 1,
            title: "Introduction to the world of Computer Programming",
            length: 11,
            url: "https://www.youtube.com/embed/KiqGerCT9pQ?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "1",
            lessonNo: 2,
            title: "Introduction to this course",
            length: 10,
            url: "https://www.youtube.com/embed/GOgSia7O10A?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "1",
            lessonNo: 3,
            title: "Setting Up Our Development Environment",
            length: 7,
            url: "https://www.youtube.com/embed/S37DECS7GDE?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "1",
            lessonNo: 4,
            title: "Intro to HTML - Basic Structure",
            length: 11,
            url: "https://www.youtube.com/embed/RNB0GeK0bLo?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "1",
            lessonNo: 5,
            title: "HTML Basic structure pt 2",
            length: 11,
            url: "https://www.youtube.com/embed/BE3tdLjTSFI?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "1",
            lessonNo: 6,
            title: "HTML Basic Structure pt 3",
            length: 10,
            url: "https://www.youtube.com/embed/k1ZPMRRStQI?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "1",
            lessonNo: 7,
            title: "Dealing with file paths",
            length: 16,
            url: "https://www.youtube.com/embed/CaNM02cQv1A?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "1",
            lessonNo: 8,
            title: "HTML Tables",
            length: 8,
            url: "https://www.youtube.com/embed/Yr6AePv4YJ8?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "1",
            lessonNo: 9,
            title: "Mini HTML Project pt 1",
            length: 12,
            url: "https://www.youtube.com/embed/CD3pXTCD9eU?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "1",
            lessonNo: 10,
            title: "Mini HTML Project pt 2",
            length: 9,
            url: "https://www.youtube.com/embed/B9oYRHw83yQ?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "2",
            lessonNo: 11,
            title: "Intro to CSS",
            length: 3,
            url: "https://www.youtube.com/embed/rmFvCU715TM?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "2",
            lessonNo: 12,
            title: "CSS Selectors",
            length: 14,
            url: "https://www.youtube.com/embed/-EJkAmhYO10?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "2",
            lessonNo: 13,
            title: "Colors",
            length: 11,
            url: "https://www.youtube.com/embed/uZJ4TLadDPA?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "2",
            lessonNo: 14,
            title: "Backgrounds",
            length: 12,
            url: "https://www.youtube.com/embed/VHZJyBs9l7E?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "2",
            lessonNo: 15,
            title: "The Box Model",
            length: 13,
            url: "https://www.youtube.com/embed/v2kFjRUwqMo?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "2",
            lessonNo: 16,
            title: "Units of Measurement & Dimensions",
            length: 13,
            url: "https://www.youtube.com/embed/du4k-6BM9Gc?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "2",
            lessonNo: 17,
            title: "Text formatting and Fonts",
            length: 10,
            url: "https://www.youtube.com/embed/JQmGrZtBTFE?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "2",
            lessonNo: 18,
            title: "Styling Links or Buttons",
            length: 7,
            url: "https://www.youtube.com/embed/1pTdNk3oXLk?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "2",
            lessonNo: 19,
            title: "Display Property",
            length: 7,
            url: "https://www.youtube.com/embed/0yA2yX9TKMo?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "2",
            lessonNo: 20,
            title: "Element Positioning",
            length: 11,
            url: "https://www.youtube.com/embed/uZbGFcgfzgI?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "3",
            lessonNo: 21,
            title: "HomePage HTML",
            length: 29,
            url: "https://www.youtube.com/embed/oZExzLEeszs?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "3",
            lessonNo: 22,
            title: "Navigation bar CSS",
            length: 25,
            url: "https://www.youtube.com/embed/vv5Zl02FjPo?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "3",
            lessonNo: 23,
            title: "Header/Showcase CSS",
            length: 15,
            url: "https://www.youtube.com/embed/x8bHXCPbnPQ?modestbranding=1&rel=0&iv_load_policy=3"
          }, 
          {
            section: "3",
            lessonNo: 24,
            title: "Email and Boxes CSS",
            length: 9,
            url: ""
          }, 
          {
            section: "3",
            lessonNo: 25,
            title: "Customers Section and Footer CSS",
            length: 19,
            url: ""
          }, 
          {
            section: "3",
            lessonNo: 26,
            title: "About Page HTML",
            length: 7,
            url: ""
          }, 
          {
            section: "3",
            lessonNo: 27,
            title: "About Page CSS",
            length: 6,
            url: ""
          }, 
          {
            section: "3",
            lessonNo: 28,
            title: "Services Page HTML and CSS",
            length: 17,
            url: ""
          }, 
          {
            section: "",
            lessonNo: 29,
            title: "",
            length: ,
            url: ""
          }, 
          {
            section: "",
            lessonNo: 30,
            title: "",
            length: ,
            url: ""
          }, 
          {
            section: "",
            lessonNo: ,
            title: "",
            length: ,
            url: ""
          }, 
        } */}
      </React.Fragment>
    );
  }
}

export default Faq;
