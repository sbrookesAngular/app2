import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { AdaptersTableComponent } from './adapters-table/adapters-table.component';
import { GeneralTabComponent } from './general-tab/general-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdaptersTableComponent,
    GeneralTabComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
