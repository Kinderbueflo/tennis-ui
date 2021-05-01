import { NgModule } from "@angular/core";
import { RadarModule } from "../radar/radar.module";
import { StatisticsComponent } from "./statistics.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BarModule } from "../bar/bar.module";

@NgModule({
    declarations: [
        StatisticsComponent
    ],
    imports: [
        RadarModule,
        BarModule
    ],
    exports: [
        CommonModule,
        FormsModule
    ]
})
export class StatisticsModule {

}