import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import strings from "../constants/strings"

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://pcmunoz.github.io/">
        {strings.name}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export default Copyright
