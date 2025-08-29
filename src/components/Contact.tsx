import { Box, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import React from "react";

const Contact: React.FC = () => {
  return (
    <Box id="contact" py={6}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Typography>Email: johndoe@example.com</Typography>
      <Box mt={2}>
        <IconButton href="https://github.com/yourusername" target="_blank">
          <GitHub />
        </IconButton>
        <IconButton href="https://linkedin.com/in/yourusername" target="_blank">
          <LinkedIn />
        </IconButton>
        <IconButton href="mailto:johndoe@example.com">
          <Email />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Contact;
