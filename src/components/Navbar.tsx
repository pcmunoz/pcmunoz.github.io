import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(25, 118, 210, 0.7)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo / Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", cursor: "pointer" }}
            onClick={() => handleScroll("hero")}
          >
            My Portfolio
          </Typography>

          {/* Desktop Nav (md and up) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                onClick={() => handleScroll(item)}
              >
                {item}
              </Button>
            ))}
            <Switch
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              color="default"
            />
          </Box>

          {/* Mobile Nav (xs to sm) */}
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <Switch
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              color="default"
            />
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ✅ Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, mt: 2 }}>
          <List>
            {navItems.map((text) => (
              <ListItem
                component={Button}
                key={text}
                onClick={() => handleScroll(text)}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
