export type SEODataType = {
  title: string;
  author?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords: string[];
};

// https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures

export type SocialLinksType = {
  [link: string]: string;
};

// * HERO SECTION

export type GreetingsType = {
  name: string;
  title: string;
  description?: string;
  resumeLink?: string;
};

// * SKILLS SECTION

type SoftwareSkillType = {
  skillName: string;
  fontAwesomeClassName: string;
};

type SkillType = {
  title: string;
  lottieAnimationFile: string;
  skills: React.ReactNode[] | string[];
  softwareSkills: SoftwareSkillType[];
};

export type SkillsSectionType = {
  title: string;
  subTitle: string;
  data: SkillType[];
};

// * PROFICIENCY SECTION

export type SkillBarsType = {
  Stack: string;
  progressPercentage: string;
};

// * EDUCATION SECTION

export type EducationType = {
  schoolName: string;
  subHeader: string;
  duration: string;
  desc: string;
  grade?: string;
  descBullets?: string[];
};

// * EXPERIENCE SECTION

export type ExperienceType = {
  role: string;
  company: string;
  links: string;
  companyLogo: string;
  date: string;
  desc: string;
  descBullets?: string[];
};

// * PROJECT SECTION

export type ProjectType = {
  name: string;
  description: string;
  source_code_link?: string;

  tags: { name: string; color: string }[];
  source_code_link1?: string;
};

// * FEEDBACK SECTION

export type FeedbackType = {
  name: string;
  link: string;

  feedback: string;
};
