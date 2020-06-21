import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export class Signout extends Component {
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
          <div className="buts">
            <Link to="/">
              <button className="butt">Sign out</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Signout;
