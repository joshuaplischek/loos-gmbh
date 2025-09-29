import { Component } from '@angular/core';
import { MobileService } from '../../services/mobile.service';

@Component({
  selector: 'app-mobile-menu',
  imports: [],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {

  constructor(public mobile: MobileService){}

}
