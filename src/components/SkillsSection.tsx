const skills = [
  //Frontend Skills
  { name: "JavaScript", level: 50, category: "Web Development" },
  { name: "HTML/CSS", level: 70, category: "Web Development" },
  { name: "TypeScript", level: 50, category: "Web Development" },
  { name: "React", level: 40, category: "Web Development" },
  { name: "Blazor", level: 40, category: "Web Development" },
  { name: "Tailwind CSS", level: 30, category: "Web Development" },

  //Backend Skills
  { name: ".NET Core", level: 90, category: "Backend" },
  { name: "ASP.NET", level: 70, category: "Backend" },
  { name: "SQL", level: 99, category: "Backend" },
  { name: "SSIS/SSRS", level: 70, category: "Backend" },

  //Tools
  { name: "IIS", level: 70, category: "Backend" },
  { name: "Git", level: 70, category: "Tools" },
  { name: "Azure DevOps", level: 60, category: "Tools" },
  { name: "Postman", level: 50, category: "Tools" },
  { name: "VS Code", level: 80, category: "Tools" },
  { name: "Jira", level: 70, category: "Tools" },
  { name: "Visual Studio", level: 90, category: "Tools" },
];

export const SkillsSection = () => {
  return <section id="skills"></section>;
};
