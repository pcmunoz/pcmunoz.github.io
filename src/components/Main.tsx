// import './App.css';
import Container from "@mui/material/Container"

const mainSx = { mt: 8, mb: 2 }

interface Props {
  children: React.ReactNode
}

const MainContainer = (props: Props) => {
  return (
    <Container component="main" sx={mainSx} maxWidth="sm">
      {props.children}
    </Container>
  )
}

export default MainContainer
