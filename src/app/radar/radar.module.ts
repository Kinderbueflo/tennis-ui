import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RadarComponent } from './radar.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
    declarations: [
        RadarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ChartsModule
    ],
    exports: [
        RadarComponent,
        CommonModule,
        FormsModule
    ]
})
export class RadarModule { }