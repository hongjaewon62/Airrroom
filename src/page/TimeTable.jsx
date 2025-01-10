import React, { useState } from "react";
import "./timetable.css";

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri"];

function Timetable() {
  const [className, setClassName] = useState("");
  const [location, setLocation] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [startHour, setStartHour] = useState("");
  const [startMinute, setStartMinute] = useState("");
  const [endHour, setEndHour] = useState("");
  const [endMinute, setEndMinute] = useState("");
  const [selectedCells, setSelectedCells] = useState([]);

  const timetable = Array.from({ length: 14 }, (_, index) => index + 9);

  // 셀 선택 초기화
  const clearSelectedCells = () => {
    setSelectedCells([]);
  };

  // 선택된 셀 업데이트
  const updateSelectedCells = () => {
    clearSelectedCells();
    if (selectedDay && !isNaN(startHour) && !isNaN(endHour)) {
      const dayIndex = daysOfWeek.indexOf(selectedDay);
      const selected = [];

      // 시작 시간부터 종료 시간까지의 셀 선택
      for (let hour = startHour; hour <= endHour; hour++) {
        const rowIndex = hour - 9; // 9시부터 시작
        if (rowIndex >= 0 && rowIndex < 14) {
          selected.push(rowIndex * 5 + dayIndex + 1); // 5일을 기준으로 각 행에 1일부터 5까지의 열
        }
      }
      setSelectedCells(selected);
    }
  };

  // 수업 추가
  const handleAddClass = () => {
    if (selectedCells.length > 0 && className) {
      const updatedCells = selectedCells.map((cellIndex) => {
        const row = Math.floor(cellIndex / 5);
        const col = cellIndex % 5;
        return { row, col };
      });
      updatedCells.forEach(({ row, col }) => {
        document.getElementById(`cell-${row}-${col}`).innerHTML = `${className}<br><small>${location}</small>`;
        document.getElementById(`cell-${row}-${col}`).classList.add("filled");
      });

      // 필드 초기화
      setClassName("");
      setLocation("");
      setSelectedDay("");
      setStartHour("");
      setStartMinute("");
      setEndHour("");
      setEndMinute("");
      clearSelectedCells();
    } else {
      alert("수업명과 시간을 모두 입력해주세요.");
    }
  };

  return (
    <div className="timetable-container">
      <div className="timetable-section">
        <table className="timetable">
          <thead>
            <tr>
              <th>시간</th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((hour, index) => (
              <tr key={index}>
                <td>{hour}</td>
                {daysOfWeek.map((day, dayIndex) => (
                  <td
                    id={`cell-${index}-${dayIndex}`}
                    key={dayIndex}
                    onClick={() => updateSelectedCells()}
                    className={selectedCells.includes(index * 5 + dayIndex + 1) ? "selected" : ""}
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="input-form">
        <input
          type="text"
          placeholder="수업명"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="class-input"
        />
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          className="time-select day-select"
        >
          <option value="">요일 선택</option>
          {daysOfWeek.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>

        <div className="time-range">
          <div className="time-input-group">
            <label>시작 시간</label>
            <div className="time-inputs">
              <input
                type="number"
                placeholder="시"
                min="9"
                max="22"
                value={startHour}
                onChange={(e) => setStartHour(e.target.value)}
                className="hour-input"
              />
              <span>:</span>
              <input
                type="number"
                placeholder="분"
                min="0"
                max="59"
                value={startMinute}
                onChange={(e) => setStartMinute(e.target.value)}
                className="minute-input"
              />
            </div>
          </div>
          <span className="time-separator">~</span>
          <div className="time-input-group">
            <label>종료 시간</label>
            <div className="time-inputs">
              <input
                type="number"
                placeholder="시"
                min="9"
                max="22"
                value={endHour}
                onChange={(e) => setEndHour(e.target.value)}
                className="hour-input"
              />
              <span>:</span>
              <input
                type="number"
                placeholder="분"
                min="0"
                max="59"
                value={endMinute}
                onChange={(e) => setEndMinute(e.target.value)}
                className="minute-input"
              />
            </div>
          </div>
        </div>

        <input
          type="text"
          placeholder="장소"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="location-input"
        />
        <button className="add-button" onClick={handleAddClass}>
          수업 추가
        </button>
      </div>
    </div>
  );
}

export default Timetable;
