import React, {useState} from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    background: white;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin: 10px;
    cursor: pointer;
`;

const RoomCard = ({room}, props) => {
    const handleClick = () => {
        alert(`${room?.roomNumber}호 예약했습니다.`);
    };

    return (
        <CardContainer onClick={handleClick}>
            <div><b>{room?.building}</b></div>
            <div>수용 인원 : {room?.capacity}</div>
            <div>{room?.roomNumber}호</div>
        </CardContainer>
    );
};

export default RoomCard;