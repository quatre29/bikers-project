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
  useScrollTrigger,
  Slide,
} from "@mui/material";
import HomeRounded from "@mui/icons-material/HomeRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import MenuDrawerOptions from "../MenuDrawerOptions";
import MenuDesktopOptions from "../MenuDesktopOptions";
import ForumIcon from "@mui/icons-material/Forum";
import SearchItem from "../SearchItem";
import useStyles from "./styles";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavBar = (props: any) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles(location);

  return (
    <HideOnScroll {...props}>
      <AppBar
        sx={{
          bgcolor: (theme) => theme.palette.background.paper,
        }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box className={classes.itemLink}>
              <Button
                // color={location.pathname === "/" ? "warning" : "secondary"}
                startIcon={<HomeRounded />}
                onClick={() => navigate("/")}
                className={classes.textHomeLink}
              >
                Home
              </Button>
            </Box>

            <Hidden smDown>
              <Box className={classes.itemLink}>
                <Button
                  // color={location.pathname === "/forum" ? "warning" : "secondary"}
                  startIcon={<ForumIcon />}
                  onClick={() => navigate("/forum")}
                  className={classes.textForumLink}
                >
                  Forum
                </Button>
              </Box>
            </Hidden>
            <Box sx={{ flexGrow: 1 }} />
            <SearchItem />
            {/* <Box sx={{ flexGrow: 1 }} /> */}
            <Hidden smUp>
              <IconButton size="large" onClick={() => setOpenDrawer(true)}>
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
          anchor="right"
        >
          <Box>
            <IconButton size="large" onClick={() => setOpenDrawer(false)}>
              <ChevronRight />
            </IconButton>
          </Box>
          <Divider />
          <MenuDrawerOptions onClickOption={setOpenDrawer} />
        </SwipeableDrawer>
        <Divider />
      </AppBar>
    </HideOnScroll>
  );
};

export default NavBar;
