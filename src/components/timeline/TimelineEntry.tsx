import * as React from 'react';
import * as moment from 'moment'
import {Moment} from "moment";
import {TimelineItemI} from "../../models/timeline_items";
import {AiOutlineLink} from "react-icons/all";

interface PropTypes {
    flipped: boolean
    item: TimelineItemI
}

interface StateTypes {

}

class TimelineEntry extends React.Component<PropTypes, StateTypes> {
    constructor(props: PropTypes) {
        super(props);

        this.state = {}
    }

    render() {
        const {flipped, item} = this.props;
        const {date, heading, description, technologies, classification, img_src, link} = item;

        let side1 = (
            <div className={`color-4 d-inline-block ${flipped ? "vertical-center" : "timeline-item-date"}`}>
                <h5 className="m-0">
                    {date}
                </h5>
            </div>
        );

        let side2 = (
            <div className="card p-3 timeline-item-content color-1">
                {img_src && <img className="card-img-top" src={img_src} alt={heading}/>}
                <div className="card-body">
                    <h5 className="card-title">{classification ? classification + " - " + heading: heading}</h5>
                    {description && <p className="card-text">{description}</p>}
                    {technologies &&
                        <p className="card-text"><p className="font-weight-bold d-inline-block mr-2 mb-0"> Technologies Used: </p>
                            {technologies}
                        </p>
                    }
                    {link &&
                        <a className="d-block" href={link} target={"_blank"} rel="noreferrer">
                            <AiOutlineLink style={{height: 20, width: 20, marginRight: 7, marginBottom: 5}}/>
                            {link}
                        </a>
                    }
                </div>
            </div>
        )

        if(flipped){
            const temp = side1;
            side1 = side2;
            side2 = temp;
        }

        return (
            <div className="row no-gutters align-items-stretch justify-content-center timeline-item" >
                <div className="col-5 py-3">
                    {side1}
                </div>
                <div className="col-2 text-center color-4">
                    <div className="verticalLine horizontal-center">&nbsp;</div>
                    <div className="timeline-circle circle center">&nbsp;</div>
                </div>
                <div className="col-5 py-3">
                    {side2}
                </div>
            </div>
        )
    }
}

export default TimelineEntry;
