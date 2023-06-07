import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { Stack, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { Theme } from "@mui/system/createTheme"
import { Link } from "react-router-dom"
import strings from "../constants/strings"
import Copyright from "./Copyright"

const footerBoxSx = {
  py: 3,
  px: 2,
  mt: "auto",
  backgroundColor: (theme: Theme) =>
    theme.palette.mode === "light" ? theme.palette.grey[500] : theme.palette.grey[800],
}

const socialsSX = {
  mb: 2,
}

const Footer = () => {
  return (
    <Box component="footer" sx={footerBoxSx}>
      <Container maxWidth="sm">
        <Stack spacing={2} direction="row" sx={socialsSX}>
          <Stack
            spacing={1}
            direction="row"
            component={Link}
            to="https://github.com/pcmunoz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            <Typography>{strings.footer.github}</Typography>
          </Stack>
          <Stack
            spacing={1}
            direction="row"
            component={Link}
            to="https://www.linkedin.com/in/pcmunoz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            <Typography>{strings.footer.linkedIn}</Typography>
          </Stack>
        </Stack>
        <Copyright />
      </Container>
    </Box>
  )
}

export default Footer
