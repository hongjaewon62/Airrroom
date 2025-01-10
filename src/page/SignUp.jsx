import React, {useState} from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const SignBoxStyled = styled.div`
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

function SignUp() {
    const [nickname, setNickName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    //const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleSignup = async(e) => {
        e.preventDefault();

        // if(password !== confirmPassword) {
        //     alert("비밀번호가 일치하지 않습니다");
        //     return;
        // }

        const payload = {
            nickname: nickname,
            username: username,
            password: password,
        };

        try {
            const response = await fetch(
                "http://172.30.1.28:8080/api/auth/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );
            
            const data = await response.json();

            if(response.status === 200) {
                console.log("회원가입 성공 이름 : " + data.nickname);
                navigate("/AIRRROOM");
            }
            else if(response.status === 400) {
                alert(`회원가입 실패: ${data.username}`);
            }
        }
        catch(error) {
            console.error("오류 발생", error);
        }
    };
    return (
    <SignBoxStyled>
        <LoginBoxContent>
            <h2>회원가입</h2>
            <form>
                <input
                    type="text"
                    placeholder="NAME"
                    id="nickname"
                    value={nickname}
                    onChange={(e) => setNickName(e.target.value)}
                    required
                />
                <br />
                <input
                    type="text"
                    placeholder="ID"
                    id="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="PASSWORD"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <input style={{marginTop:20}} type="submit" value="회원가입" onClick={handleSignup} />
            </form>
        </LoginBoxContent>
    </SignBoxStyled>
    );
}
export default SignUp;