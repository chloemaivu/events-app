import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import "./eventpage.css";

function Eventpage(props) {
  async function submit(e) {
    e.preventDefault();

    props.client
      .createEvent(
        e.target.eventName.value,
        e.target.location.value,
        e.target.summary.value,
        e.target.date.value
      )
      .then((response) => {
        console.log(response);
        e.target.reset();
      })

      .catch(() => {
        alert("an error occured, please try again");
      });
  }

  async function deleteSubmit(e) {
    e.preventDefault();
    props.client.deleteEvent(e.target.eventID.value)

    .then((response) => {
      console.log(response);
      // e.target.reset();
    })

    .catch(() => {
      alert("an error occured, please try again");
    });

    
  }

  return (
    <div>
      <div className="pageContainer">
        <div className="leftSide">
          <div className="formGroup">
            <br />
   
            <Form onSubmit={(e) => submit(e)}>
              <Form.Group className="mb-3" controlId="formName">
                <div className="nameLabel">
                  <Form.Label>Name</Form.Label>
                </div>
                <Form.Control placeholder="Event name" name="eventName" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLocation">
                <div className="locationLabel">
                  <Form.Label>Location</Form.Label>
                </div>
                <Form.Control placeholder="Location" name="location" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSummary">
                <div className="summaryLabel">
                  <Form.Label>Summary</Form.Label>
                </div>
                <Form.Control placeholder="Summary" name="summary" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDate">
                <div className="dateLabel">
                  <Form.Label>Date</Form.Label>
                </div>
                <Form.Control placeholder="Date" name="date" />
              </Form.Group>
    
              <div className="submitButton">
                <Button
                  variant="primary"
                  type="submit"
                  className="submitBtn"
                >
                  Submit Event
                </Button>
              </div>
            </Form>


<div className="deleteGroup">
        <Form onSubmit={(e) => deleteSubmit(e)}>
          <Form.Group className="mb-3" controlId="formName">
            <div className="idLabel">
              <Form.Label>ID</Form.Label>
            </div>
            <Form.Control placeholder="Event ID" name="eventID" className="control" />
          </Form.Group>
          <div className="deleteButton">
            <Button variant="primary" type="submit" className="deleteBtn">
              Delete Event
            </Button>
          </div>
        </Form>
        </div>

        </div>

        </div>

        <div className="rightSide">
          <div className="tableGroup"></div>
        </div>
      </div>
    </div>
  );
}

export default Eventpage;
