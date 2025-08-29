import React from "react";

import { School, Work } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Paper, Typography } from "@mui/material";

import { Experience } from "../types";

type ExperienceProps = {
  experience: Experience[];
};

const ExperienceSection: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <Box id="experience" py={6}>
      <Typography variant="h4" gutterBottom>
        Experience & Education
      </Typography>
      <Timeline position="alternate">
        {experience.map((exp, i) => (
          <TimelineItem key={i}>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" color="text.secondary">
              {exp.year}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={exp.type === "work" ? "primary" : "secondary"}>
                {exp.type === "work" ? <Work /> : <School />}
              </TimelineDot>
              {i < experience.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">{exp.title}</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {exp.place}
                </Typography>
                <Typography>{exp.description}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default ExperienceSection;
