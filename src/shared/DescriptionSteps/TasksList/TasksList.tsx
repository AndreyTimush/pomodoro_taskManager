import React from "react";
import { Task } from "./Task";
import { useSelector } from "react-redux";
import { ITask, ITasks } from "store/tasks/actionsTasks";
import { store } from "App";

export function TasksList() {
  // const tasks = [
  //   { id: 0, description: "task1" },
  //   { id: 1, description: "task2" },
  // ];

  const tasks = store.getState().tasks;

  // const tasks = useSelector<ITasks, ITask>((state) => state.tasks);

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} id={task.id} description={task.description} />
      ))}
    </>
  );
}
