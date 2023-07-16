 import React from "react"
 import BlogIcon from "./images/blog_icon.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample(props) {

  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container>
           <img style={{padding: "10px" ,background : "white",marginRight: "5px"}} src= {BlogIcon} width = "40px" height= "40px"/>
          <Navbar.Brand href="#home">BlogSpace</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick = {props.handleHome}>Home</Nav.Link>
            {/* <Nav.Link href="#features">About</Nav.Link> */}
            <div onClick = {props.handleNotes} ><Nav.Link href="#pricing">Notes</Nav.Link></div>
            <div onClick = {props.handleCommunity}><Nav.Link href="#features">Community</Nav.Link></div>
            <div onClick = {props.handleFaq}><Nav.Link href="#features" >Faq's</Nav.Link></div>
            <div onClick = {props.handleBlog}><Nav.Link href="#features" >Top Blogs</Nav.Link></div>
            <div className= "display-name"><Navbar.Brand href="#home">Hi {props.name}</Navbar.Brand></div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;