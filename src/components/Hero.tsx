import React from "react";

import { Box, Typography } from "@mui/material";

const Hero: React.FC = () => {
  return (
    <Box
      id="hero"
      sx={{
        color: "white",
        textAlign: "center",
        py: 8,
      }}
    >
      <Typography variant="h3" gutterBottom>
        PC Muñoz
      </Typography>
      <Typography variant="h6" gutterBottom>
        Frontend Developer | Team Lead
      </Typography>
    </Box>
  );
};

export default Hero;
