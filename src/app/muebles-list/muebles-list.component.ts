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
    oferta: false
  },
  {
    descripcion: "Cama",
    material: "Pino",
    caracteristicas: "2 plaza",
    precio: 2599,
    stock: 9,
    oferta: true
  },
  {
    descripcion: "Silla",
    material: "Algarrobo",
    caracteristicas: "Lustrada",
    precio: 780,
    stock: 25,
    oferta: false
  },
  {
    descripcion: "Mesa",
    material: "Algarrobo",
    caracteristicas: "1,60 mts x 2,50 mts",
    precio: 8900,
    stock: 0,
    oferta: true
  },
  {
    descripcion: "Alacena",
    material: "Melamina",
    caracteristicas: "3 puertas. Blanco",
    precio: 2500,
    stock: 10,
    oferta: false
  },
];
  constructor() { }

  ngOnInit(): void {
  }

}
