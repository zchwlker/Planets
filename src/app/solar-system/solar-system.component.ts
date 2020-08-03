import { Component, OnInit } from '@angular/core';
import {SolarSystem} from '../solarSystem';
import {Planet} from '../planet';
import {PlanetService} from '../planet.service'

const planetList =[
  {
    id: 1,
    name: 'Mercury',
    radius: 1.915,
    color: 'DeepSkyBlue',
    orbitSpeed: 1,
    spinSpeed: 175.9
  },
  {
    id: 2,
    name: 'Venus',
    radius: 4.745,
    color: 'orange',
    orbitSpeed: 1.2,
    spinSpeed: 116.8
  },
  {
    id: 3,
    name: 'Earth',
    radius: 5,
    color: 'DarkBlue',
    orbitSpeed: 5,
    spinSpeed: 1
  },
  {
    id: 4,
    name: 'Mars',
    radius: 4,
    color: 'red',
    orbitSpeed: 4.5,
    spinSpeed: 1.03
  },
  {
    id: 5,
    name: 'Jupiter',
    radius: 30,
    color: 'Pink',
    orbitSpeed: 8,
    spinSpeed: 0.414
  },
  {
    id: 6,
    name: 'Saturn',
    radius: 20,
    color: 'Yellow',
    orbitSpeed: 10,
    spinSpeed: 0.444
  },
  {
    id: 7,
    name: 'Uranus',
    radius: 9,
    color: 'LightSteelBlue',
    orbitSpeed: 12,
    spinSpeed: 0.718
  },
  {
    id: 8,
    name: 'Nepturn',
    radius:10,
    color: 'blue',
    orbitSpeed: 14,
    spinSpeed: 0.671
  },
  {
    id: 9,
    name: 'Pluto (Not really a planet)',
    radius: 1,
    color: 'LightSteelBlue',
    orbitSpeed: 16,
    spinSpeed: 6.39
  },
]

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.sass']
})
export class SolarSystemComponent implements OnInit {
    solarSystem : SolarSystem={
      id:1,
      name:'solar',
      planets:[]
    }

  selectedPlanet:Planet;
  newPlanet:Planet;

  onSelectPlanet(planet: Planet): void{
    this.selectedPlanet= planet;
  }

  getRandomPlanet(): void{

    //this.planetService.getRandomPlanet().subscribe((data)=> {
      //this.newPlanet = data;
      //console.log(data);
    //},error => {
    //});

    var index = Math.floor(Math.random() * Math.floor(9))+1;
    this.newPlanet = planetList[index]
  }

  onAddPlanet(){
    this.newPlanet.id = this.solarSystem.planets.length + 1,

    this.solarSystem.planets.push(Object.assign({}, this.newPlanet));

    this.newPlanet ={
      id : 0,
      name: '',
      radius: 0,
      color: 'blue',
      orbitSpeed: 0,
      spinSpeed: 0
    };
  }

  AddRandom(){
    this.getRandomPlanet();
    this.onAddPlanet();
  }

  Replace(index: number): void{
      this.getRandomPlanet();
      this.newPlanet.id = index;
      this.solarSystem.planets[index -1] = Object.assign({}, this.newPlanet);

      this.newPlanet ={
        id : 0,
        name: '',
        radius: 0,
        color: 'blue',
        orbitSpeed: 0,
        spinSpeed: 0
      };
  }

  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.AddRandom()
  }

}
