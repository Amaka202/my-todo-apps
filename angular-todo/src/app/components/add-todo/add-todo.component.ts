import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  public todo = new Todo();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTodo() {
    if (!this.todo.description || this.todo.description.trim() === '') {
      return
    }

    this.todoService.addTodo(this.todo);
    this.todoService.updateTodoStatus('ADD');
    this.todo = new Todo();
  }


}
