import React from 'react'

const homeConfig = {

    greeting: (
        <div>
            <h1 className="heading">
                <strong className="main-name"> Conor Nield's Personal Website</strong>
            </h1>
            <p style={{fontSize: '1.0rem', color: 'black', marginTop: '-30px'}}>
                University of Illinois at Urbana-Champaign <br/>
                Bachelor in Statistics <br/>
                Minoring in Business & Political Science <br/>
                Expected Graduation: May 2025
            </p>
            <p className="email" style={{ fontSize: '1.0rem', color: 'mintcream', marginTop: '0px' }}>
                <a href="mailto:conornield@gmail.com" style={{ color: '#1e88e5', textDecoration: 'none' }}>
                    conornield@gmail.com
                </a>
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
      
        
    workTimeline: [
        {
            id: "work-5",
            title: "Data Analyst and Front End Developer Intern",
            company: "Forumm",
            description: [
                "Led data analysis efforts at a startup as the sole data analyst ",
                "Developed a metrics page, using typescript, that automated basic data analytics to visualize an online events performance",
                "Developed seamless data integration system that allowed raw data to transition directly to universities",
                "Worked directly with two universities to analyze respective events performance",
                "Implemented a variety of bug fixes to Forumms website",
            ],
            date: "June 2024-August 2024",
            location: "Lisbon, Portugal",
        },
        {
            id: "work-4",
            title: "Bartender, Barback, Doorman",
            company: "Kams",
            description: [
                "Worked my way up from a doorman to a bartender in less than a year",
                "Bartender: Succesfully handled the responsibility of bringing people to my shifts, sometimes facilitating more than 100 open tabs at once",
                "Barback: Maintained inventory of liquor, beer, and ice, catering to the needs of up to 8 bartenders simultaneously while upholding cleanliness standards in the workspace",
                "Doorman: Maintained a safe environment for customers and coworkers, and handled tough situations with calmness and clarity"
            ],
            date: "April 2022-Present",
            location: "Champaign, Illinois",
            tags: []
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
            tags: []
        },
        {
            id: "work-2",
            title: "Barista",
            company: "Starbucks",
            description: [
                "Memorized every drink recipe, and perfected customer service skills"
            ],
            date: "May 2022-August 2022",
            location: "Chicago, Illinois",
            tags: []
        },
        {
            id: "work-1",
            title: "Math Tutor",
            company: "Mathnasium",
            description: [
                "Tutored hundreds of children, ages 4-18 in a variety of math skills ranging from simple addition to SAT prep by creating personalized learning material and lesson plans"
            ],
            date: "March 2021-August 2021",
            location: "Oak Park, Illinois",
            tags: []
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
            date: "December 2019-March 2020",
            location: "River Forest, Illinois",
            tags: []
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
}


export default homeConfig