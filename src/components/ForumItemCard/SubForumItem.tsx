import React from "react";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { Typography, Box } from "@mui/material";
import useStyles from "./styles";

const SubForumItem: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.subForumContainer}>
      <SubdirectoryArrowRightIcon fontSize='small' />
      <Typography className={classes.subForumText} variant='body2'>
        SubForumItem
      </Typography>
    </Box>
  );
};

export default SubForumItem;
