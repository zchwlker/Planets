import { Component, OnInit, Input } from '@angular/core';
import {Planet} from '../planet';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.sass']
})
export class PlanetDetailComponent implements OnInit {

  @Input() planet: Planet;

  constructor() { }

  ngOnInit(): void {
  }
}
