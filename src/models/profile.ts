export interface ProfileI {
    name: string,
    linkedin ?: string,
    github ?: string,
    resume ?: string,
}

export const dummyProfile : ProfileI = {
    name: "Gaurav Sharma",
    github: "https://github.com/GauravS99",
    linkedin: "https://www.linkedin.com/in/gaurav-sharma-17b956163/",
    resume: "https://www.dropbox.com/s/5fkxcegatw2h563/gaurav_sharma_resume.pdf?dl=0"
}

