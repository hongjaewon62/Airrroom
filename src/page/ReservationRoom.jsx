import React from "react";
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

const handleSubmit = (e) => {
    e.preventDefault();
  };

function ReservationRoom() {
    return (
        <>
            <GlobalStyle />
            <Desc>
                원하는 강의실을 찾아주세요
            </Desc>
            <Wrapper>
                <Filter onSubmit={handleSubmit}>
                    <FilterInput type="date" />
                    <FilterSelect class="building">
                        <option value>건물 선택</option>
                        <option value="syallom">샬롬관</option>
                        <option value="Gyeongcheon">경천관</option>
                        <option value="insa">인사관</option>
                        <option value="igong">이공관</option>
                        <option value="cheoneun">천은관</option>
                        <option value="yesul">예술관</option>
                    </FilterSelect>
                    <FilterSelect class="time">
                        <option value>시간 선택</option>
                        <option value="9">09:00</option>
                        <option value="10">10:00</option>
                        <option value="11">11:00</option>
                        <option value="12">12:00</option>
                        <option value="13">13:00</option>
                        <option value="14">14:00</option>
                        <option value="15">15:00</option>
                        <option value="16">16:00</option>
                        <option value="17">17:00</option>
                        <option value="18">18:00</option>
                        <option value="19">19:00</option>
                        <option value="20">20:00</option>
                        <option value="21">21:00</option>
                    </FilterSelect>
                    <SubmitStyled type="submit" value="조회" />
                </Filter>
                
                <Personnel>사용할 수 있는 강의실은 <PersonnelCount>{rooms.length}</PersonnelCount>개 입니다</Personnel>
                {/* {rooms.map((room, index) => (
                    <RoomStyled key={index}>
                    <RoomList rooms={[room]} />
                    </RoomStyled>
                ))} */}
                <RoomStyled>
                    <RoomList rooms={rooms} />
                </RoomStyled>
            </Wrapper>
        </>
    );
}

export default ReservationRoom;