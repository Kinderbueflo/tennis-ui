import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ProfitComponent } from "./profit.component";

@NgModule({
    declarations: [
        ProfitComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule
    ]
})
export class ProfitModule {

}