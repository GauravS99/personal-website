import * as React from 'react';
import ProfilePicture from "../profile/ProfilePicture";
import {ProfileI} from "../../models/profile";
import {AiFillGithub, AiFillLinkedin, GrDocumentText} from "react-icons/all";
import COLORS from "../../helpers/colors";

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
            <div className="p-4 text-center color-3">
                <div>
                    <ProfilePicture/>
                </div>
                <div className="mt-4">
                    <h1 className="">
                        {profile.name}
                    </h1>
                </div>
                <div className="mt-5">
                    <div className="d-inline-block text-left">
                        {
                            profile.resume &&
                            <a className="d-block mt-3 sidebar-item" href={profile.resume} target={"_blank"} rel="noreferrer">
                                <GrDocumentText className="d-inline-block icon-color-3 icon" />
                                Resume
                            </a>
                        }
                        {
                            profile.github &&
                            <a className="d-block mt-3 sidebar-item" href={profile.github} target={"_blank"} rel="noreferrer">
                                <AiFillGithub className="d-inline-block icon"/>
                                GitHub
                            </a>
                        }
                        {
                            profile.linkedin &&
                            <a className="d-block mt-3 sidebar-item" href={profile.linkedin} target={"_blank"} rel="noreferrer">
                                <AiFillLinkedin className="d-inline-block icon"/>
                                LinkedIn
                            </a>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;
