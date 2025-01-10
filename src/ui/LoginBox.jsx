import React, {useState} from "react";
import styled from "styled-components";

const LoginBoxStyled = styled.div`
    display: none;
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
    display: ${(props) => (props.active ? "flex" : "none")};
    padding: 2rem;
    border-radius: 15px;
    width: 90%;
    max-width: 400px;
    position: relative;
    /* animation: modalSlideUp 0.3s ease-out; */
`

function LoginBox() {
    const [active, setAcvite] = useState(false)
    return(
        <LoginBoxStyled active={active}>
            <LoginBoxContent>
                <h2>로그인</h2>
                <form>
                    <input type="text" placeholder="ID" required />
                    <input type="password" placeholder="PASSWORD" required />
                    <input type="submit" value="로그인" />
                </form>
            </LoginBoxContent>
        </LoginBoxStyled>
    );
}

export default LoginBox;