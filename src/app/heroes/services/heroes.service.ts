import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(
    private _http: HttpClient
  ) { }

  // Consultar todos los heroes
  getHeroes(): Observable<Heroe[]> {
    return this._http.get<Heroe[]>(`${ this.baseUrl }/heroes`);
  }

  // Consultar heroe por id
  getOneHeroe(id: string): Observable<Heroe> {
    return this._http.get<Heroe>(`${ this.baseUrl }/heroes/${ id }`);
  }
}
