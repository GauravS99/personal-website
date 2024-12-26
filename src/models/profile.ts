export interface ProfileI {
    name: string,
    phone ?: string,
    email ?: string,
    pfp_src ? : string
    linkedin ?: string,
    github ?: string,
    resume ?: string,
}

export const profile : ProfileI = {
    name: "Gaurav Sharma",
    pfp_src: "https://www.dropbox.com/s/wdb6gbebgnonqhk/profile.PNG?raw=1",
    email: "g.sharma0909@gmail.com",
    github: "https://github.com/GauravS99",
    linkedin: "https://www.linkedin.com/in/gaurav-sharma-17b956163/",
    resume: "https://www.dropbox.com/s/5fkxcegatw2h563/gaurav_sharma_resume.pdf?dl=0"
}

