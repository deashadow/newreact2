import logo from "./logo.svg";
import businessLogo from "./businessLogo.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { uuid } from "uuidv4";
import React, { Component, createRef } from "react";
import { connect } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from './actions'


class ToDo extends Component {
  constructor(props) {
    /*establishing state properties*/
    super();
   // this.dispatch = useDispatch
    this.state = {
      tasks: [] /*establishing empty array*/,
      selectedFilter: "All" /*establishes initial filter state*/,
     // inputVal: "",
    };

    this.taskRef = createRef(); /*submit button used to add new elements (tasks) into array*/
    this.handleSubmit = (e) => {
      e.preventDefault();
      console.log("handleSubmit called");
      //const dispatch = useDispatch();
      let task = this.taskRef.current.value;
      this.setState({
        tasks: [
          ...this.state.tasks,
          { id: uuid(), task: task, done: false },
        ] /*use of spread operator to ad new element (tasks) to array*/
      });
    };

    this.removeItem = (taskid) => {
      // let copyTasks = Object.assign([], this.state.tasks);
      // copyTasks.splice(uuid, 1);  splice not necessary if using filter
      this.setState({
        tasks: this.state.tasks.filter((task) => {
          return taskid !== task.id;
        }),
      });
    };

    /*this.inputChange = (e) => {
      //console.log
      this.setState({ inputVal: e.task.value });
    };*/

    this.handleLinethru = (id) => {
      // let doneTask = this.task.task
      //let task=this.state.tasks.find((task) => {return task.id === id })---identifies current task bu id to determine strikethru
      let newTasks = [...this.state.tasks];
      let task = newTasks.find((task) => task.id === id);

      if (task.done === true) {
        task.done = false;
        //alert("help")
        //this.task = this.task.className.add ('Line')
      } else {
        task.done = true;
        //this.task = this.task.className.remove ('Line')
      }
      this.setState({ tasks: [...newTasks] });
    };

    this.getFilteredTasks = () => {  /*possibly look at using a ternary operator in the future to eliminate the if/else??*/
      console.log('getFilteredTasks:'+ JSON.stringify(this.state))
      if (this.state.selectedFilter === "All") {
        console.log('getFilteredTasks:All:tasks='+this.state.tasks);
        return this.state.tasks;
      } else if (this.state.selectedFilter === "I") {
        console.log('getFilteredTasks:I:tasks='+this.state.tasks);
        const completed = this.state.tasks.filter(function (task) {
          if (task.done) {
            return false;
          } else {
            return true;
          }
        });
        console.log('getFilteredTasks:I:completed='+completed);
        return completed;
      } else if (this.state.selectedFilter === "C") {
        console.log('getFilteredTasks:C:tasks='+this.state.tasks);
        const completed = this.state.tasks.filter(function (task) {
          if (task.done) {
            return true;
          } else {
            return false;
          }
        });
        console.log('getFilteredTasks:C:completed='+completed);
        return completed;
      }
    };
  }

  componentDidUpdate() {
    this.state.tasks.forEach((task) => {
      console.log(JSON.stringify(task));
    });
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
                type="search"
                ref={this.taskRef}
                placeholder="enter your task"
                /* value={this.state.text}
                onChange={(e) => this.handleChange(e)}*/
              />
              <button
                type="button"
                onClick={this.handleSubmit}
                className="btn btn-primary btn-lg m-3"
              >
                Add task
              </button>
              <ol>
                {this.getFilteredTasks().map((task, id) => {
                  if (task.done === true) {
                    console.log(task.id + " is true");
                    return (
                      <li>
                        <div
                          key={task.id}
                          style={{ textDecoration: "line-through" }}
                        >
                          {task.task}
                        </div>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm m-3"
                          onClick={() => {
                            this.removeItem(task.id);
                          }}
                        >
                          Delete Task
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-sm m-3"
                          onClick={() => {
                            this.handleLinethru(task.id);
                          }}
                        >
                          Task Done!!
                        </button>
                      </li>
                    );
                  } else {
                    console.log(task.id + " is false");
                    return (
                      <li>
                        <div key={task.id}>{task.task}</div>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm m-3"
                          onClick={() => {
                            this.removeItem(task.id);
                          }} /*this deletes the selected task via id*/
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-sm m-3"
                          onClick={() => {
                            this.handleLinethru(task.id);
                          }}
                        >
                          Complete??
                        </button>
                      </li>
                    );
                  }
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
                  <h5 className="text-uppercase"></h5>
                  <ul className="list-unstyled">
                    <li>
                      <button
                        id="Completed tasks"
                        type="button"
                        className="btn btn-primary btn-md"
                        onClick={() =>
                          this.setState({
                            ...this.state,
                            selectedFilter: "All",
                          })
                        }
                      >
                        All ToDo's
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-1">
                  <h5 className="text-uppercase"></h5>
                  <ul className="list-unstyled">
                    <li>
                      <button
                        id="Completed tasks"
                        type="button"
                        className="btn btn-success btn-md"
                        onClick={() =>
                          this.setState({ ...this.state, selectedFilter: "C" })
                        }
                      >
                        Completed ToDo's
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-1">
                  <h5 className="text-uppercase"></h5>
                  <ul className="list-unstyled">
                    <li>
                      <button
                        id="Incomplete tasks"
                        type="button"
                        className="btn btn-warning btn-md"
                        onClick={() =>
                          this.setState({ ...this.state, selectedFilter: "I" })
                        }
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

const mapStateToProps = (state) => ({
  todos: state.todos
 });
 const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  updateTodo
 }
 export default connect(mapStateToProps,
  mapDispatchToProps)(ToDo); 

//export default ToDo;
