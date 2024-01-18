import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { MessageService } from '../message.service';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-heroes',
    standalone: true,
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
    imports: [CommonModule, FormsModule, NgFor, NgIf, UpperCasePipe, HeroDetailComponent, RouterModule]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  // injecting heroservice by adding a private heroservice parameter to the HeroesComponent constructor
  constructor(private heroService: HeroService) {}

   // lifecycle hook. Angular calls the hook at an appropriate time after constructing a HeroesComponent instance
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }


}
