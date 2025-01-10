import React from "react";
import styled from "styled-components";
import RoomList from "./RoomList";
import rooms from './../data/rooms';
import GlobalStyle from "../style/GlobalStyle";
import useSWR from "swr";
import {data} from "react-router-dom";

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
    const { data: timetableData, error, isLoading } = useSWR('http://localhost:8080/api/timetable', fetchTimeTable);

    const { data: availableRoom, error: availableRoomError, isLoading: roomLoading } = useSWR('http://localhost:8080/api/rooms/available', fetchRoom);

    const { data: aiResponse, error: aiError, isLoading: aiLoading } = useSWR(
        (timetableData && availableRoom) ? ['https://api.openai.com/v1/chat/completions', timetableData, availableRoom] : null,
        ([url, timetable, available]) => fetchOpenAI(url, timetable, available),
        {
            shouldRetryOnError: false, // OpenAI API 실패 시 재시도 비활성화
            revalidateOnFocus: false,  // 페이지 포커스 시 재검증 비활성화 (선택사항)
        }
    );


    if (isLoading || roomLoading || aiLoading) return <h1>Loading....</h1>;
    if (error || availableRoomError || aiError) return <h1>Error occurred.</h1>;
    console.log(aiResponse);

    return (
        <>
        <GlobalStyle />
        <Desc>
            추천하는 강의실은 총 {rooms.length}개 입니다
        </Desc>
        <RoomStyled>
            {aiResponse?.nearest && (
                <div>
                    <h2>현재 가까운 강의실:</h2>
                    <ul>
                        {aiResponse.nearest.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
            {aiResponse?.nearestFromNextCourse && (
                <div>
                    <h2>다음 수업에서 가까운 강의실:</h2>
                    <ul>
                        {aiResponse.nearestFromNextCourse.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </RoomStyled>
        </>
    );
}

export default AiRecommend;
