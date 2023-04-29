import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import {useNavigate} from "react-router-dom";


const Create = () => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Category, setCat] = useState("");
  const [Date, setDate] = useState("");

  const navigate=useNavigate();

  const postData = () => {
    axios.post("/create/", {
      Name,
      Age,
      Category,
      Date,
    })
    navigate('/');
    window.location.reload();
    
}

  return (
    <>
      <div>
        <h1>Creating Doner</h1>
        <Form className="create-form">
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Input
              fluid
              label="Age"
              placeholder="Enter Age"
              onChange={(e) => setAge(e.target.value)}
            />
            <Form.Field
              label="Blood Group"
              value={Category}
              control="select"
              onChange={(e) => setCat(e.target.value)}
            >
              <option>Choose</option>
              <option value="A+ve">A+ve</option>
              <option value="B+ve">B+ve</option>
            </Form.Field>

            <Form.Field>
              <label>Date</label>
              <input type="date" onChange={(e) => setDate(e.target.value)} />
            </Form.Field>
          </Form.Group>

          <Button onClick={postData} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Create;
