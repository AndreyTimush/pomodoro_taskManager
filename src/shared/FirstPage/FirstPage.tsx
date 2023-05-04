import React from "react";
import styles from "./firstpage.module.css";
import { Header } from "../Header";
import { DescriptionSteps } from "../DescriptionSteps";
import { TimerBlock } from "../TimerBlock";

export function FirstPage() {
  return (
    <>
      <div className={styles.mainPage}>
        <Header />
        <div className={styles.firstPage}>
          <DescriptionSteps />
          <TimerBlock />
        </div>
      </div>
    </>
  );
}
