import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Todo } from './../models/todo';

@Injectable({
  providedIn: 'root', // providedIn: root means this service is injected into the root of the application and so it is available all round
})
export class TodoService {
  private todo: BehaviorSubject<string> = new BehaviorSubject(null);


  constructor() { }

  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  public lastId = 0;

  // Placeholder for todos
  todos: Todo[] = []


  public getTodos(): Todo[] {
    return this.todos;
  }

  // Add new todo

  public addTodo(todo: Todo) {
    if (!todo.id) {
      todo.id = ++this.lastId;
      this.todos.unshift(todo);
    }
  }

  // Delete Todo
  public deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  // Toggle Todo
  public toggleTodo(todo: Todo) {
   this.todos.map(t => {
      if (t.id === todo.id) {
        t.done = !t.done;
      }
    })

  }

  // Getting the value as an Observable
  public getTodoStatus(): Observable<any> {
    return this.todo.asObservable();
  }

  // passing todo status
  public updateTodoStatus(todo) {
    this.todo.next(todo);
  }


}
