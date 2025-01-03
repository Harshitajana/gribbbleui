import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaLock, FaLongArrowAltRight,FaEdit, FaMailBulk, FaSearch, FaBuilding } from 'react-icons/fa';

const CompanySetting = () => {
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
    <div className="bg-color2">
      <div className="">
        <div className="container">
          <div className="header d-flex align-items-center mb-5">
            <FaBuilding className="user-logo" />
            <h1 className="h11">Company Settings</h1>
          </div>
          <form className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer03" className="lbl1 required input">Company Name</label>
              <input type="text" className="form-control input1" id="validationServer03" placeholder="please enter company name" required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer03" className="lbl1 required input">Company Code</label>
              <input type="text" className="form-control input1" id="validationServer03" placeholder="please enter company code" required />
            </div>
            <div className="col-md-12 mb-3">
              <label htmlFor="validationServer03" className="lbl1 required input">Company Address</label>
              <textarea className="form-control input2" id="validationServer03" rows="3" placeholder="please enter company address" required></textarea>
            </div>
            <div className="col-md-12 input-group mb-3 ">
              <div className="custom-file d-flex align-content-center">
              <div className="custom-file-logo">
                  {logo && <img src={logo} alt="Company Logo" style={{ maxWidth: '100%' }} />}
                </div>
                <input type="file" className="custom-file-input" id="inputGroupFile02" onChange={handleFileChange} />
                <label className="custom-file-label" htmlFor="inputGroupFile02">Choose Company Logo</label>
               
              </div>
              <div className="input-group-append">
                <span className="input-group-text1 export btn1">Upload</span>
              </div>
            </div>
          </form>
          <div className="row align-item-center justify-content-center">
            <div className="col-lg-12 d-flex align-item-center justify-content-center">
              <button className="export btn1 wdh">Update</button>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <form className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer03" className="lbl1 required input">Company ID</label>
              <input type="number" className="form-control input1" id="validationServer03" placeholder="please enter company ID" required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer03" className="lbl1 required input">Day Start</label>
              <input type="number" className="form-control input1" id="validationServer03" placeholder="please enter shift time" required />
            </div>
            <div className="col-md-12">
              <table className="tbl1">
                <thead className="thead1">
                  <tr>
                    <th>Shift</th>
                    <th>Start time</th>
                    <th>End Time </th>
                    <th>Hours</th>
                  </tr>
                </thead>
                <tbody className="thead1">
                  <tr>
                    <td>Day Shift</td>
                    <td>8:00</td>
                    <td>8:00</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>Day Shift</td>
                    <td>8:00</td>
                    <td>8:00</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
          <div className="row align-item-center justify-content-center">
            <div className="col-lg-12 d-flex align-item-center justify-content-center">
              <button className="export btn1 wdh mt-5">Update ID</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanySetting;
