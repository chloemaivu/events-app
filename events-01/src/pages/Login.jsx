import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";

function Login(props) {
  const [disabled, cDisabled] = useState(false);

  async function submit(e) {
    e.preventDefault();
    cDisabled(true);

    props.client
      .fetchUsers(e.target.username.value, e.target.password.value)
      .then((response) => {
        cDisabled(false);
        console.log(response);
        props.loggedIn(response.data.token);
      })
      .catch(() => {
        alert("an error occured, please try again");
        cDisabled(false);
      });
  }

  return (
    <>
<div className="pageContainer">
    <div className="groupContainer">

    <div className="welcome-title">
        <h1>Welcome to Events App!</h1>
      </div>
    <div className="welcome-paragraph">
        <h2>Please login to continue</h2>
      </div>
    <div className="loginWrapper">
      <div className="loginForm">
      <div className="login-title">
        <h3>Login</h3>
      </div>
      <Form onSubmit={(e) => submit(e)}>
        <Form.Group className="mb-3" controlId="formUsername">
          <div className="usernameLabel">
            <Form.Label></Form.Label>
          </div>
          <Form.Control placeholder="username" name="username" disabled={disabled}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <div className="passwordLabel">
            <Form.Label></Form.Label>
          </div>
          <Form.Control placeholder="password" type="password" name="password" disabled={disabled}/>
        </Form.Group>

        <div className="loginButton">
          <Button variant="primary" type="submit" className="loginBtn" disabled={disabled}>
            Login
          </Button>
        </div>
      </Form>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Login;
