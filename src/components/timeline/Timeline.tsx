import * as React from 'react';
import TimelineEntry from "./TimelineEntry";
import TimelineItems from '../../models/timeline_items';

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
            <div className="content px-3">
                {
                    TimelineItems.map((item, index) => {
                        return (
                            <div key={`timeline-item_${index}`}>
                                <TimelineEntry
                                    flipped={index % 2 !== 0}
                                    item={item}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default Timeline;
