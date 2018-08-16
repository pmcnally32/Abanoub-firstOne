import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { todoComponent } from './pages/todo-list/todo.component';
const routes: Routes = [
  {
    path: 'list',
    component: todoComponent,
  },
  {
    path: '',
    redirectTo: 'list'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }