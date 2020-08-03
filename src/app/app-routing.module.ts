import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SolarSystemComponent} from './solar-system/solar-system.component';

const routes: Routes = [
  {path: 'solarSystem', component: SolarSystemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
