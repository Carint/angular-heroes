import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    mat-card {
      margin-top: 20px;
    }
  `]
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private _heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this._heroesService.getHeroes()
      .subscribe( res => {
        console.log(res);
        this.heroes = res
      } );
  }

}