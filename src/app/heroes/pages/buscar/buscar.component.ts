import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Heroe } from '../../interfaces/heroes.interface';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  termino: string = ''; // Valor que escribe el usuario en el input
  heroes: Heroe[] = []; // Resultado de la busqueda al momento de escribir en input
  heroeSeleccionado: Heroe | undefined; // Heroe seleccionado de la lista

  constructor(private readonly heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando() {
    this.heroesService.getSugerencias(this.termino.trim())
      .subscribe( heroes => this.heroes = heroes );
  }

  opcionSelecionada(event: MatAutocompleteSelectedEvent) {

    if (event.option.value) {
      const heroe: Heroe = event.option.value;
      this.termino = heroe.superhero;
  
      this.heroesService.getOneHeroe(heroe.id!)
        .subscribe(heroe => this.heroeSeleccionado = heroe);
    } else {
      this.heroeSeleccionado = undefined;
      this.termino = ''; 
    }
  }

}
