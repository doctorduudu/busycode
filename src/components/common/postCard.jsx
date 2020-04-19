import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#f50057",
  },
}));

function renderPreviewStory(previewStory) {
  if (previewStory.length > 150) {
    return `${previewStory.substring(0, 150)}...`;
  }

  return previewStory;
}

function renderTitle(title) {
  if (title.length > 60) {
    return `${title.substring(0, 60)}...`;
  }

  if (title.length < 33) {
    return (
      <React.Fragment>
        {title}
        <br />
        <br />
      </React.Fragment>
    );
  }

  return title;
}

const PostCard = (props) => {
  const { post } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            {renderTitle(post.title)}
          </Typography>
        }
        // subheader={
        //   <Typography variant="body2" color="textSecondary">
        //     By:{" "}
        //     <Link
        //       to={`/tutor-details/${post.tutor.id}`}
        //       style={{ textTransform: "capitalize" }}
        //     >
        //       {renderTutorName(post.tutor.name)}
        //     </Link>
        //   </Typography>
        // }
      />
      <CardMedia
        className={classes.media}
        image={post.featuredImg}
        title={post.title}
      />
      <CardContent style={{ height: "100px" }}>
        <Typography variant="body2" color="textSecondary" component="p">
          {renderPreviewStory(post.previewStory)}
        </Typography>
      </CardContent>
      <Button
        fullWidth
        variant="contained"
        id="card-btn"
        className={classes.button}
      >
        <a
          href={`/read-post/${post.id}`}
          style={{ width: "100%", color: "#ffffff" }}
        >
          Read More
        </a>
      </Button>
    </Card>
  );
};

export default PostCard;
