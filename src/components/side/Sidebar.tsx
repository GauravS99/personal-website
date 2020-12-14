import * as React from 'react';
import ProfilePicture from "../profile/ProfilePicture";
import {ProfileI} from "../../models/profile";
import {AiFillGithub, AiFillLinkedin, GrDocumentText} from "react-icons/all";

interface PropTypes {
    profile: ProfileI
}

interface StateTypes {

}

class Sidebar extends React.Component<PropTypes, StateTypes> {
    constructor(props: PropTypes) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        const {profile} = this.props;

        return (
            <div className="sidebar bg-color-2 color-3 p-4 text-center">
                <span>
                    <ProfilePicture src={profile.pfp_src}/>
                </span>
                <span>
                    <h1>
                        {profile.name}
                    </h1>
                    <div>
                        {profile.email &&
                            <h6 className="text-white d-inline-block"> {profile.email} </h6>
                        }
                        {profile.email && profile.phone &&
                            <h6 className="text-white d-inline-block px-2">•</h6>
                        }
                        {profile.phone &&
                            <h6 className="text-white d-inline-block"> {profile.phone}</h6>
                        }
                    </div>
                </span>
                { profile.resume &&
                    <span>
                        <a className="suppressed-a d-block mt-3 sidebar-item" href={profile.resume} target={"_blank"} rel="noreferrer">
                            <GrDocumentText className="d-inline-block icon-color-3 icon" />
                            Resume
                        </a>
                    </span>
                }
                { profile.github &&
                    <span>
                       <a className="suppressed-a d-block mt-3 sidebar-item" href={profile.github} target={"_blank"} rel="noreferrer">
                            <AiFillGithub className="d-inline-block icon"/>
                            GitHub
                        </a>
                    </span>
                }
                { profile.linkedin &&
                <span>
                        <a className="suppressed-a d-block mt-3 sidebar-item" href={profile.linkedin} target={"_blank"} rel="noreferrer">
                            <AiFillLinkedin className="d-inline-block icon"/>
                            LinkedIn
                        </a>
                    </span>
                }
            </div>
        )
    }
}

export default Sidebar;
