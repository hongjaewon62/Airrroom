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

const Logo = styled.div`
    background: transparent;
    border: none;
    font-weight: 1000;
    float: left;
    margin-top: 10px;
    padding: 8px 16px;
    font-size: 24px;
    border-width: 1px;
    border-radius: 8px;
    color: white;
    cursor: pointer;
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
            <div>
                {/* <Button className="logo" title="AIRRROOM" onClick={() => {
                    navigate("/AIRRROOM");
                }}></Button> */}
                <Logo onClick={() => {
                    navigate("/AIRRROOM");
                }}>
                    AIRRROOM
                </Logo>
            </div>
        </Wrapper>
        {/* onClick={() => {setAcvite(false)}}  */}
        </>
    );
}

export default NavBar;