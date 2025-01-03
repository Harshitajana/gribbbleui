import React, { useState } from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCogs, FaMailBulk,FaExclamation } from "react-icons/fa";
const Alertonoff = () => {
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
    <div className="bg-color2">
    <div className="container">
      <div className="header d-flex align-items-center">
              <FaExclamation className="user-logo" />
      <h1>Alert On/Off</h1>
      </div>
      <table className="tbl1">
        <thead className="thead1">
          <tr>
            <th>Machine</th>
            <th>Alert On/Off</th>
          </tr>
        </thead>
        <tbody className="thead1">
          {/* All Machines Row */}
          <tr>
            <td>All Machines</td>
            <td>
              <div
                className={`switch-container ${Object.values(switchStates).every((state) => state) ? "on" : "off"}`}
                onClick={() =>
                  setSwitchStates((prevState) =>
                    Object.keys(prevState).reduce(
                      (acc, key) => ({
                        ...acc,
                        [key]: !Object.values(prevState).every(
                          (state) => state
                        ),
                      }),
                      {}
                    )
                  )
                }
              >
                <div className="switch"></div>
                <span className="switch-text">
                  {Object.values(switchStates).every((state) => state) ? "On" : "Off"}
                </span>
              </div>
            </td>
          </tr>

          {/* Individual Machines */}
          {Object.keys(switchStates).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>
                <div
                  className={`switch-container ${switchStates[key] ? "on" : "off"}`}
                  onClick={() => toggleSwitch(key)}
                >
                  <div className="switch"></div>
                  <span className="switch-text">{switchStates[key] ? "On" : "Off"}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
    </div>
  );
};

export default Alertonoff;
