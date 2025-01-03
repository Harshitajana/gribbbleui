import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
} from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedShortcut, setSelectedShortcut] = useState("current_month");

  // Helper functions
  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const isSameDay = (day1, day2) =>
    format(day1, "yyyy-MM-dd") === format(day2, "yyyy-MM-dd");

  const generateCalendar = () => {
    const start = startOfWeek(startOfMonth(currentDate));
    const end = endOfWeek(endOfMonth(currentDate));
    const days = [];
    let day = start;

    while (day <= end) {
      days.push(day);
      day = addDays(day, 1);
    }
    return days;
  };

  const renderHeader = () => (
    <div className="calendar-header">
      <button onClick={handlePrevMonth}>◀</button>
      <div>{format(currentDate, "MMMM yyyy")}</div>
      <button onClick={handleNextMonth}>▶</button>
    </div>
  );

  const renderDaysOfWeek = () => (
    <div className="calendar-days">
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
        <div key={index} className="day-name">
          {day}
        </div>
      ))}
    </div>
  );

  const renderDays = () => {
    const calendarDays = generateCalendar();
    return (
      <div className="calendar-grid">
        {calendarDays.map((day, index) => (
          <button
            key={index}
            className={`calendar-day ${
              isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            onClick={() => setSelectedDate(day)}
          >
            {format(day, "d")}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="mar-r">
      {/* Dropdown for the whole content (header, shortcuts, and calendar) */}
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle d-flex align-items-center"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaCalendarAlt className="me-2" />
          {format(selectedDate, "MMM d")}
        </button>
        <div className="dropdown-menu size">
          {/* Full Content inside the dropdown */}
          <div>
            {/* Header Section */}
            {renderHeader()}

            {/* Shortcuts Section */}
            <div className="row justify-content-between">
              <div className="col-3">
                <ul className="date_picker_shortcuts">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedDate(new Date())}
                    >
                      Current Date
                    </button>
                  </li>
                  <li
                    className={`date_picker_shortcuts_item ${
                      selectedShortcut === "current_week"
                        ? "is-shortcut_current_week"
                        : ""
                    }`}
                  >
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedDate(startOfMonth(currentDate))}
                    >
                      Current week
                    </button>
                  </li>
                  <li
                    className={`date_picker_shortcuts_item ${
                      selectedShortcut === "last_7_days"
                        ? "is-shortcut_last_7_days"
                        : ""
                    }`}
                  >
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedDate(startOfMonth(currentDate))}
                    >
                      Last 7 Days
                    </button>
                  </li>
                  <li
                    className={`date_picker_shortcuts_item ${
                      selectedShortcut === "last_3_months"
                        ? "is-shortcut_last_3_months"
                        : ""
                    }`}
                  >
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedDate(startOfMonth(currentDate))}
                    >
                      Last 3 Months
                    </button>
                  </li>
                  <li className="date_picker_shortcuts_item is-shortcut_custom">
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedDate(startOfMonth(currentDate))}
                    >
                      Custom
                    </button>
                  </li>
                </ul>
              </div>

              {/* Calendar Days Section */}
              <div className="col-9">
                {renderDaysOfWeek()}
                {renderDays()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
