import React, {useState} from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const Wrapper = styled.div`

    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-family: 'Pretendard', 'Apple SD Gothic Neo', sans-serif;
    width: 100%;
    height: 70px;

  .logo {
    display: flex;
    align-items: center;
  } 
`;

function NavBar() {
    const navigate = useNavigate();

    return (
        <>
        <Wrapper>
            <Button title="My Space" onClick={() => {
                navigate("/MySapce")
            }}></Button>
            <Button title="Log in" onClick={() => {
                //setAcvite(true);
                navigate("/login")
            }} ></Button>
{/* active={active} */}
            <Button title="Create Account" onClick={() => {
                //setSignActive(true);
                navigate("/signUp")
            }}></Button>
            <div className="left-section">
                <Button className="logo" title="AIRRROOM" onClick={() => {
                    navigate("/AIRRROOM");
                }}></Button>
            </div>
        </Wrapper>
        {/* onClick={() => {setAcvite(false)}}  */}
        </>
    );
}

export default NavBar;