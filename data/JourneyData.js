import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDocker,
  FaFigma,
  FaReact,
  FaJava,
  FaAws,
} from "react-icons/fa";
import { SiAdobe } from "react-icons/si";

export const journeyData = [
  //experience
  {
    type: "experience",
    company: "Capgemini",
    logoUrl: "assets/journey/experience/Capgemini.svg",
    position: "Web Developer",
    duration: "Oct. 2024 - Present",
    description:
      "Developed web-interfaces for managing warehouses personnel in a supply-chain context. Delivered pixel-perfect UIs with React and Zustand.",
  },
  {
    type: "experience",
    company: "French Minsitry of Interior",

    logoUrl: "assets/journey/experience/Minint_up.svg",
    position: "Java/SQL Developer",
    duration: "Oct. 2024 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "experience",
    company: "Système U",
    logoUrl: "assets/journey/experience/SystemeU.svg",
    position: "AEM Developer - FullStack",
    duration: "Oct. 2024 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "experience",
    company: "Biomérieux",
    logoUrl: "assets/journey/experience/bmx.svg",
    position: "AEM Developer - FullStack",
    duration: "Oct. 2024 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  //education
  {
    type: "education",
    institution: "OpenClassrooms - Capgemini",
    logoUrl: "assets/journey/education/openclassrooms.svg",
    qualification: "Software Engineering Apprenticeship - Expert JEE Developer Path",
    duration: "Nov. 2018 - April 2020",
    description:
      "Learned backend-development concepts. Developed a travel booking platform in a microservices architecture, using Spring Boot, Angular and designed the cloud deployment strategy on AWS.",
  },
  {
    type: "education",
    institution: "OpenClassrooms - Capgemini",
    logoUrl: "assets/journey/education/logo-1.svg",
    qualification: "Expert JEE Developer Path",
    duration: "Nov. 2018 - April 2020",
    description: "Software Engineering apprenticeship with Capgemini. ",
  },
  {
    type: "education",
    institution: "OpenClassrooms - Capgemini",
    logoUrl: "assets/journey/education/logo-1.svg",
    qualification: "Expert JEE Developer Path",
    duration: "Nov. 2018 - April 2020",
    description:
      "Software Engineering apprenticeship. Developed a travel booking platform in a microservices architecture, using Spring Boot, Angular and designed the cloud deployment strategy on AWS to enhance scalability and resilience, focusing on containerization and microservices best practices.",
  },
  {
    type: "education",
    institution: "OpenClassrooms - Capgemini",
    logoUrl: "assets/journey/education/logo-1.svg",
    qualification: "Expert JEE Developer Path",
    duration: "Nov. 2018 - April 2020",
    description:
      "Software Engineering apprenticeship with Capgemini. Developed a travel booking platform in a microservices architecture, using Spring Boot and Angular, Designed the cloud deployment strategy on AWS to enhance scalability and resilience, focusing on containerization and microservices best practices.",
  },

  //certifications

  //Skills
  {
    type: "skill",
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    type: "skill",
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    type: "skill",
    name: "Javascript",
    icon: <FaJs />,
  },
  {
    type: "skill",
    name: "React",
    icon: <FaReact />,
  },
  {
    type: "skill",
    name: "Java",
    icon: <FaJava />,
  },
  {
    type: "skill",
    name: "AEM",
    icon: <SiAdobe />,
  },
];
