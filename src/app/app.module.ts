import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MueblesListComponent } from './muebles-list/muebles-list.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MueblesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
