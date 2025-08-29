import { Box, Typography, Button } from "@mui/material";
import { Download } from "@mui/icons-material";
import React from "react";

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
        John Doe
      </Typography>
      <Typography variant="h6" gutterBottom>
        Web Developer | Designer | Freelancer
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<Download />}
        href="/resume.pdf"
        download
        sx={{ mt: 3 }}
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default Hero;
