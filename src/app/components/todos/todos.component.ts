import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo} from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(t => this.todos = t);
  }

  deleteTodo(todo: Todo){
    this.todos = this.todos.filter(t => t.id != todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: any) {    
    let aTodo: Todo = {id: this.todos.length, title: todo.name, completed: todo.completed}; 
    this.todoService.addTodo(aTodo).subscribe(newTodo => {this.todos.push(newTodo)});
    console.log("Todo: " + JSON.stringify(todo) + " " + JSON.stringify(aTodo));    
  }
}
