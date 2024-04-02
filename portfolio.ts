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
  // url: 'https://myportfolio-.netlify.app/',
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
        // {
        //   skillName: 'Python',
        //   fontAwesomeClassName: 'logos:python',
        // },
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
        // {
        //   skillName: 'tailwindcss',
        //   fontAwesomeClassName: 'devicon:tailwindcss',
        // },
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
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),

    //     emoji('⚡ Help to Building Staking Dapp in BSC chain '),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡Help to  Building Dapps with React.js & Solidity using Web3.js&  Moralis '
    //     ),
    //   ],
    //   // https://icon-sets.iconify.design/logos/netlify/    for logo
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       fontAwesomeClassName: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       fontAwesomeClassName: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       fontAwesomeClassName: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       fontAwesomeClassName: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'BSC',
    //       fontAwesomeClassName: 'mingcute:binance-coin-bnb-fill',
    //     },
    //   ],
    // },
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
    links: 'https://www.eloin.tech/?',
    companyLogo: '/img/icons/common/CS.png',
    date: 'January 2023 - February 2023',
    desc: ` "Gained hands-on experience in developing, implementing, and maintaining internal web applications." ,
    "Assisted the technical and business staff with the design, development, testing, implementation, and maintenance of new programs using-ReactJS on a weekly." ,
    "Basis Performed automated and manual tests to ensure the software created by developers is up to date and working seamlessly."`,
  },
  // {
  //   role: 'Graphic Designer & SmartContract Dev',
  //   company: 'Abura Farm',
  //   links: 'https://coinmarketcap.com/currencies/abura-farm/#About',
  //   companyLogo: '/img/icons/common/dusecaSoftware1.png',
  //   date: 'December 2021 - February 2022',
  //   desc: `"Serve as a logo and graphic designer.",
  //   "Helped in  creating, maintaining and integrating the SmartContract with BSC BlockChain."`,
  //   // descBullets: [
  //   // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
  //   // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   // ],
  // },
  // {
  //   role: 'Community Manager, Graphic Desiginer',
  //   company: 'Oxbul.tech',
  //   links: 'https://oxbull.tech/',
  //   companyLogo: '/img/icons/common/bleedAI.png',
  //   date: 'March 2022 - March 2022',
  //   desc: ` "Serve as a  graphic and Poster  designer.",
  //   "Managed Telegram community",`,
  // },
  // {
  //   role: 'Build full stack website with BlockChain Wallet Integration ',
  //   company: 'AptosLauncher',
  //   links: 'https://aptoslauncher.tech/',
  //   companyLogo: '/img/icons/common/wapidu.png',
  //   date: 'Jan 2023 - Apr 2023',
  //   desc: ` "Developed graphics, logo and website content, it uses binance API for live crypto price update.",
  //   "Developed features where users generate their image using prompt by AI technology."`,
  // },
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
  // {
  //   name: 'Dynamic Crypto Token Website',
  //   description:
  //     'A web-based platform that allows users to know about the work of the company and there products.',
  //   tags: [
  //     {
  //       name: 'Vite React',
  //       color: 'styleRed',
  //     },
  //     {
  //       name: 'firebass',
  //       color: 'styleGreen',
  //     },
  //     {
  //       name: 'Tailwind',
  //       color: 'styleBlue',
  //     },
  //     {
  //       name: 'Binance Api',
  //       color: 'stylePurpale',
  //     },
  //   ],

  //   source_code_link: 'https://github.com/SAMshashank/React-App-APTOSLAUNCHER',
  //   source_code_link1: 'https://aptoslauncher.tech/',
  // },
  
  // {
  //   name: 'My Crypto Token on BSC ',
  //   description:
  //     'A web-based platform that allows users to know about the work of the company and there products.  ',

  //   tags: [
  //     {
  //       name: 'Solidity',
  //       color: 'styleBlue',
  //     },
  //   ],

  //   source_code_link: 'https://github.com/SAMshashank/TOKEN',
  //   source_code_link1:
  //     'https://testnet.bscscan.com/tx/0xb66092b6f4a2f6969871bfa4939094d10b16213f8b49d6e5b066f132e08bea4b',
  // },
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

    source_code_link: 'https://github.com/SAMshashank/MyPortfolio',
    source_code_link1: 'https://github.com/SAMshashank/MyPortfolio',
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
    'https://myportfolio-shashankkushwaha.netlify.app/assets/logo-eb5774cf.svg',
  url: 'https://myportfolio-shashankkushwaha.netlify.app/',
  keywords: ['Yogendra Kumar Dubey'],
};
