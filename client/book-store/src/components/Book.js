import React, { Component } from "react";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faSave, faUndo } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import Toaster from "./Toast";
// import { Container, Navbar,Col } from "react-bootstrap";

export default class Book extends Component {

	constructor(props){
		super(props)
		this.state=this.initialState;
		this.state.show=false;
		this.bookChange=this.bookChange.bind(this)
		this.submitBook=this.submitBook.bind(this)
	}

	initialState = {
		title:'',author:'',coverPhotoUrl:'',isbnNumber:'',price:'',language:''
	}

	submitBook = event =>{

		event.preventDefault();
		
		
		const book = {
			title : this.state.title ,
			author :  this.state.author ,
			coverPhotoUrl : this.state.coverPhotoUrl,
			isbnNumber : this.state.isbnNumber,
			price : this.state.price,
			language : this.state.language
		}

		axios.post("http://localhost:8080/api/v1/books",book).then(response =>{
				if(response.data!=null){
					
					this.setState({"show":true})
					setTimeout(() => this.setState({"show":false}), 3000);
					
				}
		})

		this.setState(this.initialState)
		
	}

	resetBook = () =>{

		this.setState(()=>this.initialState);
		
	}

	bookChange = event =>{

		this.setState({
			[event.target.name]:event.target.value	
		})
		
	}

  render() {

	const {title,author,coverPhotoUrl,isbnNumber,price,language} = this.state;
    return (
		<div>
			<div style={{"display":this.state.show ? "block" : "none"}}>
				<Toaster children={{show:this.state.show ,message:"Book Saved Successfully"}} ></Toaster>
			</div>
			<Card className="border border-dark bg-dark text-white">
        <Card.Header><FontAwesomeIcon icon={ faPlusSquare} /> Add Book </Card.Header>
        <Form onReset={this.resetBook} onSubmit={this.submitBook} id="bookFormId">
          <Card.Body>
            <Row>
              <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control required autoComplete="off"
                  type="text"
				  name="title"
				  value={title}
				  onChange={this.bookChange}
                  className="bg-dark text-white"
                  placeholder="Enter Book Title"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control required autoComplete="off"
                  type="text"
				  name="author"
				  value={author}
				  onChange={this.bookChange}
                  className="bg-dark text-white"
                  placeholder="Enter Book Author"
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridCoverPhotoUrl">
                <Form.Label>Cover Photo URL</Form.Label>
                <Form.Control required autoComplete="off"
                  type="text"
				  value={coverPhotoUrl}
				  onChange={this.bookChange}
				  name="coverPhotoUrl"
                  className="bg-dark text-white"
                  placeholder="Enter Book Photo URL"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridIsbnNumber">
                <Form.Label>ISBN Number</Form.Label>
                <Form.Control required autoComplete="off"
                  type="text"
				  name="isbnNumber"
				  value={isbnNumber}
				  onChange={this.bookChange}
                  className="bg-dark text-white"
                  placeholder="Enter Book ISBN Number"
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control required autoComplete="off"
                  type="text"
				  name="price"
				  value={price}
				  onChange={this.bookChange}
                  className="bg-dark text-white"
                  placeholder="Enter Book Price"
                />
              </Form.Group>	

              <Form.Group as={Col} controlId="formGridLanguage">
                <Form.Label>Langugage</Form.Label>
                <Form.Control required autoComplete="off"
                  type="text"
				  name="language"
				  value={language}
				  onChange={this.bookChange}
                  className="bg-dark text-white"
                  placeholder="Enter Book Language"
                />
              </Form.Group>
            </Row>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button size="sm" variant="success" type="submit">
			<FontAwesomeIcon icon={faSave} /> {' '}
               Submit
            </Button> {' '}
			<Button size="sm" variant="info" type="reset">
			<FontAwesomeIcon icon={faUndo} /> {' '}
               Reset
            </Button>
          </Card.Footer>
        </Form>
      </Card>
		</div>
    );
  }
}
