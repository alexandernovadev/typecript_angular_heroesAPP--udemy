import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',

})
export class HeroeTarjetaComponent implements OnInit {

  // Input especifica que uno pude recibie esa propiedad desde afuera del componente

  @Input() hero: any = {};
  @Input() index: number;

  // Esto Es como Una funcion, va a hacer algo cuadno se invoque
  // Llama funcion de padre.
  @Output() heroreSelec: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroreSelec = new EventEmitter();
  }

  ngOnInit() {
  }

  // Recibe el id, del index y navega hasta el con router.navigate
  verHeroe() {
    // this.router.navigate(['/heroe', this.index]);
    //Emitiendo index
    this.heroreSelec.emit(this.index);
  }

}
