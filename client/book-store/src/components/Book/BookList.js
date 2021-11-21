import React, { Component } from "react";
import {
  Card,
  Table,
  Image,
  ButtonGroup,
  Button,
  FormControl,
  InputGroup,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faEdit,
  faTrash,
  faStepBackward,
  faStepForward,
  faFastBackward,
  faFastForward,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Toaster from "../Toast";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteBook } from "../../services/index";
import "../../assets/css/Style.css";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      currentPage: 1,
      booksPerPage: 5,
      search: "",
      sortDir: "asc",
    };
  }

  sortData = () => {
    setTimeout(() => {
      this.state.sortDir === "asc"
      ? this.setState({ sortDir: "desc" })
      : this.setState({ sortDir: "asc" });
    this.getAllBooks(this.state.currentPage);
    }, 300);
  };

  componentDidMount() {
    this.getAllBooks(this.state.currentPage);
  }

  getAllBooks(currentPage) {
    currentPage -= 1;
    axios
      .get(
        "http://localhost:8080/api/v1/books?pageNumber=" +
          currentPage +
          "&pageSize=" +
          this.state.booksPerPage +
          "&sortBy=price&sortDir=" +
          this.state.sortDir
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          books: data.content,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number + 1,
        });
      });
  }

  deleteBook = (bookId) => {
    this.props.deleteBook(bookId);
    setTimeout(() => {
      if (this.props.bookObject != null) {
        this.setState({ show: true });
        setTimeout(() => this.setState({ show: false }), 3000);
        this.getAllBooks(this.state.currentPage);
      }
    }, 1000);

    // axios
    //   .delete("http://localhost:8080/api/v1/books/" + bookId)
    //   .then((response) => {
    //     if (response.data != null) {
    //       this.setState({ show: true });
    //       setTimeout(() => this.setState({ show: false }), 3000);

    //       this.setState({
    //         books: this.state.books.filter((book) => book.id != bookId),
    //       });
    //     }
    //   });
  };

  changePage = (event) => {
    let targetPage = parseInt(event.target.value);

    if (this.state.search) {
      this.searchData(targetPage);
    } else {
      this.getAllBooks(targetPage);
    }

    this.setState({
      [event.target.name]: targetPage,
    });
  };

  firstPage = () => {
    let firstPage = 1;
    if (this.state.currentPage > firstPage) {
      if (this.state.search) {
        this.searchData(firstPage);
      } else {
        this.getAllBooks(firstPage);
      }
    }
  };

  lastPage = () => {
    let condition = Math.ceil(
      this.state.totalElements / this.state.booksPerPage
    );

    if (this.state.currentPage < condition) {
      if (this.state.search) {
        this.searchData(condition);
      } else {
        this.getAllBooks(condition);
      }
    }
  };

  prevPage = () => {
    let prevPage = 1;
    if (this.state.currentPage > prevPage) {
      if (this.state.search) {
        this.searchData(this.state.currentPage - prevPage);
      } else {
        this.getAllBooks(this.state.currentPage - prevPage);
      }
    }
  };

  nextPage = () => {
    if (
      this.state.currentPage <
      Math.ceil(this.state.totalElements / this.state.booksPerPage)
    ) {
      if (this.state.search) {
        this.searchData(this.state.currentPage + 1);
      } else {
        this.getAllBooks(this.state.currentPage + 1);
      }
    }
  };

  searchChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  cancelSearch = () => {
    this.setState({
      search: "",
    });
    this.getAllBooks(this.state.currentPage);
  };

  searchData = (currentPage) => {
    currentPage -= 1;

    axios
      .get(
        "http://localhost:8080/api/v1/books/search/" +
          this.state.search +
          "?page=" +
          currentPage +
          "&size=" +
          this.state.booksPerPage
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          books: data.content,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number + 1,
        });
      });
  };

  render() {
    const { books, currentPage, totalPages, search } = this.state;

    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <Toaster
            show={this.state.show}
            message={"Book Deleted Successfully"}
            type={"danger"}
          ></Toaster>
        </div>
        <Card className="border border-dark bg-dark text-white">
          <Card.Header>
            <div style={{ float: "left" }}>
              <FontAwesomeIcon icon={faList} /> Book List
            </div>
            <div style={{ float: "right" }}>
              <InputGroup size="sm">
                <Form.Control
                  placeholder="Search"
                  name="search"
                  value={search}
                  className={"info-border bg-dark text-wihte"}
                  onChange={this.searchChange}
                ></Form.Control>

                <Button
                  size="sm"
                  variant="outline-info"
                  type="button"
                  onClick={this.searchData}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
                <Button
                  size="sm"
                  variant="outline-info"
                  type="button"
                  onClick={this.cancelSearch}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </Button>
              </InputGroup>
            </div>
          </Card.Header>
          <Card.Body>
            <Table bordered hover striped variant="dark">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>ISBN Number</th>
                  <th onClick={this.sortData}>
                    Price{" "}
                    <div
                      className={
                        this.state.sortDir === "asc"
                          ? "arrow arrow-up"
                          : "arrow arrow-down"
                      }
                    ></div>
                  </th>
                  <th>Language</th>
                  <th>Genre</th>
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
                      <td>{book.genre}</td>
                      <td>
                        <ButtonGroup>
                          <Link
                            to={"edit/" + book.id}
                            className="btn btn-sm btn-outline-primary"
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </Link>{" "}
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookObject: state.book,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBook: (bookId) => dispatch(deleteBook(bookId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
