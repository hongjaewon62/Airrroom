import React from "react";
import styled from "styled-components";
import GlobalStyle from "../style/GlobalStyle";

const Wrapper = styled.div`
    width: 700px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
`;

const Input = styled.input`
    width: 200%;
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #ccc;
    border-radius: 10px;
    font-size: 16px;
    outline: none;
`;

function Login() {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <form action="">
                    <Input type="text" placeholder="id" /><br />
                    <Input type="password" placeholder="password" />
                    <Input type="submit" value="로그인" />
                </form>
            </Wrapper>
        </>
    );
}

export default Login;