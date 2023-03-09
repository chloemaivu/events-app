import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./event.css";

function Event({event}) {

  return (

    <div className="cardWrapper" id={event._id}>

<Card className="bg-dark text-white">
      {/* <Card.Img src="https://askavy.com/wp-content/uploads/2022/02/image_overley.png" alt="Card image" className="imgUrl" /> */}
      <div className="imgWrapper">
      <Card.Img src={event.imgUrl} alt="Card image" className="imgUrl" />
      </div>
      <Card.ImgOverlay>
      <Card.Title><h4>{event.name}</h4></Card.Title>
      <Card.Text>
              <p>Location: {event.location}</p>
              <p>Summary: {event.summary}</p>
              <p>Date: {event.date}</p>
          </Card.Text>
      </Card.ImgOverlay>
    </Card>

      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={event.imgUrl} />
        <Card.Body>
          <Card.Title><h4>{event.name}</h4></Card.Title>
          <Card.Text>
              <p>location: {event.location}</p>
              <p>date: {event.date}</p>
              <p>summary: {event.summary}</p>
          </Card.Text>
          <Button variant="primary">more info</Button>
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default Event;
