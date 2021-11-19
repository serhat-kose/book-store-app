import React, { Component } from "react";
import { Card, Table, Image, ButtonGroup, Button,FormControl,InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faEdit, faTrash,faStepBackward,faStepForward,faFastBackward,faFastForward } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Toaster from "./Toast";
import { Link } from "react-router-dom";
import "./Style.css"

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      currentPage:1,
      booksPerPage:5,
      sortToggle : true
      
    };
  }

  sortData = () =>{
    this.setState(state =>({
      sortToggle : !state.sortToggle
    }));
    this.getAllBooks(this.state.currentPage);
  }

  componentDidMount() {
    this.getAllBooks(this.state.currentPage);
  }

  getAllBooks(currentPage) {

    currentPage -=1;
    let sortDir = this.state.sortToggle ? "asc" : "desc"
    axios
      .get("http://localhost:8080/api/v1/books?pageNumber="+ currentPage+ "&pageSize="+this.state.booksPerPage+"&sortBy=price&sortDir="+sortDir)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ 
          books: data.content,
          totalPages:data.totalPages,
          totalElements:data.totalElements,
          currentPage:data.number+1
         });
      });
  }

  deleteBook = (bookId) => {
    axios
      .delete("http://localhost:8080/api/v1/books/" + bookId)
      .then((response) => {
        if (response.data != null) {
          this.setState({ show: true });
          setTimeout(() => this.setState({ show: false }), 3000);
          

          this.setState({
            books: this.state.books.filter((book) => book.id != bookId),
          });
        }
      });
  };

  changePage = event => {

    let targetPage=parseInt(event.target.value);
    this.getAllBooks(targetPage);
    this.setState({
      [event.target.name]:targetPage
    })
  };

  firstPage = () =>{

    let firstPage=1;
    if(this.state.currentPage>firstPage){
      this.getAllBooks(firstPage);
    }
  };

  lastPage = () =>{

    let condition = Math.ceil(this.state.totalElements/this.state.booksPerPage);

    if(this.state.currentPage< condition ){
      this.getAllBooks(condition);
    }
  };

  prevPage = () =>{
    let prevPage =1;
    if(this.state.currentPage>prevPage){
      this.getAllBooks(this.state.currentPage-prevPage);
    }
  }

  nextPage = () =>{
    if(this.state.currentPage<Math.ceil(this.state.totalElements/this.state.booksPerPage)){
      this.getAllBooks(this.state.currentPage+1);
    }
  }

  render() {

    const { books, currentPage, totalPages } = this.state;

     
    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <Toaster
            show={this.state.show}message={"Book Deleted Successfully"} type={"danger"} 
          ></Toaster>
        </div>
        <Card className="border border-dark bg-dark text-white">
          <Card.Header>
            <FontAwesomeIcon icon={faList} /> Book List
          </Card.Header>
          <Card.Body>
            <Table bordered hover striped variant="dark">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>ISBN Number</th>
                  <th onClick={this.sortData}>Price <div className={this.state.sortToggle ? "arrow arrow-down" : "arrow arrow-up"}></div></th>
                  <th>Language</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.length === 0 ? (
                  <tr align="center">
                    <td colSpan="6	">Books Available </td>
                  </tr>
                ) : (
                  books.map((book) => (
                    <tr key={book.id}>
                      <td>
                        <Image
                          src={book.coverPhotoUrl}
                          roundedCircle
                          width="25"
                          height="25"
                        />
                        {book.title}
                      </td>
                      <td>{book.author}</td>
                      <td>{book.isbnNumber}</td>
                      <td>{book.price}</td>
                      <td>{book.language}</td>
                      <td>
                        <ButtonGroup>
                        <Link to={"edit/" +book.id} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link> {' '}
                          {/* <Button size="sm" variant="outline-primary">
                            <FontAwesomeIcon icon={faEdit} />
                            Edit
                          </Button> */}
                          <Button
                            size="sm"
                            variant="outline-danger"
                            onClick={this.deleteBook.bind(this, book.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                            
                          </Button>
                        </ButtonGroup>
                      </td>
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
