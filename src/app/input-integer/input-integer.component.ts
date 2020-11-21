import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Muebles } from '../muebles-list/muebles';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad: number;

  @Input()
  tope: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  topeAlcanzado: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }
  upCantidad(): void{
    if(this.cantidad < this.tope){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    } 
    else
      this.topeAlcanzado.emit("Se alcanzo el máximo valor"); 
  }

  downCantidad(): void{
    if(this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }  
  }

  changeCantidad(event): void{
    //let stockInicial = mueble.stock + mueble.cantidad;
    //if(!(0 <= event.key && event.key <= 9))
    //  alert("Debe ingresar un valor numérico");
   // else{
   //   if(event.key <= stockInicial){
    //    mueble.stock = stockInicial;
    //    mueble.cantidad = event.key;
    //    mueble.stock -= mueble.cantidad;
    //  }
    //  else
     //   mueble.cantidad = mueble.stock;
    //} 
  }


}
