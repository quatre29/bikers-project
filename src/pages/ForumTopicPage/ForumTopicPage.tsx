import React from "react";
import { Container, Box, Grid, Divider, Typography } from "@mui/material";
import CustomPaper from "../../components/CustomPaper";
import useStyles from "./styles";
import ReplyTopic from "./ReplyTopic";

const ForumTopicPage: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          zIndex: "-100",
          position: "absolute",
          height: "500px",
          width: "100%",
          background:
            "url(https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2142&q=80)",
          // background: `linear-gradient(0deg, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)), url(https://images.unsplash.com/photo-1640804243601-3f47ffed52a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "grayscale(100%)",
        }}
      ></Box>
      <Container maxWidth='lg' className={classes.container}>
        <CustomPaper>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={(theme) => ({ marginBottom: theme.spacing(3) })}
            >
              <Grid container>
                <Grid item xs={8}>
                  <Typography variant='body2'>
                    Forum {">"} Category {">"} Post
                  </Typography>
                </Grid>
                <Grid item xs={4} className={classes.postPaginationContainer}>
                  <Typography variant='body2'>1 2 3 ...last</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <ReplyTopic topicPost />
              <ReplyTopic />
              <ReplyTopic />
              <ReplyTopic />
            </Grid>
          </Grid>
        </CustomPaper>
      </Container>
    </>
  );
};

export default ForumTopicPage;
