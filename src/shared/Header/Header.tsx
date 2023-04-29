import React from "react";
import "./header.css";
import { LogoImg } from "../images/LogoImg";
import { StaticImg } from "../images/StaticImg";

export function Header() {
  return (
    <div className="container">
      <div className="logo">
        <LogoImg />
        <p className="logotext">pomodoro_box</p>
      </div>
      <div className="static">
        <StaticImg />
        <p className="staticText">Статистика</p>
      </div>
    </div>
  );
}
