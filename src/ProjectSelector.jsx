import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // For Bootstrap styling
import { format } from "date-fns";
import { FaCog } from 'react-icons/fa';
import './index.css';
import Calendar from './Cal';

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

// Project Dropdown Component
const ProjectDropdown = ({ projects, handleSelectAllChange, handleProjectChange }) => {
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
        Project
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu show">
          <label>
            <input
              type="checkbox"
              checked={projects.selectAll}
              onChange={handleSelectAllChange}
            />
            Select All
          </label>
          {Object.keys(projects)
            .filter((key) => key !== 'selectAll')
            .map((project) => (
              <label key={project}>
                <input
                  type="checkbox"
                  checked={projects[project]}
                  onChange={() => handleProjectChange(project)}
                />
                {project}
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
            Select All 
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
const ProjectSelector = () => {
  const [selectedMachine, setSelectedMachine] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [projects, setProjects] = useState({
    selectAll: false,
    Project1: false,
    Project2: false,
    Project3: false,
    Project4: false,
    Project5: false,
    Project6: false,
    Project7: false,
  });

  const handleSelectAllChange = () => {
    const isChecked = !projects.selectAll;
    const updatedProjects = Object.fromEntries(
      Object.keys(projects).map((key) => [key, isChecked])
    );
    setProjects(updatedProjects);
  };

  const handleProjectChange = (project) => {
    setProjects((prevState) => {
      const updatedState = { ...prevState, [project]: !prevState[project] };
      updatedState.selectAll = Object.keys(updatedState)
        .filter((key) => key !== 'selectAll')
        .every((key) => updatedState[key]);
      return updatedState;
    });
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
    <div className="container-fluid">
      <div className="row">
        <div className="mar-r">
          <ProjectDropdown
            projects={projects}
            handleSelectAllChange={handleSelectAllChange}
            handleProjectChange={handleProjectChange}
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
    </div>
  );
};

export default ProjectSelector;
