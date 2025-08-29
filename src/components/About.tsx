import { Box, Typography } from "@mui/material";
import React from "react";

const About: React.FC = () => {
  return (
    <Box id="about" py={6}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography>
        Hello! I’m John, a passionate web developer who loves building clean and
        functional websites. I specialize in front-end development and enjoy
        turning ideas into reality through code.
      </Typography>
    </Box>
  );
};

export default About;
