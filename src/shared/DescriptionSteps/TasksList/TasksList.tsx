import React from "react";
import { Task } from "./Task";
import { store } from "App";
import { ITask, ITasks, RootState } from "store/store";
import { useSelector } from "react-redux";

export function TasksList() {
  const tasks: ITask[] = useSelector<RootState, ITask[]>(
    (state) => state.tasks
  );

  return (
    <>
      {tasks.map((task: ITask) => (
        <Task key={task.id} id={task.id} description={task.description} />
      ))}
    </>
  );
}
