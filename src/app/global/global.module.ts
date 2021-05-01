import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BarModule } from "../bar/bar.module";
import { LineModule } from "../line/line.module";
import { RadarModule } from "../radar/radar.module";
import { GlobalStatisticsComponent } from "./global.component";

@NgModule({
    declarations: [
        GlobalStatisticsComponent
    ],
    imports: [
        LineModule
    ],
    exports: [
        CommonModule,
        FormsModule
    ]
})
export class GlobalStatisticsModule {

}