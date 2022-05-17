import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./styles";
import { Link } from "react-router-dom";

interface Props {
  tag: string;
}

const TagItem: React.FC<Props> = ({ tag }) => {
  const classes = useStyles();
  return (
    <Link className={classes.tagLink} to={`/tag/${tag}`}>
      <Box className={classes.container}>
        <Typography color="HighlightText" variant="body2">
          #
        </Typography>
        <Typography className={classes.tagText} variant="body2">
          {tag}
        </Typography>
      </Box>
    </Link>
  );
};

export default TagItem;
