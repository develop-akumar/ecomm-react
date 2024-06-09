import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

export default function Header() {

  function logout(){
    localStorage.removeItem("user-info")
    window.location.reload()
  }
  return (
    <>
     
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">

            {/* To show or hide menu items after login-------------- */}
            {
              localStorage.getItem("user-info") ? 
              <>
              <Link to="/add" href="#home">Add Product</Link>
              <Link to="/update" href="#features">Update product</Link>
              <Button className='btn btn-danger' onClick={()=>{logout()}}>Logout</Button>
              </>
              :
              <>
              <Link to="/login" href="#pricing">Login</Link>
              <Link to="/register" href="#pricing">Register</Link>
              
              </>
            }
             {/* To show or hide menu items after login ^^^^^^^^^^^^^^^^^^ */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>

      <br />
     
    </>
  )
}
