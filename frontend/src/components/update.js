import React, { useState,useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Update = () => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Category, setCat] = useState("");
  const [Date, setDate] = useState("");
  const [id, setID] = useState(null);


  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setCat(localStorage.getItem("category"));
    setDate(localStorage.getItem("date"));
  }, []);


  const navigate = useNavigate();

  const updateAPIData = () => {
    axios.put(`/update/${id}/`, {
        Name,
         Age,
         Category,
         Date
	})
  navigate('/');
}

  return (
    <div>
        <h1>Update Doner</h1>
        <Form className="create-form">
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Enter Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Input
              fluid
              label="Age"
              placeholder="Enter Age"
              value={Age}
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
              <input type="date"  value={Date} onChange={(e) => setDate(e.target.value)} />
            </Form.Field>
          </Form.Group>
         
                <Button type='submit' onClick={updateAPIData}>Update</Button>
           

          
        </Form>
      </div>
  );
};

export default Update;
