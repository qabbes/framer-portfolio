import { FaAws } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";

export const journeyData = [
  //experience

  {
    type: "experience",
    company: "French Departement of Social Services - Capgemini",
    logoUrl: "assets/journey/experience/Minint_soc_2.svg",
    position: "Full-Stack Developer",
    duration: "Nov. 2024 - Present",
    description:
      "Developped features on a SpringBoot/React app linking social & judicial services, aiding adults in need of judicial assistance. Integrated a custom Keycloak based IAM solution to ensure secure data management for social & judicial workers.",
  },
  {
    type: "experience",
    company: "Capgemini",
    logoUrl: "assets/journey/experience/Capgemini.svg",
    position: "Web Developer",
    duration: "Sept. 2024 - Nov. 2024",
    description:
      "Developed web-interfaces for managing warehouses personnel in a supply-chain context. Delivered pixel-perfect UIs using React and Zustand.",
  },
  {
    type: "experience",
    company: "French Minsitry of Interior - Capgemini",
    logoUrl: "assets/journey/experience/Minint_sm.svg",
    position: "Java/SQL Developer",
    duration: "Dec. 2023 - May 2024",
    description:
      "Adaptation and updating of a calculation engine based on finance laws to define the budget of administrations. Translated legal texts into algorithms and SQL queries.",
  },
  {
    type: "experience",
    company: "Système U - Capgemini",
    logoUrl: "assets/journey/experience/SystemeU.svg",
    position: "AEM Developer - FullStack",
    duration: "Jan. 2023 - June 2023",
    description:
      "AEM Developer focused on maintaining and enhancing the client web application, Debugged and resolved complex issues to ensure the web app stability and performance.",
  },
  {
    type: "experience",
    company: "Biomérieux - Capgemini",
    logoUrl: "assets/journey/experience/bmx.svg",
    position: "AEM Developer - FullStack",
    duration: "Dec. 2021 - Jan. 2023",
    description:
      "Merge/redesign of Biomérieux customer sites into AEM ecosytem. Developed custom OSGI bundles. Designed, developed and implemented AEM components and document them.",
  },
  {
    type: "experience",
    company: "Bouygues Telecom - Capgemini",
    logoUrl: "assets/journey/experience/bytel.svg",
    position: "FullStack Developer",
    duration: "Jan. 2021 - Nov. 2021",
    description:
      "Redesigned Bouygues customer directory system: Loading and processing phone operator's directory files in big data dynamics using Apache Spark. Maintenance of applications under SpringBoot/Angular7",
  },
  //education
  {
    type: "education",
    institution: "OpenClassrooms - Capgemini",
    logoUrl: "assets/journey/education/openclassrooms.svg",
    qualification: "Software Engineering Apprenticeship - JEE Developer",
    duration: "Nov. 2018 - April 2020",
    description:
      "Learned backend-development concepts. As final project, developed a travel booking platform in a microservices architecture, using Spring Boot, Angular and designed the cloud deployment strategy on AWS.",
  },
  {
    type: "education",
    institution: "UGA-Grenoble",
    logoUrl: "assets/journey/education/institution.svg",
    qualification: "Bachelor Degree - Embedded System Design ",
    duration: "Sept. 2017 - July 2018",
    description:
      "Developed foundational skills in hardware-software integration, system optimization, and real-time processing. My final project involved implementing a solution using a Raspberry Pi 3 to deliver a full HD 360° video stream in real-time using the Gstreamer framework.",
  },
  {
    type: "education",
    institution: "Wroclaw University of Science and Technology - Wroclaw - Poland",
    logoUrl: "assets/journey/education/institution.svg",
    qualification: "Bachelor Erasmus in Computer Science and Management",
    duration: "Oct. 2016 - June 2017",
    description:
      "Built foundational skills in computer science, expanding my technical perspective and understanding of key concepts in software and management. This experience played a pivotal role in shaping my career direction in technology.",
  },
  {
    type: "education",
    institution: "USMB - Annecy",
    logoUrl: "assets/journey/education/institution.svg",
    qualification: "Electrical Engineering and Computer Science Bachelor",
    duration: "Sept. 2014 - June 2016",
    description:
      "Completed through apprenticeship,  I built expertise in embedded systems, hardware-software integration, and real-time processing. Gained hands-on experience programming automats in Ladder, enhancing my skills in industrial automation and control systems.",
  },

  //certifications

  //Skills
  {
    type: "skill",
    name: "AWS Certified Cloud Practitioner",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/0ba5f6bea23343f49742e53b483c5dab",
    duration: "Obtained Nov. 2024",
    icon: <FaAws />,
  },
  {
    type: "skill",
    name: "Adobe Certified Expert - AEM Sites Developer",
    duration: "Obtained Nov. 2020",
    icon: <SiAdobe />,
  },
];
