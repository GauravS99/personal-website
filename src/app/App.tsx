import React from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/App.css';
import Timeline from "../components/timeline/Timeline";
import Sidebar from "../components/side/Sidebar";
import {profile} from "../models/profile";

function App() {
  return (
    <div className="App">
        <div>
            <Sidebar profile={profile}/>
        </div>
        <div className="bg-color-3">
            <Timeline/>
        </div>
    </div>
  );
}

export default App;
