import React from "react";
import Card from "react-bootstrap/Card";
import "./event.css";

function Event({ event }) {
  return (
    <div className="cardWrapper" id={event._id}>
      <Card className="bg-dark text-white">
        <div className="imgWrapper">
          <Card.Img src={event.imgUrl} alt="Card image" className="imgUrl" />
        </div>
        <Card.ImgOverlay>
          <Card.Title>
            <h3>{event.name}</h3>
          </Card.Title>
          <Card.Text>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Summary:</strong> {event.summary}
            </p>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>
              <strong>ID:</strong> {event._id}
            </p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Event;
