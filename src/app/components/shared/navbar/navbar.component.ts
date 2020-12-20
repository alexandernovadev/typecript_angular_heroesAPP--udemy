import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private rutas: Router) { }

  ngOnInit() {
  }

  buscarheroe(termino: string) {
    this.rutas.navigate(['/busqueda', termino]);
    console.log('En la busqueda ' + termino);
  }
}
