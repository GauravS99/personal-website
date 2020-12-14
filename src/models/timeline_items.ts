export interface TimelineItemI {
    date: string,
    classification ?: string
    heading: string,
    description ?: string,
    img_src ?: string,
    technologies ?: string,
    link ?: string
}

enum Classifications {
    project= "Project",
    career="Career",
    hackathon="Hackathon",
    education="Education",
}

const TimelineItems : TimelineItemI[] = [
    {
        date: "Nov 13, 2020",
        classification: Classifications.project,
        heading: "Personal Website",
        description: "Self explanatory.",
        technologies: "React, TypeScript",
        img_src: "https://www.dropbox.com/s/f22r455bn8gzezd/personal-site.PNG?raw=1",
        link: "https://gauravs99.github.io/personal-website/"
    },
    {
        date: "May 12, 2020",
        classification: Classifications.project,
        heading: "Grocer",
        description: "My friend came to me explaining a very real problem: the Filipino government was taking aggressive" +
            " COVID-19 quarantine measures, preventing people from leaving their area even to get groceries. Her friends and family" +
            " were relying on communicating with local farmers with WhatsApp to get supplies. This e-commerce website aims to help community leaders" +
            " process grocery orders from the community.",
        technologies: "TypeScript, Express.js, React, Redux, MongoDB",
        link: "https://the-grocer.herokuapp.com"
    },
    {
        date: "May 4, 2020",
        classification: Classifications.career,
        heading: "Software Developer Intern @ Thomson Reuters",
        description: "Began my 12 month internship at Thomson Reuters. Their tech stack is completely new for me, so I am hoping to learn " +
            "a lot.",
        technologies: ".NET Framework, .NET Core, C#, Microsoft SQL Server, Docker, Jenkins, AWS",
        img_src: "https://www.dropbox.com/s/xf273xzt0qesl8z/tr.jpg?raw=1",
    },
    {
        date: "Sep 13, 2019",
        classification: Classifications.hackathon,
        heading: "Hack The North",
        img_src: "https://www.dropbox.com/s/7atgon5ht2ubtdc/hackthenorth.png?raw=1",
        description: "Sent some applications, completed some workshops, made some friends.",
    },
    {
        date: "Sep 30, 2019",
        classification: Classifications.career,
        heading: "Software Consultant @ OneTap",
        description: "This was my first paid role in technology, at a startup in downtown Toronto. I worked in a University of Toronto communal " +
            "space for startups. I started working 10 hours a week part-time along with school, and now I am working 15 hours a week along with my full-time job at " +
            "Thomson Reuters.",
        technologies: "Javascript, TypeScript, Express.js, React, Redux, Docker, MongoDB",
        link: "https://www.onetapcheckin.com/",
        img_src: "https://www.dropbox.com/s/rfoedtlfvmcwpnv/Logo_branded_horizontal-arial-p-800.png?raw=1",
    },
    {
        date: "Jun 2019",
        classification: Classifications.project,
        heading: "Backup to Arweave Wordpress Plugin",
        description: "Using GitCoin, I found some open-source freelance work that would pay with Ethereum. Arweave is a " +
            "company that is trying to use blockchain to provide distributed, permanent, storage of anything from text to entire websites.",
        technologies: "PHP, Wordpress, Javascript, Arweave API, CSS, HTML",
        link: "https://github.com/GauravS99/Arweave-Upload-WP",
    },
    {
        date: "Mar 23, 2019",
        classification: Classifications.hackathon,
        heading: "UC Hacks Organizer",
        description: "Worked alongside other organizers to plan UC Hacks, the first ever " +
            "hackathon at my university residence. I conducted a workshop teaching Firebase fundamentals for Android so" +
            " that attendees could use it in a serverless application",
        img_src: "https://www.dropbox.com/s/i7doc2d5vmxd82m/logo.png?raw=1",
        link: "https://www.facebook.com/UCHackathon2019"
    },
    {
        date: "Sep 7, 2017",
        classification: Classifications.education,
        heading: "University of Toronto",
        description: "Began my education pursing a degree in Computer Science and a minor in statistics",
        img_src: "https://www.dropbox.com/s/2pdkdgkyqcu2ibw/uoft.png?raw=1"
    },
]

export default  TimelineItems;

