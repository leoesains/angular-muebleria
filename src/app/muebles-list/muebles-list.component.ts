import { Component, OnInit } from '@angular/core';
import { Muebles } from './muebles';

@Component({
  selector: 'app-muebles-list',
  templateUrl: './muebles-list.component.html',
  styleUrls: ['./muebles-list.component.css']
})
export class MueblesListComponent implements OnInit {

  muebles: Muebles[] = [
  {
    descripcion: "Cama",
    material: "Pino",
    caracteristicas: "1 plaza",
    precio: 1500,
    stock: 0,
    oferta: false,
    cantidad: 0
  },
  {
    descripcion: "Cama",
    material: "Pino",
    caracteristicas: "2 plaza",
    precio: 2599,
    stock: 9,
    oferta: true,
    cantidad: 0
  },
  {
    descripcion: "Silla",
    material: "Algarrobo",
    caracteristicas: "Lustrada",
    precio: 780,
    stock: 25,
    oferta: false,
    cantidad: 0
  },
  {
    descripcion: "Mesa",
    material: "Algarrobo",
    caracteristicas: "1,60 mts x 2,50 mts",
    precio: 8900,
    stock: 0,
    oferta: true,
    cantidad: 0
  },
  {
    descripcion: "Alacena",
    material: "Melamina",
    caracteristicas: "3 puertas. Blanco",
    precio: 2500,
    stock: 10,
    oferta: false,
    cantidad: 0
  },
];
  constructor() { }

  ngOnInit(): void {
  }

  upCantidad(mueble: Muebles): void{
    if(mueble.stock > 0){
      mueble.cantidad++;
      mueble.stock--;
    }  
  }

  downCantidad(mueble: Muebles): void{
    if(mueble.cantidad > 0){
      mueble.cantidad--;
      mueble.stock++;
    }  
  }

  changeCantidad(event, mueble: Muebles): void{
    if(!(0 <= event.key && event.key <= 9))
      alert("Debe ingresar un valor numérico");
    else{
      if(event.key <= mueble.stock){
        mueble.cantidad = event.key;
        mueble.stock -= event.key;
      }
      else
        mueble.cantidad = mueble.stock;
    }
    //console.log(event);
  }

}
