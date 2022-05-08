import React from "react";
import useStyles from "./styles";
import { Box, Container, Typography } from "@mui/material";
import { Instagram, Facebook, Twitter, GitHub } from "@mui/icons-material";

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.bg}>
      <Container maxWidth="xl" className={classes.root}>
        <Typography variant="subtitle2" gutterBottom>
          This project is made with passion by @quatre
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Thechnologies used: NodeJs | PostgreSql | ReactJs | Express | © 2022.
        </Typography>
        <div>
          <Instagram className={classes.iconSocialLink} />
          <Facebook className={classes.iconSocialLink} />
          <Twitter className={classes.iconSocialLink} />
          <GitHub className={classes.iconSocialLink} />
        </div>
      </Container>
    </Box>
  );
};

export default Footer;
