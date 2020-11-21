import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoComprasService } from '../carrito-compras.service';
import { Muebles } from '../muebles-list/muebles';

@Component({
  selector: 'app-muebles-carrito',
  templateUrl: './muebles-carrito.component.html',
  styleUrls: ['./muebles-carrito.component.css']
})
export class MueblesCarritoComponent implements OnInit {

  carritoDeCompras$: Observable<Muebles[]>;

  constructor(private carrito:CarritoComprasService) { 
    this.carritoDeCompras$ = carrito.listaDeCompras.asObservable();
  }

  ngOnInit(): void {
  }

}
