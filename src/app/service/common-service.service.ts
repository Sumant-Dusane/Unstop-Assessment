import { EventEmitter, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService{
  isMobile: boolean;
  isModalOpened: EventEmitter<boolean> = new EventEmitter();
  isSidebarOpened: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.isMobile = true
    } else {
      this.isMobile = false;
    }
  }

  handleBodyClass(state: boolean) {
    if(state) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }


  updateModalVisibility(isOpen: boolean) {
    this.isModalOpened.next(isOpen)
    this.handleBodyClass(isOpen);
  }

  updateSidebarVisibility(isOpen: boolean) {
    this.isSidebarOpened.next(isOpen)
    this.handleBodyClass(isOpen);
  }
}
