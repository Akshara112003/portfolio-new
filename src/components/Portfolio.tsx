
"use client";
import Image from "next/image";
import { motion } from 'framer-motion';
import project from "../assets/proj7.png";
import project1 from "../assets/proj6.jpg";
import project2 from "../assets/proj1.jpg";
import project3 from "../assets/proj3.jpg";
import project4 from "../assets/proj5.png";
import project5 from "../assets/proj2.jpg";
import project6 from "../assets/proj4.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";

const projects = [
    {
        title: "Netflix Clone (Landing)",
        desc: "The Netflix Clone, built with HTML, CSS, Bootstrap, and JavaScript, lets users explore movies and simulate signing up with an email",
        devStack: "Html | CSS & Bootstrap | Javascript",
        link: "#",
        git: "https://github.com/Akshara112003/Netflix-Clone-Landing-Page-",
        src: project,
    },
    {
        title: "LinkedIn Design Clone",
        desc: "The LinkedIn Clone, built with HTML, CSS, and JavaScript, replicates LinkedIn's core interface, allowing users to view a profile page and a home feed layout. The project includes interactive navigation and responsive design to simulate a professional networking platform.",
        devStack: "Html | CSS | Javascript",
        link: "https://akshara112003.github.io/LinkedIn-clone/",
        git: "https://github.com/Akshara112003/LinkedIn-clone",
        src: project1,
    },
    {
        title: "Admission Query Chatbot",
        desc: "The Admission Query Chatbot assists prospective students at SNS Arts College, offering a user-friendly interface built with HTML, CSS, Bootstrap, and JavaScript to address questions about applications and deadlines",
        devStack: "Html | CSS | Javascript",
        link: "https://akshara112003.github.io/chatbot/",
        git: "https://github.com/Akshara112003/chatbot",
        src: project2,
    },
    {
        title: "Disney+ Hotstar Clone",
        desc: "Designed a Disney+ Hotstar clone using Figma, creating wireframes and prototypes to simulate the platform's user interface and experience.",
        devStack: "Figma | Prototype | Wireframe",
        link: "https://www.figma.com/proto/wFPCpwz5xwIZEPVkaKpsVv/movie-disney?node-id=128-1038&t=UV6ZTMxEMJ6zuDfF-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
        src: project3,
    },
    {
        title: "Netflix Clone (Sign-in)",
        desc: "A cloned Netflix Sign-in page with a sleek, dark-themed design. It features input fields for email and password, along with links for help and signup. The responsive layout mirrors the authentic Netflix Sign-in page design.",
        devStack: "Html | CSS & Bootstrap | Javascript",
        link: "https://akshara112003.github.io/Netflix-clone-Signin-/",
        git: "https://github.com/Akshara112003/Netflix-clone-Signin-",
        src: project4,
    },
    {
        title: "Netflix Clone (Login)",
        desc: "A cloned Netflix login page with a sleek, dark-themed design. It features input fields for email and password, along with links for help and signup. The responsive layout mirrors the authentic Netflix login page design.",
        devStack: "Html | CSS & Bootstrap | Javascript",
        link: "#",
        git: "https://github.com/Akshara112003/Netflix-clone-login-",
        src: project5,
    },
    {
        title: "Apple Airpod Pro",
        desc: "Designed an Apple Airpod Pro site using Figma, creating wireframes and prototypes to simulate the platform's user interface and experience.",
        devStack: "Figma | Prototype | Wireframe",
        link: "https://www.figma.com/proto/boskjT7A7a32ZREMsE9ywk/iphone-airpod?node-id=63-1198&t=3hIW7Wg1dWIx064s-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=63%3A1198&show-proto-sidebar=1",
        git: "",
        src: project6,
    },
    {
        title: "LinkedIn poster making",
        desc: "Designed an LinkedIn poster for recruitment Crm using Figma, Photoshop, illustration creating wireframes and prototypes to simulate the platform's user interface and experience.",
        devStack: "Figma | Photoshop | Illsutration",
        link: "https://www.figma.com/proto/ILpvPpcnJVVbQga59FUS8U/Task-Graphic-designing?node-id=11-386&t=PfEEINAWG29PJuS5-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=12%3A944&show-proto-sidebar=1",
        git: "",
        src: project7,
    },
    {
        title: "Social media carousel - FRIENDS EDITION",
        desc: "Designed an Social media carausel for Recruitment team structure – FRIENDS edition! using Figma, Photoshop, illustration creating wireframes and prototypes to simulate the platform's user interface and experience.",
        devStack: "Figma | Photoshop | Illsutration",
        link: "https://www.figma.com/proto/ILpvPpcnJVVbQga59FUS8U/Task-Graphic-designing?node-id=12-944&t=PfEEINAWG29PJuS5-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=12%3A944&show-proto-sidebar=1",
        git: "",
        src: project8,
    },
];

const Portfolio = () => {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-18 mt-39 bg-black-to-purple min-h-screen" id="project">
            {/* Animated "Personal Projects" Text */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="font-roboto text-white text-6xl w-[320px] mx-auto font-semibold my-12 text-center" // Apply font class here
            >
                Personal <span className="text-orange-400">Projects</span>
            </motion.h1>

            <div className="px-6 md:px-0 max-w-[1200px] mx-auto mt-35 space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75, delay: 0.25 }}
                        className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row gap-12"}`}
                    >
                        <div className="space-y-4 max-w-[550px]">
                            <h2 className="font-roboto text-7xl my-4 text-white/70">{`0${index + 1}`}</h2> {/* Apply font class here */}
                            <h2 className="font-roboto text-4xl">{project.title}</h2> {/* Apply font class here */}
                            <p className="font-roboto text-lg text-white/80 p-4">{project.desc}</p> {/* Apply font class here */}
                            <p className="font-roboto text-xl text-orange-400 font-semibold">{project.devStack}</p> {/* Apply font class here */}
                            <div className="w-64 h-[1px] bg-gray-400 my-4" />
                            <div className="flex space-x-6">
                                {project.link !== "#" && project.link && (
                                    <a href={project.link} className="text-orange-400 hover:text-white transition duration-300">Live Link</a>
                                )}
                                {project.git && (
                                    <a href={project.git} className="text-orange-400 hover:text-white transition duration-300">GitHub</a>
                                )}
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex justify-center items-center shadow-xl rounded-lg overflow-hidden"
                        >
                            <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover" />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
