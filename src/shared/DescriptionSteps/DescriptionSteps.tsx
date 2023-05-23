import React, { useState } from "react";
import styles from "./descriptionsteps.module.css";
import { useDispatch, useSelector } from "react-redux";
import { store } from "App";
import { TasksList } from "./TasksList";
import { RootState, addTaskAction } from "store/store";

export function DescriptionSteps() {
  const [inputValue, setInputValue] = useState("");

  const [idCounter, setIdCounter] = useState(0);
  const dispatch = useDispatch();

  const handleClick = () => {
    inputValue &&
      dispatch(
        addTaskAction({
          id: idCounter,
          description: inputValue,
          count_pomodoros: 1,
        })
      );

    setIdCounter(idCounter + 1);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.description}>
      <p className={styles.startMessage}>Ура! Теперь можно начать работать:</p>
      <ul className={styles.list}>
        <li>Выберите категорию и напишите название текущей задачи</li>
        <li>Запустите таймер («помидор»)</li>
        <li>Работайте пока «помидор» не прозвонит</li>
        <li>Сделайте короткий перерыв (3-5 минут)</li>
        <li>
          Продолжайте работать «помидор» за «помидором», пока задача не будут
          выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).
        </li>
      </ul>
      <form>
        <input
          className={styles.input}
          placeholder="Название задачи"
          onChange={handleChange}
          value={inputValue}
        />
        <div
          className={styles.buttonAdd}
          placeholder="Добавить"
          onClick={handleClick}
        >
          <p>Добавить</p>
        </div>
      </form>
      <TasksList />
    </div>
  );
}
