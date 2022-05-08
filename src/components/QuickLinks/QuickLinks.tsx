import React from "react";
import useStyles from "./styles";
import { Box, Typography, Icon } from "@mui/material";
import { Link } from "react-router-dom";

const links = [
  { title: "Home", link: "/", icon: "🏡" },
  { title: "Bookmarks", link: "/bookmarks", icon: "📜" },
  { title: "Events", link: "/events", icon: "🎫" },
  { title: "Tags", link: "/tags", icon: "🏷️" },
  { title: "About", link: "/about", icon: "💬" },
  { title: "Contact", link: "/contact", icon: "📧" },
  { title: "FAQ", link: "/faq", icon: "💡" },
];

const QuickLinks: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {links.map((link, i) => (
        <Link to={`${link.link}`} key={i} className={classes.linkItem}>
          <Typography variant="h6" className={classes.icon}>
            {link.icon}
          </Typography>
          <Typography variant="body1" className={classes.text}>
            {link.title}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};

export default QuickLinks;
