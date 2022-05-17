import React from "react";
import TabPanel from "../../components/TabPanel";
import BlogPostsDashboard from "./BlogPostsDashboard";
import ForumRepliesDashboard from "./ForumRepliesDashboard";
import ForumTopicsDashboard from "./ForumTopicsDashboard";
import { Container, Typography } from "@mui/material";

const tabs = [
  {
    tabName: "Blog posts",
    component: <BlogPostsDashboard />,
  },
  {
    tabName: "Forum topics",
    component: <ForumTopicsDashboard />,
  },
  {
    tabName: "Forum replies",
    component: <ForumRepliesDashboard />,
  },
];

const Dashboard: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h6"
        sx={(theme) => ({ margin: theme.spacing(4, 0, 4, 0) })}
      >
        DASHBOARD
      </Typography>
      <TabPanel tabs={tabs} tabTitle={"Dashboard"} />
    </Container>
  );
};

export default Dashboard;
