import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class todoComponent {
  title = 'Abanoub-firstOne';
  todoArray=[];

  addTodo(value) {
    if (value == "") {
      console.log(" Blank Record");
    } else {
    this.todoArray.push(value)
    }
    console.log(this.todoArray)
  }

  deleteItem(todo) {
    for(let i=0 ;i<= this.todoArray.length ;i++) {
      if(todo == this.todoArray[i]) {
        this.todoArray.splice(i,1)
      }
    }
  }
}
