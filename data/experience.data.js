export const experience = [
    {
        id: 4,
        companyName: "Gojek(Goto Financial)",
        companyLink: "https://www.gojek.com/en-id/",
        role: "Associate Software Engineer(L1)",
        during: "May 2022 - present",
        techStack: ["Clojure", "Java", "Go", "React", "PostgreSQL", "Redis", "Kafka"],
        summary: [
            "Working in sanctions team, that's managing and taking actions against fraudulent transations",
            "Building internal dashboard for the analysts to be able to engage efficiently to analyse and prevent misbehaviours",
            [
                "Took initiatives to revamp the existing frontend codebase and follow good practices",
                "Built audit trail and version comparison features for rules, for analysts to be able to identify the cause for change"
            ],
            "Built integrations to route data to fraud system, so it can store detailed information and take actions more effectively",
            "Worked closely with risk analyst to identify the usage of legacy risk engine and deprecate unused data so as to deprecate the system as part of cost savings",
            [
                "Identified multiple services that are not being used or requires less resources"
            ],
            "Added chargeback fuctionality for dispute team to be able to efficiently create disputes over transactions",
            [
                "Helped in building the end to end flow for the same",
                "Built a generic distributed job processing system using Kafka, with logic to retry on specific error codes",
                "Collaborated with stakeholders to complete the integration with various systems",
                "Created new service and conducted discussion to propose the approach",
                "Planned and completed the migration of chargeback data from legacy system to the newly built",
                "Took ownership and helped the dispute and analyst team to completely onboard to new system and build missing functionalities"
            ],
            "Contributed to production support and identified possible action items to help reduce the recurring incidents",
            [
                "Provided support to external teams who are integrated with the fraud system",
                "Coordinated with risk analyst to identify cause for abnormalities in the engine and provided solutions",
                "Conducted root cause analysis to diagnose system issues and incidents."
            ]
        ]
    },
    {
        id: 3,
        companyName: "StoryXpress",
        companyLink: "https://storyxpress.co",
        role: "Software Development Engineer I",
        during: "July 2021 - April 2022",
        techStack: ["Nodejs", "Express", "React", "Redis", "RabbitMQ", "MySQL"],
        summary: [
        "Built REST APIs for the client and the ecosystem",
        "Added unit tests to ensure resilience and backward compatibility of APIs and modules.",
        "Made Reactjs based web pages and integrated it with the backend",
        "Worked on analysing and mitigating critical security violations from backend servers to improve user security and prevent breaches",
        "Worked on 5+ backend projects with various technologies",
        [
            "Created Webhook system with RabbitMQ and Nodejs consumers",
            "Implemented rate limiter and session manager with redis",
            "Participated in peer reviews for secure implementation of the product on the backend",
            "Made generic node template for any future backend projects and had discussions on choosing the right technology for the same",
        ],
        "Cleaned existing code for more reusability in the frontend world",
        "Built an internal dashboard to consume data from multiple services and manage",
        [
            "Setting up the dashboard with Vite, Redux(toolkit), and React",
            "Wrote wrapper that would be useful to consume data from various services",
        ]
        ]
    },
    {
        id: 2,
        companyName: "Sawo Labs",
        companyLink: "https://sawolabs.com",
        role: "Full Stack Web Developer(Intern)",
        during: "June 2021",
        techStack: ["React", "Django", "Redux"],
        summary: [
            "Made several parts of the application to consume global state for better page navigation experience",
            "Optimised and removed redundant code in React pages",
            "Made the UI more easier to navigate",
            "Made had coupled React components into more generic and reusable across the system"
        ]
    },
    {
        id: 1,
        companyName: "Mapsense",
        companyLink: "https://mapsense.in",
        role: "Full Stack Web Developer(Intern)",
        during: "March 2021 - June 2021",
        techStack: ["Nodejs", "Express", "React", "Javascript", "PostgreSQL"],
        summary: [
            "Started repo from scratch and researched on code design",
            "Used PostgreSQL to store and retrieve data"
        ]
    }
];
