import {
    SiPython,
    SiR,
    SiJavascript,
    SiReact,
    SiMicrosoftexcel,
    SiTableau
} from "react-icons/si";
import {FaGitAlt,
    FaComments,
    FaClock,
    FaMoneyBillWave,
    FaChalkboardTeacher,
    FaUsers,
    FaFileInvoiceDollar,
    FaCalculator
} from "react-icons/fa";
import { TbSql } from "react-icons/tb";

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
            icon: <TbSql size={50}/>,
            text: "SQL"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiMicrosoftexcel size={50}/>,
            text: "Excel"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiTableau size={50}/>,
            text: "Tableau"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <FaMoneyBillWave size={50}/>,
            text: "Budgeting"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <FaFileInvoiceDollar size={50}/>,
            text: "Financial Reporting"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <FaCalculator size={50}/>,
            text: "Accounting"
        },
    ],
    softSkills: [
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <FaComments size={50}/>,
            text: "Communication"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <FaClock size={50}/>,
            text: "Time Management"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <FaChalkboardTeacher size={50}/>,
            text: "Leadership"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <FaUsers size={50}/>,
            text: "Teamwork"
        },
        
    ]
    
}

export default skillsConfig
