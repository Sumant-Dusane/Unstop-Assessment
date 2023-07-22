import { Component } from '@angular/core';
import { CommonService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isSidebarOpen: boolean;

  constructor (private commonService: CommonService) {
    this.commonService.isSidebarOpened.subscribe(state => {
      this.isSidebarOpen = state;
    })
  }

  toggleSidebar(open: boolean) {
    if((open && this.commonService.isMobile) || !this.commonService.isMobile) {
      this.openSidebar();
    } else {
      this.closeSidebar();
    }
  }

  openSidebar() {
    this.commonService.updateSidebarVisibility(true);
  }
  closeSidebar() {
    this.commonService.updateSidebarVisibility(false);
  }

}
