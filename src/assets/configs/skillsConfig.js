import {
    SiPython,
    SiR,
    SiJavascript,
    SiReact,
    SiMicrosoftexcel,
} from "react-icons/si";
import {FaGitAlt} from "react-icons/fa";
import {GrMysql} from "react-icons/gr";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiR size={50}/>,
            text: "R"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiJavascript size={50}/>,
            text: "Java Script"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiMicrosoftexcel size={50}/>,
            text: "Excel"
        },
    ],
    
}

export default skillsConfig
