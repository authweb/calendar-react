import React, { useState } from "react";
import "../css/Calendar.css"; // Путь к вашему CSS файлу

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const renderCalendarDays = () => {
    const daysOfWeek = currentDate.getDay();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    const daySlots = [];
    const today = new Date();

    // Заполняем начальные пустые ячейки, если месяц начинается не с воскресенья
    for (let emptyDays = 1; emptyDays < daysOfWeek; emptyDays++) {
      daySlots.push(
        <button key={`empty-${emptyDays}`} className="calendar-day empty"></button>
      );
    }

    // Заполняем ячейки днями текущего месяца
    for (let day = 1; day <= daysInMonth; day++) {
      // Определяем, является ли день сегодняшним
      const dayString = `${currentDate.getFullYear()}-${(
        currentDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
      const isToday =
        new Date(dayString).toDateString() === today.toDateString();

      daySlots.push(
        <button type="button" key={day} className={`calendar-day${isToday ? " today" : ""} calendar-day__view` }>
          <span >{day}</span>
        </button>
      );
    }

    return daySlots;
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };
  const dayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  return (
    <>
      <header className="calendar-header">
        <h4 className="headline">
          {currentDate.toLocaleDateString("default", {
            month: "long",
            year: "numeric",
          })}
        </h4>

        <div className="end">
          <button onClick={goToPreviousMonth} className="button">&lt;</button>
          <button onClick={goToNextMonth} className="button">&gt;</button>
        </div>
      </header>
      <div className="calendar-grid">
        {dayNames.map((name) => (
          <div key={name} className="calendar-weekday">
            {name}
          </div>
        ))}
        {renderCalendarDays()}
      </div>
    </>
  );
};

export default Calendar;
