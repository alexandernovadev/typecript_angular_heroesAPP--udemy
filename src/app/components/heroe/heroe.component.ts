import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  
  constructor( private activeRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private _location: Location) {
    this.activeRoute.params.subscribe( params => {
     this.heroe = this.heroesService.getHeroe(params['id']);
     //Ese hp tsLint me esta fastidiando, arriba en ID por hacer una
     //espacio no servia, LO PUEDE CREER
    });
   }

  ngOnInit() {
  }

  atras() {
    // Esto es para regresar atras, hay que impotar libreria
    this._location.back();
  }
}
