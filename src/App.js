import React, { Component } from "react";
import Menu from "./components/adminMenu";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Client from "./components/Client";
import Command from "./components/panier";
import Accueil from "./components/Accueil";

export class App extends Component {
  state = {
    todoList: [],
  };
  /*******************************************axios get *************************************** */
  componentDidMount() {
    axios.get("http://localhost:3002/menu").then((response) => {
      this.setState({ todoList: response.data });
    });
  }
  /********************************************************************************************** */
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/admin">
              <Menu menuAdmin={this.state.todoList} />
            </Route>
            <Route path="/client">
              <Client menuClient={this.state.todoList} />
            </Route>
            <Route path="/commande">
              <Command />
            </Route>
            <Route path="/">
              <Accueil menuAccueil={this.state.todoList} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
