import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodosComponent } from '../todos/todos.component';
import { Todo} from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  name:string = "Theis";

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  //Set Dynamic Classes
  setClasses() {
    // let classes = {
    //   todo: true,
    //   "is-complete": this.todoo.completed
    // }
    console.log("setClasses");
    let classes = ["todo"];
    if (this.todoo.completed)
      classes.push("is-complete");

    return classes;
  }

  onToggle(atodo:Todo){
    //toggle in UI  
    atodo.completed = !atodo.completed;
    //Toggle on server
    this.todoService.toggleCompleted(atodo).subscribe(todo => console.log(todo))
  }

  onDelete(todo){
    this.deleteTodo.emit(todo);    
  }
} 