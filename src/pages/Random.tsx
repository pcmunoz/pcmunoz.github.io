// import './App.css';
import Typography from "@mui/material/Typography"
import { Fragment } from "react"
import PageTitle from "../components/PageTitle"

const Random = () => {
  return (
    <Fragment>
      <PageTitle />
      <Typography variant="h5" component="h2" gutterBottom>
        {"Pin a footer to the bottom of the viewport."}
        {"The footer will move as the main element of the page grows."}
      </Typography>
      <Typography variant="body1">Sticky footer placeholder.</Typography>
    </Fragment>
  )
}

export default Random
