import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { MobileService } from '../../services/mobile.service';

@Component({
  selector: 'app-privacy-plicy',
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './privacy-plicy.component.html',
  styleUrl: './privacy-plicy.component.scss'
})
export class PrivacyPlicyComponent {
  constructor(public mobile: MobileService){}
}
