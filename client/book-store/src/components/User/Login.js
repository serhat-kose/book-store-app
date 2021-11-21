import React, { Component } from "react";
import { Row, Col, Card, Form, InputGroup,Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  render() {
    const { email, password } = this.state;
    return (
      <Row className="justify-content-md-center">
        <Col xs={5}>
          <Card className="border border-dark bg-dark text-white">
            <Card.Header>
              <FontAwesomeIcon icon={faSignInAlt} /> Login
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
                disabled={
                  this.state.email.length === 0 ||
                  this.state.password.length === 0
                }
              >
                {" "}
                <FontAwesomeIcon icon={faSignInAlt} />
                Login
              </Button>
              <Button
                size="sm"
                type="button"
                variant="info"
				onClick={this.resetLoginForm}
                disabled={
                  this.state.email.length === 0 &&
                  this.state.password.length === 0
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

export default Login;
