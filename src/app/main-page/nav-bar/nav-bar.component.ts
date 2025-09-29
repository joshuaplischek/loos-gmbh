import { Component, HostListener, Input } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { MobileService } from '../../services/mobile.service';
import { MobileMenuComponent } from "../mobile-menu/mobile-menu.component";

@Component({
  selector: 'app-nav-bar',
  imports: [MobileMenuComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  
  constructor(public mobile: MobileService) {}

  ngOnInit() {
    this.mobile.getScreenWidth = window.innerWidth;
    this.mobile.getScreenHeight = window.innerHeight;
    this.onWindowResize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.mobile.getScreenWidth = window.innerWidth;
    this.mobile.getScreenHeight = window.innerHeight;
    if (this.mobile.getScreenWidth <= 630) {
      this.mobile.isMobile = true;
    } else {
      this.mobile.isMobile = false;
    }
  }
}
