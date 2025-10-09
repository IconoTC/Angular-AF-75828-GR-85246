import { Course } from "./course";

export const COURSES: Course[] = [
  {
    id: 1,
    title: "First Course",
    author: "Pepe",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Second Course",
    author: "Luisa",
    isCompleted: false,
  },
];

export const getCourses = (): Course[] => COURSES;

export const getCoursesAsync = async (): Promise<Course[]> => COURSES


