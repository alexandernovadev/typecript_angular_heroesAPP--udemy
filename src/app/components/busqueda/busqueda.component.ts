import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  heroes: any = [];
  buscquedaname: string;
  cantidad = true;


  constructor( private activeRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router) {
    this.activeRoute.params.subscribe( params => {

     this.heroes = this.heroesService.buscarHeroes(params['termino']);
     this.buscquedaname = params['termino'];

    });
   }

  ngOnInit() {
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
    console.log('Aqui index de busqueda: ' + idx);
  }




}
