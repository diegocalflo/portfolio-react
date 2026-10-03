import {
  automated,
  aws,
  bitbucket,
  css,
  etl,
  git,
  graphql,
  html,
  java,
  javascript,
  jsf,
  kafka,
  kafkaproject,
  mongo,
  nodejs,
  oracle,
  postgresql,
  quasar,
  react,
  salescapture,
  springboot,
  vue,
} from '../assets';

export const navLinks = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export const metrics = [
  { value: '6+', labelKey: 'hero.metrics.experience' },
  { value: '1,000', labelKey: 'hero.metrics.throughput' },
  { value: '20M', labelKey: 'hero.metrics.volume' },
];

export const strengths = [
  { number: '01', titleKey: 'about.strengths.architecture.title', textKey: 'about.strengths.architecture.text' },
  { number: '02', titleKey: 'about.strengths.leadership.title', textKey: 'about.strengths.leadership.text' },
  { number: '03', titleKey: 'about.strengths.delivery.title', textKey: 'about.strengths.delivery.text' },
  { number: '04', titleKey: 'about.strengths.quality.title', textKey: 'about.strengths.quality.text' },
];

export const skillGroups = [
  {
    titleKey: 'skills.groups.languages',
    items: [
      { name: 'Java', icon: java },
      { name: 'JavaScript', icon: javascript },
      { name: 'Python', short: 'Py' },
      { name: 'Kotlin', short: 'Kt' },
    ],
  },
  {
    titleKey: 'skills.groups.backend',
    items: [
      { name: 'Spring Boot', icon: springboot },
      { name: 'Node.js', icon: nodejs },
      { name: 'GraphQL', icon: graphql },
      { name: 'jPOS', short: 'jP' },
      { name: 'JSF', icon: jsf },
    ],
  },
  {
    titleKey: 'skills.groups.data',
    items: [
      { name: 'Kafka', icon: kafka },
      { name: 'Flink', short: 'Fl' },
      { name: 'PostgreSQL', icon: postgresql },
      { name: 'Oracle', icon: oracle },
      { name: 'MongoDB', icon: mongo },
      { name: 'SQL', short: 'SQL' },
    ],
  },
  {
    titleKey: 'skills.groups.frontend',
    items: [
      { name: 'React', icon: react },
      { name: 'Vue', icon: vue },
      { name: 'Quasar', icon: quasar },
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
    ],
  },
  {
    titleKey: 'skills.groups.cloud',
    items: [
      { name: 'AWS', icon: aws },
      { name: 'GCP', short: 'G' },
      { name: 'Docker', short: 'Dk' },
      { name: 'Kubernetes', short: 'K8s' },
      { name: 'OpenShift', short: 'OS' },
    ],
  },
  {
    titleKey: 'skills.groups.quality',
    items: [
      { name: 'Datadog', short: 'DD' },
      { name: 'SmartBear', short: 'SB' },
      { name: 'Git', icon: git },
      { name: 'Bitbucket', icon: bitbucket },
      { name: 'Test automation', short: 'QA' },
    ],
  },
];

export const experiences = [
  {
    roleKey: 'experience.eglobal.role',
    company: 'Servicios Electrónicos Globales',
    dateKey: 'experience.eglobal.date',
    pointsKey: 'experience.eglobal.points',
    current: true,
  },
  {
    roleKey: 'experience.exosLead.role',
    company: 'EXOS Technology',
    dateKey: 'experience.exosLead.date',
    pointsKey: 'experience.exosLead.points',
  },
  {
    roleKey: 'experience.exosDev.role',
    company: 'EXOS Technology',
    dateKey: 'experience.exosDev.date',
    pointsKey: 'experience.exosDev.points',
  },
  {
    roleKey: 'experience.exosQa.role',
    company: 'EXOS Technology',
    dateKey: 'experience.exosQa.date',
    pointsKey: 'experience.exosQa.points',
  },
  {
    roleKey: 'experience.freelance.role',
    company: 'Freelance',
    dateKey: 'experience.freelance.date',
    pointsKey: 'experience.freelance.points',
  },
];

export const projects = [
  {
    id: 'sales-capture',
    titleKey: 'projects.sales.title',
    summaryKey: 'projects.sales.summary',
    detailKey: 'projects.sales.detail',
    impact: '16K / 3 min',
    image: salescapture,
    technologies: ['Spring Boot', 'GraphQL', 'Apollo Federation'],
    ready: true,
  },
  {
    id: 'kafka-platform',
    titleKey: 'projects.kafka.title',
    summaryKey: 'projects.kafka.summary',
    detailKey: 'projects.kafka.detail',
    impact: '1,000 tx/s',
    image: kafkaproject,
    technologies: ['Kafka', 'jPOS', 'Spring Boot', 'ISO 8583'],
    ready: true,
  },
  {
    id: 'etl-migration',
    titleKey: 'projects.etl.title',
    summaryKey: 'projects.etl.summary',
    detailKey: 'projects.etl.detail',
    impact: 'Informix → Spring Batch',
    image: etl,
    technologies: ['Informix', 'Spring Batch', 'ETL'],
    ready: true,
  },
  {
    id: 'qa-automation',
    titleKey: 'projects.qa.title',
    summaryKey: 'projects.qa.summary',
    detailKey: 'projects.qa.detail',
    impact: 'Frontend + Backend',
    image: automated,
    technologies: ['SmartBear', 'Selenium', 'JUnit'],
    ready: true,
  },
];

export const socialLinks = {
  github: 'https://github.com/diegocalflo',
  linkedin: 'https://www.linkedin.com/in/diego-calderon-9921a03ab',
  email: 'mailto:dcalflo8@gmail.com',
};
