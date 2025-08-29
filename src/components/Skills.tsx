import React from "react";

import { Box, Grid, LinearProgress, Paper, Typography } from "@mui/material";

import { Skill } from "../types";

type SkillsProps = {
  skills: Skill[];
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Box id="skills" py={6}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill, i) => (
          <Grid size={{ xs: 12, sm: 6 }} key={i}>
            <Paper sx={{ p: 3 }} elevation={2}>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="h6">{skill.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {skill.years} {skill.years > 1 ? "years" : "year"}
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{ height: 8, borderRadius: 4 }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
