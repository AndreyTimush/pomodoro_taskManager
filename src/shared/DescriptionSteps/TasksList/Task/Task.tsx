import React, { useState } from "react";
import styles from "./task.module.css";
import { Menu } from "shared/images/Menu";
import { Dropdown } from "components/Dropdown";
import { ListDropdown } from "components/Dropdown/ListDropdown";

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
          <ListDropdown />
        </Dropdown>
      </div>
      <hr className={styles.hr} />
    </div>
  );
}
