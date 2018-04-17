import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MenuModule} from 'primeng/menu';
import { TabMenuModule} from 'primeng/tabmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule} from 'primeng/messages';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/tokenInterceptor';

import { RouterModule, Routes } from '@angular/router';
import { MenuBarComponent } from './components/menubar/menubar.component';
import { MenuComponent } from './components/menu/menu.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { InfoComponent } from './components/info/info.component';
import { TableComponent } from './components/table/table.component';
import { CustomerService } from './services/customerService';
import { DataformComponent } from './components/dataform/dataform.component';
import { MiscellaneousComponent } from './components/miscellaneous/miscellaneous.component';

const appRoutes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'table', component: TableComponent },
  { path: 'dataform', component: DataformComponent },
  { path: 'miscellaneous', component: MiscellaneousComponent },
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: '**', redirectTo: 'info', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    MenuBarComponent,
    MenuComponent,
    AccordionComponent,
    InfoComponent,
    DataformComponent,
    TableComponent,
    MiscellaneousComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TabMenuModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    MenuModule,
    BrowserAnimationsModule,
    TableModule,
    InputTextModule,
    DialogModule,
    MessagesModule,
    RouterModule.forRoot(
	appRoutes
    )
  ],
  providers: [CustomerService,
             {
              provide: HTTP_INTERCEPTORS,
              useClass: TokenInterceptor,
              multi: true
             }],
  bootstrap: [MenuBarComponent]
})

export class AppModule { }
