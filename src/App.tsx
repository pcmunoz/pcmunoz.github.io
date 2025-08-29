import { useMemo, useState } from "react";

import { Box, Container, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Experience as ExperienceItem, Project, Skill } from "./types";

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
    [darkMode],
  );

  const skills: Skill[] = [
    { name: "React", years: 8, level: 95 },
    { name: "TypeScript", years: 7, level: 95 },
    { name: "JavaScript (ES6+)", years: 10, level: 95 },
    { name: "Material UI", years: 4, level: 95 },
    { name: "HTML & CSS", years: 10, level: 95 },
    { name: "PHP", years: 3, level: 50 },
    { name: "RUBY", years: 2, level: 50 },
    { name: "C#", years: 4, level: 45 },
    { name: "Android", years: 2, level: 60 },
    { name: "Node", years: 4, level: 70 },
  ];

  const experience: ExperienceItem[] = [
    {
      type: "work",
      year: "2023-present",
      title: "Senior ReactJS Developer",
      place: "Amihan Solutions",
      description: "Lead the development of front-end application",
    },
    {
      type: "work",
      year: "2021-2023",
      title: "Lead Developer",
      place: "Telus Digital PH",
      description: "Lead the team for development of CASA product",
    },
    {
      type: "work",
      year: "2019-2021",
      title: "Senior Software Engineer",
      place: "Deltek",
      description: "Lead the development of a Deltek product",
    },
    {
      type: "work",
      year: "2019",
      title: "ReactJS Developer",
      place: "Ombori Services",
      description: "Building and maintenance of in-house product",
    },
    {
      type: "work",
      year: "2019",
      title: "ReactJS Developer",
      place: "LegalMatch",
      description: "Development of mobile application using React Native",
    },
    {
      type: "work",
      year: "2017 - 2018",
      title: "Mid Web Developer",
      place: "Chromedia",
      description: "Building responsive web applications with React, Ruby on Rails",
    },
    {
      type: "work",
      year: "2015 - 2016",
      title: "Software Engineer",
      place: "Blotocol Philippines",
      description: "Worked on website language migration from PHP to C#.",
    },
    {
      type: "education",
      year: "2010 - 2014",
      title: "Bachelor of Science in Information Technology",
      place: "FEU Institute of Technology",
      description: "Specialized in web technologies and software engineering.",
    },
  ];

  const projects: Project[] = [
    { title: "Workin.jp", description: "A japanese job search site", link: "https://workin.jp/" },
    {
      title: "Deltek Specpoint",
      description: "A construction related site",
      link: "https://www.deltek.com/en/architecture-and-engineering/specification-solutions/specpoint",
    },
    {
      title: "Portland Pedal Power",
      description: "A local delivery with e-commerce",
      link: "https://www.portlandpedalpower.com/",
    },
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
