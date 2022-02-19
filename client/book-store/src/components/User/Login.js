import React, { Component } from "react";
import { Row, Col, Card, Form, InputGroup,Button,Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { authenticateUser } from "../../services/index";
import {
  faEnvelope,
  faLock,
  faSignInAlt,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  initialState = {
    email: "",
    password: "",
    error:""
  };
  resetLoginForm =() =>{
	  this.setState(()=>
		 this.initialState 
	  )
  };

  credentialChange = event =>{
	this.setState({
		[event.target.name]:event.target.value
	})
}

doLoggedIn = () =>{
  this.props.authenticateUser(this.state.email,this.state.password);
  setTimeout(() => {
      if(this.props.auth.isLoggedIn){
        return this.props.history.push("/")
      }
      else {
        this.resetLoginForm();
        this.setState({"error":"Invalid Email or Password"})
      }
  }, 300);
}

  render() {
    const { email, password,error } = this.state;
    return (
      <Row className="justify-content-md-center">
        <Col xs={5}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Card className="border border-dark bg-dark text-white">
            <Card.Header>
              <FontAwesomeIcon icon={faSignInAlt} /> LOGIN
            </Card.Header>
            <Card.Body>
              <Form.Group as={Col}>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                </InputGroup>
                <Form.Control
                  required
                  autoComplete="off"
                  type="text"
                  name="email"
				  onChange={this.credentialChange}
                  value={email}
                  className="bg-dark text-white"
                  placeholder="Enter Email Address"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faLock} />
                  </InputGroup.Text>
                </InputGroup>
				
                <Form.Control
                  required
                  autoComplete="off"
                  type="password"
                  name="password"
				  onChange={this.credentialChange}
                  value={password}
                  className="bg-dark text-white"
                  placeholder="Enter Password"
                />
              </Form.Group>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button
                size="sm"
                type="button"
                variant="success"
                onClick={this.doLoggedIn}
                disabled={
                  this.state.email.length === 0 ||
                  this.state.password.length === 0
                }
              >
                
                <FontAwesomeIcon icon={faSignInAlt} />
                Login
              </Button>{" "}
              <Button
                size="sm"
                type="button"
                variant="info"
				onClick={this.resetLoginForm}
                disabled={
                  this.state.email.length === 0 &&
                  this.state.password.length === 0 && this.state.error.length === 0
                }
              >
                {" "}
                <FontAwesomeIcon icon={faUndo} />
                Reset
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (email,password) => dispatch(authenticateUser(email,password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
