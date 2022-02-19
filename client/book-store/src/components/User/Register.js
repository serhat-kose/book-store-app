import React, { Component } from 'react'
import { Row, Col, Card, Form, InputGroup,Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faPhone,
  faSignInAlt,
  faUndo,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

 class Register extends Component {

	constructor(props) {
		super(props);
		this.state = this.initialState;
	  }
	
	  initialState = {
		  name:"",
		email: "",
		password: "",
		contact:""
	  };

	  userChange = event =>{
		  this.setState({
			  [event.target.name]:event.target.value
		  })
	  };

	  resetRegisterForm =() =>{
		this.setState(()=>
		   this.initialState 
		)
	};
	render() {
		const { name,email, password,contact } = this.state;
		return (
		  <Row className="justify-content-md-center">
			<Col xs={5}>
			  <Card className="border border-dark bg-dark text-white">
				<Card.Header>
				  <FontAwesomeIcon icon={faUserPlus} /> REGISTER
				</Card.Header>
				<Card.Body>
				<Form.Group as={Col}>
					<InputGroup>
					  <InputGroup.Text>
						<FontAwesomeIcon icon={faUser} />
					  </InputGroup.Text>
					</InputGroup>
					<Form.Control
					  required
					  autoComplete="off"
					  type="text"
					  name="name"
					  onChange={this.userChange}
					  value={name}
					  className="bg-dark text-white"
					  placeholder="Enter Username"
					/>
				  </Form.Group>
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
					  onChange={this.userChange}
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
					  onChange={this.userChange}
					  value={password}
					  className="bg-dark text-white"
					  placeholder="Enter Password"
					/>
				  </Form.Group>
				  <Form.Group as={Col}>
					<InputGroup>
					  <InputGroup.Text>
						<FontAwesomeIcon icon={faPhone} />
					  </InputGroup.Text>
					</InputGroup>
					
					<Form.Control
					  required
					  autoComplete="off"
					  type="text"
					  name="contact"
					  onChange={this.userChange}
					  value={contact}
					  className="bg-dark text-white"
					  placeholder="Enter Phone Number"
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
					
					<FontAwesomeIcon icon={faSignInAlt} />{" "}
					Login
				  </Button>
				  <Button
					size="sm"
					type="button"
					variant="info"
					onClick={this.resetRegisterForm}
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

export default Register
