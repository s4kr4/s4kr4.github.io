export interface Skill {
  category: string;
  skill: string[];
}

export const skills: Skill[] = [
  {
    category: "OS",
    skill: ["Windows", "macOS", "Ubuntu"],
  },
  {
    category: "言語",
    skill: [
      "Java",
      "C#",
      "Ruby",
      "JavaScript",
      "PHP",
      "HTML",
      "CSS",
      "ShellScript",
    ],
  },
  {
    category: "フレームワーク",
    skill: [
      "Spring",
      "CakePHP",
      "Drupal",
      "BEAR.Sunday",
      "Ruby on Rails",
      "React",
      "React Native",
    ],
  },
  {
    category: "DB",
    skill: ["MySQL", "PostgreSQL"],
  },
  {
    category: "その他",
    skill: ["Git", "SVN", "Vagrant", "Docker", "Apache", "Samba", "AWS"],
  },
];
