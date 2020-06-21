import React, { Component } from "react";
import axios from "axios";
import Navbar from "./navbar";

export class Accueil extends Component {
  state = { cardMenu: [] };
  /****************************************axios get******************************** */
  componentDidMount() {
    axios.get("http://localhost:3002/menu").then((response) => {
      this.setState({ todoList: response.data });
    });
  }
  /******************************************************************************** **/
  render() {
    return (
      <div className="accueil">
        <Navbar />{" "}
        <div className="cards">
          {this.props.menuAccueil.map((el) => (
            <div class="card" key={el.id}>
              <img src={el.image} class="card-img-top" alt="tof" />
              <div class="card-body">
                <h1 class="card-title">{el.title} </h1>
                <h5 class="card-text">{el.description}</h5>
              </div>
              <div class="card-footer">
                <h4 class="text-muted"> {el.prix} TND</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Accueil;
