import React from "react";
import CustomPaper from "../../components/CustomPaper";
import RoleBadge from "../../components/RoleBadge";
import { Box } from "@mui/material";
import useStyles from "./styles";

interface Props {
  roleBadge: "member" | "moderator" | "admin" | "developer" | "blogger";
}

const Badges: React.FC<Props> = ({ roleBadge }) => {
  const classes = useStyles();

  return (
    <Box className={classes.badgesContainer}>
      <CustomPaper>
        <RoleBadge role={roleBadge} />
      </CustomPaper>
    </Box>
  );
};

export default Badges;
