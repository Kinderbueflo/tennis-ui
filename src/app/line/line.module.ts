import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import { LineComponent } from "./line.component";

@NgModule({
    declarations: [
        LineComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ChartsModule
    ],
    exports: [
        LineComponent,
        CommonModule,
        FormsModule
    ]
})
export class LineModule { }