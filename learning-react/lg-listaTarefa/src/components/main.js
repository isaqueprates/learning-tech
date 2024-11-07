import React, { Component } from "react";
import "./main.css";

// form
import {FaArrowRight} from "react-icons/fa"

export default class Main extends Component {

  state = {
    tarefas: [],
  };

  handleChange = (event) => {
    this.setState({ tarefas: event.target.value });
  };

  render() {
    const { tarefas } = this.state;
    return (
      <div className="container-main">
        <h1>Lista de Tarefas</h1>
        <h2>{tarefas}</h2>
        <form>
          <input onChange={this.handleChange} type="text" />
          <button type="submit"><FaArrowRight/></button>
        </form>
      </div>
    );
  }
}
