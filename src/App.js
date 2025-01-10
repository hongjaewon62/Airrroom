import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navar/NavBar";
import MainPage from "./page/MainPage";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import ReservationRoom from "./page/ReservationRoom";
import AiRecommend from "./page/AiRecommend";
import MySpace from "./page/MySpace";
import TimeTable from "./page/TimeTable"
import ReservationCheck from "./page/ReservationCheck";

function App(props) {
  
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/MySapce" element={<MySpace />} />
      <Route path="/AIRRROOM" element={<MainPage />} />
      <Route path="/ai-recommend" element={<AiRecommend />} />
      <Route path="/reservation" element={<ReservationRoom />} />
      <Route path="/timeTable" element={<TimeTable />} />
      <Route path="/history" element={<ReservationCheck />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;