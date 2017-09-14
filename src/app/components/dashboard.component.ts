/**
 * Created by ING on 01-Sep-17.
 */
import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: '../../pages/dashboard.component.html',
  styleUrls: [ '../../../assets/css/dashboard.component.css' ]

})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(Math.floor(Math.random() * 0) + 1  , Math.floor(Math.random() * 9) + 1  ));
  }
}
