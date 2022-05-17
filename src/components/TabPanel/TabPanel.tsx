import React, { useState } from "react";
import useStyles from "./styles";
import { Grid, Box, Typography } from "@mui/material";
import CustomPaper from "../CustomPaper";

interface Props {
  tabTitle: string;
  tabs: { tabName: string; component: JSX.Element }[];
}

const TabPanel: React.FC<Props> = ({ tabTitle, tabs }) => {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={2}>
        {tabs.map((tab, i) => (
          <Box
            key={`${i}${tab.tabName}`}
            className={
              i === tabValue ? classes.tabLabelActive : classes.tabLabel
            }
            onClick={() => setTabValue(i)}
          >
            <Typography
              variant="body1"
              className={i === tabValue ? classes.activeTabText : undefined}
            >
              {tab.tabName}
            </Typography>
          </Box>
        ))}
      </Grid>
      <Grid item xs={12} md={10} className={classes.tabContentContainer}>
        {tabs.map(
          (tab, i) =>
            i === tabValue && (
              <div key={`${i}${tab.tabName}`}>{tab.component}</div>
            )
        )}
      </Grid>
    </Grid>
  );
};

export default TabPanel;
