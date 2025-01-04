import { SquareCode, Brain, Database, Code } from 'lucide-react';

const skills = [
    {
        icon: <SquareCode className="w-6 h-6" />,
        title: "Programming Languages",
        description: "Same Concept Different Languages",
        technologies: ["Java", "C#", "C++", "Python"]
    },
    {
        icon: <Brain className="w-6 h-6" />,
        title: "Backend Development",
        description: "Building robust and scalable server-side applications.",
        technologies: ["SpringBoot", ".Net Core Web API"]
    },
    {
        icon: <Database className="w-6 h-6" />,
        title: "Databases",
        description: "Designing and managing relational databases.",
        technologies: ["MySql", "MSSQL", "Postgre"]
    },
    {
        icon: <Code className="w-6 h-6" />,
        title: "Frontend Development",
        description: "Crafting responsive and intuitive user interfaces with modern frameworks.",
        technologies: ["HTML5", "CSS3", "BootStrap", "React", "JavaScript", "Tailwind CSS"]
    }
];

export default skills;