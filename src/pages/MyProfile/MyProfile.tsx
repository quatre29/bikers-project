import React from "react";
import { useAuth } from "../../hooks/useAuth";
import UserProfileContent from "../UserProfileContent";

const MyProfile: React.FC = () => {
  const { user } = useAuth();

  return <UserProfileContent user={user!} myProfile />;
};

export default MyProfile;
