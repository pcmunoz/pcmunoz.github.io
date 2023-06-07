// import './App.css';
import Typography from "@mui/material/Typography"
import { Fragment } from "react"
import { useLocation } from "react-router-dom"

const Experiences = () => {
  const { state } = useLocation()
  return (
    <Fragment>
      <Typography variant="h2" component="h1" gutterBottom>
        {state.page}
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {"Pin a footer to the bottom of the viewport."}
        {"The footer will move as the main element of the page grows."}
      </Typography>
      <Typography variant="body1">Sticky footer placeholder.</Typography>
    </Fragment>
  )
}

export default Experiences
