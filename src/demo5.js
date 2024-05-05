import React, { Component } from "react";
import axios from "axios";
class demo5 extends Component {
  state = {
    data: [],
    url: "http://localhost:8080",
  };
  idEmployee = React.createRef();
  nameEmployee = React.createRef();
  departmentid = React.createRef();
  departmentname = React.createRef();

  getapi = () => {
    axios
      .get(`${this.state.url}/api/v1/employee`)
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  postapi = () => {
    const body = {
      name: this.nameEmployee,
      departmentid: parseInt(this.departmentid),
    };
    console.log(body);
    axios
      .post(`${this.state.url}/api/v1/employee`, body)
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
  pustapi = () => {
    const body = {
      nameEmployee: this.nameEmployee,
      departmentid: parseInt(this.departmentid),
    };
    console.log(body);
    axios
      .put(`${this.state.url}/api/v1/employee/${this.idEmployee}`, body)
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
  deleteapi = () => {
    axios
      .delete(`${this.state.url}/api/v1/employee/${this.idEmployee}`)
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <h1>Calling API</h1>
        <div>
          <p>There are {this.state.data.length} employee in the api</p>
          <button onClick={this.getapi}>Getting</button>
        </div>
        <h1>Posting API</h1>
        <div>
          <input
            type="text"
            placeholder="Enter name Eployee"
            onChange={(e) => (this.nameEmployee = e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter id Department"
            onChange={(e) => (this.departmentid = e.target.value)}
          />
          <button onClick={this.postapi}>create</button>
        </div>
        <h1>Puting API</h1>
        <div>
          <input
            type="text"
            placeholder="Enter id Eployee"
            onChange={(e) => (this.idEmployee = e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter name Eployee"
            onChange={(e) => (this.nameEmployee = e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter id Department"
            onChange={(e) => (this.departmentid = e.target.value)}
          />
          <button onClick={this.pustapi}>Update</button>
        </div>

        <h1>Delete API</h1>
        <div>
          <input
            type="text"
            placeholder="Enter id Eployee"
            onChange={(e) => (this.idEmployee = e.target.value)}
          />
          <button onClick={this.deleteapi}>Delete</button>
        </div>
      </div>
    );
  }
}

export default demo5;
