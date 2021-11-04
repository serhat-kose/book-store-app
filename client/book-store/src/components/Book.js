import React, { Component } from "react";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faSave } from "@fortawesome/free-solid-svg-icons";
// import { Container, Navbar,Col } from "react-bootstrap";

export default class Book extends Component {

	constructor(props){
		super(props)
		this.state={title:'',author:'',coverPhotoUrl:'',isbnNumber:'',price:'',language:''}
		this.bookChange=this.bookChange.bind(this)
		this.submitBook=this.submitBook.bind(this)
	}

	submitBook(event){

		alert("Title :" + this.state.title + "Author :" 
		+ this.state.author + 
		"Cover Photo URL :" + this.state.coverPhotoUrl
		+ "ISBN Number :" + this.state.isbnNumber
		+ "Price : " + this.state.price
		+ "Language :" + this.state.language)
		event.preventDefault();
		
	}

	bookChange(event){

		this.setState({
			[event.target.name]:event.target.value	
		})
		
	}

  render() {
    return (
      <Card className="border border-dark bg-dark text-white">
        <Card.Header><FontAwesomeIcon icon={ faPlusSquare} /> Add Book </Card.Header>
        <Form onSubmit={this.submitBook} id="bookFormId">
          <Card.Body>
            <Row>
              <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control required
                  type="text"
				  name="title"
				  value={this.state.title}
				  onChange={this.bookChange}
                  className="bg-dark text-white"
                  placeholder="Enter Book Title"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control required
                  type="text"
				  name="author"
				  value={this.state.author}
				  onChange={this.bookChange}
                  className="bg-dark text-white"
                  placeholder="Enter Book Author"
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridCoverPhotoUrl">
                <Form.Label>Cover Photo URL</Form.Label>
                <Form.Control required
                  type="text"
				  value={this.state.coverPhotoUrl}
				  onChange={this.bookChange}
				  name="coverPhotoUrl"
                  className="bg-dark text-white"
                  placeholder="Enter Book Title"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridIsbnNumber">
                <Form.Label>ISBN Number</Form.Label>
                <Form.Control required
                  type="text"
				  name="isbnNumber"
				  value={this.state.isbnNumber}
				  onChange={this.bookChange}
                  className="bg-dark text-white"
                  placeholder="Enter Book Author"
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control required
                  type="text"
				  name="price"
				  value={this.state.price}
				  onChange={this.bookChange}
                  className="bg-dark text-white"
                  placeholder="Enter Book Title"
                />
              </Form.Group>	

              <Form.Group as={Col} controlId="formGridLanguage">
                <Form.Label>Langugage</Form.Label>
                <Form.Control required
                  type="text"
				  name="language"
				  value={this.state.language}
				  onChange={this.bookChange}
                  className="bg-dark text-white"
                  placeholder="Enter Book Author"
                />
              </Form.Group>
            </Row>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button size="sm" variant="success" type="submit">
			<FontAwesomeIcon icon={faSave} /> 
               Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}
