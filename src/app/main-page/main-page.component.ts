import { Component, HostListener } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { MobileMenuComponent } from "./mobile-menu/mobile-menu.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-main-page',
  imports: [
    HeroComponent,
    ServicesComponent,
    AboutUsComponent,
    FooterComponent,
    NavBarComponent
],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {

}
