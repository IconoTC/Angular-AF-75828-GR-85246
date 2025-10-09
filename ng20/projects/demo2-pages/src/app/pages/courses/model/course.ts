export type ID = number | string;

export interface Course {
  id: ID;
  title: string;
  author: string;
  isCompleted: boolean;
}

export type CourseDTO = Omit<Course, 'id'>;
export type CourseUpdateDTO = Partial<CourseDTO>;
