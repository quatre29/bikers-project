import React from "react";
import CustomPaper from "../../components/CustomPaper";
import { Typography, Divider, Box } from "@mui/material";
import useStyles from "./styles";
import { CakeRounded, PostAddRounded, ForumRounded } from "@mui/icons-material";
import * as moment from "moment";
interface Props {
  userDetails: {
    joinDate: Date;
  };
}

const UserAbout: React.FC<Props> = ({ userDetails }) => {
  const classes = useStyles();

  return (
    <div className={classes.categoryContainer}>
      <CustomPaper>
        <Typography variant="overline" className={classes.userCategory}>
          About
        </Typography>
        <Divider />
        <Box className={classes.detailsContainer}>
          <Box className={classes.detailsItem}>
            <CakeRounded className={classes.detailsIcon} />
            <Typography variant="body1" className={classes.detailsText}>
              Joined on {moment.parseZone(userDetails.joinDate).format("LL")}
            </Typography>
          </Box>

          <Box className={classes.detailsItem}>
            <PostAddRounded className={classes.detailsIcon} />
            <Typography variant="body1" className={classes.detailsText}>
              21 Blog posts published
            </Typography>
          </Box>

          <Box className={classes.detailsItem}>
            <ForumRounded className={classes.detailsIcon} />
            <Typography variant="body1" className={classes.detailsText}>
              33 Forum posts
            </Typography>
          </Box>
        </Box>
      </CustomPaper>
    </div>
  );
};

export default UserAbout;
