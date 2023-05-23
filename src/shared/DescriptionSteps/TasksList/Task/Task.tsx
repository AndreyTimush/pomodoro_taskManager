import React, { useState } from "react";
import styles from "./task.module.css";
import { Menu } from "shared/images/Menu";
import { Dropdown } from "components/Dropdown";

interface ITaskProps {
  id: number;
  description: string;
  count_pomodoros: number;
}

export function Task(props: ITaskProps) {
  return (
    <div className={styles.main}>
      <div className={styles.task}>
        <div className={styles.timeAndName}>
          <div className={styles.radius}>
            <p>{props.count_pomodoros}</p>
          </div>
          {<p>{props.description}</p>}
        </div>
        <Dropdown button={<Menu />}>
          <ul>
            <li>Увеличить</li>
            <li>Уменьшить</li>
            <li>Редактировать</li>
            <li>Удалить</li>
          </ul>
        </Dropdown>
      </div>
      <hr className={styles.hr} />
    </div>
  );
}
