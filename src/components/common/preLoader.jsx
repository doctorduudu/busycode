import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { Typography } from "@material-ui/core";

class PreLoader extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="pre-loader">
          <Loader
            type="Puff"
            color="#f50057"
            height={150}
            width={150}
            id="loader"

            // timeout={3000} //3 secs
          />
          <Typography style={{ width: "200px" }}>
            If this takes too long, please check your network and reload!
          </Typography>
        </div>
      </React.Fragment>
    );
  }
}

export default PreLoader;
