import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Muebles } from './muebles-list/muebles';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  private _listaDeCompras: Muebles[] = [];
  listaDeCompras: BehaviorSubject<Muebles[]> = new BehaviorSubject([]);

  constructor() { }

  agregarACarrito(mueble: Muebles) {
    let item: Muebles = this._listaDeCompras.find(v1 => v1.descripcion == mueble.descripcion);
    if(!item ){
      this._listaDeCompras.push({... mueble});
    }
    else {
      item.cantidad += mueble.cantidad;
    }
    this.listaDeCompras.next(this._listaDeCompras);
  }

  
}
