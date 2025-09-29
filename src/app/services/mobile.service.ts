import { EventEmitter, HostListener, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  isOpen: boolean = false;
  public getScreenWidth: any;
  public getScreenHeight: any;
  isMobile: boolean | undefined;

  constructor() {}

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

  closeMenu() {
    if (this.isOpen) {
      this.isOpen = false;
      console.log(this.isOpen);
    }
  }
}
