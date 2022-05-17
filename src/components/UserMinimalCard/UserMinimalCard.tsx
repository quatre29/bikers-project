import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import CustomPaper from "../CustomPaper";
import { User } from "../../models/user.model";
import RoleBadge from "../RoleBadge";
import UserAvatar from "../UserAvatar";
import useStyles from "./styles";
import { Link } from "react-router-dom";

interface Props {
  user: User;
}

const UserMinimalCard: React.FC<Props> = ({ user }) => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Grid container className={classes.container}>
      <Grid item xs={8} className={classes.details}>
        <UserAvatar
          image={user.avatar}
          online
          size={
            isSmallScreen
              ? { width: 40, height: 40 }
              : { width: 64, height: 64 }
          }
        />
        <Box>
          <Link
            className={classes.userLink}
            to={`/user-profile/${user.user_id}`}
          >
            <Typography
              className={classes.text}
              variant={isSmallScreen ? "h6" : "h4"}
            >
              {user.name}
            </Typography>
          </Link>
          <Typography variant="body2" className={classes.usernameText}>
            @{user.username}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4} className={classes.badge}>
        <RoleBadge size={isSmallScreen ? "xs" : "sm"} role={user.role} />
      </Grid>
    </Grid>
  );
};

export default UserMinimalCard;
