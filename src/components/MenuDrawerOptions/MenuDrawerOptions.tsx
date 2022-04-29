import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { getParsedCommandLineOfConfigFile } from "typescript";
import LogoutMenuItem from "../MenuDesktopOptions/LogoutMenuItem";

interface DrawerProps {
  onClickOption: (bool: boolean) => void;
}

type navigationString = "settings" | "my-profile" | "forum";

const MenuDrawerOptions: React.FC<DrawerProps> = ({ onClickOption }) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const onClickItem = (link: navigationString): void => {
    onClickOption(false);
    navigate(`/${link}`);
  };

  return (
    <Box className={classes.container}>
      <List>
        <ListItem
          className={classes.linkItem}
          onClick={() => onClickItem("my-profile")}
        >
          My Profile
        </ListItem>
        <ListItem
          className={classes.linkItem}
          onClick={() => onClickItem("settings")}
        >
          Settings
        </ListItem>
        <ListItem
          className={classes.linkItem}
          onClick={() => onClickItem("forum")}
        >
          Forum
        </ListItem>
        <LogoutMenuItem version="mobile" />
      </List>
    </Box>
  );
};

export default MenuDrawerOptions;
