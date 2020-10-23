import React from "react";
import { Container, Col, FormGroup } from "reactstrap";
import "./App.css";
import axios from "axios";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <Container className="App-header2">
        <div>
          <h1>
            <u>Contact Us</u>
          </h1>
        </div>
        <Col>
          <form
            id="contact-form"
            action="https://formspree.io/xpzykppw"
            method="POST"
          >
            <Col>
              <FormGroup>
                <label htmlFor="name">Full Name</label>
                <input
                  name="FullName"
                  type="name"
                  className="form-control"
                  id="name"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                  placeholder="Please enter your Full Name"
                  required
                />
              </FormGroup>
            </Col>
            <Col>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="Email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                  placeholder="Please enter your email: youremail@email.com"
                  required
                />
              </div>
            </Col>
            <Col>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="Message"
                  className="form-control"
                  rows="5"
                  id="message"
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                  placeholder="Please tell us what we can do!!"
                />
              </div>
            </Col>
            <button
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
              type="buttont"
              className="btn btn-primary btn-lg"
            >
              Submit
            </button>
          </form>
        </Col>
      </Container>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default ContactUs;
