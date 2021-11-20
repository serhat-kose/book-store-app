import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../services/user/userActions";
import {
  Card,
  Table,
  Button,
  InputGroup,
  FormControl,
  Alert,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStepBackward,
  faStepForward,
  faFastBackward,
  faFastForward,
} from "@fortawesome/free-solid-svg-icons";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentPage: 1,
      usersPage: 5,
    };
  }

  componentDidMount() {
    //this.getAllUsers();
    this.props.fetchUsers();
  }

  // getAllUsers() {
  //   axios
  //     .get(
  //       "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
  //     )
  //     .then((response) => response.data)
  //     .then((data) => {
  //       this.setState({ users: data });
  //     });
  // }
  changePage = (event) => {
    this.setState({
      [event.target.name]: parseInt(event.target.value),
    });
  };

  firstPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: 1,
      });
    }
  };

  lastPage = () => {
    let usersLength = this.props.userData.users.length;
    if (
      this.state.currentPage < Math.ceil(usersLength / this.state.usersPage)
    ) {
      this.setState({
        currentPage: Math.ceil(usersLength / this.state.usersPage),
      });
    }
  };

  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
  };

  nextPage = () => {
    let usersLength = this.props.userData.users.length;
    if (this.state.currentPage < Math.ceil(usersLength / this.state.usersPage)) {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  };

  render() {
    const { currentPage, usersPage } = this.state;
    const lastIndex = currentPage * usersPage;
    const firstIndex = lastIndex - usersPage;

    const userData = this.props.userData;
    const users = userData.users;
    const currentUsers = users.slice(firstIndex, lastIndex);
    const totalPages = users.length / usersPage;

    return (
      <div>
        <div>
          {userData.error ? (
            <Alert variant="danger">{userData.error}</Alert>
          ) : (
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
                    {currentUsers.map((user, index) => (
                      <tr key={index}>
                        <td>{user.first}</td>

                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{user.created}</td>
                        <td>{user.balance}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer>
                <div style={{ float: "left" }}>
                  Showing Page {currentPage} of {totalPages}
                </div>
                <div style={{ float: "right" }}>
                  <InputGroup>
                    <Button
                      type="button"
                      variant="outline-info"
                      disabled={currentPage === 1 ? true : false}
                      onClick={this.firstPage}
                    >
                      <FontAwesomeIcon icon={faFastBackward} /> First
                    </Button>
                    <Button
                      type="button"
                      variant="outline-info"
                      disabled={currentPage === 1 ? true : false}
                      onClick={this.prevPage}
                    >
                      <FontAwesomeIcon icon={faStepBackward} /> Prev
                    </Button>
                    <FormControl
                      className="page-num bg-dark"
                      name="currentPage"
                      value={currentPage}
                      onChange={this.changePage}
                    />
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
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
