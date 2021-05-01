import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { BarComponent } from './bar.component';


@NgModule({
    declarations: [
        BarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ChartsModule
    ],
    exports: [
        BarComponent,
        CommonModule,
        FormsModule
    ]
})
export class BarModule { }