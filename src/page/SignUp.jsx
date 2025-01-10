import React from "react";

function SignUp() {
    return (
        <div>
            <form action="">
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <input type="password" placeholder="Password Confirmation" required/>
                <input type="submit" value="회원가입" />
            </form>
        </div>
    );
}

export default SignUp;