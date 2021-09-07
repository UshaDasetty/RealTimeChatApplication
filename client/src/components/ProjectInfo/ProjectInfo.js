import React from 'react';
import './ProjectInfo.css';
import {Link} from 'react-router-dom';


const ProjectInfo = () => (
  <div className="rightContainer">
    <div>
      <h1>Real Time Chat Application</h1>
      <h2>Developed using React, Node.js, Express.js, and Socket.io</h2>
      <h2>To use this app, enter your name and the room you want to enter!</h2>
      <h2>Checkout the code <a id = "github" href="https://github.com/UshaDasetty">here</a></h2>
    </div>
  </div>
);

export default ProjectInfo;
