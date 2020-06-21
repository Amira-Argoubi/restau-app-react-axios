import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

import Signin from "./sign in";
import Signup from "./sign up";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container-fluid">
          <div className="logo">
            <img
              src={
                "https://www.mramma.tn/sites/default/files/logo%20elkoujina.png"
              }
              alt="log"
            />
          </div>
          <Link to="/"></Link>
          <div className="buts">
              <div className="signup"> 
              <Signup /></div>
         
              <Signin />
        
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
