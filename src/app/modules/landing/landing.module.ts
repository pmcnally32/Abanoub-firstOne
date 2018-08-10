import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';

@NgModule ({
    imports: [
        CommonModule,
        LandingRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [HomeComponent],
    entryComponents: [HomeComponent]
})

export class LandingModule {}