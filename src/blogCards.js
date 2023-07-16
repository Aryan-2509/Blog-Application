import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Universe from "./images/Universe.jpg"

function KitchenSinkExample(props) {

  return (
    <Card style={{ width: '18rem'}} className = "blog-cards">
      <Card.Img variant="top" src= {props.img}/>
      <Card.Body style={{ color: 'white' }}>
        <Card.Title><b>{props.title}</b></Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Genre : {props.genre}</ListGroup.Item>
        <ListGroup.Item>Writer : {props.author}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default KitchenSinkExample;