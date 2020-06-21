import React, { Component } from "react";
import axios from "axios";
import "../App.css";

export class Command extends Component {
  state = { panier: [] };
  /*********************************************** UP quantity**************************************** */
  quantUp = (el) => {
    el.quant++;
    axios.put(`http://localhost:3002/commandes/${el.id}`, el);
    window.location.reload(false);
  };
  /*********************************************** Down quantity**************************************** */
  quantDown = (el) => {
    el.quant--;

    axios.put(`http://localhost:3002/commandes/${el.id}`, el);
    window.location.reload(false);
  };
  /*************************** *******************delete command **********************************/
  removeItem = (id) => {
    axios.delete(`http://localhost:3002/commandes/${id}`).then((res) => {
      console.log(res.data);
    });
    window.location.reload(false);
  };
  /************************************************ get command************************************/
  componentDidMount() {
    axios
      .get("http://localhost:3002/commandes")
      .then((res) => this.setState({ panier: res.data }));
  }
  /***************************************************************************** *****************/
  render() {
    return (
      <div className="commands">
        <div className="title">
          {" "}
          <center>
            <h1>Tes plats choisis</h1>
          </center>
        </div>

        {this.state.panier.map((el) => (
          <div class="card" key={el.id}>
            <img src={el.image} class="card-img-top" alt="tof" />
            <div class="card-body">
              <h1 class="card-title">{el.title} </h1>
              <h5 class="card-text">{el.description}</h5>
            </div>
            <div class="card-footer">
              <h4 class="text-muted"> {el.prix} TND</h4>
            </div>
            <button className="butDel" onClick={() => this.removeItem(el.id)}>
              <i class="fas fa-trash-alt"></i>
            </button>
            <div>
              <button className="up" onClick={() => this.quantUp(el)}>
                +
              </button>
              <p>{el.quant}</p>
              <button className="down" onClick={() => this.quantDown(el)}>
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Command;
