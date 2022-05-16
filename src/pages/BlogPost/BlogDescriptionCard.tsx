import React from "react";
import CustomPaper from "../../components/CustomPaper";
import { Box, Typography, Divider } from "@mui/material";

interface Props {
  description: string;
}

const BlogDescriptionCard: React.FC<Props> = ({ description }) => {
  return (
    <Box>
      <CustomPaper>
        <Typography variant="overline" sx={{ fontWeight: "bold" }}>
          Description
        </Typography>
        <Divider />
        <Typography
          sx={(theme) => ({ marginTop: theme.spacing(2) })}
          variant="body2"
        >
          {description}
        </Typography>
      </CustomPaper>
    </Box>
  );
};

export default BlogDescriptionCard;
