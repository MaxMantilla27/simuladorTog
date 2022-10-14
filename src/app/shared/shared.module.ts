import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './Components/header/header.component';
import { MigaPanComponent } from './MigaPan/miga-pan.component';
import { DefaultButtonComponent } from './Buttons/default-button/default-button.component';
import { LinkButtonComponent } from './Buttons/link-button/link-button.component';
import { BarrasComponent } from './Charts/Barras/barras.component';
import { DonaComponent } from './Charts/Dona/dona.component';
import { DonaPuntosComponent } from './Charts/DonaPuntos/dona-puntos.component';
import { LineComponent } from './Charts/Line/line.component';
import { PieComponent } from './Charts/Pie/pie.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SafeHtmlPipe } from './Pipes/safe-html.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    MigaPanComponent,
    DefaultButtonComponent,
    LinkButtonComponent,
    BarrasComponent,
    DonaComponent,
    DonaPuntosComponent,
    LineComponent,
    PieComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,

    RouterModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    HeaderComponent,
    RouterModule,
    MatFormFieldModule,
    MatCheckboxModule,
    DefaultButtonComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
