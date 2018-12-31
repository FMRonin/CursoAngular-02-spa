import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:Heroe;

  constructor( private _activateRoute:ActivatedRoute,
               private _heroesService:HeroesService) { 
    this._activateRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['idx']);
      console.log(this.heroe);
    });
  }
  ngOnInit() {
  }

}
