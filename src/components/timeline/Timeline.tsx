import * as React from 'react';
import TimelineEntry from "./TimelineEntry";

interface PropTypes {

}

interface StateTypes {

}

class Timeline extends React.Component<PropTypes, StateTypes> {
    constructor(props: PropTypes) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="px-3">
                <TimelineEntry
                     date={"December 20, 2019"} description={"I did a thing and it was very good and I am very happy with said thing. In addition, I really do think that this is indeed more filler and I am not really going anywhere with ths"}
                     flipped={false} heading={"Heading"}
                 classification={"Job"}/>
                <TimelineEntry
                    date={"December 20, 2019"} description={"I did a thing and it was very good and I am very happy with said thing. In addition, I really do think that this is indeed more filler and I am not really going anywhere with ths"}
                    flipped={true} heading={"Heading"} technologies={"Coffee, Lofi, Electricity"}
                 classification={"Project"} img_src={"https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg"}/>
                <TimelineEntry
                    date={"December 20, 2019"} description={"I did a thing and it was very good and I am very happy with said thing. In addition, I really do think that this is indeed more filler and I am not really going anywhere with ths"}
                    flipped={false} heading={"Heading"} technologies={"Coffee, Lofi, Electricity"}
                    classification={"Project"} img_src={"https://wallpaperaccess.com/full/331659.jpg"}/>
            </div>
        )
    }
}


export default Timeline;
