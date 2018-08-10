import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
    {
         path: 'home',
        component: HomeComponent,
    },
    {
        path: '', pathMatch: 'full',
        redirectTo: 'home'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LandingRoutingModule {}
