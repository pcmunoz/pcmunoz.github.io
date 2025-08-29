export type Project = {
  title: string;
  description: string;
  link: string;
};

export type Skill = {
  name: string;
  level: number; // percentage
};

export type Experience = {
  type: "work" | "education";
  year: string;
  title: string;
  place: string;
  description: string;
};
