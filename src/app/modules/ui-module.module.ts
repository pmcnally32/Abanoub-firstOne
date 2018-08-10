import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingModule } from './landing/landing.module';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/pages/layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', loadChildren: 'app/modules/landing/landing.module#LandingModule' }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
exports: [RouterModule]
})

export class UiModuleModule {}
