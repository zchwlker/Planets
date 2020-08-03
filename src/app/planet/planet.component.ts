import { Component, OnInit, Input } from '@angular/core';
import {Planet} from '../planet';

const defaultTop = 450;
const defaultLeft = 800;
const defaultDuration = 4000;

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.sass']
})

export class PlanetComponent implements OnInit {
  @Input() planet : Planet;

  GetOrbitStyle(){
    let diameter = ((this.planet.id+1)   * 100).toString() + 'px';
    let radiusStr = ((this.planet.id+1) * 50).toString() + 'px';
    let top = (defaultTop - ((this.planet.id ) * 50)).toString() +'px';
    let left = (defaultLeft - ((this.planet.id ) * 50)).toString() +'px';
    let duration = (defaultDuration * this.planet.orbitSpeed).toString()+'ms';
    return {
        'width': diameter,
        'height': diameter,
        '-webkit-border-radius': radiusStr,
        '-moz-border-radius': radiusStr,
        'border-radius': radiusStr,
        'top': top,
        'left': left,
        '-webkit-animation-duration': duration,
        '-moz-animation-duration': duration,
        '-ms-animation-duration': duration,
        'animation-duration': duration,
      }
  }

  GetPlanetStyle(){
    let radiusStr = this.planet.radius.toString() + 'px';
    let diameter = (this.planet.radius * 2).toString() + 'px';
    let duration = (defaultDuration * this.planet.spinSpeed).toString()+'ms';
    return {
        'width': diameter,
        'height': diameter,
        '-webkit-border-radius': radiusStr,
        '-moz-border-radius': radiusStr,
        'border-radius':  radiusStr,
        'background-color': this.planet.color,
        '-webkit-animation-duration': duration,
        '-moz-animation-duration': duration,
        '-ms-animation-duration': duration,
        'animation-duration': duration
      }
  }
  constructor() {   }

  ngOnInit(): void {
  }
}
