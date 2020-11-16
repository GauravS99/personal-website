export interface ProfileI {
    name: string,
    phone ?: string,
    email ?: string,
    pfp_src ? : string
    linkedin ?: string,
    github ?: string,
    resume ?: string,
}

export const dummyProfile : ProfileI = {
    name: "Gaurav Sharma",
    pfp_src: "https://previews.dropbox.com/p/thumb/AA-evSVsQxXQNRJ09iFLBgHT5bX9qVbRZwVjPkQUPJonZwCLTXhVwjFEYeQaYrXtnOtNrCJ9CRNBnmypwU0g4r5n7ZSFIx0luhMIO736C56Qx8ZIJdJmve59vXbaC7UFt5dMpBpupTa7TUeJhgAh-nzdY4VeYg0gcr7Bryn5ge4ncecn06Bnup97scxx18GL5ws2b0mVn709sX6j8tjFaV9TbUvY0QWFqruG6-GGv_-YY6QRV3sXNdE3ODbI9cES9Y9ICVES2Pv65ix624hmCfxiUgNznEkfX9HR2s0-dtn3Nl6ljyc0KozH_1pRPRFBrvHkkJPZMYFY7Tdt5SeF4m1W3wCEel-_XGbARlzRMGYNq2Wexy-1GxGBOK0IuAZh2wY/p.png",
    email: "g.sharma0909@gmail.com",
    phone: "+1 647-927-4338",
    github: "https://github.com/GauravS99",
    linkedin: "https://www.linkedin.com/in/gaurav-sharma-17b956163/",
    resume: "https://www.dropbox.com/s/5fkxcegatw2h563/gaurav_sharma_resume.pdf?dl=0"
}

