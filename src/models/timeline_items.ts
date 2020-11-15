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
        img_src: "https://previews.dropbox.com/p/thumb/AA_8mphz1sCKYpY3dte0Sjykdc3gFwdeHJrj0KpY1GX1fi0gwEPq922uSxIc93aEmAvQTzqPHWE7Z0laBQAC2qPKITSUvxyiSebPibnZ8Bb2OBfMhGhqjhs09ZP3Z_AnKAr3Jwe7UMd6Kldxsuf9WELhbOB69vvAX62ugo0cbxCoguknoXVq0OBG_DtxO9GO7FoqdogcY6VVbZO_Z3j_CdOSLauBtWZTZDKNy_g2PnFeUh7cVMvriyfKcuUZrgpQKGRjSNPO-ZE2Lh_1Q-er012ms_r6eVbXg_6irSbnyCrKnKg8xDku0N0TW7yl0yDvL3VjQeywsSMAI3P-xB2baUa64wLa2dt407RaS__KuFbv7g/p.png?fv_content=true&size_mode=5",
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
        img_src: "https://previews.dropbox.com/p/thumb/AA81ZljGk8LDIz9uuwuQLNzYNVKTGT2BUw5yniAhaWMoWZCqReKjP3fGIzzMEzosU44MRksnBBtv2vO-RCmPZuWbEvHQa9IlYgOAUrVzaMSukn2JIpUfHJ-SAyg1UIW5VNmx3VQSaJRZHNNvBxVkPD6kJjq94Q5C4ncsranHcBTn-0f8ajea8PxETvyopN8WDOEAzC18oHnSXBsah6xpLpQEKFKe7VUkmawLZXXHk7MHzFBX9EQklWN2oG0uFh2aalu5MH1C5ARhaneN_h4uZsA2ya-QYdz81_IWCOHMCEKYrWzxJrOEj2vmyDLMccYbkuIjikymbJGWP821n8JJl6SBRD_JIQpmjzS2JCFEjx4UyA/p.jpeg?fv_content=true&size_mode=5"
    },
    {
        date: "Sep 13, 2019",
        classification: Classifications.hackathon,
        heading: "Hack The North",
        img_src: "https://previews.dropbox.com/p/thumb/AA8m1DsP5lB-2mbdllNWPxYITZmF8iWo2FnLEjrg8YhFSFR0gt48kiXRjzBoSrZNepTWLhJqC2AjxbJ4nszlrRAw5nUoTfgrLSbJDE1SgdiC97SLpSgF9GqyucGs9HuqmAQqXMw2y63Jm5ojJsn6kmBxVHiojnBD8OJRrAfhtG-sLTJN4dbeMORkNwdcGzA_Q4N3Ro9ffVB4088NH0qK3p-FcMHJ2h_st22kkSURIZ-y6_D0RsxhlwOqDGxCzMct0ZxmbzyOWSQ21byH2WWOyaJ_EKrrCWKiDtoyH_HJcloTwfNVzXmkBAlUIWID3Pgz57_3UmgwqZPTx2c15hJcyG0Drp3Sq93_kkHMVaWDOC91rA/p.png?fv_content=true&size_mode=5",
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
        img_src: "https://previews.dropbox.com/p/thumb/AA-CmNV4n8g8N-KSkNZJkL2ybbwyocVlCcBsm4EOQDZSSe9Y7s_JmvN8-Mlw6hKg4vQflEI80wna4EsZk9aU-bWoh4RAF_cDwiZYjRj1Lfc90nJbGDSkhBKY6VmzQ5HGlvvUat7O7-ZD14GA597vxGanJdVJJ0LsMHyc291dfymLKUmZI-FbPk16GPdbqCrj3y0wFe0hU7UyhN33YQ3Cdv_XOtGmrqJRmfXrJOfsArR89ckQseaa-hqXNfcGg4yR2X40FyQU7SgXzHJnHvG9g7uR7ccLSHxSK68KbYpCPOuVW-uA8poLK0M2X_84rq6gsbK0_WDaCeUhih8vU3BD6EpDmAtmROGQQUNTUcZQNduapQ/p.png?fv_content=true&size_mode=5"
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
        img_src: "https://previews.dropbox.com/p/thumb/AA8R6zoASFGBNGK7ioNF3FIYNA3pPG0nq3qWVCo1h7tsgd45xEF6BdHjkmAVBUpDjom_yjsWpTQDkrM4yIHnDNQ_SnOPJe9oe5fKFM29vcr2f8cUEnBSZiCrrV5BUYee8hG9eUWsdSUYtb6C87OkVhFl28dFrvbGVeoVmeheQrKMlnTnPEq7mse2NUNOsCBBuRWP--l_kLQFkc9Va2YWTAPXEe3eiH98zcYG6a_PDwz2JHX1KrGalUQF5-tEoNvlKQoPi214Quo-0gDRGZrjJ8XDvuiXJEvS2onmRFfz75QlP5QtIGrnpQs80RdrNfCH0Tw79nJxuhNsDaTNl2kJIaelVfAH_bBGdba44XzvPrx10Q/p.png?fv_content=true&size_mode=5",
        link: "https://www.facebook.com/UCHackathon2019"
    },
    {
        date: "Sep 7, 2017",
        classification: Classifications.education,
        heading: "University of Toronto",
        description: "Began my education pursing a degree in Computer Science and a minor in statistics",
        img_src: "https://previews.dropbox.com/p/thumb/AA_7947BlptsoCWljPs8wXPN0fin0N-T0I6XlfuZkd8-N66ihCOnUpRf8cKCXyPqxtaDkQHLBYs69ToN2iIczRw1yngwN7JlduEyQD69sGZTXhhHGEgZqfxFNgFVvwAv2_13-vmDuE4D57VFlmRItM28G1mG5vLthKXiuBcoiRLeAiohL5ne-YVosEE1CVFXC_Nm1qp1axhkZv0O__9JxhxmkGsa_PNTxpAKsKuozQ4bBX7tvKJLmeCZazuOKJj3f7n2xi8qQV0rw8bPU6T8a9bha1Inu8z8bR50n8YBpjxS8qAH7100_ih72kJMk_GewCkP80MywQ_8lAZ1FxkAOFoog55O9F2VV567DRvdqiFVAw/p.png?size=2048x1536&size_mode=3"
    },
]

export default  TimelineItems;

