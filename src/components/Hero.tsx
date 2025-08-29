import React from "react";

import { Download } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

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
      <Button
        variant="contained"
        color="secondary"
        startIcon={<Download />}
        href="/resume-PatrickCeasarMunoz.pdf"
        download
        sx={{ mt: 3 }}
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default Hero;
