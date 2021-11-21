import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Book from "./components/Book/Book";
import BookList from "./components/Book/BookList";
import UserList from "./components/User/UserList";
import Login from "./components/User/Login"
import Register from "./components/User/Register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
   

  const heading = "Welcome To Book Store"
  const description = "Only The Strong Survive"


  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Container> 
        <Row>
          <Col lg={12} className={"margin-top"}>
            <Switch>
              <Route path="/" exact component={()=> <Welcome heading={heading} description={description}/>} />
              <Route path="/add" exact component={Book} />
              <Route path="/edit/:id" exact component={Book} />
              <Route path="/list" exact component={BookList} />
              <Route path="/users" exact component={UserList} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}


