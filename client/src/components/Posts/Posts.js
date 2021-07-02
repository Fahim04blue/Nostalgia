import React from "react";
import Post from "./Post/Post";
import useStyles from "./PostsStyles";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  ButtonGroup,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { Skeleton } from "@material-ui/lab";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts.posts);

  return !posts.length ? (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
        <Grid item key={key} xs={12} sm={6}>
          <Card className={classes.card}>
            <Skeleton
              animation="wave"
              variant="rect"
              className={classes.media}
            />
            <CardContent>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
                width="20%"
              />
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
                width="40%"
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
                width="10%"
              />
              <ButtonGroup>
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                  width="10%"
                />
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                  width="10%"
                />
              </ButtonGroup>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts?.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
