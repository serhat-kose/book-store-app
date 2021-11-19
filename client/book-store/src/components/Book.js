import React, { Component } from "react";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faSave, faUndo,faList,faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import Toaster from "./Toast";
import "./Style.css"
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
		id:'',title:'',author:'',coverPhotoUrl:'',isbnNumber:'',price:'',language:''
	}

  componentDidMount( ){
    const bookId= this.props.match.params.id;

    if(bookId){
        this.findBookById(bookId);
    }
  }

  findBookById = (bookId) => {
    axios.get("http://localhost:8080/api/v1/books/"+bookId).then(response=>{
      if(response.data!=null){
       this.setState({
         id:response.data.id,
         title:response.data.title,
         author:response.data.author,
         coverPhotoUrl:response.data.coverPhotoUrl,
         isbnNumber:response.data.isbnNumber,
         price:response.data.price,
         language:response.data.language
       })
      }
    }).catch((error)=>{
        console.log("Error :" + error)
    })
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

		axios.post("http://localhost:8080/api/v1/books/add",book).then(response =>{
				if(response.data!=null){
					
					this.setState({"show":true})
					setTimeout(() => this.setState({"show":false}), 3000);
					
				}
		})

		this.setState(this.initialState)
		
	}

  updateBook = (event) => {
    event.preventDefault();
		
		
		const book = {
      id: this.state.id,
			title : this.state.title ,
			author :  this.state.author ,
			coverPhotoUrl : this.state.coverPhotoUrl,
			isbnNumber : this.state.isbnNumber,
			price : this.state.price,
			language : this.state.language
		}

		axios.put("http://localhost:8080/api/v1/books/update",book).then(response =>{
				if(response.data!=null){
					
					this.setState({"show":true,"method":"put"})
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

  bookList = () => {
    return this.props.history.push("/list")
  }

  render() {

	const {title,author,coverPhotoUrl,isbnNumber,price,language} = this.state;
    return (
		<div>
			<div style={{"display":this.state.show ? "block" : "none"}}>
				<Toaster show={this.state.show} message={this.state.method==="put" ? "Book Updated Successfuly" : "Book Saved Successfuly"} type={"success"} ></Toaster>
			</div>
			<Card className="border border-dark bg-dark text-white">
        <Card.Header><FontAwesomeIcon icon={ this.state.id ? faEdit : faPlusSquare} /> {this.state.id ? "Update Book" : "Add Book"} </Card.Header>
        <Form onReset={this.resetBook} onSubmit={this.state.id ? this.updateBook : this.submitBook} id="bookFormId">
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
			<FontAwesomeIcon icon={faSave} /> {this.state.id ? "Update" : "Save"}
               
            </Button> {' '}
			<Button size="sm" variant="info" type="reset">
			<FontAwesomeIcon icon={faUndo} /> 
               Reset
            </Button>{' '}
            <Button size="sm" variant="info" type="button" onClick={this.bookList.bind()}>
			<FontAwesomeIcon icon={faList} /> 
               Book List
            </Button>
          </Card.Footer>
        </Form>
      </Card>
		</div>
    );
  }
}
