import { Component, HostListener } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [NavBarComponent, NgClass],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  public getScreenWidth: any;
  public getScreenHeight: any;
  isMobile: boolean | undefined;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.onWindowResize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if (this.getScreenWidth <= 630) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
