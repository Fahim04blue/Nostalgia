import React from "react";
import useStyles from "./PostStyles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonGroup,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  deleteAsyncPost,
  likeAsyncPost,
} from "../../../redux/slices/postSlices";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post?.tags?.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          onClick={() => dispatch(likeAsyncPost(post._id))}
          size="small"
          color="primary"
        >
          <ThumbUpAltIcon fontSize="small" />
          {post.likeCount}
        </Button>
        <ButtonGroup variant="text" size="small" color="primary">
          <Button onClick={() => dispatch(deleteAsyncPost(post._id))}>
            <DeleteIcon
              style={{ cursor: "pointer" }}
              color="primary"
              fontSize="small"
            />
            Delete
          </Button>
          <Button onClick={() => setCurrentId(post._id)}>
            <EditIcon color="primary" fontSize="small" />
            Edit
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default Post;
