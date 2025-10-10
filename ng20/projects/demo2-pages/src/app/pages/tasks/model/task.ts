export interface Task {
  id: string;
  title: string;
  author: string;
  isCompleted: boolean;
}

export type TaskDTO = Omit<Task, 'id'>;
export type TaskUpdateDTO = Partial<TaskDTO>;
