import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const BootstrapProgressBar = ({ percentage }) => {
  const getColor = () => {
    if (percentage === 100) return "bg-success"; // Green
    if (percentage > 50) return "bg-warning"; // Yellow
    return "bg-danger"; // Red
  };

  return (
    <div className="progress" style={{ height: "25px", borderRadius: "10px" }}>
      <div
        className={`progress-bar ${getColor()}`}
        role="progressbar"
        style={{ width: `${percentage}%` }}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {percentage}%
      </div>
    </div>
  );
};

export default BootstrapProgressBar;
