import React, { useState } from "react";
import Calendar from "./components/Calendar"; // Убедитесь, что вы создали этот файл
import Schedule from "./components/Schedule";

import "./css/App.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([
    // Пример событий с датами
    { date: "2024-01-18", time: "09:00", details: "Событие 1" },
    { date: "2024-01-18", time: "10:00", details: "Событие 2" },
    // ...другие события
  ]);

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const filteredEvents = events.filter((event) =>
    isSameDay(new Date(event.date), selectedDate)
  );
  return (
    <div className="app-container">
      <div className="scheduler-container">
        <Schedule events={filteredEvents} />
      </div>
      <div className="calendar-container">
        <Calendar
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
      </div>
    </div>
  );
}

export default App;
