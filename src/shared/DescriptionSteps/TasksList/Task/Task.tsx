import React from "react";
import styles from "./task.module.css";
import { Menu } from "shared/images/Menu";

interface ITaskProps {
  id: number;
  description: string;
  count_pomodoros: number;
}

export function Task(props: ITaskProps) {
  const handleOpenMenu = () => {};

  return (
    <div className={styles.main}>
      <div className={styles.task}>
        <div className={styles.timeAndName}>
          <div className={styles.radius}>
            <p>{props.count_pomodoros}</p>
          </div>
          {<p>{props.description}</p>}
        </div>
        <div className={styles.menuButton} onClick={handleOpenMenu}>
          <Menu />
        </div>
      </div>
      <hr className={styles.hr} />
    </div>
  );
}
