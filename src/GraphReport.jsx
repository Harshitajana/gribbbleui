import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Function to get current week's dates with month names
const getCurrentWeekDates = () => {
  const currentDate = new Date();
  const weekDates = [];
  const options = { month: 'short', day: 'numeric' }; // e.g., "Oct 19"

  // Get the start of the week (Monday)
  const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1));

  // Generate the dates for the week
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    weekDates.push(date.toLocaleDateString('en-US', options)); // Format as "Oct 19"
  }

  return weekDates;
};

const GraphReport = () => {
  const weekDates = getCurrentWeekDates(); // Get current week's dates

  // Sample data for hours worked
  const data = {
    labels: weekDates, // Use dynamic labels for the X-axis
    datasets: [
      {
        label: 'Hours Worked',
        data: [8, 7.5, 10, 8, 6, 4, 3], // Total hours worked for each day
        backgroundColor: '#33E6FF', // Bar color
        borderColor: '#33E6FF',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows dynamic height adjustment
    plugins: {
      legend: {
        display: true, // Show legend
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Hours Worked by Day',
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start Y-axis at 0
        title: {
          display: true,
          text: 'Hours Worked',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Days of the Current Week',
        },
      },
    },
  };

  return (
    <div className="container-fluid p-3">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <div className="graph-container" style={{ height: '500px' }}>
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphReport;
