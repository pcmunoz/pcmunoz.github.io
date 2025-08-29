import { Box, Typography, Grid, Chip, LinearProgress } from "@mui/material";
import React from "react";
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
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={1}
            >
              <Chip label={skill.name} color="primary" />
              <Typography variant="body2">{skill.level}%</Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={skill.level}
              sx={{ height: 10, borderRadius: 5 }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
