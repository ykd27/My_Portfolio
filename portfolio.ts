import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Yogendra Kumar Dubey',
  title: "Hi all, I'm Yogendra",
  description:
    'I am a Software Engineering Undergradute at Lovely Professional Univesity. I m an enthusiastic and driven Software Engineering student seeking a challenging internship opportunity to apply and expand my technical skills. With a strong academic foundation in software engineering and hands-on experience in various programming languages,I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.',
  resumeLink:
    'https://drive.google.com/file/d/14pBRHGIcm1C-fR-FpuxrElWXpqYshTWb/view?usp=drive_link',
};

export const openSource = {
  githubUserName: 'ykd27',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://my-portfolio-eight-iota-59.vercel.app/',
  linkedin: 'https://www.linkedin.com/in/yogendrakdubey',
  github: 'https://github.com/ykd27',
  instagram: 'https://www.instagram.com/yogendrakdubey_/',
  twitter: 'https://twitter.com/yogendradubey_',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building MERN stack application'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
      
        {
          skillName: 'Mongodb',
          fontAwesomeClassName: 'vscode-icons:file-type-mongo',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'Nodejs',
          fontAwesomeClassName: 'devicon:nodejs',
        },
        {
          skillName: 'Cpp',
          fontAwesomeClassName: 'vscode-icons:file-type-cpp3',
        },
        
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on no-sql'),
        emoji('⚡ Hosting and maintaining websites '),
        emoji('⚡ Building an dynamic integration with netlify and github'),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'render',
          fontAwesomeClassName: 'simple-icons:octanerender',
        },
        {
          skillName: 'MongoDb',
          fontAwesomeClassName: 'vscode-icons:file-type-mongo',
        },
        {
          skillName: 'Hostinger',
          fontAwesomeClassName: 'healthicons:h-negative',
        },
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'netlify',
          fontAwesomeClassName: 'logos:netlify',
        },
      ],
    },   
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Programming',
    progressPercentage: '70',
  },
  {
    Stack: 'Backend',
    progressPercentage: '50',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Lovely Professional University',
    subHeader: 'B.Tech. in Computer Science and Engineering',
    duration: "July'2020 - pursuing",
    desc: 'Specialization ',
    grade: '8 cgpa',
    descBullets: ['Web Development '],
  },

  {
    schoolName: 'Navodaya Vidya Mandir Ramipur',
    subHeader: 'Higher Secondary',
    duration: "April'2019 - July'2020",
    desc: 'Specialization ',
    //grade: '8 cgpa',
    descBullets: ['PCM '],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'React Development',
    company: 'Coding Spoon',
    links: 'https://www.codingspoon.com/',
    companyLogo: '/img/icons/common/CS.png',
    date: 'January 2023 - February 2023',
    desc: ` "Gained hands-on experience in developing, implementing, and maintaining internal web applications." ,
    "Assisted the technical and business staff with the design, development, testing, implementation, and maintenance of new programs using-ReactJS on a weekly." ,
    "Basis Performed automated and manual tests to ensure the software created by developers is up to date and working seamlessly."`,
  },

];

export const projects: ProjectType[] = [
  {
    name: 'Weather Application App',
    description:
      'Developed a weather application website using React.js and JavaScript to provide real-time weather information for multiple locations.',
    tags: [
      {
        name: 'HTML',
        color: 'styleRed',
      },
      {
        name: 'css',
        color: 'styleGreen',
      },
      {
        name: 'javascript',
        color: 'styleBlue',
      },
      {
        name: 'React',
        color: 'stylePurpale',
      },
    ],

    source_code_link: 'https://github.com/ykd27/Weather-App',
    source_code_link1: 'https://ykd27.github.io/Weather-App/',
  },
  {
    name: 'Disney Plus Clone',
    description:
      'Designed and developed a Disney Plus Clone website using React and JavaScript, providing a similar user experience to the original Disney Plus website',
    tags: [
      {
        name: 'HTML',
        color: 'styleRed',
      },
      {
        name: 'Bootstrap',
        color: 'styleGreen',
      },
      {
        name: 'JavaScript',
        color: 'styleBlue',
      },
      {
        name: 'React',
        color: 'stylePurpale',
      },
    ],

    source_code_link: 'https://github.com/ykd27/Disney-Plus-Hotstar',
    source_code_link1: 'https://disney-plus-hotstar-seven.vercel.app/',
  },
  
  {
    name: 'My Protfolio website ',
    description:
      'Immerse myself in a captivating digital journey with Immersive Showcase, a cutting-edge portfolio website that seamlessly combines the power of Three.js and React to present an extraordinary visual experience.',

    tags: [
      {
        name: 'Vite React',
        color: 'styleRed',
      },
      {
        name: 'Three js',
        color: 'styleGreen',
      },
      {
        name: 'Tailwind',
        color: 'styleBlue',
      },
      {
        name: 'Emailjs API',
        color: 'stylePurpale',
      },
    ],

    source_code_link: 'https://github.com/ykd27/My_Portfolio',
    source_code_link1: 'https://my-portfolio-eight-iota-59.vercel.app/',
  },
  {
    name: 'AI Image Generator(Working) ',
    description:
      'Developed features where users generate their image using prompt by AI technology.',
    tags: [
      {
        name: 'MERN stack',
        color: 'styleRed',
      },
      {
        name: 'Dalle-Api',
        color: 'styleGreen',
      },
    ],

    source_code_link: '.',
    source_code_link1: '.',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'ACHIEVEMENTS',
    link: 'https://drive.google.com/drive/folders/17VkJC6jhyCovVejnlYqavG6YOJDQEWxV?usp=sharing',
    feedback:
      'Solved 100+ DSA question on various platform and five Star Rating in C/C++ on Hacker Rank',
  },
  {
    name: 'CERTIFICATIONS',
    link: 'https://drive.google.com/drive/folders/1SXk292xHrNA6qr75ujCPc3vN8ZwEKGQb?usp=sharing',
    feedback:
      'Data structures and algorithms | Geeks for Geeks || JavaScript Course | Udemy  || C++ Programming | Udemy.',
  },

  {
    name: 'EXTRA CURRICULAR ACTIVITIES',
    link: 'https://drive.google.com/drive/folders/1Ein7l_QXqYy5yeWQeNR_NnqmNYBNPOtn?usp=sharing',
    feedback:
      'Participated in Aug 22 Tech-a-thon organized by iNeuron.ai. || Participated in Flipkart Apr 22 Grid 4.0 – Software Development challenge Organized by Unstop.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Yogendra Kumar Dubey | Portfolio',
  description:
    'A passionate Full Stack Web Developer.',
  author: 'Yogendra Kumar Dubey',
  image:
    '.',
  url: 'https://my-portfolio-eight-iota-59.vercel.app/',
  keywords: ['Yogendra Kumar Dubey'],
};
