import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { todoComponent } from './pages/todo-list/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    todoComponent
  ],
  imports: [
    todoComponent,
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TodoModule { }
