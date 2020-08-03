import { Injectable } from '@angular/core';
import {Planet} from './planet'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PlanetService {

private planetApi = '/RandomPlanet';

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  getRandomPlanet(): Observable<Planet>{
    return this.http.get<Planet>(this.planetApi);
  }

  constructor(private http: HttpClient) { }
}
