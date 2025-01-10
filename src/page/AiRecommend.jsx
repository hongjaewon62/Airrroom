import React from "react";
import styled from "styled-components";
import RoomList from "./RoomList";
import rooms from './../data/rooms';
import GlobalStyle from "../style/GlobalStyle";
import useSWR from "swr";
import {data} from "react-router-dom";
import Lottie from "lottie-react";
import loadingLottie from "../assets/lottie/eyes.json";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Title = styled.h1`
    color: white;
    font-size: 30px;
    font-weight: 800;
    margin: 30px 0;
`;

const RoomCardContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
`;

const RoomCard = styled.div`
    background: white;
    padding: 25px;
    border-radius: 10px;
    width: 300px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);

    h3 {
        color: #444;
        margin-bottom: 10px;
    }

    p {
        color: #666;
        margin: 5px 0;
    }
`;

const StatusText = styled.div`
    color: white;
    font-size: 18px;
    margin: 10px 0;
`;


const fetchRoom = url => (fetch(url, {
    method: 'GET'
}).then((res) => res.json()));



const fetchTimeTable = url => (fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        }
    }).then((res) => res.json()));


const fetchOpenAI = async (url, timetableData, availableRoomData) => {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-4o-2024-08-06',
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful assistant that recommends classrooms. Always respond with a JSON object in the exact format: {\"nearestFromNextCourse\": [\"room1\", \"room2\", \"room3\"], \"nearest\": [\"room1\", \"room2\", \"room3\"]}"
                    },
                    {
                        role: "user",
                        content: `The following are the names and planar coordinates of specific buildings: 샬롬관: (150, 600)
예술관: (200, 400)
인사관: (300, 500)
경천관: (550, 250)
천은관: (750, 250)
이공관: (850, 150)
Based on these coordinates, the current time (${new Date().toLocaleString()}), the timetable (${JSON.stringify(timetableData)}), and available rooms (${JSON.stringify(availableRoomData)}), provide the three nearest available rooms and three nearest rooms to the next class in the specified JSON format.`
                    }
                ],
                temperature: 0.1,
                max_tokens: 10000,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const content = result.choices[0].message.content;
        
        // Remove markdown formatting if present
        const jsonContent = content.replace(/```json\n|\n```/g, '');
        const parsedContent = JSON.parse(jsonContent);
        return parsedContent;
    } catch (error) {
        console.error('Error calling OpenAI:', error);
        throw error;
    }
};


function AiRecommend() {
    const { data: timetableData, error, isLoading } = useSWR('http://172.30.1.28:8080/api/timetable', fetchTimeTable);

    const { data: availableRoom, error: availableRoomError, isLoading: roomLoading } = useSWR('http://172.30.1.28:8080/api/rooms/available', fetchRoom);

    const { data: aiResponse, error: aiError, isLoading: aiLoading } = useSWR(
        (timetableData && availableRoom) ? ['https://api.openai.com/v1/chat/completions', timetableData, availableRoom] : null,
        ([url, timetable, available]) => fetchOpenAI(url, timetable, available),
        {
            shouldRetryOnError: false, // OpenAI API 실패 시 재시도 비활성화
            revalidateOnFocus: false,  // 페이지 포커스 시 재검증 비활성화 (선택사항)
        }
    );


    if (isLoading || roomLoading || aiLoading) return (
          <Lottie animationData={loadingLottie} />);
    if (error || availableRoomError || aiError) return <h1>Error occurred.</h1>;
    console.log(aiResponse);

    return (
        <>
        <GlobalStyle />
        <Wrapper>
                <Title>지금 내 위치에서 가장 가까워요!</Title>
                <RoomCardContainer>
                    {aiResponse?.nearest?.map((room, index) => (
                        <RoomCard key={index}>
                            <h3>{room}</h3>
                            <p>현재 상태: 사용 가능</p>
                        </RoomCard>
                    ))}
                </RoomCardContainer>

                <Title>다음 강의실에 미리 가있을래요!</Title>
                <RoomCardContainer>
                    {aiResponse?.nearestFromNextCourse?.map((room, index) => (
                        <RoomCard key={index}>
                            <h3>{room}</h3>
                            <p>현재 상태: 사용 가능</p>
                        </RoomCard>
                    ))}
                </RoomCardContainer>
        </Wrapper>
        </>
    );
}

export default AiRecommend;
