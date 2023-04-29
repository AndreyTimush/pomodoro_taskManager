import React from "react";
import "./firstpage.css";
import { Header } from "../Header";
import { DescriptionSteps } from "../DescriptionSteps";

export function FirstPage() {
  return (
    <>
      <div className="mainPage">
        <Header />
        <DescriptionSteps />
      </div>
    </>
  );
}
