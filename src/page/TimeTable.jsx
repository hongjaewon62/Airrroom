import React, { useState, useEffect} from "react";
import "./timetable.css";
import { Link, useNavigate } from "react-router-dom";

const week = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];

function Timetable() {
    const navigate = useNavigate();
  const [startHour, setStartHour] = useState("");
  const [startMinute, setStartMinute] = useState("");
  const [endHour, setEndHour] = useState("");
  const [endMinute, setEndMinute] = useState("");
  const [selectedCells, setSelectedCells] = useState([]);
  
  const [className, setClassName] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const[building, setBuilding] = useState("");
  const[roomNumber, setRoomNumber] = useState("");

  const [myTimeTable, setTimeTable] = useState([]);

  const timetable = Array.from({ length: 14 }, (_, index) => index + 9);

  // 셀 선택 초기화
  const clearSelectedCells = () => {
    setSelectedCells([]);
  };

  // 선택된 셀 업데이트
  const updateSelectedCells = () => {
    clearSelectedCells();
    if (dayOfWeek && !isNaN(startHour) && !isNaN(endHour)) {
      const dayIndex = week.indexOf(dayOfWeek);
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
        document.getElementById(`cell-${row}-${col}`).innerHTML = `${className}<br><small>${building}</small>`;
        document.getElementById(`cell-${row}-${col}`).classList.add("filled");
      });

    } else {
      alert("수업명과 시간을 모두 입력해주세요.");
    }
  };

  
  const handleMySpace = async(e) => {
    e.preventDefault();
    const formDate = new FormData(e.target)
    const formValue = {
        startHour: formDate.get("startHour"),
        startMinute: formDate.get("startMinute"),
        endHour: formDate.get("endHour"),
        endMinute: formDate.get("endMinute"),
    }
    const startDayTime = formValue.startHour.toString() + ":" + formValue.startMinute.toString();
    const endDayTime = formValue.endHour.toString()  + ":" +  formValue.endMinute.toString();

    const payload = {
        className: className,
        dayOfWeek: dayOfWeek,
        building: building,
        roomNumber: roomNumber,
        startTime: startDayTime,
        endTime: endDayTime,
    };
    
    const response = await fetch(
        "http://172.30.1.28:8080/api/timetable",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization : 'Bearer ' + sessionStorage.getItem("token")
            },
            body: JSON.stringify(payload),
        }
    )
};
const handleMySpaceCheck = async () => {
    const response = await fetch("http://172.30.1.28:8080/api/timetable", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });

    return response.ok
      ? response.json()
      : Promise.reject("Failed to fetch data");
  };

  useEffect(() => {
    handleMySpaceCheck()
      .then((res) => setTimeTable(res)) // 필요한 작업 수행
      .catch((err) => console.error(err));
  }, []);

  console.log(myTimeTable);
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
                {week.map((day, dayIndex) => (
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
        <form onSubmit={handleMySpace}>
      <div className="input-form">
        <input
          type="text"
          placeholder="수업명"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="class-input"
        />
        <select
          value={dayOfWeek}
          onChange={(e) => setDayOfWeek(e.target.value)}
          className="time-select day-select"
        >
          <option value="">요일 선택</option>
          {week.map((day, index) => (
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
                name="startHour"
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
              name="startMinute"
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
              name="endHour"
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
              name="endMinute"
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
          placeholder="건물"
          value={building}
          onChange={(e) => setBuilding(e.target.value)}
          className="location-input"
        />
                <input
          type="text"
          placeholder="호실"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          className="room-input"
        />
        <button className="add-button" onClick={handleAddClass}>
          수업 추가
        </button>
      </div>
      </form>
    </div>
  );
}

export default Timetable;
