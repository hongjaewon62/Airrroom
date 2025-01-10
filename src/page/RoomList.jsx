import React from "react";
import styled from "styled-components";
import RoomCard from "./RoomCard";

const RoomGrid = styled.div`
    display: grid;
    //grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
`;

const RoomList = ({ rooms }) => {
  return (
    <RoomGrid>
      {rooms.map((room, index) => (
        <RoomCard key={index} room={room} />
      ))}
    </RoomGrid>
  );
};

export default RoomList;