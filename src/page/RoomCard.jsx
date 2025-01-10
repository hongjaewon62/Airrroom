import React, {useState} from "react";
import styled from "styled-components";

const CardStyled = styled.span`
    background: ${(props) => props.available ? "#e3f2fd" : "#ffebee"};
    color: ${(props) => props.available ? "#1976d2" : "#c62828"};
    margin-left: 130px;
    border-radius: 20px;
`;

const CardContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin: 10px;
`;

const RoomCard = ({room}, props) => {
    const [available, setAvailable] = useState(room?.usable);
    return (
        <CardContainer>
            <div><b>{room?.title}</b><CardStyled available={available}>{available ? "사용가능": "사용중"}</CardStyled></div>
            <div>수용 인원 : {room?.capacity}</div>
            <div>{room?.time}</div>
        </CardContainer>
    );
};

export default RoomCard;