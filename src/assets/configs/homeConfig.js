
import React from 'react';
import { FaChartLine } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';
import { BiMath } from 'react-icons/bi';
import { MdOutlineSportsFootball } from 'react-icons/md';

const homeConfig = {
    greeting: (
        <div>
            <h1 className="heading">
                <strong className="main-name"> Hi! I'm Conor Nield</strong>
            </h1>
            <p style={{fontSize: '1.0rem', color: 'black', marginTop: '-30px'}}>
                University of Illinois at Urbana-Champaign <br/>
                Majoring in Statistics <br/>
                Minoring in Business & Political Science <br/>
                Expected Graduation: May 2025
            </p>
        </div>
    ),

    titles: [
        "A University of Illinois Statistics Student",
        "A Data Analyst",
        "A Front End Developer",
        "A Huge Data Nerd",
    ],

    about: {
        start: `Hi, I'm Conor, and I am currently a Senior at the University of Illinois majoring in Statistics and minoring in Business and Political Science. 
                I am currently looking for an entry-level job in the field of data analytics following my graduation in spring 2025.`
    },

    // Add the email and resume link here
    contact: (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ fontSize: '1.0rem', color: '#333' }}>
                Email: 
                <a href="mailto:conornield@gmail.com" style={{ color: '#1e88e5', textDecoration: 'none', marginLeft: '5px' }}>
                    conornield@gmail.com
                </a>
            </p>
            <p style={{ fontSize: '1.0rem', color: '#333' }}>
                Source code: 
                <a href="https://rodrigo-arenas.github.io/portfolio" style={{ color: '#1e88e5', textDecoration: 'none', marginLeft: '5px' }}>
                    https://rodrigo-arenas.github.io/portfolio
                </a>
            </p>
            
        </div>
    ),

    workTimeline: [
        {
            id: "work-5",
            title: "Data Analyst and Front End Developer Intern",
            company: "Forumm",
            description: [
                "Led data analysis efforts at a startup as the sole data analyst ",
                "Developed a metrics page, using typescript, that automated basic data analytics to visualize an online events performance",
                "Developed seamless data integration system that allowed raw data to transition directly to universities",
                "Worked directly with two universities to analyze respective events performance"
            ],
            date: "June 2024-August 2024",
            location: "Lisbon, Portugal",
            icon: <FaChartLine/>,
            tags: ["Typescript", "React", "Tableu", "Data Visualization", "Buisness Inteligence", "Data Communication"]
        },
        {
            id: "work-4",
            title: "Bartender, Barback, Doorman",
            company: "Kams",
            description: [
                "Worked my way up from a doorman to a bartender in less than a year",
                "Bartender: Succesfully handled the responsibility of bringing customers to my shifts, sometimes facilitating more than 100 open tabs at once",
                "Barback: Maintained inventory of liquor, beer, and ice, catering to the needs of up to 8 bartenders simultaneously while upholding cleanliness standards in the workspace",
                "Doorman: Maintained a safe environment for customers and coworkers, and handled tough situations with calmness and clarity"
            ],
            date: "April 2022-Present",
            location: "Champaign, Illinois",
            icon: <FaBeer/>,
            tags: ["Customer Service", "Time Management", "Security"]
        },
        {
            id: "work-3",
            title: "Fraternity Treasurer",
            company: "Delta Chi",
            description: [
                "Oversaw a $23,000 social budget, generating monthly financial reports for the fraternity's executive board to offer lucid insights into expenditure trends and financial standing",
                "Negotiated with vendors for events and services, achieving cost reductions while maintaining quality",
                "Guided new members in understanding financial processes and responsibilities within the fraternity",
                "Utilized Microsoft Excel to track budgets and forecast financials "
            ],
            date: "November 2022-November 2023",
            location: "Champaign, Illinois",
            icon: <FaMoneyBillWave/>,
            tags: ["Excel", "Budgeting", "Accounting", "Financial Reporting", "Leadership"]
        },
        {
            id: "work-2",
            title: "Barista",
            company: "Starbucks",
            description: [
                "Memorized and prepared a wide variety of Starbucks drink recipes, ensuring high-quality and consistent customer service in a fast-paced environment.",
                "Perfected customer service skills, addressing customer needs promptly, maintaining a friendly attitude, and handling high-volume orders during peak hours."
            ],
            date: "May 2022-August 2022",
            location: "Chicago, Illinois",
            icon: <FaCoffee/>,
            tags: ["Customer Service", "Teamwork", "Multitasking"]
        },
        {
            id: "work-1",
            title: "Math Tutor",
            company: "Mathnasium",
            description: [
                "Tutored hundreds of students ages 4 to 18 ranging from basic arithmetic to SAT preparation.",
                "Created custom learning materials tailored to each student’s needs, resulting in significant academic improvement and increased confidence in math.",
                "Adapted teaching strategies for diverse learning styles, ensuring each student could grasp challenging mathematical concepts."
            ],
            date: "March 2021-August 2021",
            location: "Oak Park, Illinois",
            icon: <BiMath/>,
            tags: ["Math", "Communication", "Teaching"]
        },
        {
            id: "work-0",
            title: "Camp Counselor, Site Supervisor",
            company: "River Forest Park District",
            description: [
                "Cared for a dozen children aged 6-10 by creating activities activities and games while enforcing Covid 19 restrictions",
                "Took special steps to include several children with special needs",
                "Managed the training and supervision of other camp counselors and presided over park district facilities and youth sports"
            ],
            date: "December 2019-May 2021",
            location: "River Forest, Illinois",
            icon: <MdOutlineSportsFootball/>,
            tags: ["Leadership", "Inclusion", "Teamwork"]
        }
    ],

    source: (
        <div>
            <p className="source" style={{ fontSize: '1.3rem', color: 'mintcream', marginTop: '0px' }}>
                <p>Source code:</p>
                <a href="https://rodrigo-arenas.github.io/portfolio" style={{ color: '#1e88e5', textDecoration: 'none' }}>
                    https://rodrigo-arenas.github.io/portfolio
                </a>
            </p>
        </div>
    )
};

export default homeConfig;
