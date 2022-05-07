import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./styles";

interface Props {
  tag: string;
}

const TagItem: React.FC<Props> = ({ tag }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography color="HighlightText" variant="body2">
        #
      </Typography>
      <Typography className={classes.tagText} variant="body2">
        {tag}
      </Typography>
    </Box>
  );
};

export default TagItem;
