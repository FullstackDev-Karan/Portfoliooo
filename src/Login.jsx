import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";

function Login() {
  const [inpvalue, setInpvalue] = useState({
    username: "",
    password: "",
  });

  const inpChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setInpvalue({ ...inpvalue, [name]: value });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "200px", fontSize: "40px" }}>
      <h1 style={{ backgroundColor: "orange", width: "500px", margin: "auto" }}>
        Enter Your Details to Login
      </h1>
      <form>
        <label for="username">Username</label>
        <br />
        <Input
          name="username"
          id="username"
          onChange={inpChange}
          placeholder="Enter your username"
        ></Input>
        <br />
        <label for="password">Password</label>
        <br />
        <Input
          name="password"
          id="password"
          onChange={inpChange}
          placeholder="Enter your password"
        ></Input>
        <br />
        <Button style={{ backgroundColor: "orange", margin: "20px" }}>
          submit
        </Button>
      </form>
    </div>
  );
}

export default Login;
