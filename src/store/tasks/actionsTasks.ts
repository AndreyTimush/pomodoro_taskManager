export interface ITask {
  id: number;
  description: string;
}

export interface ITasks {
  tasks: ITask[];
}

export type taskActions = { type: "ADD_TASK"; payload: ITask };
