import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Signout from "./logout";

export class Client extends Component {
  state = {
    commandes: [],
    el: "",
  };
  /*******************************************************Ajout coammande******************************** */
  addOrder = (el) => {
    axios
      .post("http://localhost:3002/commandes", el)
      .then((res) => console.log(res.data));
    window.location.reload(false);
  };
  /****************************************************************************************** *****************/
  render() {
    return (
      <div className="menuClient">
        <Signout />
        <center>
          <h1 className="welcome">Bienvenue à notre KOUJINA</h1>
        </center>
        <Link to="/commande">
          <i class="fas fa-cart-arrow-down panier"></i>{" "}
        </Link>
        <div className="cards">
          {this.props.menuClient.map((el) => (
            <div class="card" key={el.id}>
              <img src={el.image} class="card-img-top" alt="tof" />
              <div class="card-body">
                <h1 class="card-title">{el.title} </h1>
                <h5 class="card-text">{el.description}</h5>
              </div>
              <div class="card-footer">
                <h4 class="text-muted"> {el.prix} TND</h4>
              </div>
              <button className="commande" onClick={() => this.addOrder(el)}>
                Commande
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Client;
