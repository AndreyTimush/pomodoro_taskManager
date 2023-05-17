import React from "react";
import styles from "./task.module.css";
import { Menu } from "shared/images/Menu";

interface ITaskProps {
  id: number;
  description: string;
}

export function Task(props: ITaskProps) {
  const handleOpenMenu = () => {};

  return (
    <div className={styles.main}>
      <div className={styles.task}>
        <div className={styles.timeAndName}>
          <div className={styles.radius}>
            <p>1</p>
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
