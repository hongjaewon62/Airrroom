import React, {useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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

const LoginBoxStyled = styled.div`
    display: ${(props) => (props.active ? "flex" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const LoginBoxContent = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 15px;
    width: 90%;
    max-width: 400px;
    position: relative;
    /* animation: modalSlideUp 0.3s ease-out; */
`

const CloseBtn = styled.span`
    position: absolute;
    right: 1.5rem;
    top: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
`;

function NavBar() {
    const navigate = useNavigate();
    const [active, setAcvite] = useState(false)
    return (
        <>
        <Wrapper>
            <Button title="My Space" onClick={() => {
                navigate("/MySapce")
            }}></Button>
            <Button title="Log in" onClick={() => {
                setAcvite(true);
            }} active={active}></Button>

            <Button title="Create Account" onClick={() => {
                setAcvite(true);
            }}></Button>
            <div className="left-section">
                <Button className="logo" title="AIRRROOM" onClick={() => {
                    navigate("/AIRRROOM");
                }}></Button>
            </div>
        </Wrapper>
        <LoginBoxStyled onClick={() => {setAcvite(false)}} active={active}>
            <LoginBoxContent>
                <CloseBtn onClick={() => {setAcvite(false)}}>X</CloseBtn>
                <h2>로그인</h2>
                <form>
                    <input type="text" placeholder="ID" required />
                    <input type="password" placeholder="PASSWORD" required />
                    <input type="submit" value="로그인" />
                </form>
            </LoginBoxContent>
        </LoginBoxStyled>

        <LoginBoxStyled onClick={() => {setAcvite(false)}} active={active}>
            <LoginBoxContent>
                <CloseBtn onClick={() => {setAcvite(false)}}>X</CloseBtn>
                <h2>회원가입</h2>
                <form>
                    <input type="text" placeholder="NAME" required />
                    <input type="text" placeholder="ID" required />
                    <input type="password" placeholder="PASSWORD" required />
                    <input type="password" placeholder="CONFIRM PASSWORD" required />
                    <input type="submit" value="로그인" />
                </form>
            </LoginBoxContent>
        </LoginBoxStyled>
        </>
    );
}

export default NavBar;