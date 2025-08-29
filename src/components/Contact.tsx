import React from "react";

import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

const Contact: React.FC = () => {
  return (
    <Box id="contact" py={6}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Typography>Email: patrickceasarmunoz@outlook.com</Typography>
      <Box mt={2}>
        <IconButton href="https://github.com/pcmunoz" target="_blank">
          <GitHub />
        </IconButton>
        <IconButton href="https://linkedin.com/in/pcmunoz" target="_blank">
          <LinkedIn />
        </IconButton>
        <IconButton href="mailto:patrickceasarmunoz@outlook.com">
          <Email />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Contact;
