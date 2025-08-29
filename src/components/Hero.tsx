import React from "react";

import { Box, Typography } from "@mui/material";

const Hero: React.FC = () => {
  return (
    <Box
      id="hero"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
        py: 8,
      }}
    >
      <Typography variant="h3" gutterBottom>
        PC Muñoz
      </Typography>
      <Typography variant="h6" gutterBottom>
        Web Developer | Team Lead
      </Typography>
    </Box>
  );
};

export default Hero;
