import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from "./heroes/heroes.component";
import { MessagesComponent } from "./messages/messages.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeroesComponent, MessagesComponent, RouterModule]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
