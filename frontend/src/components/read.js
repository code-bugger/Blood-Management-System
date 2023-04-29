import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from 'semantic-ui-react';

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/`)
      .then((response) => {
        setAPIData(response.data);
      });
      
  }, []);

  const getData = () => {
    axios.get(`http://127.0.0.1:8000/`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}


const onDelete = (id) => {
  axios.delete(`/delete/${id}/`)
.then(() => {
  getData();
})
}


const setData = (data) => {
  let { id, Name, Age, Category,Date } = data;
  localStorage.setItem("ID", id);
  localStorage.setItem("name", Name);
  localStorage.setItem("age", Age);
  localStorage.setItem("category", Category);
  localStorage.setItem("date", Date);
};

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data)=> {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.Name}</Table.Cell>
                <Table.Cell>{data.Age}</Table.Cell>
                <Table.Cell>{data.Category}</Table.Cell>
                <Table.Cell>{data.Date}</Table.Cell>
                <Table.Cell textAlign='right'>
                  <Link to="/update">
                    <button onClick={() => setData(data)}>Update</button>
                  </Link>
                </Table.Cell >
                <Table.Cell textAlign='right'>
                  <button onClick={() => onDelete(data.id)}>Delete</button>
                </Table.Cell>

              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
