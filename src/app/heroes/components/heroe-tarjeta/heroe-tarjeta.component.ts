import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
    mat-card {
      margin-top: 20px
    }
  `]
})
export class HeroeTarjetaComponent implements OnInit {

  // Datos recibidos desde el componente padre, se agrega ! a la declaracion de la variable para confirmar que siempre va tener un valor.
  @Input() heroe!: Heroe;

  constructor() {}

  ngOnInit(): void {}

}
