import React from "react";
import { Box, Typography } from "@mui/material";
import CustomPaper from "../CustomPaper";
import UserAvatar from "../UserAvatar";
import useStyles from "./styles";

interface Props {
  user: {
    username: string | undefined;
    avatar: string | undefined;
    location: string | null | undefined;
    name: string | undefined;
    role: string | undefined;
    description: string | null | undefined;
  };
}

const UserInfoCard: React.FC<Props> = ({ user }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <CustomPaper>
        <Box className={classes.avatarContainer}>
          <UserAvatar image={user.avatar} size={{ width: 100, height: 100 }} />
          <Typography variant="h5" className={classes.name}>
            {user.name}
          </Typography>
          <Typography
            variant="body1"
            className={classes.username}
            color="text.secondary"
          >
            @{user.username}
          </Typography>
        </Box>
        <Box className={classes.description}>
          <Typography variant="subtitle2">{user.description}</Typography>
        </Box>
        <Box className={classes.details}>
          {user.location && (
            <Box>
              <Typography variant="overline" className={classes.detailField}>
                LOCATION
              </Typography>
              <Typography variant="body2">{user.location}</Typography>
            </Box>
          )}

          <Box>
            <Typography variant="overline" className={classes.detailField}>
              ROLE
            </Typography>
            <Typography variant="body2">{user.role}</Typography>
          </Box>
        </Box>
      </CustomPaper>
    </Box>
  );
};

export default UserInfoCard;
