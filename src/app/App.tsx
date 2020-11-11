import React from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/App.css';
import Timeline from "../components/timeline/Timeline";
import Sidebar from "../components/side/Sidebar";
import {dummyProfile} from "../models/profile";

function App() {
  return (
    <div className="App">
        <div className="container-fluid no-gutters ">
            <div className="row">
                <div className="col-md-3 bg-color-2" style={{height: '100vh'}}>
                    <Sidebar profile={dummyProfile}/>
                </div>
                <div className="col-md-9 bg-color-3" style={{height: '100vh', overflowY: 'auto'}}>
                    <Timeline/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
