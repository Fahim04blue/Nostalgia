import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import useStyles from "./HomeStyles";
import { useDispatch } from "react-redux";
import { fetchAsyncPost } from "../../redux/slices/postSlices";
import Form from "../From/Form";
import Posts from "../Posts/Posts";

const Home = () => {
  const classes = useStyles();

  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncPost());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
