import React from "react";
import { MenuItem, ListItemIcon, ListItem } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import { useLogoutMutation } from "../../services/authApi";
import useStyles from "../MenuDrawerOptions/styles";
import { toast } from "react-toastify";

interface Props {
  version: "desktop" | "mobile";
}

const LogoutMenuItem: React.FC<Props> = ({ version }) => {
  const [logout] = useLogoutMutation();
  const classes = useStyles();

  const reloadPage = () => window.location.reload();

  const signOut = () => {
    logout().then((data: any) => {
      if (data.error?.data.status === "fail") {
        toast("Something went wrong, please try again", { type: "error" });
      } else {
        reloadPage();
      }
    });
  };

  return version === "desktop" ? (
    <MenuItem onClick={signOut}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      Sign Out
    </MenuItem>
  ) : (
    <ListItem className={classes.linkItem} onClick={signOut}>
      Sign Out
    </ListItem>
  );
};

export default LogoutMenuItem;
