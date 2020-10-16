import { Routes } from '@angular/router';
import { MueblesMuebleriaComponent } from './muebles-muebleria/muebles-muebleria.component';
import { MueblesContactoComponent } from './muebles-contacto/muebles-contacto.component';

export const appRoutes:Routes = [
    {
        path: '', 
        redirectTo: 'muebles',
        pathMatch: 'full'
    },
    {
        path: 'muebles', 
        component: MueblesMuebleriaComponent
    },
    {
        path: 'contacto', 
        component: MueblesContactoComponent
    },
];