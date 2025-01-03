import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import BootstrapProgressBar from "./Employee";

const EmployeeProgress = () => {
  const employees = [
    { name: "Alice", percentage: 100 },
    { name: "Bob", percentage: 75 },
    { name: "Charlie", percentage: 30 },
  ];

  return (
    <div className="widths">
      <h3 className="text-center mb-4">Employee Work Progress</h3>
    
        {employees.map((employee, index) => (
          <div key={index} className=" mb-4">
            <div className="card p-3">
              <h5 className="text-center">{employee.name}</h5>
              <BootstrapProgressBar percentage={employee.percentage} />
            </div>
          </div>
        ))}
      </div>
 
  );
};

export default EmployeeProgress;
