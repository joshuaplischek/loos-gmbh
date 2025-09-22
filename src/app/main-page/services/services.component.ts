import { Component } from '@angular/core';
import { ExtraServicesComponent } from './extra-services/extra-services.component';

@Component({
  selector: 'app-services',
  imports: [ExtraServicesComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
