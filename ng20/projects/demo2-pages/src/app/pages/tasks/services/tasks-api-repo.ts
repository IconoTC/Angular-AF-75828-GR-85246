import { inject, Injectable } from '@angular/core';
import { RepoRx } from '../../../core/types/repo';
import { Task, TaskDTO } from '../model/task';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TasksApiRepo implements RepoRx<Task, TaskDTO> {

  private readonly apiUrl = `${environment.apiUrl}/tasks`;
  http = inject(HttpClient);


  getAll(): Observable<Task[]> {
    return this.http.get<Task & {description: string}[]>(this.apiUrl).pipe(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      map(data => data.map(({description, ...item}) => ({...item}) as Task))
    );
  }

  getById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  add(data: TaskDTO): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, data);
  }

  update(id: string, data: TaskDTO): Observable<Task> {
    return this.http.patch<Task>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
