import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CompartilhadoModule } from "src/app/compartilhado/compartilhado.module";
import { SigninRoutingModule } from "./signin-routing.module";
import { SigninComponent } from "./signin.component";

@NgModule({
    declarations: [
        SigninComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CompartilhadoModule,
        SigninRoutingModule
    ]
})
export class SigninModule{

}