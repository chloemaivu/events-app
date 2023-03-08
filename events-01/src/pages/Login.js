import React, { useState } from "react";

function Login(props) {
  const [disabled, cDisabled] = useState(false);

  async function submit(e) {
    e.preventDefault();
    cDisabled(true);

    props.client
      .fetchUsers(e.target.username.value, e.target.password.value)
      .then((response) => {
        cDisabled(false);
        console.log(response)
        props.loggedIn(response.data.token);
      })
      .catch(() => {
        alert("an error occured, please try again");
        cDisabled(false);
      });
  }

  return (
    <>
      Login
      <br />
      <form onSubmit={(e) => submit(e)}>
        username
        <br />
        <input type="text" name="username" disabled={disabled} />
        <br />
        password
        <br />
        <input type="password" name="password" disabled={disabled} />
        <br />
        <br />
        <button type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
}

export default Login;
