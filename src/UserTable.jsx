import React, { useState } from "react";
// Using React logo as user logo
import { FaUser,FaLock,FaLongArrowAltRight,FaMailBulk,FaSearch,FaEdit,FaBuilding } from 'react-icons/fa'; 
import "./index.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css';// Add styles for your app

const UserTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      firstName: "Harshit",
      lastName: "Bhai",
      mobile: "0000123456",
      email: "abc@gmail.com",
      role: "Owner",
      status: "Active",
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-color2" style={{ height: '100vh' }}>
    <div className="container">
      <div className="header d-flex align-items-center">
        <FaUser className="user-logo"/>
        
        <h1 className="h11">User Management</h1>
      </div>
     
      <Form>
      <Form.Group className="mb-3 userids search-bar" controlId="formBasicEmail"> 
        <span className="usericon"> <FaSearch size={18 } color="#212529" /></span>
        <Form.Control type="text"  placeholder="type to search...." className="form-class1"   /> 
           <button className="export">Add New</button>
         
      </Form.Group>
      </Form>
      <div className="table2">
      <table className="tbl1">
        <thead className="thead1">
          <tr>
            <th>Action</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>User Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody  className="thead1">
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>
                <button className="edit-button"><FaEdit className="editicon"/></button>
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.mobile}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className={user.status.toLowerCase()}>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );
};

export default UserTable;
