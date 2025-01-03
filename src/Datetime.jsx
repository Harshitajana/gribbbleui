import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file

function Apps() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update the date and time every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container">
      
      <p className="datetime">{currentDateTime.toLocaleString()}</p>
    </div>
  );
}

export default Apps;
