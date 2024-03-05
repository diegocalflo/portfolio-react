import {
  frontend,
  backend,
  ux,
  assurance,
  javascript,
  java,
  html,
  kafka,
  springboot,
  springbatch,
  quasar,
  vue,
  jsf,
  bitbucket,
  aws,
  apollo,
  mysql,
  sqlserver,
  informix,
  oracle,
  css,
  reactjs,
  nodejs,
  git,
  postgresql,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  leader,
  developer,
  qa
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Acerca de',
  },
  {
    id: 'skills',
    title: 'Expertise',
  },
  {
    id: 'experience',
    title: 'Experiencia laboral',
  },
  {
    id: 'contact',
    title: 'Contacto',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
    field:'frontend'
  },
  {
    title: 'Backend Developer',
    icon: backend,
    field:'backend'
  },
  {
    title: 'UI/UX Design',
    icon: ux,
    field:'ux'
  },
  {
    title: 'QA',
    icon: assurance,
    field:'qa'
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'GraphQL',
    icon: graphql,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Spring Boot',
    icon: springboot,
  },
  {
    name: 'Spring Batch',
    icon: springbatch,
  },
  {
    name: 'Quasar',
    icon: quasar,
  },
  {
    name: 'Vue',
    icon: vue,
  },
  {
    name: 'Kafka',
    icon: kafka,
  },
  {
    name: 'JSF (JavaServer Faces)',
    icon: jsf,
  },
  {
    name: 'Bitbucket',
    icon: bitbucket,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'Apollo Federation',
    icon: apollo,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'SQL Server',
    icon: sqlserver,
  },
  {
    name: 'Informix',
    icon: informix,
  },
  {
    name: 'Oracle',
    icon: oracle,
  },
];


const experiences = [
  {
    title: 'QA Tester',
    company_name: 'Exos TECHNOLOGY',
    icon: qa,
    iconBg: '#333333',
    date: 'May 2020 - Oct 2021',
  },
  {
    title: 'Junior Developer',
    company_name: 'Exos TECHNOLOGY',
    icon: developer,
    iconBg: '#333333',
    date: 'Oct 2021 - Jan 2024',
  },
  {
    title: 'Tech Leader',
    company_name: 'Exos TECHNOLOGY',
    icon: leader,
    iconBg: '#333333',
    date: 'Jan 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
