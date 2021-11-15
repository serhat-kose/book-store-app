import React, { Component } from "react";
import axios from "axios";
import { Card, Table, Image, ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Toaster from "./Toast";
import { Link } from "react-router-dom";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
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

  render() {
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
                {this.state.users.length === 0 ? (
                  <tr align="center">
                    <td colSpan="6	">Books Available </td>
                  </tr>
                ) : (
                  this.state.users.map((user, index) => (
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
        </Card>
      </div>
    );
  }
}
