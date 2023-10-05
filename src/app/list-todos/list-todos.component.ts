import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];

  message: String;
    // new Todo(1, 'Learn to dance', false, new Date()),
    // new Todo(2, 'Get Better with Angular', false, new Date()),
    // new Todo(3, 'Travel More', false, new Date()),
    // {id: 1, description: 'Learn to dance'},
    // {id: 2, description: 'Get Better with Angular'},
    // {id: 3, description: 'Travel More'}

  constructor(
    private todoService: TodoDataService
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('qkrauth').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    this.todoService.deleteTodo('qkrauth', id).subscribe(
      response => {
        this.message = `Item ${id} Successfully deleted`
        this.refreshTodos();
      }
    )

  }

}
