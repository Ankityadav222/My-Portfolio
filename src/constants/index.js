import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    fresher
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
  ];
  
  const experiences = [
    {
      title: "Aspiring Web Developer",
      company_name: "Self-Learning & Projects",
      icon: fresher,
      iconBg: "#383E56",
      date: "Currently Seeking Opportunities",
      points: [
        "Building personal projects and open-source contributions to gain hands-on experience in web development.",
        "Developing responsive web applications using React.js, JavaScript, and modern frontend technologies.",
        "Exploring backend technologies like Node.js, Express.js, and MongoDB to build full-stack applications.",
        "Participating in coding challenges and hackathons to improve problem-solving skills.",
      ],
    },
    {
      title: "Internship/Training Experience",
      company_name: "Online Courses & Certifications",
      icon: fresher,
      iconBg: "#E6DEDD",
      date: "Ongoing",
      points: [
        "Completed online courses and certifications in web development, React.js, and JavaScript.",
        "Created multiple projects such as portfolio websites, e-commerce websites, and to-do applications.",
        "Learning about software development best practices, including Git, version control, and agile methodologies.",
        "Engaging in community discussions and open-source contributions to enhance industry knowledge.",
      ],
    },
  ];
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Animal-AURAS",
      description:
     " Animal Auras is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack, designed to streamline the process of pet adoption and veterinary appointments. This platform allows users to adopt pets, book veterinary consultations, and manage appointments efficiently.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Ankityadav222/Animal-Auras",
    },
    {
      name: "Hotel Mangaement ",
      description:
        "Web siites that help the Diffrent hotels all around the world to ease the process and, also it also help the user to book different hotels on the same place on the same time with ease",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };