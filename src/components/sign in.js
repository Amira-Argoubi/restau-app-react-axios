import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

export class Signin extends Component {
  state = {
    show: false,
    users: [],
    mail: "",
    password: "",
    authentification: false,
  };
  handleShow = () => this.setState({ show: !this.state.show });
  /********************************************get sign up tab*************************** */
  componentDidMount() {
    axios
      .get("http://localhost:3002/users")
      .then((res) => this.setState({ users: res.data }));
  }
  /******************************************handleChange signin********************** ***/

  handleChangeMail = (e) => {
    this.setState({ mail: e.target.value });
  };
  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  /*************************************Validation*************************************** */
  validation = () => {
    let ifriz = this.state.users.filter(
      (el) =>
        el.userMail === this.state.mail &&
        el.userPassword === this.state.password
    );
    if (ifriz.length !== 0 && ifriz[0].poste === "admin") {
      window.location.pathname = "/admin";
    } else if (ifriz.length !== 0 && ifriz[0].poste !== "admin") {
      window.location.pathname = "/client";
    } else {
      alert("matjewbouch mahouch mawjoud");
    }
    console.log(ifriz);
  };
  /*************************************************************************************** */
  render() {
    return (
      <div className="signin">
        <Button variant="warning" onClick={this.handleShow}>
          Sign in
        </Button>
        <>
          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            animation={false}
          >
            <Modal.Header closeButton className="header">
              <center>
                <Modal.Title>Sign in</Modal.Title>
              </center>
            </Modal.Header>
            <center>
              {" "}
              <Modal.Body className="body">
                <input
                  type="text"
                  placeholder="Your mail"
                  className="input"
                  onChange={this.handleChangeMail}
                />
                <br></br>
                <input
                  type="password"
                  placeholder="Your password"
                  className="input"
                  onChange={this.handleChangePassword}
                />
              </Modal.Body>
            </center>
            <Modal.Footer className="header">
              <Button variant="secondary" onClick={this.handleShow}>
                Close
              </Button>
              <Button variant="warning" onClick={this.validation}>
                Sign in
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  }
}

export default Signin;
