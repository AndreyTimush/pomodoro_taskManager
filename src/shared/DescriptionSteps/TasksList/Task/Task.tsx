import React from "react";
import styles from "./task.css";

interface ITaskProps {
  id: number;
  description: string;
}

export function Task(props: ITaskProps) {
  return <div>{<p>{props.description}</p>}</div>;
}
