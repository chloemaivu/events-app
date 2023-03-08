import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./event.css";

function Event({event}) {

  return (

    <div className="cardWrapper" id={event._id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title><h4>{event.name}</h4></Card.Title>
          <Card.Text>
              <p>location: {event.location}</p>
              <p>date: {event.date}</p>
              <p>summary: {event.summary}</p>
          </Card.Text>
          <Button variant="primary">more info</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Event;
