import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muebles-list',
  templateUrl: './muebles-list.component.html',
  styleUrls: ['./muebles-list.component.css']
})
export class MueblesListComponent implements OnInit {

  mueble1 = {
    "descripcion": "Cama",
    "material": "Pino",
    "caracteristicas": "1 plaza",
    "precio": 1500,
    "stock": 5
  };
  mueble2 = {
    "descripcion": "Cama",
    "material": "Pino",
    "caracteristicas": "2 plaza",
    "precio": 2599,
    "stock": 9
  };
  mueble3 = {
    "descripcion": "Silla",
    "material": "Algarrobo",
    "caracteristicas": "Lustrada",
    "precio": 780,
    "stock": 25
  };
  mueble4 = {
    "descripcion": "Mesa",
    "material": "Algarrobo",
    "caracteristicas": "1,60 mts x 2,50 mts",
    "precio": 8900,
    "stock": 1
  };
  mueble5 = {
    "descripcion": "Alacena",
    "material": "Melamina",
    "caracteristicas": "3 puertas. Blanco",
    "precio": 2500,
    "stock": 10
  }
  constructor() { }

  ngOnInit(): void {
  }

}
