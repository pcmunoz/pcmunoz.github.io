import { useState, useMemo } from "react";
import { CssBaseline, Container, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Skill, Experience as ExperienceItem, Project } from "./types";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: darkMode ? "#90caf9" : "#1976d2",
          },
        },
      }),
    [darkMode]
  );

  const skills: Skill[] = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML & CSS", level: 95 },
    { name: "Material UI", level: 80 },
    { name: "Node.js", level: 70 },
  ];

  const experience: ExperienceItem[] = [
    {
      type: "work",
      year: "2023 - Present",
      title: "Frontend Developer",
      place: "TechCorp Inc.",
      description:
        "Building responsive web applications with React, Material UI, and REST APIs.",
    },
    {
      type: "work",
      year: "2021 - 2023",
      title: "Junior Web Developer",
      place: "Startup Hub",
      description:
        "Worked on UI components, optimized performance, and supported backend integration.",
    },
    {
      type: "education",
      year: "2017 - 2021",
      title: "Bachelor of Computer Science",
      place: "State University",
      description: "Specialized in web technologies and software engineering.",
    },
  ];

  const projects: Project[] = [
    { title: "Project One", description: "A short description.", link: "#" },
    { title: "Project Two", description: "Another cool project.", link: "#" },
    { title: "Project Three", description: "Something awesome.", link: "#" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* ✅ Hero full-width with responsive padding */}
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "white",
            py: { xs: 6, sm: 8, md: 10 }, // smaller padding on mobile, bigger on desktop
          }}
        >
          <Container maxWidth="md">
            <Hero />
          </Container>
        </Box>

        {/* ✅ Main content sections with responsive spacing */}
        <Container
          maxWidth="md"
          sx={{
            py: { xs: 4, sm: 6, md: 8 }, // breathing space between sections
          }}
        >
          <About />
          <Box sx={{ my: { xs: 4, sm: 6, md: 8 } }}>
            <Skills skills={skills} />
          </Box>
          <Box sx={{ my: { xs: 4, sm: 6, md: 8 } }}>
            <Experience experience={experience} />
          </Box>
          <Box sx={{ my: { xs: 4, sm: 6, md: 8 } }}>
            <Projects projects={projects} />
          </Box>
          <Box sx={{ my: { xs: 4, sm: 6, md: 8 } }}>
            <Contact />
          </Box>
        </Container>

        {/* ✅ Footer full-width with responsive padding */}
        <Box
          sx={{
            bgcolor: "grey.900",
            color: "white",
            py: { xs: 3, sm: 4, md: 6 },
            mt: { xs: 4, sm: 6, md: 8 },
          }}
        >
          <Container maxWidth="md">
            <Footer />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
