import Typography from "@mui/material/Typography"
import { useLocation } from "react-router-dom"

const PageTitle = () => {
  const { state } = useLocation()
  return (
    <Typography variant="h2" component="h1" gutterBottom>
      {state?.page ?? "Home"}
    </Typography>
  )
}

export default PageTitle
