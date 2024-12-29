
import React from 'react';
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaJsSquare,
} from "react-icons/fa";
import {
    SiPython,
    SiAdobephotoshop,
    SiFigma,
    SiAdobeillustrator,
} from "react-icons/si";

const skillIcons = [
    { icon: <FaHtml5 size={140} className="text-orange-500" />, label: "HTML" },
    { icon: <FaCss3Alt size={140} className="text-blue-500" />, label: "CSS" },
    { icon: <FaReact size={140} className="text-cyan-400" />, label: "React" },
    { icon: <FaJsSquare size={140} className="text-yellow-300" />, label: "JavaScript" },
    { icon: <SiPython size={140} className="text-yellow-400" />, label: "Python" },
    { icon: <SiAdobephotoshop size={140} className="text-blue-600" />, label: "Photoshop" },
    { icon: <SiFigma size={140} className="text-pink-500" />, label: "Figma" },
    { icon: <SiAdobeillustrator size={140} className="text-orange-600" />, label: "Illustrator" },
];

const Skills = () => {
    return (
        <div className="bg-gradient-to-t from-black to-[#271045] py-32" id='skills'>
            <div className="text-white max-w-[950px] mx-auto p-8 text-center">
                <h2 className="text-6xl font-bold mb-8">What I Do</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {skillIcons.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-center 
                                       bg-white/10 p-6 rounded-xl border border-white/20"
                        >
                            <div className="text-6xl">{skill.icon}</div>
                            <p className="mt-4 text-lg font-semibold text-white">{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;