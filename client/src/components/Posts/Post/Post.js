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
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpOutlined";
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

  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post?.likes?.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {post?.likes?.length > 2
            ? `You and ${post?.likes?.length - 1} others`
            : `${post?.likes?.length} `}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{post?.likes?.length}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
      </>
    );
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post?.name}</Typography>
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
          disabled={!user?.result}
          size="small"
          color="primary"
        >
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
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
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
