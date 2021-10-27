import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: []
})
export class HeroeTarjetaComponent implements OnInit {

  // Datos recibidos desde el componente padre, se agrega ! a la declaracion de la variable para confirmar que siempre va tener un valor.
  @Input() heroe!: Heroe;

  constructor() { }

  ngOnInit(): void {
  }

}
