import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuModule} from 'primeng/menu';
import { TabMenuModule} from 'primeng/tabmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';
import {TableModule} from 'primeng/table';

import { RouterModule, Routes } from '@angular/router';
import { MenuBarComponent } from './components/menubar/menubar.component';
import { MenuComponent } from './components/menu/menu.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { InfoComponent } from './components/info/info.component';
import { TableComponent } from './components/table/table.component';
import { CustomerService } from './services/customerService';

const appRoutes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'table', component: TableComponent },
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: '**', redirectTo: 'info', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    MenuBarComponent,
    MenuComponent,
    AccordionComponent,
    InfoComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TabMenuModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    MenuModule,
    BrowserAnimationsModule,
    TableModule,
    RouterModule.forRoot(
	appRoutes
    )
  ],
  providers: [CustomerService],
  bootstrap: [MenuBarComponent]
})
export class AppModule { }
