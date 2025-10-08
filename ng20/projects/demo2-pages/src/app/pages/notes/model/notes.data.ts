import { Note } from "./note";

export const NOTES: Note[] = [
  {
    id: 1,
    title: "First Note",
    author: "Pepe",
    isImportant: true,
  },
  {
    id: 2,
    title: "Second Note",
    author: "Luisa",
    isImportant: false,
  },
];

export const getNotes = (): Note[] => NOTES;

export const getNotesAsync = async (): Promise<Note[]> => NOTES


