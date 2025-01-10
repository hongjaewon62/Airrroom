import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0%);
    justify-content: center;
    align-items: center;
    margin: 30px;
`

function MySpace() {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <Button title="시간표 등록하기" onClick={() => {
                navigate("/timeTable");
            }}></Button>
            <Button title="예약 내역" onClick={() => {
                navigate("/history");
            }}></Button>
        </Wrapper>
    );
}

export default MySpace;