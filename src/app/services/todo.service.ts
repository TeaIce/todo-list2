import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from "../Models/Todo";
import { Observable } from 'rxjs';

@Injectable({

  providedIn: 'root'
})
export class TodoService {

  static readonly httpOptions = {
    headers: new HttpHeaders({"content-type": "application/json"})
  }

  todosUrl:string = "Http://jsonplaceholder.typicode.com/todos";
  urlLimit: string = "?_limit=5";

  constructor(private http:HttpClient) { }
3
  getTodos() : Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.urlLimit}`);
  }

  //Toggle Completed
  toggleCompleted(todo: Todo) : Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, TodoService.httpOptions);
  }

  deleteTodo(todo:Todo) : Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, TodoService.httpOptions);
  }

  addTodo(todo: Todo) : Observable<Todo> {
      return this.http.post<Todo>(this.todosUrl, todo, TodoService.httpOptions);
  }
}