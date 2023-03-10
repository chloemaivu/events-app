import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./eventpage.css";
import Event from "../components/Event";

function Eventpage(props) {
  const [events, changeEvents] = useState([]);

  async function getAllEvents() {
    props.client
      .fetchEvents()
      .then((response) => {
        changeEvents(response);
        console.log(response);
      })
      .catch(() => {
        alert("an error occured, please try again");
      });
  }

  async function submit(e) {
    e.preventDefault();

    props.client
      .createEvent(
        e.target.eventName.value,
        e.target.location.value,
        e.target.summary.value,
        e.target.date.value,
        e.target.imgUrl.value
      )
      .then((response) => {
        console.log(response);
        e.target.reset();
        getAllEvents();
      })

      .catch(() => {
        alert("an error occured, please try again");
      });
  }

  async function submitUpdate(e) {
    e.preventDefault();

    props.client
      .updateEvent(
        e.target.eventID.value,
        e.target.eventName.value,
        e.target.location.value,
        e.target.summary.value,
        e.target.date.value,
        e.target.imgUrl.value
      )
      .then((response) => {
        console.log(response);
        e.target.reset();
        getAllEvents();
      })

      .catch(() => {
        alert("an error occured, please try again");
      });
  }

  useEffect(() => {
    getAllEvents();
  }, []);

  async function deleteSubmit(e) {
    e.preventDefault();
    props.client
      .deleteEvent(e.target.eventID.value)

      .then((response) => {
        console.log(response);
        e.target.reset();
        getAllEvents();
      })

      .catch(() => {
        alert("an error occured, please try again");
      });
  }

  return (
    <div>
      <div className="pageContainer">
        <div className="leftSide">
          <div className="groupContainer">
            <div className="leftTitle">
              <h1 className="title">Welcome to EventApp</h1>
              <br />
              <h3> Start by adding an event!</h3> <br />
            </div>

            <div className="formGroup">
              <div className="add-event">
                <div className="event-title">
                  <h3>Add your event!</h3>
                </div>
                <Form onSubmit={(e) => submit(e)}>
                  <Form.Group className="mb-3" controlId="formName">
                    <div className="nameLabel">
                      <Form.Label></Form.Label>
                    </div>
                    <Form.Control placeholder="Event name" name="eventName" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formLocation">
                    <div className="locationLabel">
                      <Form.Label></Form.Label>
                    </div>
                    <Form.Control placeholder="Location" name="location" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formSummary">
                    <div className="summaryLabel">
                      <Form.Label></Form.Label>
                    </div>
                    <Form.Control placeholder="Summary" name="summary" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formDate">
                    <div className="dateLabel">
                      <Form.Label></Form.Label>
                    </div>
                    <Form.Control placeholder="Date" name="date" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formimgUrl">
                    <div className="imgUrlLabel">
                      <Form.Label></Form.Label>
                    </div>
                    <Form.Control placeholder="Image Url" name="imgUrl" />
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
              </div>

              <div className="update-event">
                <div className="updateGroup">
                  <div className="event-title">
                    <h3>Update Event</h3>
                  </div>
                  <Form onSubmit={(e) => submitUpdate(e)}>
                    <Form.Group className="mb-3" controlId="formName">
                      <div className="idLabel">
                        <Form.Label></Form.Label>
                      </div>
                      <Form.Control
                        placeholder="Event ID"
                        name="eventID"
                        className="control"
                      />
                      <div className="nameLabel">
                        <Form.Label></Form.Label>
                      </div>
                      <Form.Control placeholder="Event name" name="eventName" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLocation">
                      <div className="locationLabel">
                        <Form.Label></Form.Label>
                      </div>
                      <Form.Control placeholder="Location" name="location" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSummary">
                      <div className="summaryLabel">
                        <Form.Label></Form.Label>
                      </div>
                      <Form.Control placeholder="Summary" name="summary" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDate">
                      <div className="dateLabel">
                        <Form.Label></Form.Label>
                      </div>
                      <Form.Control placeholder="Date" name="date" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formimgUrl">
                      <div className="imgUrlLabel">
                        <Form.Label></Form.Label>
                      </div>
                      <Form.Control placeholder="Image Url" name="imgUrl" />
                    </Form.Group>

                    <div className="updateButton">
                      <Button
                        variant="primary"
                        type="submit"
                        className="updateBtn"
                      >
                        Update Event
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
              <div className="delete-event">
                <div className="deleteGroup">
                  <div className="event-title">
                    <h3>Remove Event</h3>
                  </div>
                  <Form onSubmit={(e) => deleteSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formName">
                      <div className="idLabel">
                        <Form.Label></Form.Label>
                      </div>
                      <Form.Control
                        placeholder="Event ID"
                        name="eventID"
                        className="control"
                      />
                    </Form.Group>
                    <div className="deleteButton">
                      <Button
                        variant="primary"
                        type="submit"
                        className="deleteBtn"
                      >
                        Delete Event
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rightSide">
          <div className="cardGroup">
            {events?.length !== 0 &&
              events?.map((item) => {
                return <Event event={item} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventpage;
