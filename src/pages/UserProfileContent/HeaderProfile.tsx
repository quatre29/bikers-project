import React, { useState } from "react";
import {
  Box,
  Grid,
  Container,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CustomPaper from "../../components/CustomPaper";
import UserAvatar from "../../components/UserAvatar";
import useStyles from "./styles";
import { Menu, MenuItem, ListItemIcon } from "@mui/material";
import {
  MoreHorizRounded,
  FlagRounded,
  EditRounded,
} from "@mui/icons-material";

interface Props {
  myProfile: boolean;
  userDetails: {
    name: string;
    username: string;
    description: string;
    avatar: string;
  };
}

const HeaderProfile: React.FC<Props> = ({ myProfile, userDetails }) => {
  const classes = useStyles();

  const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>(null);

  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };
  const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorMenu(e.currentTarget);
  };

  return (
    <Grid item xs={12}>
      <CustomPaper>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6} className={classes.avatarContainer}>
            <UserAvatar
              variant="circular"
              image={userDetails.avatar}
              size={{
                width: 150,
                height: 150,
              }}
              online
            />
            <Typography variant="h4" className={classes.fullName}>
              {userDetails.name}
            </Typography>
            <Typography variant="overline">@{userDetails.username}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Box className={classes.profileOptions}>
              <IconButton onClick={handleOpenMenu}>
                <MoreHorizRounded />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorMenu)}
                onClose={handleCloseMenu}
              >
                {myProfile && (
                  <MenuItem onClick={handleCloseMenu}>
                    <ListItemIcon>
                      <EditRounded />
                    </ListItemIcon>
                    Edit profile
                  </MenuItem>
                )}
                {!myProfile && (
                  <MenuItem onClick={handleCloseMenu}>
                    <ListItemIcon>
                      <FlagRounded />
                    </ListItemIcon>
                    Report user
                  </MenuItem>
                )}
              </Menu>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body1" className={classes.description}>
          {userDetails.description}
        </Typography>
      </CustomPaper>
    </Grid>
  );
};

export default HeaderProfile;
