import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { jsPDF } from "jspdf";
import Papa from "papaparse";
import pdf from "./pdf/work-summary-data (1).pdf"

const ReportsTableHeader = () => {
  const ACTIVITY_LOG_DATA = [
    {
      date: "Oct 14",
      time: "11:05pm - 11:31pm",
      employee: "Divyesh",
      project: "project1",
      duration: "00:26",
    },
    {
      date: "Oct 14",
      time: "11:00pm - 11:05pm",
      employee: "Divyesh",
      project: "project1",
      duration: "4 secs",
    },
  ];

  const WORK_SUMMARY_DATA = [
    {
      project: "project1",
      employee: "Divyesh",
      time: "08:02",
    },
  ];

  const [activeTab, setActiveTab] = useState('work-summary');

  const exportCSV = () => {
    const dataToExport = activeTab === 'work-summary' ? WORK_SUMMARY_DATA : ACTIVITY_LOG_DATA;
    const csv = Papa.unparse(dataToExport);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${activeTab}-data.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const exportPDF = () => {
    const doc = new jsPDF();
  
    if (activeTab === 'work-summary') {
      const headers = ["Project", "Member", "Time"];
      const data = WORK_SUMMARY_DATA.map(item => [
        item.project,
        item.employee,
        item.time,
      ]);
  
      doc.text("Work Summary", 10, 10);
  
      let startY = 20;
      const startX = 10;
      const rowHeight = 10;
  
      headers.forEach((header, index) => {
        doc.text(header, startX + index * 50, startY);
      });
  
      startY += rowHeight;
      data.forEach(row => {
        row.forEach((cell, index) => {
          doc.text(cell.toString(), startX + index * 50, startY);
        });
        startY += rowHeight;
      });
    } else {
      const headers = ["Date", "Time", "Employee", "Project", "Duration"];
      const data = ACTIVITY_LOG_DATA.map(item => [
        item.date,
        item.time,
        item.employee,
        item.project,
        item.duration,
      ]);
  
      doc.text("Activity Log", 10, 10);
  
      // Draw the table manually
      let startY = 20;
      const startX = 10;
      const rowHeight = 10;
  
      // Draw headers
      headers.forEach((header, index) => {
        doc.text(header, startX + index * 35, startY);
      });
  
      // Draw data rows
      startY += rowHeight;
      data.forEach(row => {
        row.forEach((cell, index) => {
          doc.text(cell.toString(), startX + index * 35, startY);
        });
        startY += rowHeight;
      });
    }
  
    // Save the PDF directly without opening in a new tab
    doc.save(`${activeTab}-data.pdf`);
    const pdfUrl = '/${activeTab}-data.pdf';

document.getElementById('pdf-button').onclick = function() {
    window.open(pdfUrl, '_blank');
};
  };
  

  const renderWorkSummaryTable = () => {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Project</th>
            <th>Employee</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {WORK_SUMMARY_DATA.map((item, index) => (
            <tr key={index}>
              <td>{item.project}</td>
              <td>{item.employee}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderActivityLogTable = () => {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Employee</th>
            <th>Project</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {ACTIVITY_LOG_DATA.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.employee}</td>
              <td>{item.project}</td>
              <td>{item.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="reports-table_header">
          <div className="row align-items-center">
            <div className="col-lg-6  col-md-6 d-flex justify-content-start">
              <ul className="nav nav-tabs reports-table_tabs">
                <li className="nav-item  margs">
                  <button
                    className={`buttun1 ${activeTab === 'work-summary' ? 'active' : ''}`}
                    title="Work Summary"
                    type="button"
                    onClick={() => setActiveTab('work-summary')}
                  >
                    Work Summary
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`buttun1 ${activeTab === 'activity-log' ? 'active' : ''}`}
                    title="Activity Log"
                    type="button"
                    onClick={() => setActiveTab('activity-log')}
                  
                  >
                    Activity Log
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-lg-6  col-md-6 d-flex gap-4 justify-content-end mt-md-0">
              <button
                className="export"
                onClick={exportPDF}
                title="Export as PDF"
                id="pdf-button"
              >
                  
                Export as PDF
                
              </button>
              <button
                className="export"
                onClick={exportCSV}
                title="Export as CSV"
              >
               
                Export as CSV
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid col-md-10">
        <div className="content mt-3">
          {activeTab === 'work-summary' && renderWorkSummaryTable()}
          {activeTab === 'activity-log' && renderActivityLogTable()}
        </div>
      </div>
    </div>
  );
};

export default ReportsTableHeader;
