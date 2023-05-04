import React from "react";
import styles from "./headertimerblock.module.css";

export function HeaderTimerBlock() {
  return (
    <div className={styles.headerstyle}>
      <p className={styles.taskText}>Сверстать сайт</p>
      <p className={styles.pomodoroNumber}>Помидор 1</p>
    </div>
  );
}
