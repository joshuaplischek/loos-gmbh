import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { MobileService } from '../../services/mobile.service';
import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-imprint',
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(public mobile: MobileService){}
}
