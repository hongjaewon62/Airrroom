import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background: transparent;
    border: none;
    float: right;
    margin-top: 20px;
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    color: white;
    cursor: pointer;
`;

function Button (props) {
    const {title, onClick} = props;
    return (
        <StyledButton onClick={onClick}>{title || "button"}</StyledButton>
    );
}

export default Button;