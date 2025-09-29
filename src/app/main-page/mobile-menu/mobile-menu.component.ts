import { Component, EventEmitter, Output } from '@angular/core';
import { MobileService } from '../../services/mobile.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  imports: [RouterLink],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
  @Output() menuClosed = new EventEmitter<void>();

  constructor(public mobile: MobileService){
    
  }

  closeMobileMenu(){
    this.menuClosed.emit();
    this.mobile.closeMenu()
  }
}
