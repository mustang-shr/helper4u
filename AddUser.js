import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    Age: "",
    School: "",  
    Class: "",
    Division: "",
    Status:""
  });

  const { name, Age, School, Class, Division ,Status} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Age"
              name="Age"
              value={Age}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="School"
              className="form-control form-control-lg"
              placeholder="Enter Your School"
              name="School"
              value={School}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Yourclass "
              name="class"
              value={Class}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group"/>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Division"
              name="Division"
              value={Division}
              onChange={e => onInputChange(e)}
            />
            <div className="form-group">
            <input
              type={}
              className="form-control form-control-lg"
              placeholder="Enter Your status
              name={Status}
              value={Status}
              onChange={e => onInputChange(e)}
            /
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;