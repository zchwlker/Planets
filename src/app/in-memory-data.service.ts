import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Planet } from './planet';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const planets = [
      {id:1, name :'test'},
      {id:2, name :'test'},
    ]
    return {planets}
  }

  genId(planets: Planet[]): number {
      return planets.length > 0 ? Math.max(...planets.map(planet => planet.id)) + 1 : 11;
    }
}
