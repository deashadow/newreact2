import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class NavB extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="d-flex flex-row bd-highlight mb-3">
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
              <Navbar.Brand href="#home">
                <b>
                  <u>Your Task Manager</u>
                </b>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link to="/ToDo">
                    <li
                      className="nav-link"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Home
                    </li>
                  </Link>
                  <Link to="/AboutUs">
                    <li className="nav-link">AboutUs</li>
                  </Link>
                  <Link to="/ContactUs">
                    <li className="nav-link">ContactUs</li>
                  </Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Luxury Home Search=>>"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-success"><a href="https://sflluxuryhomesearch.com/">Search</a>
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default NavB;
