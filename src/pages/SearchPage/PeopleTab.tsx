import React from "react";
import UserMinimalCard from "../../components/UserMinimalCard";
import { User } from "../../models/user.model";
import { Box } from "@mui/material";

interface Props {
  users: User[] | undefined;
  isLoading: boolean;
}

const PeopleTab: React.FC<Props> = ({ users, isLoading }) => {
  return (
    <Box>
      {users &&
        !isLoading &&
        users.map((user) => (
          <UserMinimalCard
            key={`${user.user_id}${user.username}`}
            user={user}
          />
        ))}
    </Box>
  );
};

export default PeopleTab;
