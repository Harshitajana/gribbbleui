import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaLock, FaLongArrowAltRight,FaEdit, FaMailBulk, FaSearch, FaBuilding } from 'react-icons/fa';

const ChangePAssword = () => {
  const [logo, setLogo] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-color2" style={{ height: '150vh' }}>
      <div className="">
        <div className="container">
          <div className="header d-flex align-items-center mb-5">
            <FaUser className="user-logo" />
            <h1 className="h11">Change Password</h1>
          </div>
          <form className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer03" className="lbl1 required input">User Email</label>
              <input type="Email" className="form-control input1" id="validationServer03" placeholder="please enter User name name" required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer03" className="lbl1 required input">Old Password</label>
              <input type="password" className="form-control input1" id="validationServer03" placeholder="please enter old password" required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer03" className="lbl1 required input">New Password</label>
              <input type="password" className="form-control input1" id="validationServer03" placeholder="please enter new password" required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer03" className="lbl1 required input">Re-Type New Password</label>
              <input type="password" className="form-control input1" id="validationServer03" placeholder="please enter re-type new password" required />
            </div>
           
          </form>
          <div className="row align-item-center justify-content-center">
            <div className="col-lg-12 d-flex align-item-center justify-content-center">
              <button className="export btn1 wdh">Update</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ChangePAssword;
