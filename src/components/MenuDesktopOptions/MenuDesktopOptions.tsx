import React, { useState } from "react";
import {
  Box,
  Tooltip,
  Menu,
  IconButton,
  MenuItem,
  ListItemIcon,
  Divider,
  Avatar,
} from "@mui/material";
import PersonAdd from "@mui/icons-material/PersonAdd";
import UserAvatar from "../UserAvatar";
import { useNavigate } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import { useLogoutMutation } from "../../services/authApi";
import LogoutMenuItem from "./LogoutMenuItem";

const MenuDesktopOptions: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenuGoProfile = () => {
    setAnchorEl(null);
    navigate("/my-profile");
  };

  const handleCloseUserMenuGoSettings = () => {
    setAnchorEl(null);
    navigate("/settings");
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open Menu">
        <IconButton onClick={handleOpenUserMenu}>
          <UserAvatar online />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseUserMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem onClick={handleCloseUserMenuGoProfile}>
          <Avatar />
          My Profile
        </MenuItem>

        <Divider />
        <MenuItem onClick={handleCloseUserMenuGoSettings}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>

        <LogoutMenuItem version="desktop" />
      </Menu>
    </Box>
  );
};

export default MenuDesktopOptions;
