import React, {useState} from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const LoginBoxStyled = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 200px;
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

// const CloseBtn = styled.span`
//     position: absolute;
//     right: 1.5rem;
//     top: 1rem;
//     font-size: 1.5rem;
//     cursor: pointer;
//     color: #666;
// `;

function Login() {
    const navigate = useNavigate();
    
    //const [active, setAcvite] = useState(false);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loginCheck, setLoginCheck] = useState(false);

    const handleLogin = async(e) => {
        e.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));

        const response = await fetch(
            "http://172.30.1.28:8080/api/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            }
        );
        const result = await response.json();
        
        if(response.status === 200) {
            setLoginCheck(false);

            sessionStorage.setItem("token", result.token);
            sessionStorage.setItem("username", result.username);
            // sessionStorage.setItem("role", result.role);
            // sessionStorage.setItem("storeid", response.storeId);
            console.log("로그인 성공, userName : " + result.username);
            navigate("/AIRRROOM");
        }
        else {
            setLoginCheck(true);
        }
    };
    return (
        <>
         {/* active={active} */}
        <LoginBoxStyled>
            <LoginBoxContent>
                <h2>로그인</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        placeholder="ID"
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <br />
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder="PASSWORD"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {loginCheck && (
                        <label styled={{color:"red"}}아이디 혹은 비밀번호가 틀렸습니다></label>
                    )}
                    <br />
                    <input style={{marginTop:20}} type="submit" value="로그인" />
                </form>
            </LoginBoxContent>
        </LoginBoxStyled>
        </>
    );
}

export default Login;