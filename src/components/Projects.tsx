import React from "react";

import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";

import { Project } from "../types";

type ProjectsProps = {
  projects: Project[];
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Box id="projects" py={6}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((proj, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {proj.title}
                </Typography>
                <Typography>{proj.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={proj.link}>
                  View Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
