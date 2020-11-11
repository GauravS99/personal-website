export interface ProfileI {
    name: string,
    linkedin ?: string,
    github ?: string,
    resume ?: string,
}

export const dummyProfile : ProfileI = {
    name: "John Smith",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com",
    resume: "https://www.google.com/search?q=resume"
}

