import { Component } from '@angular/core';
import { ExtraServicesComponent } from './extra-services/extra-services.component';
import { ElementsComponent } from './elements/elements.component';

@Component({
  selector: 'app-services',
  imports: [ExtraServicesComponent, ElementsComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
