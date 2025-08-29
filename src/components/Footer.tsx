import React from "react";

import { Box, Typography } from "@mui/material";

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
      <Typography>© 2025 PC Muñoz. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
