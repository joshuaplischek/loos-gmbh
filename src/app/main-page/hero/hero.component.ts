import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-hero',
  imports: [NavBarComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
