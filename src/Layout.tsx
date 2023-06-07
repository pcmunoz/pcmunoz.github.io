// import './App.css';
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContainer from "./components/Main"

const appWrapperSX = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}

interface Props {
  children?: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <Fragment>
      <Box sx={appWrapperSX}>
        <Header />
        <CssBaseline />
        <MainContainer>{props.children ? props.children : <Outlet />}</MainContainer>
        <Footer />
      </Box>
    </Fragment>
  )
}

export default Layout
