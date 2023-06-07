import ComputerIcon from "@mui/icons-material/Computer"
import MenuIcon from "@mui/icons-material/Menu"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { MouseEvent, useState } from "react"
import { Link } from "react-router-dom"
import strings from "../constants/strings"

const nameSX = (xs: boolean) => ({
  mr: 2,
  display: { xs: xs ? "flex" : "none", md: xs ? "none" : "flex" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
})

const menuSX = {
  display: { xs: "block", md: "none" },
}

const pageWrapperSX = { flexGrow: 1, display: { xs: "none", md: "flex" } }

const pageButtonSX = { my: 2, color: "white", display: "block" }

const iconSX = (xs: boolean) => ({
  display: { xs: xs ? "flex" : "none", md: xs ? "none" : "flex" },
  mr: 1,
})

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ComputerIcon sx={iconSX(false)} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={nameSX(false)}
            state={{ page: "Home" }}
          >
            {strings.name}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={menuSX}
            >
              {strings.pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" component={Link} to={`/${page}`} state={{ page }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ComputerIcon sx={iconSX(true)} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={nameSX(true)}
            state={{ page: "Home" }}
          >
            {strings.name}
          </Typography>
          <Box sx={pageWrapperSX}>
            {strings.pages.map((page) => (
              <Button key={page} component={Link} sx={pageButtonSX} to={`/${page}`} state={{ page }}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
