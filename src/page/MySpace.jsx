import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    //background: rgba(0, 0, 0, 0%);
    justify-content: center;
    align-items: center;
    margin: 30px;
`

const StyledButton = styled.div`
    background: white;
    width: 90%;
    max-width: 800px;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 20px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 10%);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    color: white;
    cursor: pointer;
    font-size: 20px;
    font-weight: 900;
`;

function MySpace() {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <StyledButton onClick={() => {
                navigate("/timeTable");
            }}>시간표</StyledButton>
            <StyledButton onClick={() => {
                navigate("/history");
            }}>예약 내역</StyledButton>
        </Wrapper>
    );
}

export default MySpace;