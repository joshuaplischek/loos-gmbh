import { Component, HostListener } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NgClass } from '@angular/common';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import { MobileService } from '../../services/mobile.service';

@Component({
  selector: 'app-hero',
  imports: [NavBarComponent, NgClass],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  // public getScreenWidth: any;
  // public getScreenHeight: any;
  // isMobile: boolean | undefined;

  // ngOnInit() {
  //   this.getScreenWidth = window.innerWidth;
  //   this.getScreenHeight = window.innerHeight;
  //   this.onWindowResize();
  // }

  constructor(public mobile: MobileService){}

  // @HostListener('window:resize', ['$event'])
  // onWindowResize() {
  //   this.getScreenWidth = window.innerWidth;
  //   this.getScreenHeight = window.innerHeight;
  //   if (this.getScreenWidth <= 630) {
  //     this.isMobile = true;
  //   } else {
  //     this.isMobile = false;
  //   }
  // }
}
