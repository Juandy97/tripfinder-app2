import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar.js"
import "../index.css";

class Home extends Component {
    render() {
      return (
        <div className="start">
            <Sidebar />
            
          <p className="welcome-text"><i>Need a vacation?</i> <b> We've got your back!</b></p>
         
          <Link to="/search">
            <button className="button">Start planning</button>
          </Link>
        </div>
      );
    }
  }
  
  export default Home;