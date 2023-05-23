import { ActionCreator, AnyAction, Reducer } from "redux";

export interface ITask {
  id: number;
  description: string;
  count_pomodoros: number;
}

export interface ITasks {
  tasks: ITask[];
}

export interface IOpenDropdown {
  flagOpen: boolean;
}

export type RootState = {
  tasks: [];
};

const initialState: ITasks = { tasks: [] };

const ADD_TASK = "ADD_TASK";

export const addTaskAction: ActionCreator<AnyAction> = (task) => ({
  type: ADD_TASK,
  task,
});

export const rootReducer: Reducer<ITasks> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    default:
      return state;
  }
};
