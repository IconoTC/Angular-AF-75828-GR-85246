export type ID = number | string;

export interface Task {
  id: ID;
  title: string;
  author: string;
  isCompleted: boolean;
}

export type TaskDTO = Omit<Task, 'id'>;
export type TaskUpdateDTO = Partial<TaskDTO>;
