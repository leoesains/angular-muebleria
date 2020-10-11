import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MueblesListComponent } from './muebles-list/muebles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MueblesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
