import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../style/GlobalStyle";
import RoomList from "./RoomList";
import rooms from "../data/rooms";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Desc = styled.div`
    color:white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    font-size: 30px;
    font-weight: 800;
`;

const Filter = styled.form`
    background: rgba(255, 255, 255, 0.95);
    padding: 1.5rem;
    border-radius: 10px;
    display: flex;
    gap: 1rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    width: 70%;
    margin-top: 20px;
`;

const FilterInput = styled.input`
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 100%;
    text-align: center;
    font-size: 18px;
`;

const FilterSelect = styled.select`  
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 100%;
    text-align: center;
    font-size: 18px;
`;

const RoomStyled = styled.div`
    border-radius: 10px;
    transition: transform 0.3s;
    margin-bottom: 1rem;
`;

const Personnel = styled.div`
    width: 50%;
    height: 50px;
    margin: 20px;
    background: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
`;

const PersonnelCount = styled.span`
    color: blue;
    margin: 5px;
    font-weight: 700px;
`

const SubmitStyled = styled.input`
    padding: 0.8rem 2rem;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

function ReservationRoom() {
    const [checkRoom, setCheckRoom] = useState([])
    const [date, setDate] = useState("");
    const [building, setBuilding] = useState("");
    const [time, setTime] = useState("");;
    
const handleRoomCheck = async (e) => {
    if (e) e.preventDefault()
    const queryParams = new URLSearchParams({
        date,
        building,
        time,
    });

    const response = await fetch(`http://172.30.1.28:8080/api/reservation/available-room-list?${queryParams}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
    });
    if (response.ok) {
        const data = await response.json();
        
        // 데이터가 있을 때만 처리
        if (data && data.length > 0) {
            setCheckRoom(data);
        } else {
            // 데이터가 없을 경우 아무것도 출력하지 않음
            return null;  // 또는 빈 배열 [] 반환
        }
    } else {
        return Promise.reject("Failed to fetch data");
    }
  };

//   useEffect(() => {
//     handleRoomCheck()
//   }, []);
    return (
        <>
            <GlobalStyle />
            <Desc>
                원하는 강의실을 찾아주세요
            </Desc>
            <Wrapper>
                <Filter onSubmit={handleRoomCheck}>
                    <FilterInput
                        type="date"
                        name="data"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <FilterSelect name="building" value={building} onChange={(e) => setBuilding(e.target.value)}>
                        <option value>건물 선택</option>
                        <option value="샬롬관">샬롬관</option>
                        <option value="경천관">경천관</option>
                        <option value="인사관">인사관</option>
                        <option value="이공관">이공관</option>
                        <option value="천은관">천은관</option>
                        <option value="예술관">예술관</option>
                    </FilterSelect>
                    <FilterSelect name="time" value={time} onChange={(e) => setTime(e.target.value)}>
                        <option value>시간 선택</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                    </FilterSelect>
                    <SubmitStyled type="submit" value="조회" />
                </Filter>
                
                <Personnel>사용할 수 있는 강의실은 <PersonnelCount>{checkRoom.length}</PersonnelCount>개 입니다</Personnel>
                {/* {rooms.map((room, index) => (
                    <RoomStyled key={index}>
                    <RoomList rooms={[room]} />
                    </RoomStyled>
                ))} */}
                <RoomStyled>
                    <RoomList rooms={checkRoom} />
                </RoomStyled>
            </Wrapper>
        </>
    );
}

export default ReservationRoom;