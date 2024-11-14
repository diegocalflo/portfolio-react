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
  salescapture,
  leader,
  developer,
  kafkaproject,
  qa,
  mongo,
  batch,
  etl,
  automated
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Acerca de',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Proyectos',
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
  {
    name: 'Mongo DB',
    icon: mongo,
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
    date: 'Jan 2024 - Jun 2024',
  },
  {
    title: 'Tech Leader',
    company_name: 'EGLOBAL',
    icon: leader,
    iconBg: '#333333',
    date: 'Jun 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Captura de ventas',
    description: 'A comic characters list app that displays Marvel characters.',
    image: salescapture,
    component: 'SalesCapture'
  },
  {
    id: 'project-2',
    name: 'Kafka',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    image: kafkaproject,
    component: 'KafkaProcess'
  
  },
  {
    id: 'project-3',
    name: 'Migración ETLs',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    image: etl,
    component: 'EtlMigration'
  },
  {
    id: 'project-4',
    name: 'QA Test Automation',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    image: automated,
    component: 'Automation'
  },
];

export { services, technologies, experiences, projects };
