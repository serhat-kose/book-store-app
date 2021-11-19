import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  Table,
  Image,
  ButtonGroup,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers,faStepBackward,faStepForward,faFastBackward,faFastForward } from "@fortawesome/free-solid-svg-icons";
import Toaster from "./Toast";
import { Link } from "react-router-dom";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentPage: 1,
      usersPage: 5,
    };
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers() {
    axios
      .get(
        "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ users: data });
      });
  }
  changePage = event => {
    this.setState({
      [event.target.name]:parseInt(event.target.value)
    })
  };

  firstPage = () =>{
    if(this.state.currentPage>1){
      this.setState({
        currentPage:1
      });
    }
  };

  lastPage = () =>{
    if(this.state.currentPage< Math.ceil(this.state.users.length/this.state.usersPage)){
      this.setState({
        currentPage:Math.ceil(this.state.users.length/this.state.usersPage)
      });
    }
  };

  prevPage = () =>{
    if(this.state.currentPage>1){
      this.setState({
        currentPage:this.state.currentPage-1
      });
    }
  }

  nextPage = () =>{
    if(this.state.currentPage>1){
      this.setState({
        currentPage:this.state.currentPage+1
      });
    }
  }

  render() {
    const { users, usersPage, currentPage } = this.state;
    const lastIndex = currentPage * usersPage;
    const firstIndex = lastIndex - usersPage;
    const currentUsers = users.slice(firstIndex, lastIndex);
    const totalPages = users.length / usersPage;

    return (
      <div>
        <Card className="border border-dark bg-dark text-white">
          <Card.Header>
            <FontAwesomeIcon icon={faUsers} /> User List
          </Card.Header>
          <Card.Body>
            <Table bordered hover striped variant="dark">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Adress</td>
                  <td>Created</td>
                  <td>Balance</td>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr align="center">
                    <td colSpan="6	">Books Available </td>
                  </tr>
                ) : (
                  currentUsers.map((user, index) => (
                    <tr key={index}>
                      <td>{user.first}</td>

                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>{user.created}</td>
                      <td>{user.balance}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Card.Body>
          <Card.Footer>
            <div style={{ float: "left" }}>
              Showing Page {currentPage} of {totalPages}
            </div>
            <div style={{ float: "right" }}>
              <InputGroup >
                <Button
                  type="button"
                  variant="outline-info"
                  disabled={currentPage === 1 ? true : false}
                  onClick={this.firstPage}
                  
                >
                 <FontAwesomeIcon icon={faFastBackward} />   First
                </Button>
                <Button
                  type="button"
                  variant="outline-info"
                  disabled={currentPage === 1 ? true : false}
                  onClick={this.prevPage}
                >
                 <FontAwesomeIcon icon={faStepBackward} /> Prev
                </Button>
                <FormControl  className="page-num bg-dark"
                 name="currentPage" 
                 value={currentPage}
                 onChange={this.changePage} />
                <Button
                  type="button"
                  variant="outline-info"
                  disabled={currentPage === totalPages ? true : false}
                  onClick={this.nextPage}
                >
                 <FontAwesomeIcon icon={faStepForward} /> Next
                </Button>
                <Button
                  type="button"
                  variant="outline-info"
                  disabled={currentPage === totalPages ? true : false}
                  onClick={this.lastPage}
                >
                 <FontAwesomeIcon icon={faFastForward} /> Last
                </Button>
              </InputGroup>
            </div>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
