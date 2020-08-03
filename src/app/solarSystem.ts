import {Planet} from './planet';

export interface SolarSystem{
  id: number;
  name: string;
  planets: Array<Planet>;

}
