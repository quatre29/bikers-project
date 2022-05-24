import React from "react";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { Typography, Box } from "@mui/material";
import useStyles from "./styles";
import { Forum } from "../../models/forumResponse.model";
import { Link } from "react-router-dom";

interface Props {
  subForum: Forum;
}

const SubForumItem: React.FC<Props> = ({ subForum }) => {
  const classes = useStyles();
  return (
    <Link to={`/forum/${subForum.forum_id}`} className={classes.titleLink}>
      <Box className={classes.subForumContainer}>
        <SubdirectoryArrowRightIcon fontSize="small" />
        <Typography className={classes.subForumText} variant="body2">
          {subForum.name}
        </Typography>
      </Box>
    </Link>
  );
};

export default SubForumItem;
