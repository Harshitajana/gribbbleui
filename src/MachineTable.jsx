import React, { useState } from "react";
import { FaCogs, FaMailBulk,FaSearch ,FaEdit } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { MdHeight } from "react-icons/md";

const MachineTable = () => {
  const [switchStates, setSwitchStates] = useState({
    EMB: true,
    M1: true,
    M2: true,
    M3: true,
    M4: true,
    M5: true,
    M6: true,
    M7: true,
    M8: true,
  });

  const toggleSwitch = (key) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="bg-color2   " style={{ height: '100vh' }}>
    <div className="container">
      <div className="header d-flex align-items-center">
        <FaCogs className="user-logo" />
        <h1 className="h11">Machine Management</h1>
      </div>

      <div className="mb-3 search-bar d-flex">
        <span className="usericon">
          <FaSearch size={18} color="#212529" />
        </span>
        <input type="text" placeholder="Type to search..." className="form-class1" />
        <button className="export">Add New</button>
      </div>
     <div className="tabel2">
      <table className="table table-bordered tbl1">
        <thead className="thead1">
          <tr>
            <th>Edit</th>
            <th>Sr No</th>
            <th>Machine Code</th>
            <th>Mobile Name</th>
            <th>Machine Group</th>
            <th>UDID</th>
            <th>Alert On/Off</th>
            <th>Efficiency Unit</th>
            <th>Total Head</th>
            <th>Total Needle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
               <button className="edit-button"><FaEdit className="editicon"/></button>
            </td>
            <td>1</td>
            <td>M1234</td>
            <td>Model X</td>
            <td>Group A</td>
            <td>UD123456789</td>
            <td>
              <div
                className={`switch-container ${switchStates.EMB ? "on" : "off"}`}
                onClick={() => toggleSwitch("EMB")}
              >
                <div className="switch"></div>
                <span className="switch-text">{switchStates.EMB ? "On" : "Off"}</span>
              </div>
            </td>
            <td>85%</td>
            <td>4</td>
            <td>64</td>
          </tr>
          <tr>
            <td>
            <button className="edit-button"><FaEdit className="editicon"/></button>
            </td>
            <td>2</td>
            <td>M5678</td>
            <td>Model Y</td>
            <td>Group B</td>
            <td>UD987654321</td>
            <td>
              <div
                className={`switch-container ${switchStates.M1 ? "on" : "off"}`}
                onClick={() => toggleSwitch("M1")}
              >
                <div className="switch"></div>
                <span className="switch-text">{switchStates.M1 ? "On" : "Off"}</span>
              </div>
            </td>
            <td>90%</td>
            <td>6</td>
            <td>96</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );
};

export default MachineTable;
