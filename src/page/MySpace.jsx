import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function MySpace() {
    const navigate = useNavigate()
    return (
        <>
            <Button title="시간표 등록하기" onClick={() => {
                navigate("/timeTable");
            }}></Button>
            <Button title="예약 내역" onClick={() => {
                navigate("/history");
            }}></Button>
        </>
    );
}

export default MySpace;