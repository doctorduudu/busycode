import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// import * as firebase from "firebase/app";
// import HomeBgImg from "../../img/home-bg.jpg";

const useStyles = makeStyles((theme) => ({
  heroImg: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    // backgroundImage: getBackground(),
    // background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${getBackgroud()}`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    minHeight: "35vh",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  heroImgContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    marginTop: "25px",
  },
}));

// function getBackground(imgUrl) {
//   console.log(imgUrl);
//   return imgUrl;
// }

const HeroPaper = (props) => {
  const classes = useStyles();
  const { pageDetails } = props;

  return (
    <React.Fragment>
      <Paper
        className={classes.heroImg}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pageDetails.imgUrl})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {/* <img
          style={{ display: "none" }}
          src="https://source.unsplash.com/user/erondu"
          alt="background"
        /> */}
        <div className={classes.overlay} />

        <Grid container>
          <Grid>
            <div className={classes.heroImgContent}>
              <Typography variant="h3" color="inherit">
                {pageDetails.name}
              </Typography>
              <Typography variant="subtitle1" color="inherit" paragraph>
                {pageDetails.quote}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default HeroPaper;
