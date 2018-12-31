import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-cart',
  templateUrl: './heroe-cart.component.html',
  styleUrls: ['./heroe-cart.component.css']
})
export class HeroeCartComponent implements OnInit {

  @Input() heroe:Heroe;
  @Input() index:number;

  @Output() heroeSeleccionado:EventEmitter<number>;

  constructor(private _router:Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  getHeroe(){
    //this.heroeSeleccionado.emit(this.index);
    this._router.navigate(['/heroe', this.index]);
}

}
