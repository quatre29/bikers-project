import React from "react";
import TabPanel from "../../components/TabPanel";
import AccountTab from "./AccountTab";
import ProfileTab from "./ProfileTab";
import { Container, Typography } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";

const UserSettings: React.FC = () => {
  const user = useAuth();

  const tabs = [
    { tabName: "Profile", component: <ProfileTab user={user.user} /> },
    { tabName: "Account", component: <AccountTab /> },
  ];

  return (
    <Container
      maxWidth="md"
      sx={(theme) => ({
        marginTop: theme.spacing(4),
      })}
    >
      <Typography
        variant="h6"
        sx={(theme) => ({ marginBottom: theme.spacing(4) })}
      >
        SETTINGS
      </Typography>
      <TabPanel tabs={tabs} tabTitle="Settings" />
    </Container>
  );
};

export default UserSettings;
