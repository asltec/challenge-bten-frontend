import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CompartilhadoModule } from "src/app/compartilhado/compartilhado.module";
import { GraficsComponent } from "./grafics.component";

@NgModule({
    declarations: [
        GraficsComponent
    ],
    imports: [
        CommonModule,
        CompartilhadoModule
    ],
    exports: [
        GraficsComponent
    ]
})
export class GraficsModule{

}