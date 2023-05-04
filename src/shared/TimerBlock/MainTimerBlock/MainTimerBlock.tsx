import React from "react";
import styles from "./maintimerblock.module.css";
import classNames from "classnames";
import { AddTimeImg } from "shared/images/AddTimeImg";

export function MainTimerBlock() {
  return (
    <div className={styles.mainmenu}>
      <div className={styles.timerNumber}>
        <p>25:00</p>
        <div className={styles.addTime}>
          <AddTimeImg />
        </div>
      </div>
      <div className={styles.task}>
        <p>
          <span className={styles.nameTask}>Задача 1 - </span> Сверстать сайт
        </p>
      </div>
      <div className={styles.buttons}>
        <div className={classNames(styles.start, styles.button)}>Старт</div>
        <div className={classNames(styles.stop, styles.button)}>Стоп</div>
      </div>
    </div>
  );
}
