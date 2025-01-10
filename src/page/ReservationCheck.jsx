import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../style/GlobalStyle";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 40px 20px;
    min-height: 100vh;
`;

const Title = styled.h1`
    color: white;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 40px;
`;

const ReservationCard = styled.div`
    background: white;
    width: 90%;
    max-width: 800px;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ReservationInfo = styled.div`
    flex-grow: 1;
`;

const RoomInfo = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
`;

const TimeInfo = styled.div`
    color: #666;
    font-size: 16px;
`;

const DateInfo = styled.div`
    font-size: 18px;
    color: #444;
    min-width: 120px;
`;

const CancelButton = styled.button`
    background: #ff6b6b;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    //transition: background 0.2s;

    &:hover {
        background: #ff5252;
    }
`;

function ReservationCheck() {

    // const handleReservationCheck = async () => {
    //     const response = await fetch("http://172.30.1.28:8080/api/reservation", {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    //       },
    //     });
    
    //     return response.ok
    //       ? response.json()
    //       : Promise.reject("Failed to fetch data");
    //   };
    
    //   useEffect(() => {
    //     handleMySpaceCheck()
    //       .then((res) => setTimeTable(res)) // 필요한 작업 수행
    //       .catch((err) => console.error(err));
    //   }, []);

    const [reservations, setReservations] = useState([
        {
            id: 1,
            date: "2025.01.10",
            room: "이공관 101호",
            time: "13:00~15:00시"
        },
        {
            id: 2,
            date: "2025.01.08",
            room: "경천관 201호",
            time: "11:00~13:00시"
        },
        {
            id: 3,
            date: "2025.01.06",
            room: "천은관 402호",
            time: "16:00~18:00시"
        }
    ]);

    const handleCancel = (id) => {
        // 예약 취소 로직 구현
        setReservations(reservations.filter(reservation => reservation.id !== id));
    };

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Title>나의 예약 내역</Title>
                {reservations.map((reservation) => (
                    <ReservationCard key={reservation.id}>
                        <DateInfo>{reservation.date}</DateInfo>
                        <ReservationInfo>
                            <RoomInfo>{reservation.room}</RoomInfo>
                            <TimeInfo>{reservation.time}</TimeInfo>
                        </ReservationInfo>
                        <CancelButton onClick={() => handleCancel(reservation.id)}>
                            예약 취소
                        </CancelButton>
                    </ReservationCard>
                ))}
            </Wrapper>
        </>
    );
}

export default ReservationCheck;