import React from "react";

import { Box, Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <Box id="about" py={6}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography>
        Hello! I’m PC short for Patrick Ceasar, a passionate web developer who loves building clean
        and functional websites. I specialize in front-end development and enjoy turning ideas into
        reality through code.
      </Typography>
      <Typography>
        I also do backend code mainly thru node. But I have experiences with PHP, Ruby, and C#.
      </Typography>
      <Typography>I like to make simple things.</Typography>
    </Box>
  );
};

export default About;
