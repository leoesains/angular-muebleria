import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MueblesListComponent } from './muebles-list/muebles-list.component';

import { FormsModule } from '@angular/forms';
import { MueblesMuebleriaComponent } from './muebles-muebleria/muebles-muebleria.component';
import { MueblesContactoComponent } from './muebles-contacto/muebles-contacto.component';
import { MueblesCarritoComponent } from './muebles-carrito/muebles-carrito.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MueblesListComponent,
    MueblesMuebleriaComponent,
    MueblesContactoComponent,
    MueblesCarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
