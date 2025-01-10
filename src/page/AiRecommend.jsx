import React from "react";
import styled from "styled-components";
import RoomList from "./RoomList";
import rooms from './../data/rooms';
import GlobalStyle from "../style/GlobalStyle";

const Desc = styled.div`
    color:white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    font-size: 30px;
    font-weight: 800;
`;

const RoomStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 1.5rem;
    transition: transform 0.3s;
    margin-bottom: 1rem;
`;

function AiRecommend() {
    return (
        <>
        <GlobalStyle />
        <Desc>
            추천하는 강의실은 총 {rooms.length}개 입니다
        </Desc>
        <RoomStyled>
            <RoomList rooms={rooms} />
        </RoomStyled>
        </>
    );
}

export default AiRecommend;