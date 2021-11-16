import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import {ChartModule} from 'primeng/chart'



export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({

    imports: [
        CommonModule,
        NgxMaskModule.forRoot(),
        ChartModule
    ],
    
    exports: [
        CommonModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        NgxMaskModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        ChartModule
    ]
})
export class CompartilhadoModule {

}