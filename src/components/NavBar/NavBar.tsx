import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Box,
  Hidden,
  SwipeableDrawer,
  Button,
} from "@mui/material";
import HomeRounded from "@mui/icons-material/HomeRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import MenuDrawerOptions from "../MenuDrawerOptions";
import MenuDesktopOptions from "../MenuDesktopOptions";
import ForumIcon from "@mui/icons-material/Forum";
import SearchItem from "../SearchItem";

const NavBar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position='static' color='primary' elevation={3}>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <Button
            color={location.pathname === "/" ? "warning" : "secondary"}
            startIcon={<HomeRounded />}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Hidden smDown>
            <Button
              color={location.pathname === "/forum" ? "warning" : "secondary"}
              startIcon={<ForumIcon />}
              onClick={() => navigate("/forum")}
            >
              Forum
            </Button>
          </Hidden>
          <Box sx={{ flexGrow: 1 }} />
          <SearchItem />
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <Hidden smUp>
            <IconButton size='large' onClick={() => setOpenDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <MenuDesktopOptions />
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        anchor='right'
      >
        <Box>
          <IconButton size='large' onClick={() => setOpenDrawer(false)}>
            <ChevronRight />
          </IconButton>
        </Box>
        <Divider />
        <MenuDrawerOptions onClickOption={setOpenDrawer} />
      </SwipeableDrawer>
    </AppBar>
  );
};

export default NavBar;
