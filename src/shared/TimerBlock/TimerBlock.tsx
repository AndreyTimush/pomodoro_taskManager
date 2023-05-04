import React from "react";
import styles from "./timerblock.module.css";
import { HeaderTimerBlock } from "./HeaderTimerBlock";
import { MainTimerBlock } from "./MainTimerBlock";

export function TimerBlock() {
  return (
    <div className={styles.timerblockstyles}>
      <HeaderTimerBlock />
      <MainTimerBlock />
    </div>
  );
}
