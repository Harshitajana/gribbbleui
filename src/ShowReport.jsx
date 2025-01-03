import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // For Bootstrap styling
import { format } from "date-fns";
import { FaCog } from 'react-icons/fa';
import './index.css';
import Calendar from './Cal';
import { FaCogs, FaMailBulk } from "react-icons/fa";
// Dropdown component with outside click detection
const useOutsideClick = (ref, onClose) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClose]);
};

// Shift Selector Component
const ShiftSelector = ({ shifts, handleSelectShift }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="btn btn-primary d-flex align-items-center" onClick={toggleDropdown}>
        <FaCog size={18} color="black" className="me-2" />
        Shift Select
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu show">
          {shifts.map((shift, index) => (
            <label key={index}>
              <input
                type="radio"
                name="shift"
                value={shift}
                onChange={() => handleSelectShift(shift)}
              />
              {shift}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

// Machine Dropdown Component
const MachineDropdown = ({ machines, selectedMachine, handleMachineChange, handleSelectAllMachines }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="btn btn-primary d-flex align-items-center" onClick={toggleDropdown}>
        <FaCog size={18} color="black" className="me-2" />
        Machine
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu show">
          <label>
            <input
              type="checkbox"
              checked={selectedMachine.length === machines.length}
              onChange={handleSelectAllMachines}
            />
            Select All Machines
          </label>
          {machines.map((machine, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={selectedMachine.includes(machine)}
                onChange={() => handleMachineChange(machine)}
              />
              {machine}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

// Date Dropdown Component
const DateDropdown = ({ selectedDate }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

  const formattedDate = format(selectedDate, 'MMM dd');

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="btn btn-primary d-flex align-items-center" onClick={toggleDropdown}>
        <FaCog size={18} color="black" className="me-2" />
        {formattedDate}
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu show">
          <label>{formattedDate}</label>
        </div>
      )}
    </div>
  );
};

// Main Component that integrates all dropdowns
const ShowReport = () => {
  const [selectedMachine, setSelectedMachine] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedShift, setSelectedShift] = useState(null);
  const shifts = ['Day Shift', 'Night Shift'];

  const handleSelectShift = (shift) => {
    setSelectedShift(shift);
  };

  const handleMachineChange = (machine) => {
    setSelectedMachine((prevState) => {
      const newMachines = prevState.includes(machine)
        ? prevState.filter((m) => m !== machine)
        : [...prevState, machine];
      return newMachines;
    });
  };

  const handleSelectAllMachines = () => {
    if (selectedMachine.length === machines.length) {
      setSelectedMachine([]); // Deselect all if all are selected
    } else {
      setSelectedMachine(machines); // Select all machines
    }
  };

  const machines = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7']; // Machines data

  return (
    <div className="bg-color2" style={{ height: '100vh' }}>
    <div className="container ">
      <div className="header d-flex align-items-center mb-5">
        <FaCogs className="user-logo" />
        <h1 className="h11">Shift Wise Report</h1>
      </div>
      <div className="row">
        <div className="mar-r">
          <ShiftSelector
            shifts={shifts}
            handleSelectShift={handleSelectShift}
          />
        </div>

        <div className="mar-r flex-grow-1">
          <MachineDropdown
            machines={machines}
            selectedMachine={selectedMachine}
            handleMachineChange={handleMachineChange}
            handleSelectAllMachines={handleSelectAllMachines}
          />
        </div>

        <div className="mar-r d-flex justify-content-end">
          <Calendar />
        </div>
      </div>
      <div className="row align-item-center justify-content-center mt-5" >
                <div className="col-lg-12 d-flex align-item-center justify-content-center mt-5">
            <button
                className="export btn1 wdh mt-5"
                
                
               
              >
                  Show Report
                
                
              </button>
              </div>
            </div>
    </div>
    </div>
  );
};

export default ShowReport;
