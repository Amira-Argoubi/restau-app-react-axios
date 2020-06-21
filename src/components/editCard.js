import React, { Component } from "react";
//import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import "../App.css";
export class New extends Component {
  state = {
    id: this.props.el.id,
    title: this.props.el.title,
    image: this.props.el.image,
    prix: this.props.el.prix,
    description: this.props.el.description,
    show: false,
  };
  handleShow = () => this.setState({ show: !this.state.show });
  /*****************************************************handleChange input******************************** */
  getEditTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  getEditImage = (e) => {
    this.setState({ image: e.target.value });
  };
  getEditPrix = (e) => {
    this.setState({ prix: e.target.value });
  };
  getEditDEscrip = (e) => {
    this.setState({ description: e.target.value });
  };
  /****************************************************************************** */
  render() {
    return (
      <div className="app">
        <Button variant="warning" onClick={this.handleShow}>
          <i class="fas fa-edit"></i>
        </Button>
        <>
          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="text"
                defaultValue={this.props.el.title}
                onChange={this.getEditTitle}
              />
              <input
                type="text"
                defaultValue={this.props.el.image}
                onChange={this.getEditImage}
              />
              <input
                type="text"
                defaultValue={this.props.el.prix}
                onChange={this.getEditPrix}
              />
              <input
                type="text"
                defaultValue={this.props.el.description}
                onChange={this.getEditDescrip}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleShow}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() =>
                  this.props.modif({
                    id: this.state.id,
                    title: this.state.title,
                    image: this.state.image,
                    description: this.state.description,
                    prix: this.state.prix,
                  })
                }
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  }
}

export default New;
