import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

import useStyles from "./styles";
import ForumTopicsContainer from "../../components/ForumTopicsContainer";

const ForumPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <ForumTopicsContainer />
    </Container>
  );
};

export default ForumPage;
