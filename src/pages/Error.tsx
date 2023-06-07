import Typography from "@mui/material/Typography"
import Box from "@mui/system/Box"
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom"
import Layout from "../Layout"
import strings from "../constants/strings"

const errorMessage = (error: unknown): string => {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`
  } else if (error instanceof Error) {
    return error.message
  } else if (typeof error === "string") {
    return error
  } else {
    console.error(error)
    return "Unknown error"
  }
}

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  const err = errorMessage(error)

  return (
    <Layout>
      <Box id="error-page">
        <Typography variant="h2">{strings.errorPage.title}</Typography>
        <Typography variant="subtitle1">{strings.errorPage.subtitle}</Typography>
        <Typography variant="body1">
          <i>{err}</i>
        </Typography>
        <Link to="/">{strings.errorPage.returnToHome}</Link>
      </Box>
    </Layout>
  )
}

export default ErrorPage
