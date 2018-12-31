import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../services/heroes.service";


@Component({
  selector: 'app-heroe-searched',
  templateUrl: './heroe-searched.component.html',
  styleUrls: ['./heroe-searched.component.css']
})
export class HeroeSearchedComponent implements OnInit {

  heroes:Heroe[]=[];
  termino:string;

  constructor(private _activateRoute:ActivatedRoute,
              private _heroesService:HeroesService,
              private _router:Router) { }

  ngOnInit() {
    this._activateRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
    });
  }
}

