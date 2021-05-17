import { Button } from "@material-ui/core";
import React, { useState } from "react";

const InputForm = () => {
  const [register, setRegister] = useState({
    name: " ",
    email: " ",
    phone: " ",
  });

  const [record, setRecord] = useState([]);

  const InputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setRegister({ ...register, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...register, id: new Date().getTime().toString() };

    setRecord([...record, newRecord]);

    setRegister({ name: " ", email: "", phone: "" });
    console.log(record);
  };

  return (
    <div className="Registerer">
      <form action=" " onSubmit={handleSubmit}>
        <h1>This is a Input form</h1>
        <label for="name">Name</label> <br />
        <input
          type="text"
          name="name"
          id="name"
          value={register.name}
          onChange={InputChange}
        ></input>
        <br />
        <label for="email">Email</label> <br />
        <input
          type="text"
          name="email"
          id="email"
          value={register.email}
          onChange={InputChange}
        ></input>
        <br />
        <label for="phone">Phone No.</label> <br />
        <input
          type="text"
          name="phone"
          id="phone"
          value={register.phone}
          onChange={InputChange}
        ></input>
        <br />
        <br />
        <Button type="submit" style={{ backgroundColor: "orange" }}>
          Register
        </Button>
      </form>
      <div>
        {record.map((record) => {
          return (
            <div>
              <p>{record.name}</p>
              <p>{record.phone}</p>
              <p>{record.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputForm;
