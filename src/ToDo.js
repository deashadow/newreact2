/*import React from 'react';*/
import logo from "./logo.svg";
import businessLogo from "./businessLogo.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
//import { uuid, uuidv4 } from "uuidv4";
import uuid from "uuid";
import React, { Component } from "react";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: "",
      inputVal: "",
      completed: {},
      id: uuid(),
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.inComplete = this.inComplete.bind(this);
    this.itemChecked = this.itemChecked.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      list: prevState.list.concat(this.state.text),
      text: "",
      id: uuid(),
    }));
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  removeItem(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
  }

  inputChange = (e) => {
    //console.log
    this.setState({ inputVal: e.target.value });
  };

  onClick = (e) => {
    alert("Great Job!! You are all Done--- Nap Time!!!");
  };

  inComplete = (e) => {
    alert("No are not done yet!!  You have more tasks to Complete!!");
  };

  itemChecked(index, e) {
    //alert("Task Complete");
    this.setState((state) => ({
      completed: { ...state.completed, [index]: !state.completed[index] },
    }));
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
              <u>**TO DO LIST**</u>
            </h1>
            
            <form onSubmit={this.handleSubmit}>
              <input
                placeholder="enter your task"
                value={this.state.text}
                onChange={(e) => this.handleChange(e)}
              />
              <button
                type="button"
                onClick={this.handleSubmit}
                className="btn btn-primary btn-lg m-3"
              >
                Add item
              </button>
              <ol>
                {this.state.list.map((item, index) => {
                  return (
                    <li
                      style={{
                        textDecoration: this.state.completed[index]
                          ? "line-through"
                          : "",
                      }}
                      key={index}
                    >
                      {item}
                      <button
                        id="delete"
                        type="button"
                        className="btn btn-danger btn-sm m-3"
                        onClick={() => this.removeItem(index)}
                      >
                        Delete
                      </button>
                      <input
                        id="check"
                        type="checkbox"
                        name="TaskCompleted"
                        onChange={(e) => this.itemChecked(index)}
                      />
                      <input id="uuidv4"
                      className="m-3"
                      type="input"
                      name="uuidv4"
                      value={uuid.v4()}
                      />
                      {""}
                    </li>
                  );
                })}
              </ol>
            </form>
          </header>
        </div>

        <div>
          <footer className="page-footer font-small special-color-dark pt-4">
            <div className="container-fluid1 text-center text-md-left">
              <div className="row">
                <div className="col-md-3 mt-md-0 mt-3">
                  <h5 className="text-uppercase">Ronald Rendessy</h5>
                  <p> Full Stack Web Developer</p>
                  <a href="https://sflluxuryhomesearch.com/">
                    <img
                      id="businesslogo"
                      src={businessLogo}
                      alt="business logo"
                    />
                  </a>
                </div>

                <hr className="clearfix w-100 d-md-none pb-3"></hr>
                <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase">
                    <ul>Total Tasks</ul>
                  </h5>
                  <ul className="list-unstyled">
                    <li>
                      <form>
                        <input
                          value={this.state.list.length}
                          onChange={(e) => this.inputChange(e)}
                          type="number"
                          name="Task Count"
                          id="task count"
                          placeholder="Task Count"
                        />
                      </form>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase"></h5>
                  <ul className="list-unstyled">
                    <li>
                      <button
                        id="Completed tasks"
                        type="button"
                        className="btn btn-primary btn-lg"
                        onClick={(e) => this.onClick(e)}
                      >
                        Completed ToDo's
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase"></h5>
                  <ul className="list-unstyled">
                    <li>
                      <button
                        id="Incomplete tasks"
                        type="button"
                        className="btn btn-primary btn-lg"
                        onClick={(e) => this.inComplete(e)}
                      >
                        Incomplete ToDo's
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-copyright text-center py-3">
                © 2020 Copyright: RR <br></br>
                <a href="https://sflluxuryhomesearch.com/"> RR.com</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default ToDo;
