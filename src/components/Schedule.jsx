import React from "react";

import "../css/Schedule.css";

const Schedule = ({ events }) => {
  return (
    <div className="schedule">
      {events.map((event, index) => (
        <div key={index} className="schedule-event">
          {/* Отобразите информацию о событии здесь */}
          <div className="event-time">{event.time}</div>
          <div className="event-details">{event.details}</div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
