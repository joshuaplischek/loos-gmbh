import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  imports: [],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
  isOpen: boolean = false;

  MenuIsOpen(event: any) {
    if (event.target.checked) {
      this.isOpen = true;
      console.log(this.isOpen);
    }
    if (!event.target.checked) {
      this.isOpen = false;
      console.log(this.isOpen);
    }
  }
}
