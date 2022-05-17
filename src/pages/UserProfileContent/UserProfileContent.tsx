import React from "react";
import useStyles from "./styles";
import { Box, Grid, Container } from "@mui/material";
import CustomPaper from "../../components/CustomPaper";
import UserAvatar from "../../components/UserAvatar";
import HeaderProfile from "./HeaderProfile";
import UserAbout from "./UserAbout";
import Badges from "./Badges";
import { User } from "../../models/user.model";
import GoToTop from "../../utils/GoToTop";

interface Props {
  user: User;
  myProfile?: boolean;
}

const UserProfile: React.FC<Props> = ({ user, myProfile }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container>
        <HeaderProfile
          myProfile={myProfile ? myProfile : false}
          userDetails={{
            avatar: user.avatar,
            name: user.name,
            username: user.username,
            description: user.description ? user.description : "",
          }}
        />
        <Grid item xs={5}>
          <UserAbout userDetails={{ joinDate: user.created_at! }} />
          <Badges roleBadge={user.role} />
        </Grid>
        <Grid item xs={7}></Grid>
      </Grid>
      <GoToTop />
    </Container>
  );
};

export default UserProfile;
