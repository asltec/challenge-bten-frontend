import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CompartilhadoModule } from "src/app/compartilhado/compartilhado.module";
import { GraficsModule } from "../grafics/grafics.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CompartilhadoModule,
        DashboardRoutingModule,
        GraficsModule
    ]
})
export class DashboardModule {

}