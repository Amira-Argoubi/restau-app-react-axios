import React, { Component } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import Signout from "./logout";
import "../App.css";
import New from "./editCard";

export class Menu extends Component {
  state = {
    new: { title: "", image: "", prix: 0, description: "" },
    show: false,
  };

  /*************************************** get for post********************************* */
  getTitle = (e) => {
    let x = { ...this.state.new };
    x.title = e.target.value;
    this.setState({ new: x });
    console.log(this.state.new);
  };
  getImage = (e) => {
    let y = { ...this.state.new };
    y.image = e.target.value;
    this.setState({ new: y });
  };
  getPrix = (e) => {
    let z = { ...this.state.new };
    z.prix = e.target.value;
    this.setState({ new: z });
  };
  getDescrip = (e) => {
    let n = { ...this.state.new };
    n.description = e.target.value;
    this.setState({ new: n });
  };

  /******************************* ***********axios DELETE ********************************** ********/
  removeItem = (id) => {
    axios.delete(`http://localhost:3002/menu/${id}`).then((res) => {
      console.log(res.data);
    });
    window.location.reload(false);
  };
  /********************************************axios get******************************************* */
  componentDidMount() {
    axios.get("http://localhost:3002/menu").then((response) => {
      this.setState({ todoList: response.data });
    });
  }
  /************ *****************************axios post ******************************************* ***/
  handleClose = () => {
    axios
      .post("http://localhost:3002/menu", { ...this.state.new })
      .then((res) => {
        console.log(res);
        this.setState({ show: false });
      })
      .catch((e) => console.log(e));
    window.location.reload(false);
  };
  handleShow = () => this.setState({ show: true });
  /*******************************************axios update***************************** ********/
  updateCard = (element) => {
    console.log(element.id);
    axios
      .put(`http://localhost:3002/menu/${element.id}`, element)
      .then((res) => {
        console.log(res.data);
        this.setState({ show: false });
      });
    window.location.reload(false);
  };
  /*************************************************** ***************************************/
  render() {
    return (
      <div className="app">
        <Signout />
        <>
          <center>
            <Button variant="warning" onClick={this.handleShow}>
              <i class="fas fa-plus-square"></i>
            </Button>
          </center>

          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            animation={false}
          >
            <Modal.Header closeButton className="header">
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <center>
              {" "}
              <Modal.Body className="body">
                <input
                  type="text"
                  className="input"
                  placeholder="title"
                  onChange={this.getTitle}
                />
                <br></br>
                <input
                  type="text"
                  className="input"
                  placeholder="image"
                  onChange={this.getImage}
                />
                <br></br>
                <input
                  type="text"
                  className="input"
                  placeholder="prix"
                  onChange={this.getPrix}
                />
                <br></br>
                <input
                  type="text"
                  className="input"
                  placeholder="description"
                  onChange={this.getDescrip}
                />
              </Modal.Body>
            </center>
            <Modal.Footer className="header">
              <Button variant="secondary">Close</Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>

        <div className="cards">
          {this.props.menuAdmin.map((el) => (
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
              <New el={el} modif={this.updateCard} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;
