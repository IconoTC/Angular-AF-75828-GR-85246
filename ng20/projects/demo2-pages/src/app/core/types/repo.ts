import { Observable } from "rxjs";

export interface Repo<T extends { id: number | string }, DTO> {
  getAll(): Promise<T[]>;
  getById(id: T['id']): Promise<T>;  // if not found, should throw an error
  add(data: DTO): Promise<T>;
  update(id: T['id'], data: DTO): Promise<T>;  // if not found, should throw an error
  delete(id: T['id']): Promise<void>;  // if not found, should throw an error
}

export interface RepoRx<T extends { id: number | string }, DTO> {
  getAll(): Observable<T[]>;
  getById(id: T['id']): Observable<T>;
  add(data: DTO): Observable<T>;
  update(id: T['id'], data: DTO): Observable<T>;
  delete(id: T['id']): Observable<void>;
}
