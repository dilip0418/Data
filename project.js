const projects = [
    {
        title: "Credit Card Management System - (Using .NET Core Web API)",
        description: `A credit card management system that allows users to apply for a credit card, view their credit card details, and make transactions. Also view the frontend part repo Credit-Card-Mangement-System-frontend <a href="https://github.com/dilip0418/Credit-Card-Management-System-frontend" target="_blank" rel="noopener noreferrer">🔗</a>`,
        type: "Web App",
        technologies: [".NET Core", "Entity Framework", "SQL Server", "Swagger", "JWT", "ReactJS", "Bootstrap", "Docker"],
        githubUrl: "https://github.com/dilip0418/Credit-Card-Management-System",
        // stats: { stars: 245, forks: 56 },
        contributors: [
            { name: "Dilip", role: "Software Engineer", image: MyPic }
        ],
    },
    {
        title: "Credit Card Management System - EasyCreds (Using Spring Boot REST API)",
        description: "A credit card management system that allows users to apply for a credit card, view their credit card details, and make transactions. I would be happy if someone want to work on the frontend part for this project.",
        type: "Web App",
        technologies: ["SpringBoot", "MySQL", "Spring Security", "JWT", "Spring Data JPA"],
        githubUrl: "https://github.com/dilip0418/EasyCredsSpringBoot",
        contributors: [
            { name: "Dilip", role: "Software Engineer", image: MyPic }
        ],
    },
    {
        title: "Placement Management System",
        description: `A full-stack web application to manage campus placements. Features include student registration, company registration, and placement statistics. Also view the frontend part repo name placement-frontend <a href="https://github.com/dilip0418/placement-frontend" target="_blank" rel="noopener noreferrer">🔗</a>.`,
        type: "Full Stack",
        githubUrl: "https://github.com/dilip0418/placement",
        technologies: ["SpringBoot", "Angular", "MySQL", "Spring Security", "Spring Data JPA", "JWT"],
        // stats: { stars: 128, forks: 34 },
        contributors: [
            { name: "Dilip", role: "Software Engineer", image: MyPic },
            { name: "Ganesh", role: "Software Engineer", image: ganesh },
            { name: "Aravindha Samy", role: "Software Engineer", image: aravind },
        ],
    },
    {
        title: "Portfolio Website - Dilip V.1",
        description: "A personal portfolio website to showcase my work, skills, and projects.  This website is built using Vanila Js, HTML/CSS.",
        type: "Web App",
        githubUrl: "https://github.com/dilip0418/portfolio-v2",
        liveUrl: "https://dilip0418.github.io/portfolio-v2/",
        technologies: ["HTML/CSS", "Vanila Js", "Bootstrap", "Github Pages"],
        contributors: [
            { name: "Dilip", role: "Software Engineer", image: MyPic }
        ],
    },
    {
        title: "Plagiarism Detector - PlagCheck",
        description: "A plagiarism detection tool that compares text documents to identifies and reports similarities and potential copyright violations.",
        type: "Web App/NLP",
        githubUrl: "https://github.com/dilip0418/Plagiarism-Detector",
        technologies: ["Python", "FastAPI", "HTML/CSS", "Tessarct-OCR", "Google Search API", "Web Scraping"],
        contributors: [
            { name: "Dilip", role: "Software Engineer", image: MyPic },
            { name: "Ganesh", role: "Software Engineer", image: ganesh },
            { name: "Prathap Reddy", role: "Frontend Dev", image: prathap },
            { name: "Harshitha", role: "Software Engineer" },
        ],
    },
    {
        title: "Simple Weather App",
        description: "A simple weather app that displays the current weather and forecast for a given location.",
        type: "Web App",
        githubUrl: "https://github.com/dilip0418/weather-app",
        technologies: ["Vanila JS", "WeatherStack API", "HTML/CSS", "Bootstrap"],
        liveUrl: "https://dilip-weather-app.netlify.app/",
        contributors: [
            { name: "Dilip", role: "Software Engineer", image: MyPic }
        ],
    }
];

export default projects;