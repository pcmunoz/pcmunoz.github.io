import { Box, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "grey.900",
        color: "white",
        textAlign: "center",
        py: 2,
        mt: 4,
      }}
    >
      <Typography>© 2025 John Doe. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
