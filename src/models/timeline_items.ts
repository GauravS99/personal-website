export interface TimelineItemI {
    date: string,
    classification ?: string
    heading: string,
    description ?: string,
    img_src ?: string,
    technologies ?: string,
    link ?: string
}

const TimelineItems : TimelineItemI[] = [
    {
        date: "December 20, 2019",
        classification: "Project",
        heading: "Heading",
        description: "I did a thing and it was very good and I am very happy with said thing. In addition, I really do think that this is indeed more filler and I am not really going anywhere with ths",
        img_src: "https://wallpaperaccess.com/full/331659.jpg",
        technologies: "Coffee, Lofi, Electricity",
        link: "https://wallpaperaccess.com/full/331659.jpg"
    },
    {
        date: "December 20, 2019",
        classification: "Project",
        heading: "Heading",
        description: "I did a thing and it was very good and I am very happy with said thing. In addition, I really do think that this is indeed more filler and I am not really going anywhere with ths",
        img_src: "https://wallpaperaccess.com/full/331659.jpg",
        technologies: "Coffee, Lofi, Electricity",
    },
]

export default  TimelineItems;

