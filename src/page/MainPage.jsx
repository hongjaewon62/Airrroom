import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import MoveButton from "../ui/MoveButton";
import GlobalStyle from "../style/GlobalStyle";

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .mainTitle1 {
        margin-top: 140px ;
        font-size: 40px;
        letter-spacing: 4px;
        font-weight: 600;
        color: white;
    }
    .mainTitle2 {
        margin-top: 40px;
        font-size: 80px;
        letter-spacing: 2px;
        font-weight: 800;
        color: white;
    }
    .mainDescription {
        margin-top: 25px;
        font-size: 20px;
        letter-spacing: 4px;
        font-weight: 600;
        color: white;
    }
`;

const PageButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 40px;
    
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0.7;
    visibility: hidden;
  }
  from {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
                     0 0 20px rgba(255, 255, 255, 0.8),
                     0 0 30px rgba(255, 255, 255, 0.8);
    }
    to {
        text-shadow: 0 0 20px rgba(255, 255, 255, 1),
                     0 0 30px rgba(255, 255, 255, 1),
                     0 0 40px rgba(255, 255, 255, 1);
    }
`;

const HighlightR = styled.span`
    background: white;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: bold;
    animation: ${fadeOut} 1s infinite alternate;
`

function MainPage() {
    const navigate = useNavigate();

    return (
        <>
        <GlobalStyle />
            <Title>
                <div className="mainTitle1"><HighlightR>R</HighlightR>eserve · <HighlightR>R</HighlightR>ecommend · <HighlightR>R</HighlightR>econnect</div>
                <div className="mainTitle2">당신의 공간을 찾아보세요!</div>
                <div className="mainDescription">예약하고 추천받고 다시 연결합니다.</div>
            </Title>
            <PageButton>
                <MoveButton className="recommend" title="AI기반 실시간 강의실 추천" desc={
                    <>
                        시간표를 기반으로 한 AI 추천으로<br/>
                        근처에 비어있는 강의실을<br/>
                        바로 확인해보세요!
                    </>
                } width="300px" height="300px" onClick={() => {
                    navigate("/ai-recommend");
                }} />
                <MoveButton className="recommend" title="강의실 조회/예약" desc={
                    <>
                        원하는 강의실을 조회하고<br />
                        간편하게 예약해보세요!
                    </>
                } width="300px" height="300px" onClick={() => {
                    navigate("/reservation");
                }}/>
            </PageButton>
        </>
    );
}

export default MainPage;