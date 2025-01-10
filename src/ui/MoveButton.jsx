import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
    width: ${(props) => props.width || '100px'};
    height: ${(props) => props.width || '100px'};
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-10px);
  }
`;

const ButtonDesc = styled.div`
    text-align: center;
    margin-top: 20px;
`;
function MoveButton(props) {
    const {title, desc, width, height, iclass, onClick} = props;
    return (
        <StyledButton width={width} height={height} onClick={onClick}>
            <b>{title || "button"}</b>
            <ButtonDesc>{desc}</ButtonDesc>
        </StyledButton>
    );
}

export default MoveButton;