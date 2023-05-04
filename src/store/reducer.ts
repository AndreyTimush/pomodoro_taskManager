import { ITask, ITasks, taskActions } from "./tasks/actionsTasks";

const initialState: ITasks = { tasks: [] };

export function reducer(
  state: ITasks = initialState,
  action: taskActions
): ITasks {
  switch (action.type) {
    case "ADD_TASK":
      return { tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
}
