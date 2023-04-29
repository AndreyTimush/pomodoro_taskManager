import React, { useState } from "react";
import "./header.css";
import { LogoImg } from "../images/LogoImg";
import { StaticImg } from "../images/StaticImg";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/statistics");
  };

  const handleClickLogo = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="logo" onClick={handleClickLogo}>
        <LogoImg />
        <p className="logotext">pomodoro_box</p>
      </div>
      <div className="static" onClick={handleClick}>
        <StaticImg />
        <p className="staticText">Статистика</p>
      </div>
    </div>
  );
}
