import { Component, HostListener } from '@angular/core';
import { ExtraServicesComponent } from './extra-services/extra-services.component';
import { ElementsComponent } from './elements/elements.component';
import { MobileService } from '../../services/mobile.service';

@Component({
  selector: 'app-services',
  imports: [ExtraServicesComponent, ElementsComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  public getScreenWidth: any;
  public getScreenHeight: any;
  isMobile: boolean | undefined;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.onWindowResize();
  }

  constructor(public mobile: MobileService) {}

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if (this.getScreenWidth <= 800) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
