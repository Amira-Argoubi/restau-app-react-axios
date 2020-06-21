import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

export class Signup extends Component {
  state = { show: false, name: "", mail: "", password: "" };
  handleShow = () => this.setState({ show: !this.state.show });
  /*************************************handlechange************************************ */
  handleChangeMail = (e) => {
    this.setState({ mail: e.target.value });
  };
  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  };
  /************************************post user************************************************* */
  addUser = () => {
    let userName = this.state.name;
    let userMail = this.state.mail;
    let userPassword = this.state.password;
    axios
      .post("http://localhost:3002/users", { userName, userMail, userPassword })
      .then((res) => console.log(res.data));
  };

  /************************************************************************************ **********/

  render() {
    return (
      <div className="signup">
        <Button variant="warning" onClick={this.handleShow}>
          Sign up
        </Button>
        <>
          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            animation={false}
          >
            <Modal.Header closeButton className="header">
              <Modal.Title>Sign up</Modal.Title>
            </Modal.Header>

            <center>
              {" "}
              <Modal.Body className="body">
                <input
                  type="text"
                  className="input"
                  placeholder="Your name"
                  onChange={this.handleChangeName}
                />
                <br></br>
                <input
                  type="text"
                  className="input"
                  placeholder="Your mail"
                  onChange={this.handleChangeMail}
                />
                <br></br>
                <input
                  type="password"
                  className="input"
                  placeholder="Your password"
                  onChange={this.handleChangePassword}
                />
              </Modal.Body>
            </center>
            <Modal.Footer className="header">
              <Button variant="secondary" onClick={this.handleShow}>
                Close
              </Button>
              <Button variant="warning" onClick={() => this.addUser()}>
                Sign up
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  }
}

export default Signup;
